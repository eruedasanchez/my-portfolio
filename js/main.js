import blogs from './blog.json' assert {type: 'json'};

// sidebar variables
const sidebar = document.getElementById('data-sidebar');
const sidebarBtn = document.querySelector('#data-sidebar-btn');

// sidebar toggle functionality for mobile

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // element toogle function
});


let blogPostsList = document.querySelector('.blog-posts-list'); 

const loadBlogList = (array) => {
    blogPostsList.innerHTML = '';
    array.forEach((blog) => {
        blogPostsList.innerHTML += `
            <li class="blog-post-item">
                <a href="">
                    <figure class="blog-banner-box">
                        <img src="${blog.image}" alt="Design conferences in 2023" loading="lazy">
                    </figure>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <p class="blog-category">Design</p>
                            <span class="dot"></span>
                            <time datetime="2023-02-23">Feb 23, 2023</time>
                        </div>
                        <h3 class="h3 blog-item-title">${blog.title}</h3>
                        <p class="blog-text">${blog.description}</p>
                    </div>
                </a>
            </li>
        `
    });
}

loadBlogList(blogs);