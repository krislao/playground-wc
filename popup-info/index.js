class PopupInfo extends HTMLElement {
    constructor() {
        super(); // always call super

        // create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });

        // create spans
        var wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');
        var icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabIndex', 0);
        var info = document.createElement('span');
        info.setAttribute('class', 'info');

        // take attribute content and put it inside the info span
        var text = this.getAttribute('text');
        info.textContent = text;

        // insert icon
        var imgUrl;
        if (this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
        } else {
            imgUrl = 'popup-info/img/default.png';
        }
        var img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);

        // create css to apply to shadow dom
        var style = document.createElement('style');
        style.textContent = ` 
            .wrapper {
                position: relative;
            }

            .info {
                font-size: 0.8rem;
                width: 200px;
                display: inline-block;
                border: 1px solid black;
                padding: 10px;
                background: white;
                border-radius: 10px;
                opacity: 0;
                transition: 0.6s all;
                position: absolute;
                bottom: 20px;
                left: 10px;
                z-index: 3;
            }

            img {
                width: 1.2rem;
            }

            .icon:hover + .info, .icon:focus + .info {
                opacity: 1;
            }
        `;

        // attach the created elements to shadow dom
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}

window.customElements.define('popup-info', PopupInfo);