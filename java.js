let num1 = ""   
let num2 = ""
let operator = ""
let justCalc = false

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    if(num2 === 0) {
        return "HEHEHE Cheeky!!!" 
    } else {
    return num1 / num2
}
}

function operate(num1, num2, operator) {
    if(operator === "+") {
        return add(num1, num2)
    } else if(operator === "-") {
        return subtract(num1, num2)
    } else if(operator === "*") {
        return multiply(num1, num2)
    } else if(operator === "/") {
        return divide(num1, num2)
    } else {
        return "Invalid operator"
    }
}

let digitBtn = document.querySelectorAll(".digitBtn")
let displayText = document.querySelector(".display")
let operatorBtn = document.querySelectorAll(".operatorBtn")
let equalBtn = document.querySelector(".equalBtn")
let clearBtn = document.querySelector(".clearBtn")
let decBtn = document.querySelector(".decimalBtn")
let bckBtn = document.querySelector(".bckBtn")


digitBtn.forEach(button => {
    button.addEventListener("click", function(event) {
        if(justCalc === true) {
            num1= ""
            num1 = num1 + event.target.textContent        
            displayText.textContent = num1
            justCalc = false
        }
        else if(num1 === "" || operator === "") {
        num1 = num1 + event.target.textContent 
        displayText.textContent = num1
        }
        else {
            num2 = num2 + event.target.textContent
            displayText.textContent = num2
        }
        
    })
})


operatorBtn.forEach(button => {
    button.addEventListener("click", function(event){
        if(num2 !== "") {
           let result = operate(Number(num1), Number(num2), operator)
           displayText.textContent = result
           num2 = ""
           num1 = String(result)
           operator = event.target.textContent
           justCalc = false
        } else {
        operator = event.target.textContent
        justCalc = false
        }
    })
})

equalBtn.addEventListener("click", function() {
    if(num1 !== "" && num2 !== "" && operator !== ""){
    let result = operate(Number(num1), Number(num2), operator)
    if(result === "HEHEHE Cheeky!!!") {
        num1 = ""
        num2 = ""
        operator = ""
        displayText.textContent = result
    }   else {
     if(Number.isInteger(result)) {
        displayText.textContent = result
      } else {
        displayText.textContent = result.toFixed(2)
        }
        justCalc = true
        num1 = String(result)
        num2 = ""
        operator = ""
    }
    } else {
        displayText.textContent = "Please enter two numbers & operator"
        num1 = ""
        operator = ""
    }
})

clearBtn.addEventListener("click", function() {
    num1 = ""
    num2 = ""
    operator = ""
    displayText.textContent = "00"
    justCalc = false
})


decBtn.addEventListener("click", function(event) {
    if(operator === "" || num1 === "") {
        if(!num1.includes(".")) {
            num1 = num1 + event.target.textContent
            displayText.textContent = num1
        } else {
            displayText.textContent
        }} else {
        if(!num2.includes(".")) {
            num2 = num2 + event.target.textContent
            displayText.textContent = num2
        }
    }})

bckBtn.addEventListener("click", function(event) {
    if(operator === "" || num1 === "") {
        num1 = num1.slice(0, -1)
        displayText.textContent = num1
    } else {
        num2 = num2.slice(0, -1)
        displayText.textContent = num2
    }
})


let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
document.addEventListener("keydown", function(event) {
    const handledKeys = [...digits, "+", "-", "*", "/", "=", "Enter", ".", "Backspace", "x"]
    if(handledKeys.includes(event.key)) event.preventDefault()
    if(digits.includes(event.key)) {
    if(justCalc === true) {
        num1 = ""
        num1 = num1 + event.key
        displayText.textContent = num1
        justCalc = false
    } else if(operator === "") {
        num1 = num1 + event.key
        displayText.textContent = num1
    } else {
        num2 = num2 + event.key
        displayText.textContent = num2
    }
    } else if(event.key === "+" || event.key === "-" || event.key === "/" || event.key === "*") {
        console.log("num1:", num1, "num2:", num2, "operator:", operator)
        if(num2 !== "") {
           let result = operate(Number(num1), Number(num2), operator)
           displayText.textContent = result
           num2 = ""
           num1 = String(result)
           operator = event.key
           justCalc = false
        } else {
        operator = event.key
        justCalc = false
        }
    } else if(event.key === "=" || event.key === "Enter") {
        console.log("equals pressed - num1:", num1, "num2:", num2, "operator:", operator)
        if(num1 !== "" && num2 !== "" && operator !== ""){
    let result = operate(Number(num1), Number(num2), operator)
    console.log(typeof result)
    if(result === "HEHEHE Cheeky!!!") {
        num1 = ""
        num2 = ""
        operator = ""
        displayText.textContent = result
    }   else {
     if(Number.isInteger(result)) {
        displayText.textContent = result
      } else {
        displayText.textContent = result.toFixed(2)
        }
        justCalc = true
        num1 = String(result)
        num2 = ""
        operator = ""
    }
    } else {
        displayText.textContent = "Please enter two numbers & operator"
        num1 = ""
        operator = ""
    }
    } else if(event.key === "x" || event.key === "Backspace") {
        if(operator === "" || num1 === "") {
        num1 = num1.slice(0, -1)
        displayText.textContent = num1
    } else {
        num2 = num2.slice(0, -1)
        displayText.textContent = num2
    }
    }
     else if(event.key === ".") {
    if(operator === "" || num1 === "") {
        if(!num1.includes(".")) {
            num1 = num1 + event.key
            displayText.textContent = num1
        } else {
            displayText.textContent
        }} else {
        if(!num2.includes(".")) {
            num2 = num2 + event.key
            displayText.textContent = num2
        }
    }}})
    
    


/* let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
document.addEventListener("keydown", function(event) {
    if(num1 === "" || operator === "") {
        if(digits.includes(event.key)) {
            num1 = num1 + event.key
            displayText.textContent = num1
        } else {
            // do nothing
        }} else {
            if(digits.includes(event.key)) {
                num2 = num2 + event.key
                displayText.textContent = num2
            } else {
                // do  nothing
            }
        }
})
*/ 