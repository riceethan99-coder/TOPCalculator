let num1 = ""   
let num2 = ""
let operator = ""

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


digitBtn.forEach(button => {
    button.addEventListener("click", function(event) {
        if(num1 === "" || operator === "") {
        num1 = num1 + event.target.textContent 
        displayText.textContent = num1
        } else {
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
           num1 = result
           operator = event.target.textContent
        } else {
        operator = event.target.textContent
        }
    })
})

equalBtn.addEventListener("click", function() {
    if(num1 !== "" && num2 !== "" && operator !== ""){
    let result = operate(Number(num1), Number(num2), operator)
    displayText.textContent = result
    if(result === "HEHEHE Cheeky!!!") {
        num1 = ""
        num2 = ""
        operator = ""
    }   else {
    num1 = result
    num2 = ""
    operator = "" }
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
})