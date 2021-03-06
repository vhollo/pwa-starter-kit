/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { plusIcon, minusIcon } from './my-icons.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class TeamnameElement extends LitElement {
  _render(props) {
    return html`
      ${ButtonSharedStyles}
      <style>
        span { width: 20px; display: inline-block; text-align: center; font-weight: bold;}
      </style>
      <div>
        <!--input id="teamname" type="text" value="${props.teamname}" on-change="${(e) => this._onTeamNameChange(e)}" /-->
        <input id="teamname" type="text" value="${props.teamname}" on-change="${(e) => this._onTeamNameChange(e)}" />
        <p>
          Teamname: <span>${props.teamname}</span>
        </p>
      </div>
    `;
  }

  static get properties() { return {
    /* The total number of clicks you've done. */
    teamname: String
  }};

  constructor() {
    super();
    this.teamname = 'yellobello'
  }

  _onTeamNameChange(e) {
console.log('element_e.target.value:',e.target.value);
    //this.teamname = e.path[0].value;
    this.dispatchEvent(new CustomEvent('teamname-changed', {"detail": e.target.value}));
  }

}

window.customElements.define('teamname-element', TeamnameElement);
