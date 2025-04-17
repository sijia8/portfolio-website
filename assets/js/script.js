'use strict';


// element toggle function
const elementToggleFunc = (elem) => elem.classList.toggle("active");


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));


// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable 
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = () => {
//     modalContainer.classList.toggle("active");
//     overlay.classList.toggle("active");
// }

// for (let i = 0; i < testimonialsItem.length; i ++) {
//     testimonialsItem[i].addEventListener("click", () => {

//         modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//         modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//         modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//         modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//         testimonialsModalFunc();

//     });
// }

// // add click event to modal to close
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");


select.addEventListener("click", function() {
    elementToggleFunc(this);
});

// add event in all select items
selectItems.forEach(item => {
    item.addEventListener("click", function() {
        let selectedValue = this.textContent.toLowerCase();
        selectValue.textContent = this.textContent;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
});

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = (selectedValue) => {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }

    }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function() {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

    });
}

// Project modal variables
const projectItems = document.querySelectorAll(".project-item");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalGithub = document.querySelector("[data-modal-github]");

// Project data - add your project details here
const projectsData = [
  {
    id: "xai-project",
    title: "XAI for Improving Deep Learning Performance",
    image: "assets/img/project-1.jpg",
    description: "This research explores how Explainable AI (XAI) techniques can be used to improve the performance and reliability of deep learning models. By implementing various interpretation methods such as Grad-CAM, LIME, and SHAP, we were able to gain insights into model decision-making processes and use this information to refine our architectures and training procedures.",
    github: "https://github.com/syeon-h/XAI_object_detection"
  },
  {
    id: "aerial-segmentation",
    title: "A Drones Perspective: Aerial Image Semantic Segmentation",
    image: "assets/img/project-2.png",
    description: "This project implements a semantic segmentation pipeline for aerial drone imagery. Using a U-Net architecture with a ResNet34 backbone, we achieved precise pixel-level classification of landscape features such as buildings, roads, vegetation, and water bodies. The model was trained on the Semantic Drone Dataset and achieved an mIoU of 83.5%.",
    github: "https://github.com/syeon-h/XAI_object_detection"
  },
  {
    id: "vgg-network",
    title: "VGG Network Design and Improvement",
    image: "assets/img/project-3.png",
    description: "In this project, I reimplemented the classic VGG architecture with several modifications to improve its performance. Key innovations included using batch normalization, residual connections, and a more efficient parameter initialization scheme. These changes resulted in a 15% reduction in training time and a 3.2% improvement in accuracy on ImageNet validation.",
    github: "https://github.com/syeon-h/XAI_object_detection"
  },
  {
    id: "yolo-satellite",
    title: "YOLOv4 Satellite Object Detection",
    image: "assets/img/project-4.jpg",
    description: "This project applies the YOLOv4 object detection framework to identify ships in satellite imagery. Using transfer learning and custom data augmentation techniques specific to overhead imagery, we fine-tuned the model to achieve 92.7% mAP on the DOTA maritime dataset. The system can process satellite images in real-time, making it suitable for maritime monitoring applications.",
    github: "https://github.com/syeon-h/XAI_object_detection"
  }
];

// Modal toggle function
const projectModalFunc = () => {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// Add click event to each project item
projectItems.forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();

        // Get click event
        const projectTitle = this.querySelector(".project-title").textContent;

        const projectData = projectsData.find(project => project.title.toLowerCase() === projectTitle.toLowerCase())

        if (projectData) {
            // Update modal content with project data
            modalImg.src = projectData.image;
            modalImg.alt = projectData.title;
            modalTitle.textContent = projectData.title;
            modalText.innerHTML = `<p>${projectData.description}</p>`;
            modalGithub.href = projectData.github;
        }

        // Show the modal
        projectModalFunc();
    });
});

// Add click events to close modal
modalCloseBtn.addEventListener("click", projectModalFunc);
overlay.addEventListener("click", projectModalFunc);

// Close modal with escape kye
document.addEventListener("keydown", function(e) {
    if (e.key == "Escape" && modalContainer.classList.contains("active")) {
        projectModalFunc();
    }
});



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all input fields
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", () => {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function() {

        for (let i = 0; i < pages.length; i ++) {
            if (this.innerText.toLowerCase() == pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }

    });
}