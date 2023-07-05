import blogs from './blog.json' assert {type: 'json'};

// sidebar variables
const sidebar = document.getElementById('data-sidebar');
const sidebarBtn = document.querySelector('#data-sidebar-btn');

// sidebar toggle functionality for mobile

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // element toogle function
});


let blogPostsList = document.getElementById('blog-posts-list'); 

const loadBlogList = (array) => {
    blogPostsList.innerHTML = '';
    array.forEach((blog) => {
        blogPostsList.innerHTML += `
            <li>
                <a href="">
                    <figure>
                        <img src="${blog.image}" alt="Design conferences in 2023" loading="lazy">
                    </figure>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <p>Design</p>
                            <span class="dot"></span>
                            <time datetime="2023-02-23">Feb 23, 2023</time>
                        </div>
                        <h3 class="h3">${blog.title}</h3>
                        <p>${blog.description}</p>
                    </div>
                </a>
            </li>
        `
    });
}

loadBlogList(blogs);

const menuSection = document.querySelector('#menu-section');
const sections = document.querySelectorAll('#menu-section article');

menuSection.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    console.log(id);

    if(id){
        sections.forEach((section) => {
            section.classList.remove('active');

        });
        const selectedSection = document.getElementById(id);
        console.log(selectedSection);
        selectedSection.classList.add('active');
    }

})








