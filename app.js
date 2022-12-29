//load category
const loadCategory = async () =>
{

    // showSpinner(true);
    const res = await fetch( `https://openapi.programming-hero.com/api/news/categories` );
    const data = await res.json();
    displayNewsCategory( data.data );


}

// display all category
const displayNewsCategory = categories =>
{
    console.log( 'News Category=', categories.news_category );
    const newsCategoryContainer = document.getElementById( "categories" );
    categories.news_category.forEach( category =>
    {
        // console.log(category)
        const li = document.createElement( 'ul' );
        // newsCatDiv.classList.add('col');
        li.classList.add( "mx-3", "fs-5", "btn" );
        li.innerHTML = `   
        <div>
        <li ${ category.category_id }>${ category.category_name }</li>              
        </div>`;
        newsCategoryContainer.appendChild( li );
    } );
}
loadCategory();

const loadBreakingOnClick = document.getElementById( 'categories' ).onclick = function () { loadBreakingNews() };
// Breaking News: 
const loadBreakingNews = async () =>
{
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch( url );
    const data = await res.json();
    displayBreakingNews( data.data );
}

const displayBreakingNews = breaking =>
{
    // console.log('All Breaking News,',breaking);    
    const breakingNewsContainer = document.getElementById( 'breakingNewsContainer' );
    breaking.forEach( breakings =>
    {
        console.log( 'One breaking news', breakings.title )
        const newsDetailsDiv = document.createElement( 'div' );
        newsDetailsDiv.classList.add( 'col' );
        newsDetailsDiv.innerHTML = `
        <div class="row g-1 mb-3">

                        <div class="col-md-4">
                            <img src="${ breakings.thumbnail_url }..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${ breakings.title }</h5>
                                <p class="card-text">${ breakings.details }                                
                                <button onclick="${ breakings.details }" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Details --></button>                                                            
                                
                                </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class = "d-flex justify-content-evenly">
                            <div class="d-flex just">
                             <img class="rounded-circle w-25" src = "${ breakings.author.img } 
                             alt = "" >
                             <div>
                             <h6>${ breakings.author.name }</h6>
                            <p>${ breakings.author.published_date }</p>
                            </div>                            
                            </div>
                            <div><h6><i class="fa-regular fa-eye"></i>${ breakings.total_view }</h6></div>                                  
                          
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
        breakingNewsContainer.appendChild( newsDetailsDiv );


    } )
}

//  loadBreakingNews()






// Regular News
const loadRegularNews = async () =>
{
    const url = `https://openapi.programming-hero.com/api/news/category/02`

    const res = await fetch( url );
    const data = await res.json();
    displayRegularNews( data.data );

}

const displayRegularNews = news =>
{
    const regularNewsContainer = document.getElementById( 'regularNewsContainer' );
    news.forEach( category =>
    {
        console.log( category );
        const newsDetailsDiv = document.createElement( 'div' );
        newsDetailsDiv.classList.add( 'col' );
        newsDetailsDiv.innerHTML = `
        <div class="row g-1 mb-3">

                        <div class="col-md-4">
                            <img src="${ category.thumbnail_url }..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="}card-title">${ category.title }</h5>
                                <p class="card-text">${ category.details }</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class = "d-flex justify-content-evenly">
                            <div class="d-flex just">
                             <img class="rounded-circle w-25" src = "${ category.author.img } 
                             alt = "" >
                             <div>
                             <h6>${ category.author.name }</h6>
                            <p>${ category.author.published_date }</p>
                            </div>                            
                            </div>
                            <div><h6><i class="fa-regular fa-eye"></i>${ category.total_view }</h6></div>                                    
                          
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
        regularNewsContainer.appendChild( newsDetailsDiv );


    } )
}

// loadRegularNews()

// internationalNewsContainer
const loadInternationalNews = async () =>
{
    const url = `https://openapi.programming-hero.com/api/news/category/03`

    const res = await fetch( url );
    const data = await res.json();
    displayInternationalNews( data.data );

}

const displayInternationalNews = news =>
{
    const internationalNewsDiv = document.getElementById( 'internationalNewsContainer' );
    news.forEach( category =>
    {
        console.log( category );
        const newsDetailsDiv = document.createElement( 'div' );
        newsDetailsDiv.classList.add( 'col' );
        newsDetailsDiv.innerHTML = `
        <div class="row g-1 mb-3">
                        <div class="col-md-4">
                            <img src="${ category.thumbnail_url }..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="}card-title">${ category.title }</h5>
                                <p class="card-text">${ category.details }</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class = "d-flex justify-content-evenly">
                            <div class="d-flex just">
                             <img class="rounded-circle w-25" src = "${ category.author.img } 
                             alt = "" >
                             <div>
                             <h6>${ category.author.name }</h6>
                            <p>${ category.author.published_date }</p>
                            </div>                            
                            </div>
                            <div><h6><i class="fa-regular fa-eye"></i>${ category.total_view }</h6></div>                                    
                          
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
        internationalNewsDiv.appendChild( newsDetailsDiv );


    } )
}

// loadInternationalNews()

//Sports News Section:

const loadSportsNews = async () =>
{
    const url = `https://openapi.programming-hero.com/api/news/category/04`

    const res = await fetch( url );
    const data = await res.json();
    displaySportsNews( data.data );

}


const displaySportsNews = news =>
{
    const sportsNewsDiv = document.getElementById( 'sportsNewsContainer' );
    news.forEach( category =>
    {
        console.log( category );
        const newsDetailsDiv = document.createElement( 'div' );
        newsDetailsDiv.classList.add( 'col' );
        newsDetailsDiv.innerHTML = `
        <div class="row g-1 mb-3">

                        <div class="col-md-4">
                            <img src="${ category.thumbnail_url }..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="}card-title">${ category.title }</h5>
                                <p class="card-text">${ category.details }</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class = "d-flex justify-content-evenly">
                            <div class="d-flex just">
                             <img class="rounded-circle w-25" src = "${ category.author.img } 
                             alt = "" >
                             <div>
                             <h6>${ category.author.name }</h6>
                            <p>${ category.author.published_date }</p>
                            </div>                            
                            </div>
                            <div><h6><i class="fa-regular fa-eye"></i>${ category.total_view }</h6></div>                                    
                          
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
        sportsNewsDiv.appendChild( newsDetailsDiv );


    } )
}

// loadSportsNews()

//Entertainment News Section:

const loadEntertainmentNews = async () =>
{
    const url = `https://openapi.programming-hero.com/api/news/category/05`
    const res = await fetch( url );
    const data = await res.json();
    displayEntertainmentNews( data.data );

}


const displayEntertainmentNews = news =>
{
    const entertainmentNewsDiv = document.getElementById( 'entertainmentNewsContainer' );
    news.forEach( category =>
    {
        console.log( category );
        const newsDetailsDiv = document.createElement( 'div' );
        newsDetailsDiv.classList.add( 'col' );
        newsDetailsDiv.innerHTML = `
        <div class="row g-1 mb-3">

                        <div class="col-md-4">
                            <img src="${ category.thumbnail_url }..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="}card-title">${ category.title }</h5>
                                <p class="card-text">${ category.details }</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class = "d-flex justify-content-evenly">
                            <div class="d-flex just">
                             <img class="rounded-circle w-25" src = "${ category.author.img } 
                             alt = "" >
                             <div>
                             <h6>${ category.author.name }</h6>
                            <p>${ category.author.published_date }</p>
                            </div>                            
                            </div>
                            <div><h6><i class="fa-regular fa-eye"></i>${ category.total_view }</h6></div>                                    
                          
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
        entertainmentNewsDiv.appendChild( newsDetailsDiv );


    } );
}

// loadEntertainmentNews()

// Cultural News Section

const loadCultureNews = async () =>
{
    const url = `https://openapi.programming-hero.com/api/news/category/05`
    const res = await fetch( url );
    const data = await res.json();
    displayCultureNews( data.data );

}


const displayCultureNews = news =>
{
    const cultureNewsDiv = document.getElementById( 'cultureNewsContainer' );
    news.forEach( category =>
    {
        console.log( category );
        const newsDetailsDiv = document.createElement( 'div' );
        newsDetailsDiv.classList.add( 'col' );
        newsDetailsDiv.innerHTML = `
        <div class="row g-1 mb-3">

                        <div class="col-md-4">
                            <img src="${ category.thumbnail_url }..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="}card-title">${ category.title }</h5>
                                <p class="card-text">${ category.details }</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class = "d-flex justify-content-evenly">
                            <div class="d-flex just">
                             <img class="rounded-circle w-25" src = "${ category.author.img } 
                             alt = "" >
                             <div>
                             <h6>${ category.author.name }</h6>
                            <p>${ category.author.published_date }</p>
                            </div>                            
                            </div>
                            <div><h6><i class="fa-regular fa-eye"></i>${ category.total_view }</h6></div>                                    
                          
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
        cultureNewsDiv.appendChild( newsDetailsDiv );


    } );
}

// loadCultureNews()

// Arts News Section 

const loadArtsNews = async () =>
{
    const url = `https://openapi.programming-hero.com/api/news/category/07`
    const res = await fetch( url );
    const data = await res.json();
    displayArtsNews( data.data );

}


const displayArtsNews = news =>
{
    const artsNewsDiv = document.getElementById( 'artsNewsContainer' );
    news.forEach( category =>
    {
        console.log( category );
        const newsDetailsDiv = document.createElement( 'div' );
        newsDetailsDiv.classList.add( 'col' );
        newsDetailsDiv.innerHTML = `
        <div class="row g-1 mb-3">

                        <div class="col-md-4">
                            <img src="${ category.thumbnail_url }..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="}card-title">${ category.title }</h5>
                                <p class="card-text">${ category.details }</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class = "d-flex justify-content-evenly">
                            <div class="d-flex just">
                             <img class="rounded-circle w-25" src = "${ category.author.img } 
                             alt = "" >
                             <div>
                             <h6>${ category.author.name }</h6>
                            <p>${ category.author.published_date }</p>
                            </div>                            
                            </div>
                            <div><h6><i class="fa-regular fa-eye"></i>${ category.total_view }</h6></div>                                    
                          
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
        artsNewsDiv.appendChild( newsDetailsDiv );


    } );
}

// loadArtsNews()

// All news section:

const loadAllNews = async () =>
{
    const url = `https://openapi.programming-hero.com/api/news/category/08`
    const res = await fetch( url );
    const data = await res.json();
    displayAllNews( data.data );

}


const displayAllNews = news =>
{
    const allNewsDiv = document.getElementById( 'allNewsContainer' );
    news.forEach( category =>
    {
        console.log( category );
        const newsDetailsDiv = document.createElement( 'div' );
        newsDetailsDiv.classList.add( 'col' );
        newsDetailsDiv.innerHTML = `
        <div class="row g-1 mb-3">

                        <div class="col-md-4">
                            <img src="${ category.thumbnail_url }..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="}card-title">${ category.title }</h5>
                                <p class="card-text">${ category.details }</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div class = "d-flex justify-content-evenly">
                            
                            <div class="d-flex just">
                             <img class="rounded-circle w-25" src = "${ category.author.img } 
                             alt = "" >
                             <div>
                             <h6>${ category.author.name }</h6>
                            <p>${ category.author.published_date }

                            
                            
                            </p>
                            </div>                            
                            </div>

                          
                            <div>
                            <h6><i class="fa-regular fa-eye"></i>${ category.total_view }</h6>
                            </div>                                    
                          
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                      
        `;
        allNewsDiv.appendChild( newsDetailsDiv );


    } );
}

const showSpinner = ( isLoading = false ) =>
{
    const spinner = document.getElementById( "spinner" );
    if ( isLoading )
    {
        spinner.classList.add( "d-block" );
        spinner.classList.remove( "d-none" );
    } else
    {
        spinner.classList.add( "d-none" );
        spinner.classList.remove( "d-block" );
    }
};

// loadAllNews()



