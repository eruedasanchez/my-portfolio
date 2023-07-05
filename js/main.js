import blogs from './blog.json' assert {type: 'json'};

// sidebar variables
const sidebar = document.getElementById('data-sidebar');
const sidebarBtn = document.getElementById('data-sidebar-btn');

// sidebar toggle functionality for mobile

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active'); 
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

// Change sections

const navbarLinks = document.querySelectorAll('.navbar-link');

const sections = [];
const about = document.querySelector('.about');
const resume  = document.querySelector('.resume');
const portfolio = document.querySelector('.portfolio');
const blog = document.querySelector('.blog');
const contact = document.querySelector('.contact');

sections.push(about);
sections.push(resume);
sections.push(portfolio);
sections.push(blog);
sections.push(contact);

navbarLinks.forEach(navLink => {
    navLink.addEventListener('click', (event) => {
        navbarLinks.forEach(navLink => navLink.classList.remove('active'));
        event.currentTarget.classList.add('active');

        const sectionSelected = document.querySelector(`.${event.currentTarget.id}`)
        
        for(let i=0; i < sections.length; i++){
            sections[i].classList.remove('active');
            if(sections[i] === sectionSelected){
                sectionSelected.classList.add('active');
            }
        }
    });
});

