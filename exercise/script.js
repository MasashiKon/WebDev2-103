const images = [
    "./images/avocado.jpeg",
    "./images/pancake.jpeg",
    "./images/sandwich.jpeg",
    "./images/spaghetti.jpeg"
]

const currentImg = document.querySelector('#currentImg');
const previousImg = document.querySelector('#previousImg');
const nextImg = document.querySelector('#nextImg')
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const imageCarousel = document.querySelector('.imageCarousel');
console.log(imageCarousel);
let currentIndex = 0;
let previousIndex = (currentIndex - 1 < 0) ? images.length - 1 : currentIndex - 1;
let nextIndex = (currentIndex + 1) % 4;
let counter = 0;

function setImg() {

}

currentImg.style.transform = "translateX(0px)"
previousImg.style.transform = "translateX(0px)"
nextImg.style.transform = "translateX(0px)"

window.addEventListener("DOMContentLoaded", () => {

    currentImg.src = images[currentIndex];
    previousImg.src = images[previousIndex];
    nextImg.src = images[nextIndex];

    prevButton.addEventListener("click", function() {
        function slideImg() {
            imageCarousel.style.justifyContent = "right";
            previousImg.style.display = 'block';
            const currentX = Number(getComputedStyle(currentImg).transform.split(",")[4]);
            const previousX = Number(getComputedStyle(previousImg).transform.split(",")[4]);

            if(currentX > currentImg.width - 10) {
                cancelAnimationFrame(slideAnim);
                currentIndex -= 1;
                if(currentIndex < 0) currentIndex = images.length - 1;
                currentImg.src = images[currentIndex];

                previousIndex = (currentIndex - 1 < 0) ? images.length - 1 : currentIndex - 1;
                nextIndex = (currentIndex + 1) % 4;
                previousImg.src = images[previousIndex];
                nextImg.src = images[nextIndex];

                previousImg.style.display = 'none';
                currentImg.style.transform = "translateX(0px)"
                previousImg.style.transform = "translateX(0px)"
            } else {
                currentImg.style.transform = `translateX(${currentX + 20}px)`;
                previousImg.style.transform = `translateX(${previousX + 20}px)`;
                requestAnimationFrame(slideImg);
            }
        }

        const slideAnim = requestAnimationFrame(slideImg);
    });

    nextButton.addEventListener("click", function() {
        function slideImg() {
            imageCarousel.style.justifyContent = "left";
            nextImg.style.display = 'block';

            const currentX = Number(getComputedStyle(currentImg).transform.split(",")[4]);
            const nextX = Number(getComputedStyle(nextImg).transform.split(",")[4]);

            if(currentX < -currentImg.width + 10) {
                cancelAnimationFrame(slideAnim);
                currentIndex =  (currentIndex + 1) % 4;
                currentImg.src = images[currentIndex];

                previousIndex = (currentIndex - 1 < 0) ? images.length - 1 : currentIndex - 1;
                nextIndex = (currentIndex + 1) % 4;
                previousImg.src = images[previousIndex];
                nextImg.src = images[nextIndex];

                nextImg.style.display = 'none';
                currentImg.style.transform = "translateX(0px)"
                nextImg.style.transform = "translateX(0px)"
            } else {
                currentImg.style.transform = `translateX(${currentX - 20}px)`;
                nextImg.style.transform = `translateX(${nextX - 20}px)`;
                requestAnimationFrame(slideImg);
            }
        }

        const slideAnim = requestAnimationFrame(slideImg);
    });
})
