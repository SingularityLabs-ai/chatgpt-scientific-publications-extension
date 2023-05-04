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
  sciencedirect : {
    inputQuery: [],
    bodyQuery: ['div[class="abstract author"]'],
    sidebarContainerQuery: ['#banner'],
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
  jacionline : {
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
  annualreviews : {
    inputQuery: [],
    bodyQuery: ['#main-content > div > div > section > article > div.row.inner-columns > div > div.hlFld-Abstract > div'],
    sidebarContainerQuery: ['#section-1'],
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
  },
  ascopubs : {
    inputQuery: [],
    bodyQuery: ['div > div > div.publication-tabs.ja.publication-tabs-dropdown > div > div > div.tab.tab-pane.active > article'],
    sidebarContainerQuery: ['ul[class="tab-nav"]'],
    appendContainerQuery: [],
  },
  onlinelibrar : {
    inputQuery: [],
    bodyQuery: ['#section-1-en > div > p:nth-child(1), #section-1-en > div.en > section:nth-child(1) > p:nth-child(1)'],
    sidebarContainerQuery: ['#section-1-en'],
    appendContainerQuery: [],
  },
  embopress : {
    inputQuery: [],
    bodyQuery: ['#section-1-en > div > p:nth-child(1)'],
    sidebarContainerQuery: ['#section-1-en'],
    appendContainerQuery: [],
  },
  academic : {
    inputQuery: [],
    bodyQuery: ['#ContentTab > div.widget.widget-ArticleFulltext.widget-instance-OUP_Article_FullText_Widget > div > div > section:nth-child(2)'],
    sidebarContainerQuery: ['#ContentTab'],
    appendContainerQuery: [],
  },
  rupress : {
    inputQuery: [],
    bodyQuery: ['section[class="abstract"]'],
    sidebarContainerQuery: ['#ContentTab'],
    appendContainerQuery: [],
  },
  ashpublications : {
    inputQuery: [],
    bodyQuery: ['section[class="abstract"]'],
    sidebarContainerQuery: ['#ContentTab'],
    appendContainerQuery: [],
  },
  ahajournals : {
    inputQuery: [],
    bodyQuery: ['#pb-page-content > div > main > div.container > div > div > article > div > div > div.row.flex-wrapper > div.article__content > div.article__body.show-references > div.hlFld-Abstract > div.abstractSection.abstractInFull > p:nth-child(3)'],
    sidebarContainerQuery: ['div[class="citation"]'],
    appendContainerQuery: [],
  },
  jacc : {
    inputQuery: [],
    bodyQuery: ['#pb-page-content > div > div.page-container.jacadv > main > article > div > div.col-lg-8.article__content.has-sections > div.article__body > section.article-section.article-section__abstract > div > div:nth-child(2) > section:nth-child(2) > p:nth-child(1)'],
    sidebarContainerQuery: ['div[class="article__keyword"]'],
    appendContainerQuery: [],
  },
  ametsoc : {
    inputQuery: [],
    bodyQuery: ['div > div.component.component-content-item.component-content-summary.abstract_or_excerpt > div > div > section > p'],
    sidebarContainerQuery: ['nav[class="container-tabs"]'],
    appendContainerQuery: [],
  },
  aacrjournals : {
    inputQuery: [],
    bodyQuery: ['#ContentTab > div.widget-ArticleFulltext.widget-instance-ArticleFulltext > div > div'],
    sidebarContainerQuery: ['#ContentTab'],
    appendContainerQuery: [],
  },
  hepatology : {
    inputQuery: [],
    bodyQuery: ['#pb-page-content > div > div:nth-child(3) > div > div > div > main > article > div.article__body > div.container > div > div.article__sections'],
    sidebarContainerQuery: ['h2[class="top"]'],
    appendContainerQuery: [],
  },
  diabetesjournals : {
    inputQuery: [],
    bodyQuery: ['section > p'],
    sidebarContainerQuery: ['#ContentColumn > div.widget-ArticleMainView.widget-instance-ArticleMainView_Article > div.content-inner-wrap > div.widget-ArticleTopInfo.widget-instance-ArticleTopInfo'],
    appendContainerQuery: [],
  },
  rsc : {
    inputQuery: [],
    bodyQuery: ['#maincontent > div.viewport > div > div.layout__panel.layout__panel--primary.layout__panel--60.layout__panel--filled > section > article > div.capsule__column-wrapper > div.capsule__text > p'],
    sidebarContainerQuery: ['#maincontent > div.viewport > div > div.layout__panel.layout__panel--primary.layout__panel--filled > section > article > div.article__authors'],
    appendContainerQuery: [],
  },
  annalsofsurgery : {
    inputQuery: [],
    bodyQuery: ['#article-abstract-content1 > div'],
    sidebarContainerQuery: ['#ArticleContainer'],
    appendContainerQuery: [],
  },
  gut : {
    inputQuery: [],
    bodyQuery: ['#content-block > div.article'],
    sidebarContainerQuery: ['ol[class="corresp-list"]'],
    appendContainerQuery: [],
  },
  jnm : {
    inputQuery: [],
    bodyQuery: ['#panels-ajax-tab-container-highwire_article_tabs > div.panels-ajax-tab-wrap-jnl_snm_tab_art > div > div > div > div > div > div > div > div'],
    sidebarContainerQuery: ['#block-system-main > div > div > div > div:nth-child(2) > div.main-content-wrapper.alpha > div > div > div.panel-pane.pane-highwire-panel-tabs.pane-panels-ajax-tab-tabs > div > div > ul'],
    appendContainerQuery: [],
  },
  ehp : {
    inputQuery: [],
    bodyQuery: ['#pb-page-content > div > div.full-text > div > main > article > div > div.article__content > div.article__body'],
    sidebarContainerQuery: ['div[class="epub-section"]'],
    appendContainerQuery: [],
  }
}

