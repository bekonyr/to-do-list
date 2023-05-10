// contains()  класстарды издеп берет
// parentNode   родителский тегге кайрлып берет
// add

const input = document.querySelector(".input");
const btn = document.querySelector(".add");
const err = document.querySelector(".err");
const ul = document.querySelector(".list");

btn.addEventListener("click", (el) => {
	addTask();
});

input.addEventListener("keydown", (el) => {
	if (el.key === "Enter") {
		addTask();
	}
});

function addTask() {
	if (input.value === "") {
		err.innerHTML = "бош орунду толтурунуз";
		err.style.color = "red";
		input.placeholder = "бош орунду толтурунуз";

		addTask();
	} else {
		ul.innerHTML += `<li class="list-group-item w-50 mb-2 d-flex align-items-center justify-content-between">
    <span class=" span ml-5" "><input  class="check mx-2" type="checkbox"  >${input.value}</span>
    <button class="del-btn btn btn-danger">DELETE</button>
</li>`;
		input.value = "";
		err.innerHTML = "";
		input.placeholder = "";
	}
}

ul.addEventListener("click", (e) => {
	// console.log(e);
	if (e.target.classList.contains("del-btn")) {
		e.target.parentNode.remove();
	}
    if (e.target.classList.contains("check")) {
        if (e.target.parentNode.classList.contains("line")) {
            e.target.parentNode.classList.remove("line");
        } else {
            e.target.parentNode.classList.add("line");
        }
    }
    
});

