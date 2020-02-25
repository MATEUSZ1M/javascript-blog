'use scrict';
const titleClickHandler = function (event) {
  event.preventDefault();
  console.log('Link was clicked!');
  console.log(event);

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
};


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optTagLinkSelector = '.post-tags .list  a',
  optArticleTagsSelector = '.post-tags .list';
function generateTitleLinks() {

  /*[DONE]remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log(titleList);
  /*[DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* [DONE]*/
  for (let article of articles) {
    /*[DONE] get the article id */
    const articleId = article.getAttribute('id');
    console.log('id: ' + articleId);
    /* [DONE]find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log('articule title: ' + articleTitle);
    /* [DONE]create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* [DONE] insert link into titleList */
    titleList.innerHTML = titleList.innerHTML + linkHTML;
  }
  /*[DONE]*/
  const links = document.querySelectorAll('.titles a');
  console.log('links: ' + links);
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags() {
  /*[DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* [IN PROGRESS] START LOOP: for every article: */
  for (let article of articles) {
    /*[DONE] find tags wrapper */
    const tagList = article.querySelector(optArticleTagsSelector);
    console.log(tagList);
    /* [DONE]make html variable with empty string */
    let html = '';
    console.log(html);
    /* [DONE] get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);
    /*[DONE] */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /*  [IN PROGRESS] START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* [DONE] generate HTML of the link */
      const linkTag = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      /*[IN PROGRESS PROBLEM] add generated code to html variable */
      html = linkTag;
      console.log(html);
      tagList.innerHTML = tagList.innerHTML + html;
      // tagList.innerHTML = tagList.innerHTML + linkTag;
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event){
  /* [DONE] prevent default action for this event */
  event.preventDefault();
  console.log('tag was clicked');
  console.log(event);

  /*[IN PROGRESS] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement);
  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();
