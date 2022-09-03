const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCat(data.data);

}

const displayNewsCat = data => {
    // console.log(data.news_category);   

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

// Category Details News: 

const loadDetailsNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    // const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();
    categoryDetails(data.data);

}


const categoryDetails = news => {

    const newsDetailsContainer = document.getElementById('news-details');
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
                            <div class = "d-flex justify-content-around" >
                            <div>
                             <img src = "${category.author.url}"
                             alt = "" >
                            <h6>${category.author.name}</h6>
                            </div>                            
                            <div>
                            <h6>${category.total_view}</h6>
                            </div>
                            <div>
                            <h6>${category.author.name}</h6>
                            </div>
                            
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
        newsDetailsContainer.appendChild(newsDetailsDiv);


    })
}

loadDetailsNews()

/*
< div >
    <
    h5 > news Details Section < /h5> <
    h5 > $ {
        category.category_id[1]
    } < /h5> <
    /div>
*/
