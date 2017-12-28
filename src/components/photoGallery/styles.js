import colors from "../../styles/colors";
import { rgba } from "../../utils/color";

export default `
  .pswp__bg {
    background-color: ${colors.bgPrimary};
  }

  .pswp__button--close {
    background-image: url(https://assets.lonelyplanet.com/javascripts/icon-image-gallery-close.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    height: 16px;
    margin-right: 8px;
    margin-top: 8px;
    padding: 22px;
    width: 16px;
    float: right;
  }

  @media (min-width: 45em) {
    .pswp__button--close {
      background-size: 32px 32px;
      height: 32px;
      padding: 44px;
      margin-right: 16px;
      width: 32px;
    }
  }

  .pswp__button--arrow--left,
  .pswp__button--arrow--right {
    height: 36px;
    width: 21px;
    padding: 44px;
  }

  .pswp__button--arrow--left {
    left: 16px;
  }

  .pswp__button--arrow--right {
    right: 16px;
  }

  .pswp__button--arrow--left:before,
  .pswp__button--arrow--right:before {
    background-color: transparent;
    top: 0;
    height: 36px;
    width: 21px;
    padding: 44px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 21px 36px;
  }

  .pswp__button--arrow--left:before {
    left: 0;
    background-image: url(https://assets.lonelyplanet.com/javascripts/icon-image-gallery-prev.svg);
  }

  .pswp__button--arrow--right:before {
    right: 0;
    background-image: url(https://assets.lonelyplanet.com/javascripts/icon-image-gallery-next.svg);
  }

  .pswp__caption small {
    font-size: 12px;
    color: ${colors.accentGray};
  }

  .pswp__caption__center {
    text-align: center;
    max-width: 420px;
    font-size: 12px;
    padding: 20px;
    line-height: ${(20 / 12)};
    color: ${rgba(colors.textPrimary, 0.8)};
    letter-spacing: -.2px;
  }

  @media (min-width: 45em) {
    .pswp__caption__center {
      font-size: 14px;
      line-height: ${(22 / 14)};
    }
  }

  .pswp__caption__center a {
    color: ${rgba(colors.textPrimary, 0.8)};
    text-decoration: underline;
  }

  .pswp__top-bar {
    height: 0;
  }

  .pswp__ui--fit .pswp__top-bar,
  .pswp__ui--fit .pswp__caption {
    background-color: transparent;
  }
`;
