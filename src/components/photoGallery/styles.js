import colors from "../../styles/colors";
import { rgba } from "../../utils/color";

export default `
  .pswp__bg {
    background: ${colors.bgPrimary};
  }

  .pswp__button {
    opacity: 1;
  }

  .pswp__button--close {
    background-color: transparent;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232px%22%20height%3D%2232px%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23d3d3d3%22%20d%3D%22M17.6%2C16L31.7%2C1.9c0.4-0.4%2C0.4-1.2%2C0-1.6c-0.4-0.4-1.1-0.4-1.6%2C0L16%2C14.4L1.9%2C0.3c-0.4-0.4-1.2-0.4-1.6%2C0c-0.4%2C0.4-0.4%2C1.2%2C0%2C1.6L14.4%2C16L0.3%2C30.1c-0.4%2C0.4-0.4%2C1.2%2C0%2C1.6c0.4%2C0.4%2C1.2%2C0.4%2C1.6%2C0L16%2C17.6l14.1%2C14.1c0.4%2C0.4%2C1.2%2C0.4%2C1.6%2C0c0.4-0.4%2C0.4-1.1%2C0-1.6L17.6%2C16z%22%20%2F%3E%3C%2Fsvg%3E') !important;
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
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2221px%22%20height%3D%2236px%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2021%2036%22%3E%3Cpath%20fill%3D%22%23d3d3d3%22%20d%3D%22M20.6%2C33.6L3.6%2C18l17-15.6c0.6-0.6%2C0.6-1.5%2C0-2c-0.6-0.6-1.5-0.6-2%2C0L0.6%2C16.8c-0.1%2C0-0.2%2C0-0.2%2C0.1C0.1%2C17.2%2C0%2C17.6%2C0%2C18c0%2C0.4%2C0.1%2C0.8%2C0.4%2C1.1c0.1%2C0.1%2C0.2%2C0%2C0.2%2C0.1l17.9%2C16.4c0.6%2C0.6%2C1.5%2C0.6%2C2%2C0C21.1%2C35%2C21.1%2C34.1%2C20.6%2C33.6z%22%20%2F%3E%3C%2Fsvg%3E') !important;
  }

  .pswp__button--arrow--right:before {
    right: 0;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2221px%22%20height%3D%2236px%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2021%2036%22%3E%3Cpath%20fill%3D%22%23d3d3d3%22%20d%3D%22M20.6%2C16.9c-0.1-0.1-0.2%2C0-0.2-0.1L2.4%2C0.4c-0.6-0.6-1.5-0.6-2%2C0c-0.6%2C0.6-0.6%2C1.5%2C0%2C2l17%2C15.6l-17%2C15.6c-0.6%2C0.6-0.6%2C1.5%2C0%2C2c0.6%2C0.6%2C1.5%2C0.6%2C2%2C0l17.9-16.4c0.1%2C0%2C0.2%2C0%2C0.2-0.1c0.3-0.3%2C0.4-0.7%2C0.4-1.1C21%2C17.6%2C20.9%2C17.2%2C20.6%2C16.9z%22%20%2F%3E%3C%2Fsvg%3E') !important;
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
