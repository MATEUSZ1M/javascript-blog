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
  optArticleTagsSelector = '.post-tags .list',
  optAuthorSelector = '.post-author',
  // optTagsListSelector = '.tags.list',
  optCloudClassCount = 5,
  optCloudClassPrefix = 'tag-size-',
  optAuthorListSelector = '.post-author a';

function generateTitleLinks(customSelector = '') {
  /*[DONE]remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log(titleList);
  /*[DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log(articles);
  console.log(customSelector, optArticleSelector);
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

const params = { max: 0, min: 999999 };
function calculateTagsParams(tags) {

  for (let tag in tags) {
    console.log(tag + ' is used ' + tags[tag] + ' times');
    if (tags[tag] > params.max) {
      params.max = tags[tag];
    }
    else if (tags[tag] < params.min) {
      params.min = tags[tag];
    }
  }
  return params;
}

function calculateTagClass(count, params) {
  const normalizedCount = count - params.min;

  const normalizedMax = params.max - params.min;

  const percentage = normalizedCount / normalizedMax;

  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);

  console.log(classNumber);

  const result = optCloudClassPrefix + classNumber;
  return result;
}


function generateTags() {
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = {};
  /*[DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* [IN PROGRESS] START LOOP: for every article: */
  for (let article of articles) {
    /*[DONE] find tags wrapper */
    const tagList = article.querySelector(optArticleTagsSelector);
    console.log(tagList);
    /* [DONE] make html variable with empty string */
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
      let html = linkTag;
      console.log(html);
      /* [NEW] check if this link is NOT already in allTags */
      if (!allTags[tag]) {
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      /* insert HTML of all the links into the tags wrapper */
      tagList.innerHTML = tagList.innerHTML + html;
      /* END LOOP: for each tag */
    }
    /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');
  /* [NEW] create variable for all links HTML code */
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams);
  let allTagsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags: */
  for (let tag in allTags) {
    /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += '<li><a href="#tag-' + tag + '" class="'+ calculateTagClass(allTags[tag], tagsParams) +'"><span>' + tag + ' (' + allTags[tag] + ') ' + '</span></a></li>';

    console.log(tag);
    console.log(allTagsHTML);
  }
  /* [NEW] END LOOP: for each tag in allTags: */

  /*[NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
}

generateTags();

function tagClickHandler(event) {
  /* [DONE] prevent default action for this event */
  event.preventDefault();
  console.log('tag was clicked');
  console.log(event);

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement);
  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href of clicked tag: ' + href);
  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log('clicked tag: ' + tag);
  /*[DONE] find all tag links with class active */
  const activeLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log('active tag: ' + tag);
  /*  START LOOP: for each active tag link */
  for (let activeLink of activeLinks) {
    /* remove class active */
    activeLink.classList.remove('active');
    console.log(activeLink);
    /* END LOOP: for each active tag link */
  }
  /* [DONE] find all tag links with "href" attribute equal to the "href" constant*/
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log(tagLinks);
  /*  START LOOP: for each found tag link */
  for (let tagLink of tagLinks) {
    /* [DONE] "add class active */
    tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* [IN PROGRESS] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* [DONE] find all links to tags */
  const links = document.querySelectorAll(optTagLinkSelector);
  console.log(links);
  /*[DONE] START LOOP: for each link */
  for (let link of links) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
  }
  /* END LOOP: for each link */
}

addClickListenersToTags();

function generateAuthors() {
  /*[DONE] find all aricles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* [DONE] START LOOP: for every article: */
  for (let article of articles) {
    /* [DONE] find authors wrapper */
    const authorList = article.querySelector(optAuthorSelector);
    console.log(authorList);
    /*[DONE] make html variable with empty string */
    let html = '';
    /* [DONE] get authors from data-authors attribute */
    const authors = article.getAttribute('data-author');

    console.log('author: ' + authors);
    /* [DONE] generate HTML of the link */
    const linkAuthor = '<a href="#-' + authors + '"><span>' + authors + '</span></a>';
    console.log(linkAuthor);
    /*[DONE] add generated code to html variable */
    html = linkAuthor;
    /*[IN PROGRESS] insert HTML of all the links into the tags wrapper */
    authorList.innerHTML = authorList.innerHTML + html;
    /* END LOOP: for every article: */
  }
}

generateAuthors();

function authorClickHandler(event) {
  /* [DONE] prevent default action for this event */
  event.preventDefault();
  console.log('author was clicked');
  console.log(event);
  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement);
  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href of clicked tag: ' + href);
  /* [DONE] make a new constant "author" and extract author name from the "href" constant */
  const author = href.replace('#-', '');
  console.log('author name: ' + author);
  /*[DONE] find all author links with class active */
  const activeLinks = document.querySelectorAll('a.active[href^="#-"]');
  console.log('active tag: ' + author);
  /*  START LOOP: for each active tag link */
  for (let activeLink of activeLinks) {
    /* remove class active */
    activeLink.classList.remove('active');
    console.log('active link ' + activeLink);
    /* END LOOP: for each active tag link */
  }
  /* [DONE] find all tag links with "href" attribute equal to the "href" constant*/
  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log(authorLinks);
  /*  [DONE]START LOOP: for each found tag link */
  for (let authorLink of authorLinks) {
    /* [DONE] "add class active */
    authorLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* [IN PROGRESS] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author~="' + author + '"]');
}

function addClickListenersToAuthors() {
  /* [DONE] find all links to authors */
  const links = document.querySelectorAll(optAuthorListSelector);
  console.log('all links' + links);
  /*[DONE] START LOOP: for each link */
  for (let link of links) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', authorClickHandler);
  }
  /* END LOOP: for each link */
}

addClickListenersToAuthors();


