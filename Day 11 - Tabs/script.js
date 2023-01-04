const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
    // so the currentTarget returns the element attached to eventlistner and target returns the element 
    console.log(e.currentTarget.tagName + " " + e.target.tagName);

	const id = e.target.dataset.id;
	if(id) {
		btns.forEach((btn)=> {
			btn.classList.remove("active");
		});
		e.target.classList.add("active");

		articles.forEach((article) => {
			article.classList.remove("active");
		});

		const element = document.getElementById(id);
			element.classList.add("active");
	}
});
