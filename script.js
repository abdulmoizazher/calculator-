const isequal = document.querySelector(".isequal")
const  operator = document.querySelectorAll(".operator")
const operation = document.querySelectorAll(".operation")
const  screen = document.querySelector("#screen")
const  AC = document.getElementById("AC")
const root_button = document.getElementById("root")

function operators ( dom){

    let number = dom.innerHTML
    return number;
}

function print (content){
    console.log(content)
    let old_expression = screen.innerHTML;
    screen.innerHTML = old_expression+content;
}

function evals (){
    let experession = screen.innerHTML;
    clear()
    let answer = eval(experession);
    print(answer)
}

function clear (){
    screen.innerHTML = " "
    console.log("called")
}

function  root (){
    let value = screen.innerHTML;
    value = value,isdddsfsdfafdd
    print((value**1/2))
}

AC.addEventListener("click",clear)
root_button.addEventListener("click",root)