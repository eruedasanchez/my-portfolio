// sidebar variables
const sidebar = document.getElementById('data-sidebar');
const sidebarBtn = document.querySelector('#data-sidebar-btn');

// sidebar toggle functionality for mobile

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


// testimonials variables
const testimonialsItem = document.querySelectorAll('.content-card');
const modalContainer = document.getElementById('data-modal-container');
const modalCloseBtn = document.getElementById('data-modal-close-btn');
const overlay = document.getElementById('data-overlay'); 

// modal variables
const modalImg = document.getElementById('data-modal-img');
const modalTitle = document.getElementById('data-modal-title');
const modalText = document.getElementById('data-modal-text') ;

// add click event to all modal items

testimonialsItem.forEach(testimonial => {
    testimonial.addEventListener('click', () => {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;
        
        // modal toggle function
        modalContainer.classList.toggle('active');
        overlay.classList.toggle('active');
    });
});

// add click event to modal close button

modalCloseBtn.addEventListener('click', () => {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
});

// custom select variables

const select = document.getElementById('data-select');
const selectItems = document.querySelectorAll('#data-select-item');
const selectValue = document.getElementById('data-select-value');

select.addEventListener('click', () => {
    select.classList.toggle('active');
});

// add events in all select items

selectItems.forEach(item => {
    item.addEventListener('click', () => {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        
        select.classList.toggle('active');
        filterFunc(selectedValue);
    });
});

// filter variables

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = (selectedValue) => {
    for(let i=0; i < filterItems.length; i++){
        if(selectedValue === "all"){
            filterItems[i].classList.add('active');
        } else if(selectValue === filterItems[i].dataset.category){
            filterItems[i].classList.add('active');
        } else{
            filterItems[i].classList.remove('active');

        }
    }
}
