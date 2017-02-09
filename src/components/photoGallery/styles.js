export default `
/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */
.pswp {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    -ms-touch-action: none;
    touch-action: none;
    z-index: 1500;
    -webkit-text-size-adjust: 100%;
    -webkit-backface-visibility: hidden;
    outline: none
}

.pswp img {
    max-width: none
}

.pswp--animate_opacity {
    opacity: .001;
    will-change: opacity;
    transition: opacity 333ms cubic-bezier(.4,0,.22,1)
}

.pswp--open {
    display: block
}

.pswp--zoom-allowed .pswp__img {
    cursor: zoom-in
}

.pswp--zoomed-in .pswp__img {
    cursor: -webkit-grab;
    cursor: grab
}

.pswp--dragging .pswp__img {
    cursor: -webkit-grabbing;
    cursor: grabbing
}

.pswp__bg {
    background-color: #fff;
    opacity: 0;
    -webkit-backface-visibility: hidden;
    will-change: opacity
}

.pswp__bg,.pswp__scroll-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
}

.pswp__scroll-wrap {
    overflow: hidden
}

.pswp__container,.pswp__zoom-wrap {
    -ms-touch-action: none;
    touch-action: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0
}

.pswp__container,.pswp__img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none
}

.pswp__zoom-wrap {
    position: absolute;
    width: 100%;
    transform-origin: left top;
    transition: transform 333ms cubic-bezier(.4,0,.22,1)
}

.pswp__bg {
    will-change: opacity;
    transition: opacity 333ms cubic-bezier(.4,0,.22,1)
}

.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap {
    transition: none
}

.pswp__container,.pswp__zoom-wrap {
    -webkit-backface-visibility: hidden;
    will-change: transform
}

.pswp__item {
    right: 0;
    bottom: 0;
    overflow: hidden
}

.pswp__img,.pswp__item {
    position: absolute;
    left: 0;
    top: 0
}

.pswp__img {
    width: auto;
    height: auto
}

.pswp__player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000
}

.pswp__img--placeholder {
    -webkit-backface-visibility: hidden
}

.pswp__img--placeholder--blank {
    background: #222
}

.pswp--ie .pswp__img {
    width: 100%!important;
    height: auto!important;
    left: 0;
    top: 0
}

.pswp__error-msg {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    margin-top: -8px;
    color: #ccc
}

.pswp__error-msg a {
    color: #ccc;
    text-decoration: underline
}

/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */
.pswp__button {
    width: 4.4rem;
    height: 4.4rem;
    position: relative;
    background: none;
    cursor: pointer;
    overflow: visible;
    -webkit-appearance: none;
    display: block;
    border: 0;
    padding: 0;
    margin: 0;
    transition: opacity .2s;
    box-shadow: none
}

.pswp__button:focus,.pswp__button:hover {
    opacity: .75
}

.pswp__button:active {
    outline: none;
    opacity: .9
}

.pswp__button::-moz-focus-inner {
    padding: 0;
    border: 0
}

.pswp__ui--over-close .pswp__button--close {
    opacity: 1
}

.pswp__button--close {
    background-image: url(https://assets.lonelyplanet.com/javascripts/icon-image-gallery-close.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 1.6rem 1.6rem;
    height: 1.6rem;
    margin-right: .8rem;
    margin-top: .8rem;
    padding: 2.2rem;
    width: 1.6rem;
    float: right
}

@media (min-width: 45em) {
    .pswp__button--close {
        background-size:3.2rem 3.2rem;
        height: 3.2rem;
        padding: 4.4rem;
        margin-right: 1.6rem;
        width: 3.2rem
    }
}

.pswp__button--fs,.pswp__button--share,.pswp__button--zoom {
    display: none
}

.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right {
    visibility: hidden
}

.pswp__button--arrow--left,.pswp__button--arrow--right {
    background: none;
    top: 50%;
    margin-top: -50px;
    height: 3.6rem;
    width: 2.1rem;
    padding: 4.4rem;
    position: absolute
}

.pswp__button--arrow--left {
    left: 1.6rem
}

.pswp__button--arrow--right {
    right: 1.6rem
}

.pswp__button--arrow--left:before,.pswp__button--arrow--right:before {
    content: "";
    top: 0;
    height: 3.6rem;
    width: 2.1rem;
    padding: 4.4rem;
    position: absolute;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 2.1rem 3.6rem
}

.pswp__button--arrow--left:before {
    left: 0;
    background-image: url(https://assets.lonelyplanet.com/javascripts/icon-image-gallery-prev.svg)
}

.pswp__button--arrow--right:before {
    right: 0;
    background-image: url(https://assets.lonelyplanet.com/javascripts/icon-image-gallery-next.svg)
}

.pswp__counter,.pswp__share-modal {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.pswp__share-modal {
    display: block;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 10px;
    position: absolute;
    z-index: 1600;
    opacity: 0;
    transition: opacity .25s ease-out;
    -webkit-backface-visibility: hidden;
    will-change: opacity
}

.pswp__share-modal--hidden {
    display: none
}

.pswp__share-tooltip {
    z-index: 1620;
    position: absolute;
    background: #fff;
    top: 56px;
    border-radius: 2px;
    display: block;
    width: auto;
    right: 44px;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    transform: translateY(6px);
    transition: transform .25s;
    -webkit-backface-visibility: hidden;
    will-change: transform
}

.pswp__share-tooltip a {
    display: block;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 18px
}

.pswp__share-tooltip a,.pswp__share-tooltip a:hover {
    color: #000;
    text-decoration: none
}

.pswp__share-tooltip a:first-child {
    border-radius: 2px 2px 0 0
}

.pswp__share-tooltip a:last-child {
    border-radius: 0 0 2px 2px
}

.pswp__share-modal--fade-in {
    opacity: 1
}

.pswp__share-modal--fade-in .pswp__share-tooltip {
    transform: translateY(0)
}

.pswp--touch .pswp__share-tooltip a {
    padding: 16px 12px
}

a.pswp__share--facebook:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -12px;
    right: 15px;
    border: 6px solid transparent;
    border-bottom-color: #fff;
    -webkit-pointer-events: none;
    -moz-pointer-events: none;
    pointer-events: none
}

a.pswp__share--facebook:hover {
    background: #3e5c9a;
    color: #fff
}

a.pswp__share--facebook:hover:before {
    border-bottom-color: #3e5c9a
}

a.pswp__share--twitter:hover {
    background: #55acee;
    color: #fff
}

a.pswp__share--pinterest:hover {
    background: #ccc;
    color: #ce272d
}

a.pswp__share--download:hover {
    background: #ddd
}

.pswp__counter {
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    font-size: 13px;
    line-height: 44px;
    color: #fff;
    opacity: .75;
    padding: 0 10px
}

.pswp__caption {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 44px
}

.pswp__caption small {
    font-size: 1.2rem;
    color: #bfc2c6
}

.pswp__caption__center {
    text-align: center;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.2rem;
    padding: 2rem;
    line-height: 1.66667;
    color: rgba(44,54,67,.8);
    letter-spacing: -.02rem
}

@media (min-width: 45em) {
    .pswp__caption__center {
        font-size:1.4rem;
        line-height: 1.57143
    }
}

.pswp__caption__center a {
    color: rgba(44,54,67,.8);
    text-decoration: underline
}

.pswp__caption--empty {
    display: none
}

.pswp__caption--fake {
    visibility: hidden
}

.pswp__preloader {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -22px;
    opacity: 0;
    transition: opacity .25s ease-out;
    will-change: opacity;
    direction: ltr
}

.pswp__preloader__icn {
    width: 20px;
    height: 20px;
    margin: 12px
}

.pswp__preloader--active {
    opacity: 1
}

.pswp--css_animation .pswp__preloader--active {
    opacity: 1
}

.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {
    animation: clockwise .5s linear infinite
}

.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {
    animation: donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite
}

.pswp--css_animation .pswp__preloader__icn {
    background: none;
    opacity: .75;
    width: 14px;
    height: 14px;
    position: absolute;
    left: 15px;
    top: 15px;
    margin: 0
}

.pswp--css_animation .pswp__preloader__cut {
    position: relative;
    width: 7px;
    height: 14px;
    overflow: hidden
}

.pswp--css_animation .pswp__preloader__donut {
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    border: 2px solid #fff;
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    margin: 0
}

@media screen and (max-width: 1024px) {
    .pswp__preloader {
        position:relative;
        left: auto;
        top: auto;
        margin: 0;
        float: right
    }
}

@keyframes clockwise {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

@keyframes donut-rotate {
    0% {
        transform: rotate(0)
    }

    50% {
        transform: rotate(-140deg)
    }

    to {
        transform: rotate(0)
    }
}

.pswp__ui {
    -webkit-font-smoothing: auto;
    visibility: visible;
    opacity: 1;
    z-index: 1550
}

.pswp__top-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%
}

.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right,.pswp__caption,.pswp__top-bar {
    -webkit-backface-visibility: hidden;
    will-change: opacity;
    transition: opacity 333ms cubic-bezier(.4,0,.22,1)
}

.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right {
    visibility: visible
}

.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__top-bar {
    opacity: .001
}

.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter {
    display: none
}

.pswp__element--disabled {
    display: none!important
}

.pswp--minimal--dark .pswp__top-bar {
    background: none
}
`;
