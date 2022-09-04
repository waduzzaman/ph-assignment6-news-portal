const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCat(data.data);

}

const displayNewsCat = data => {
    console.log(data.news_category);   

    const newsCategoryContainer = document.getElementById('newsCategoryContainer');
    data.news_category.forEach(news => {
        // console.log(news)
        const newsCatDiv = document.createElement('div');
        newsCatDiv.classList.add('col');
        newsCatDiv.innerHTML = `   
        <div>
        <a href="${news.category_id}">${news.category_name}</a>       
       
        </div>               
        `;
        newsCategoryContainer.appendChild(newsCatDiv);

    });

}

loadCategory();

// Breaking News: 

const loadBreakingNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    // const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();
    displayBreakingNews(data.data);

}


const displayBreakingNews = news => {
    const newsDetailsContainer = document.getElementById('breakingNewsContainer');
    news.forEach(category => {
        console.log(category);
        const newsDetailsDiv = document.createElement('div');
        newsDetailsDiv.classList.add('col');
        newsDetailsDiv.innerHTML = `
        <div class="row g-1 mb-3">

                        <div class="col-md-4">
                            <img src="${category.thumbnail_url}..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="}card-title">${category.title}</h5>
                                <p class="card-text">${category.details}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class = "d-flex justify-content-evenly">
                            <div class="d-flex just">
                             <img class="rounded-circle w-25" src = "${category.author.img} 
                             alt = "" >
                             <div>
                             <h6>${category.author.name}</h6>
                            <p>${category.author.published_date}</p>
                            </div>                            
                            </div>
                            <div><h6><i class="fa-regular fa-eye"></i>${category.total_view}</h6></div>                                    
                          
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
        newsDetailsContainer.appendChild(newsDetailsDiv);


    })
}

// loadBreakingNews()

// Regular News

const loadRegularNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/02`
    
    const res = await fetch(url);
    const data = await res.json();
    displayRegularNews(data.data);

}

const displayRegularNews = news => {
    const regularNewsContainer = document.getElementById('regularNewsContainer');
    news.forEach(category => {
        console.log(category);
        const newsDetailsDiv = document.createElement('div');
        newsDetailsDiv.classList.add('col');
        newsDetailsDiv.innerHTML = `
        <div class="row g-1 mb-3">

                        <div class="col-md-4">
                            <img src="${category.thumbnail_url}..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="}card-title">${category.title}</h5>
                                <p class="card-text">${category.details}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class = "d-flex justify-content-evenly">
                            <div class="d-flex just">
                             <img class="rounded-circle w-25" src = "${category.author.img} 
                             alt = "" >
                             <div>
                             <h6>${category.author.name}</h6>
                            <p>${category.author.published_date}</p>
                            </div>                            
                            </div>
                            <div><h6><i class="fa-regular fa-eye"></i>${category.total_view}</h6></div>                                    
                          
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
       regularNewsContainer.appendChild(newsDetailsDiv);


    })
}

loadRegularNews()

