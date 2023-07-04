// sidebar variables
const sidebar = document.getElementById('data-sidebar');
const sidebarBtn = document.querySelector('#data-sidebar-btn');

// sidebar toggle functionality for mobile

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // element toogle function
});


// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.getElementById('data-modal-container');
// const modalCloseBtn = document.getElementById('data-modal-close-btn');
// const overlay = document.getElementById('data-overlay'); 

// modal variables
// const modalImg = document.getElementById('data-modal-img');
// const modalTitle = document.getElementById('data-modal-title');
// const modalText = document.getElementById('data-modal-text') ;

// testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]"); 

// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// const testimonialsModalFunc = function (){
//     modalContainer.classList.toggle('active');
//     overlay.classList.toggle('active');
// }

// // add click event to all modal items

// for(let i=0; i < testimonialsItem.length; i++){
//     testimonialsItem[i].addEventListener("click", () => {
//         modalImg.src = (this.querySelector("[data-testimonials-avatar]")).src;
//         modalImg.alt = (this.querySelector("[data-testimonials-avatar]")).alt;
//         modalTitle.innerHTML = (this.querySelector("[data-testimonials-title]")).innerHTML;
//         modalText.innerHTML = (this.querySelector("[data-testimonials-text]")).innerHTML;
            
//         // modal toggle function
//         testimonialsModalFunc();
//     });
// }

// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);






// testimonialsItem.forEach(testimonial => {
//     testimonial.addEventListener('click', () => {
//         modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
//         modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
//         modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
//         modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;
        
//         // modal toggle function
//         modalContainer.classList.toggle('active');
//         overlay.classList.toggle('active');
//     });
// });

// add click event to modal close button

// modalCloseBtn.addEventListener('click', () => {
//     modalContainer.classList.toggle('active');
//     overlay.classList.toggle('active');
// });

// overlay.addEventListener('click', () => {
//     modalContainer.classList.toggle('active');
//     overlay.classList.toggle('active');
// });























// custom select variables

// const select = document.getElementById('data-select');
// const selectItems = document.querySelectorAll('#data-select-item');
// const selectValue = document.getElementById('data-select-value');

// select.addEventListener('click', () => {
//     select.classList.toggle('active');
// });

// // add events in all select items

// selectItems.forEach(item => {
//     item.addEventListener('click', () => {
//         let selectedValue = this.innerText.toLowerCase();
//         selectValue.innerText = this.innerText;
        
//         select.classList.toggle('active');
//         filterFunc(selectedValue);
//     });
// });

// // filter variables

// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = (selectedValue) => {
//     for(let i=0; i < filterItems.length; i++){
//         if(selectedValue === "all"){
//             filterItems[i].classList.add('active');
//         } else if(selectValue === filterItems[i].dataset.category){
//             filterItems[i].classList.add('active');
//         } else{
//             filterItems[i].classList.remove('active');

//         }
//     }
// }

// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add events to all form input field

// for(let i=0; i < formInputs.length; i++){
//     formInputs[i].addEventListener("input", () => {
//         if(form.checkValidity()){
//             formBtn.removeAttribute("disabled");
//         } else {
//             formBtn.setAttribute("disabled", "");
//         }
//     });
// }

// // page navigation variables 
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link

// for(let i=0; i < navigationLinks.length; i++){
//     navigationLinks[i].addEventListener("click", () => {
//         for(let j=0; i < pages.length; j++){
//             if(this.innerHTML.toLowerCase() === pages[j].dataset.page){
//                 pages[j].classList.add("active");
//                 navigationLinks[j].classList.add("active");
//                 window.scrollTo(0,0);
//             } else {
//                 pages[j].classList.remove("active");
//                 navigationLinks[j].classList.add("active");
//             }
//         }
//     });
// }

