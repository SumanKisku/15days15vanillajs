// reviews
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      about:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      about:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      about:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      about:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// selecting element
let photo = document.getElementById("photo");
let name = document.getElementById("name");
let job = document.getElementById("job");
let about = document.getElementById("about");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let surprise = document.getElementById("surprise");




// initializing the first review

window.addEventListener('DOMContentLoaded', () => {
    setReview();
});

// function to set the reviews

let reviewNumber = 0;

let setReview = () => {
  let item = reviews[reviewNumber];
  photo.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  about.textContent = item.about;
}

// prev button: go to the previous review

prevBtn.addEventListener('click', ()=> {
    reviewNumber--;
    if(reviewNumber < 0) {
        reviewNumber = reviews.length - 1;
    }
    setReview();
})

// next button: go to the next review

nextBtn.addEventListener('click', ()=> {
    reviewNumber++;
    if(reviewNumber > reviews.length - 1) {
        reviewNumber = 0;
    }
    setReview();
})

// surpise button: select a random review
surprise.addEventListener('click', ()=> {
    reviewNumber = Math.floor(Math.random() * reviews.length);
    setReview();
    console.log(reviewNumber);
})