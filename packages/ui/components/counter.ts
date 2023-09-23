import "@shoelace-style/shoelace/dist/components/button/button.js"
import {html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";

@customElement('ui-counter')
export class Counter extends LitElement {
  @state()
  private number = 0

  protected render(): unknown {
    return html`<sl-button @click="${() => this.number++}">count is ${this.number}</sl-button>`;
  }
}