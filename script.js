const isequal = document.querySelector("#isequal")
const  screen = document.querySelector("#screen")
const  AC = document.getElementById("AC")
const root_button = document.getElementById("root")
const square_button = document.getElementById("square")


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
    clear();
    value_int = parseInt(value);
    if (value_int >0)
    {
        print(Math.sqrt(value_int));
    }

    else {
        //pass
    }
    }

AC.addEventListener("click",clear)
root_button.addEventListener("click",root)


 square = () => {

     let value = screen.innerHTML;
     clear();
     if (value > 0) {
         print(value ** 2);
     }

     else{
         //pass
     }

}

square_button.addEventListener("click",square)
isequal.addEventListener("click",evals)