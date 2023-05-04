export interface SearchEngine {
  inputQuery: string[]
  bodyQuery: string[]
  sidebarContainerQuery: string[]
  appendContainerQuery: string[]
  watchRouteChange?: (callback: () => void) => void
}

export const config: Record<string, SearchEngine> = {
  google: {
    inputQuery: ["input[name='q']"],
    bodyQuery: ['#place-'],
    sidebarContainerQuery: ['#rhs'],
    appendContainerQuery: ['#rcnt'],
  },
  arxiv: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#abs'],
    sidebarContainerQuery: ['div[class="metatable"]'],
    appendContainerQuery: [],
  },
  biorxiv: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="inside"]'],
    sidebarContainerQuery: ['#panels-ajax-tab-container-highwire_article_tabs'],
    appendContainerQuery: [],
  },
  pubmed: {
    inputQuery: [],
    bodyQuery: ['#abstract'],
    sidebarContainerQuery: ['#copyright'],
    appendContainerQuery: [],
  },
  ieeexplore: {
    inputQuery: [],
    bodyQuery: ['div.abstract-text.row div.u-mb-1 div'],
    sidebarContainerQuery: ['div.u-pb-1.stats-document-abstract-publishedIn'],
    appendContainerQuery: [],
  },
  acm: {
    inputQuery: [],
    bodyQuery: ['div[class="abstractInFull"]'],
    sidebarContainerQuery: ['div[class="pb-dropzone"]'],
    appendContainerQuery: [],
  },
  nature : {
    inputQuery: [],
    bodyQuery: ['div#Abs1-content'],
    sidebarContainerQuery: ['#access-options'],
    appendContainerQuery: [],
  },
  sciencemag : {
    inputQuery: [],
    bodyQuery: ['#bodymatter'],
    sidebarContainerQuery: ['#bodymatter'],
    appendContainerQuery: [],
  },
  cell : {
    inputQuery: [],
    bodyQuery: ['div[class="section-paragraph"]'],
    sidebarContainerQuery: ['h2[class="top"]'],
    appendContainerQuery: [],
  },
  thelancet : {
    inputQuery: [],
    bodyQuery: ['div[class="section-paragraph"]'],
    sidebarContainerQuery: ['h2[class="top"]'],
    appendContainerQuery: [],
  },
  jbc : {
    inputQuery: [],
    bodyQuery: ['div[class="section-paragraph"]'],
    sidebarContainerQuery: ['div[class="section-paragraph"]'],
    appendContainerQuery: [],
  },
  pnas : {
    inputQuery: [],
    bodyQuery: ['#abstract'],
    sidebarContainerQuery: ['#executive-summary-abstract'],
    appendContainerQuery: [],
  },
  nejm : {
    inputQuery: [],
    bodyQuery: ['#article_body'],
    sidebarContainerQuery: ['#article_body > h2'],
    appendContainerQuery: [],
  },
  jama : {
    inputQuery: [],
    bodyQuery: ['div[class="abstract-content"]'],
    sidebarContainerQuery: ['#webform > section.master-main > div.content.pb0 > div.article-content'],
    appendContainerQuery: [],
  },
  prl : {
    inputQuery: [],
    bodyQuery: ['#article-content > section.article.open.abstract > div'],
    sidebarContainerQuery: ['#article-content > section.article.open.abstract > h4'],
    appendContainerQuery: [],
  },
  iopscience : {
    inputQuery: [],
    bodyQuery: ['#page-content > div:nth-child(3) > div.article-content'],
    sidebarContainerQuery: ['#page-content > div.article-head > h1'],
    appendContainerQuery: [],
  },
  acs : {
    inputQuery: [],
    bodyQuery: ['#abstractBox'],
    sidebarContainerQuery: ['#Abstract'],
    appendContainerQuery: [],
  },
  plos : {
    inputQuery: [],
    bodyQuery: ['div[class="abstract-content"]'],
    sidebarContainerQuery: ['#artText'],
    appendContainerQuery: [],
  },
  acpjournals : {
    inputQuery: [],
    bodyQuery: ['#pb-page-content > div > main > article > div > div.col-sm-12.col-md-8.article__content > div.article__body > div.hlFld-Fulltext'],
    sidebarContainerQuery: ['#pb-page-content > div > main > article'],
    appendContainerQuery: [],
  },
  royalsocietypublishing : {
    inputQuery: [],
    bodyQuery: ['#pb-page-content > div > main > div.container > div > div > article > div > div.mobile-gutters > div > div.article__content > div.article__body > div > div > p'],
    sidebarContainerQuery: ['div[class="epub-section"]'],
    appendContainerQuery: [],
  },
  ajp : {
    inputQuery: [],
    bodyQuery: ['#pb-page-content > div > div:nth-child(2) > div > main > div.container > div > div > article > div > div.article__content > div.article__body > div.hlFld-Fulltext > p:nth-child(1)'],
    sidebarContainerQuery: ['div[class="epub-section"]'],
    appendContainerQuery: [],
  },
  jneurosci : {
    inputQuery: [],
    bodyQuery: ['#abstract-1'],
    sidebarContainerQuery: ['div[class="inside"]'],
    appendContainerQuery: [],
  }
}
    // bodyQuery: ['#abstract div[role="paragraph"]'],
