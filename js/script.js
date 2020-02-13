'use scrict';
{//dlaczego niektóre bloki kodu są dodatkowo w nawiasach ?
    const titleClickHandler = function (event) {
        event.preventDefault();
        console.log('Link was clicked!')
        console.log(event)

        /*[DONE] remove class 'active' from all article links */
        const activeLinks = document.querySelectorAll('.titles a.active');

        for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }
        /* [DONE] add class 'active' to the clicked link */
        const clickedElement = this;

        clickedElement.classList.add('active');

        console.log('clickedElement (with plus): ' + clickedElement);
        /* [DONE] remove class "active" from all articles */
        const activeArticles = document.querySelectorAll('.posts article.active'); // dlaczego to co jest w nawiasie

        for (let activeArticle of activeArticles) {
            activeArticle.classList.remove('active');
        }
        /* [DONE] get "href" attribute from the clicked link */
        const articleSelector = clickedElement.getAttribute('href');

        console.log(articleSelector);
        /* [DONE] find the correct article using the selector (value of "href" attribute) */
        const targetArticle = document.querySelector(articleSelector);

        console.log(targetArticle);
        /* [DONE]add class "active to the correct article" */

        targetArticle.classList.add('active');

    }

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {// jak działają te pętle ???
        link.addEventListener('click', titleClickHandler);
    }

    const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';

    function generateTitleLinks() {//dlaczego niektóre funkcje nie mają nic w nawiasach 

        /*[DONE]remove contents of titleList */
        const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = '';
        console.log(titleList)// czy console.log musi być w tej samej funkcji żeby zadziałał jakie warunki muszą być spełnionie żeby działał
        /*  [DONE] for each article */
        const articles = optArticleSelector;

        for(let article of articles ){
            console.log(articles)
        }
        
        /*[IN PROGRESS] get the article id */
       

        /* find the title element */

        /* get the title from the title element */

        /* create HTML of the link */

        /* insert link into titleList */

    }

    generateTitleLinks();
}
