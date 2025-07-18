import style from "./style.css";
import template from "./template.html";

const flipCardTemplate = document.createElement("template");

flipCardTemplate.innerHTML = `
<style>${style}</style>
${template}
`
class FlipCard extends HTMLElement {
  private _shadowRoot: ShadowRoot;

  [key: string]: any;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });

    this._shadowRoot.appendChild(flipCardTemplate.content.cloneNode(true)); 
  }

  connectedCallback() {
    if (!this.hasAttribute("variant")) {
      this.variant = "hover";
    }
    this.attachEventListeners();
    this._upgradeProperty('variant');
  }

  _upgradeProperty(prop: string) {
  if (this.hasOwnProperty(prop)) {
    let value = this[prop];
    delete this[prop];
    this[prop] = value;
  }
}

  static get observedAttributes() {
    return ['variant'];
  }

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {
    if (oldVal !== newVal) {
      this.attachEventListeners();
    }
  }

  get variant() {
    return this.getAttribute("variant")
  }

  set variant(newValue) {
    if (newValue) {
      this.setAttribute("variant", newValue);
    } 
  }

  attachEventListeners() {
    const cardFront = this._shadowRoot.querySelector<HTMLElement>(".flip-card__side--front");
    

    const cardBack = this._shadowRoot.querySelector<HTMLElement>(".flip-card__side--back");
    
    if (this.variant === "click") {

      if (cardFront) {
        cardFront.style.cursor = "pointer";
      }


      if (cardBack) {
        cardBack.style.cursor = "pointer";
      }

      cardFront?.classList.remove("hover");
      
      cardBack?.classList.remove("hover");
      cardFront?.addEventListener('click', function(event) {
        cardFront?.classList.add("clicked--front");
         cardBack?.classList.add("clicked--back");
      })

      cardBack?.addEventListener('click', function(event) {
        cardFront?.classList.remove("clicked--front");

       
        cardBack?.classList.remove("clicked--back");

      })
    }

    if (this.variant === "hover") {
      cardFront?.classList.add("hover");
      cardFront?.classList.remove("clicked--front")
      cardBack?.classList.add('hover');
      cardBack?.classList.remove('clicked--back');
    }
  } 
}

window.customElements.define("flip-card", FlipCard);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "flip-card": any;
    }
  }
}