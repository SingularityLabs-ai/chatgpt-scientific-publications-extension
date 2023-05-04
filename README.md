# SciGPT

[link-chrome]: https://chrome.google.com/webstore/detail/arxivgpt/fbbfpcjhnnklhmncjickdipdlhoddjoh?hl=en&authuser=0 'Chrome Web Store'

[<img src="https://user-images.githubusercontent.com/3750161/214147732-c75e96a4-48a4-4b64-b407-c2402e899a75.PNG" height="67" alt="Chrome" valign="middle">][link-chrome]

## Screenshot

<img width="1418" alt="image" src="https://user-images.githubusercontent.com/901975/217130285-20d0bf67-e9a8-46ca-9d9d-f49b42515a7d.png">

## Avaiable Sites (TBA or TBA as a configuration feature)

* Arxiv: "https://arxiv.org/*"
* Bioxiv: "https://www.biorxiv.org/content/*"
* Pubmed: "https://pubmed.ncbi.nlm.nih.gov/*"
* IEEE: "https://ieeexplore.ieee.org/document/*"
* sciencedirect: "https://www.sciencedirect.com/science/article/*"
* ACM: "https://dl.acm.org/doi/*"
* Nature: "https://www.nature.com/articles/*"
* Cell: "https://www.cell.com/*"
* The Lancet: "https://www.thelancet.com/journals/*"
* Proceedings of the National Academy of Sciences (PNAS): "https://www.pnas.org/doi/*"
* New England Journal of Medicine (NEJM): "https://www.nejm.org/doi/"
* JAMA: The Journal of the American Medical Association: "https://jamanetwork.com/journals/jama/*"
* Physical Review Letters (PRL): "https://journals.aps.org/prl/abstract/*"
* Astrophysical Journal: "https://iopscience.iop.org/article/*"
* ACS "https://pubs.acs.org/doi/*"
* PLOS: "https://journals.plos.org/*"
* Journal of Biological Chemistry (JBC): "https://www.jbc.org/article/*"
* Annals of Internal Medicine: "https://www.acpjournals.org/doi/*"
* Proceedings of the Royal Society B: Biological Sciences: "https://royalsocietypublishing.org/doi/*"
* The American Journal of Psychiatry (AJP): "https://ajp.psychiatryonline.org/doi/*"
* Journal of Neuroscience: "https://www.jneurosci.org/content/*"
* Journal of Clinical Oncology: "https://ascopubs.org/doi/*"
* Onlinelibrary Wiley: "https://onlinelibrary.wiley.com/doi/*"
* Oxford Academic: "https://academic.oup.com/*"

(To be fixed:)

Sciencemag: "https://www.sciencemag.org/doi/*"
Earth and Planetary Science Letters: https://www.journals.elsevier.com/earth-and-planetary-science-letters/


* Annual Review of Biochemistry: https://www.annualreviews.org/journal/biochem
Journal of Geophysical Research: Solid Earth: https://agupubs.onlinelibrary.wiley.com/journal/21699356
Journal of Climate: https://journals.ametsoc.org/jcli
Chemical Science: https://pubs.rsc.org/en/journals/journalissues/sc
Blood: https://ashpublications.org/blood
Journal of Cell Biology: https://rupress.org/jcb
Clinical Cancer Research: https://clincancerres.aacrjournals.org/
Journal of the American College of Cardiology (JACC): https://www.jacc.org/
Journal of Allergy and Clinical Immunology: https://www.jacionline.org/
Chemical Engineering Journal: https://www.journals.elsevier.com/chemical-engineering-journal/
The EMBO Journal: https://www.embopress.org/journal/14602075
Journal of Neuroscience Methods: https://www.journals.elsevier.com/journal-of-neuroscience-methods/
Journal of Hepatology: https://www.journal-of-hepatology.eu/
American Journal of Respiratory and Critical Care Medicine (AJRCCM): https://www.atsjournals.org/journal/ajrccm
Annals of Surgery: https://journals.lww.com/annalsofsurgery/pages/default.aspx
Biomaterials: https://www.journals.elsevier.com/biomaterials/
Annual Review of Astronomy and Astrophysics: https://www.annualreviews.org/journal/astro
Gut: https://gut.bmj.com/
Journal of Personality and Social Psychology: https://psycnet.apa.org/journals/psp/
Journal of Experimental Medicine (JEM): https://rupress.org/jem
Journal of Virology: https://jvi.asm.org/
Chemical Communications: https://pubs.rsc.org/en/journals/journalissues/cc
Journal of the American Society of Nephrology (JASN): https://jasn.asnjournals.org/
Journal of Nuclear Medicine: https://jnm.snmjournals.org/
Hypertension: https://www.ahajournals.org/journal/hyp
Journal of Clinical Investigation (JCI): https://www.jci.org/
Progress in Materials Science: https://www.journals.elsevier.com/progress-in
Diabetes: https://diabetes.diabetesjournals.org/
Journal of Investigative Dermatology: https://www.jidonline.org/
Journal of Ecology: https://besjournals.onlinelibrary.wiley.com/journal/13652745
Environmental Health Perspectives: https://ehp.niehs.nih.gov/
Journal of Biological Chemistry (JBC): https://www.jbc.org/
Journal of Geophysical Research: https://agupubs.onlinelibrary.wiley.com/journal/2156531X
Journal of Physiology: https://physoc.onlinelibrary.wiley.com/journal/14697793
Journal of Climate: https://journals.ametsoc.org/jcli

## Custom Prompt
You can change the prompt.
<img width="1031" alt="image" src="https://user-images.githubusercontent.com/901975/217131081-d5487c3f-cb5c-46f4-be21-e4f1a22e9fce.png">

## Troubleshooting

### How to make it work in Brave

![Screenshot](screenshots/brave.png?raw=true)

Disable "Prevent sites from fingerprinting me based on my language preferences" in `brave://settings/shields`

### How to make it work in Opera

![Screenshot](screenshots/opera.png?raw=true)

Enable "Allow access to search page results" in the extension management page

## Build from source

1. Clone the repo
2. Install dependencies with `npm`
3. `npm run build`
4. Load `build/chromium/` or `build/firefox/` directory to your browser

## Credit

This project is inspired by [ZohaibAhmed/ChatGPT-Google](https://github.com/ZohaibAhmed/ChatGPT-Google) and https://github.com/wong2/chatgpt-google-extension
This project is inspired by [ZohaibAhmed/ChatGPT-Google](https://github.com/ZohaibAhmed/ChatGPT-Google) and wong2/chatgpt-google-extension
