'use scrict';
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
    const activeArticles = document.querySelectorAll('.posts article.active');
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

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks() {

    /*[DONE]remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    console.log(titleList)
    /*  [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles)
    for (let article of articles) {
        /*[DONE] get the article id */
        const articleId = article.getAttribute('id');
        console.log("id:" + articleId)
        /* [DONE]find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        console.log("articule title: " + articleTitle)
        /* get the title from the title element */

        /* [IN PROGRESS]create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML)
        /* insert link into titleList */

    }
    
}

generateTitleLinks();

