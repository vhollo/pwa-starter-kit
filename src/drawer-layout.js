import { Element } from '../node_modules/@polymer/polymer/polymer-element.js';

class DrawerLayout extends Element {
  static get template() {
    return `
    <style>
      .container {
        display: flex;
        min-height: 100vh;
      }

      .container > #drawer {
        z-index: 10;
      }

      .container > #scrim {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
        background: #000;
        visibility: hidden;
        opacity: 0;
        transition-property: opacity, visibility;
        transition-duration: 0.2s;
      }

      .container > #content {
        flex: 1;
      }

      @media (max-width: 767px) {
        .container > #drawer {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          visibility: hidden;
          transform: translate3d(-100%, 0, 0);
          transition-property: transform, visibility;
          transition-duration: 0.2s;
        }

        .container[opened] > #drawer {
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }

        .container[opened] > #scrim {
          visibility: visible;
          opacity: 0.5;
        }
      }
    </style>

    <div class="container" opened$="[[opened]]">
      <div id="drawer">
        <slot name="drawer"></slot>
      </div>
      <div id="content">
        <slot></slot>
      </div>
      <div id="scrim" on-click="_close"></div>
    </div>`;
  }
  
  static get properties() {
    return {
      opened: Boolean
    };
  }

  _close() {
    this.opened = false;
  }
}

window.customElements.define('drawer-layout', DrawerLayout);
