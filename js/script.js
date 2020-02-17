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
    /* [IN PROGRESS]*/
    for (let article of articles) {
        /*[DONE] get the article id */
        const articleId = article.getAttribute('id');
        console.log("id:" + articleId)
        /* [DONE]find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        console.log("articule title: " + articleTitle)
        /* get the title from the title element */

        /* [DONE]create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML)
        /* [DONE] insert link into titleList */
        titleList.innerHTML = titleList.innerHTML + linkHTML;
    }
}

generateTitleLinks();

/*[IN PROGRESS]*/
const links = document.querySelectorAll('.titles a');
console.log('links: ' + links)
for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}