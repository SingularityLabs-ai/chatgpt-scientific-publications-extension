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
  }
}
    // bodyQuery: ['#abstract div[role="paragraph"]'],
