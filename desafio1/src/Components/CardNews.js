class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/photo-default.jpg";

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
        
        .card {
        justify-content: space-between;
        width: 100%; /*pegar 100% da tela*\
        
        /* https://cssgenerator.org/box-shadow-css-generator.html */
        box-shadow: 11px 16px 13px 10px rgba(135, 122, 122, 0.65);
        -webkit-box-shadow: 11px 16px 13px 10px rgba(135, 122, 122, 0.65);
        -moz-box-shadow: 11px 16px 13px 10px rgba(135, 122, 122, 0.65);
        display: flex;
        /* deixa uma do lado da outra */
        flex-direction: row;
        }

        .card_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
        }

        .card_left > a {
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
        }

        .card_left > p {
        color: gray;
        }
        .card_left > span {
        font-weight: 400;
        }
    `;

    return style;
  }
}
//sempre colocar o define com nome com traço
customElements.define("card-news", CardNews);
