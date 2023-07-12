let imagesToLoad = document.querySelectorAll("[data-src]");

let options = {
    root: document.querySelector("body"),
    rootMargin: "0px",
    threshold: 0.5
};

function loadImages(img) {
    let newImg = img.getAttribute('data-src');
    img.src = newImg;
}

const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                obersver.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });

