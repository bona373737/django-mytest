class businessArticle extends HTMLElement {

    connectedCallback() {
    let src = this.getAttribute('src');
    let alt = this.getAttribute('alt');
    let title = this.dataset.title;
    let subTitle = this.dataset.subTitle;
    let desc = this.dataset.desc;

    let article = document.createElement('article');
    article.className = "fadein";
    let img = document.createElement('img');
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    let h1 = document.createElement('h1');
    h1.innerText = title;
    let h2 = document.createElement('h2');
    if(subTitle){
        h2.innerText = subTitle;
    }
    let p = document.createElement('p');
    p.innerText = desc;

    this.appendChild(article)
    article.appendChild(img);
    article.appendChild(h1);
    article.appendChild(h2);
    article.appendChild(p);
    }
    }
    customElements.define("business-article", businessArticle);

