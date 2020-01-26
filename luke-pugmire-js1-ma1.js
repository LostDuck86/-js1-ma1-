//Question 1
const cat = {
	complain: function() {
		console.log("Meow!");
	}
};
cat.complain();

//Question 2
const heading = document.querySelector("h3");

//Question 3
heading.style.fontSize = "2em";
//Question 4
heading.classList.add("subheading");
//Question 5
const allParagraphs = document.querySelectorAll("p");
//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
//Question 7

const cats = [
	{
		name: "Blob",
		age: 10
	},
	{
		name: "Harold"
	},
	{
		name: "Blurt",
		age: 21
	}
];

function catlog(catArray) {
	for (let i = 0; i < catArray.length; i++) {
		console.log(catArray[i].name);
	}
}
catlog(cats);
//Question 8
function catNames(catArray) {
	let catHTML = "";
	for (let i = 0; i < catArray.length; i++) {
		catHTML = `<h5>${catArray[i].name}</h5>`;
		console.log(catHTML);
	}
	return catHTML;
}

//Question 9
resultsContainer.innerHTML = catNames(cats);
//Question 10
function catNames2(catArray) {
	let catsHTML = "";
	for (let i = 0; i < catArray.length; i++) {
		let catAge = "mystery";

		if (catArray[i].age) {
			catAge = catArray[i].age;
		}
		catsHTML = `<div>
		<h5>${catArray[i].name}</h5>
		<p>${catAge}</p>
		</div>`;
		console.log(catsHTML);
	}
	return catsHTML;
}
resultsContainer.innerHTML = catNames2(cats);
