let student = document.querySelector(".container");
let StudentsNumber = 30;
let StudentsBlocksMark = 34;
for (let i = 0; i < StudentsNumber; i++) {
	let containerStudentInfo = document.createElement("div");
	containerStudentInfo.classList.add("containerStudentInfo");

	let el = document.createElement("div");
	el.classList.add("studentname");
	containerStudentInfo.appendChild(el);

	let el1 = document.createElement("div");
	el1.classList.add("markscontainer");
	containerStudentInfo.appendChild(el1);

	for (let i = 0; i < StudentsBlocksMark; i++) {
		let el3 = document.createElement("input");
		el3.classList.add("block");
		el3.setAttribute("type", "number");
		el1.appendChild(el3);
	}
	student.appendChild(containerStudentInfo);
}

let studentMarksContainer = document.querySelectorAll(".markscontainer");
console.log(studentMarksContainer);
for (let x = 0; x < studentMarksContainer.length; x++) {
	console.log(studentMarksContainer[x]);
	if (x % 2 == 0) {
		studentMarksContainer[x].style.backgroundColor = "#E1E5F8";
	}
}

let blocks = document.querySelectorAll(".block");
const val = ["click", "keydown"];
val.forEach((el) => {
	window.addEventListener(el, (e) => {
		blocks.forEach((block) => {
			if (e.keyCode == 40) block.value = block.value + 1;
			else if (e.keyCode == 38) block.value = block.value - 1;
			if (block.value > 5 || block.value < 2) {
				block.value = "";
			}
		});
	});
});

/*
var pagination = document.querySelector('.pagination');
var pages = pagination.querySelectorAll('.page');
var prev = pagination.querySelector('.prev');
var next = pagination.querySelector('.next');
var current = 0;

function showPage(page) {
    pages[current].classList.remove('active');
    pages[page].classList.add('active');
    current = page;

    if (current == 0) {
        prev.classList.add('disabled');
    } else {
        prev.classList.remove('disabled');
    }

    if (current == pages.length - 1) {
        next.classList.add('disabled');
    } else {
        next.classList.remove('disabled');
    }
}

prev.addEventListener('click', function () {
    if (current > 0) {
        showPage(current - 1);
    }
});

next.addEventListener('click', function () {
    if (current < pages.length - 1) {
        showPage(current + 1);
    }
});

for (var i = 0; i < pages.length; i++) {
    pages[i].addEventListener('click', function (i) {
        return function () {
            showPage(i);
        }
    }(i));
}

showPage(0);
*/

const timeForm = document.querySelector(".container");
const inputs = [...timeForm.querySelectorAll("input")];
let currentActiveIndex = 0;
inputs[currentActiveIndex].focus();
inputs.forEach((input, index) =>
	input.addEventListener("click", () => (currentActiveIndex = index))
);

timeForm.addEventListener("keydown", (e) => {
	let direction = 0;
	switch (e.code) {
		case "ArrowRight":
			direction = 1;
			break;
		case "ArrowLeft":
			direction = -1;
			break;
		case "ArrowUp":
			direction = -34;
			break;
		case "ArrowDown":
			direction = 34;
			break;
		default:
			return;
	}
	currentActiveIndex =
		(inputs.length + currentActiveIndex + direction) % inputs.length;
	inputs[currentActiveIndex].focus();
});
