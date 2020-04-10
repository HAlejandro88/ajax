import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `peticion-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PeticionElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'peticion-element',
      },
    };
  }
}

window.customElements.define('peticion-element', PeticionElement);
