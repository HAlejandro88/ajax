import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-ajax/iron-ajax.js';

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
      <iron-ajax
        id="elajax"
        url="https://jsonplaceholder.typicode.com/posts"
        handle-as="json"
        on-response="respuesta"
        method="POST"
        content-type="application/json">
    </iron-ajax>
     <paper-button raised on-tap="entrar">Entrar</paper-button>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: '',
        observer:"_content",
      },
    };
  }
  entrar() {
    this.$.elajax.body = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    this.$.elajax.generateRequest();
    console.log('esta entrando ajax');
  }

  _content() {
    this.set("paragrafh",this.prop1);
    console.log(this.paragrafh);
  }

  respuesta(e, request) {
    console.log(request.status);
  }

  respuestaToken() {
    const token = localStorage.getItem('token');
  }
}

window.customElements.define('peticion-element', PeticionElement);
