const screen = document.getElementById("screen");

function clear (){
	console.log("this is clear 1")
	screen.innerText = " "
	console.log("this is clear 2")
}

function print(content) {
	console.log(content)
	screen.innerText += content;
}

document.getElementById("isequal")
	.addEventListener("click", () => {
		let expression = screen.innerText.replaceAll("x", "*");
		clear()
		let answer = eval(expression);
		print(answer);
	})

document.getElementById("ac")
	.addEventListener("click", () => {
		screen.innerText = "";
	});

document.getElementById("root")
	.addEventListener("click", () => {
		let value = screen.innerText;
		clear();
		let value_int = parseInt(value);

		if (value_int > 0) print(Math.sqrt(value_int));
	});

document.getElementById("square")
	.addEventListener("click", () => {
		let value = parseInt(screen.innerText);

		clear();
		if (value > 0) print(value ** 2);
	});

Array.from(document.getElementsByClassName("number"))
	.forEach(element => {
		element.addEventListener("click", () => {
			print(element.innerText);
		});
	});

Array.from(document.getElementsByClassName("operation"))
	.forEach(element => {
		element.addEventListener("click", () => {
			// if (element.innerText === "x") element.innerText = "*";
			print(element.innerText);
		})
	})