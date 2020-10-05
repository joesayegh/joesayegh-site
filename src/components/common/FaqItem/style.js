import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  .faq {
    border-bottom: 2px solid var(--border);
  }

  .faq-title {
    border: none;
    background: none;
    padding: 0;
    outline: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    color: var(--text);
    font-size: 1rem;
    line-height: 1;
    padding: 24px;
    padding-right: 72px;
    padding-left: 0;
    position: relative;

    @media (min-width: ${props => props.theme.screen.sm}) {
      font-size: 1.2rem;
      line-height: 1;
    }

    // THIS IS THE ICON (ARROW OR PLUS)
    &::after {
      // ARROW
      // content: '';
      // display: block;
      // width: 10px;
      // height: 10px;
      // border-left: 2px solid var(--text);
      // border-bottom: 2px solid var(--text);
      // position: absolute;
      // top: 26px;
      // right: 26px;
      // transform: rotate(-45deg);
      // transition: transform 0.3s ease-in-out;

      // PLUS
      content: '+';
      font-size: 32px;
      font-weight: 200;
      display: block;
      position: absolute;
      top: 16px;
      right: 16px;
      transform-origin: center 57.5%;
      transition: transform 0.3s ease-in-out;
    }

    &.active {
      &::after {
        // ARROW
        // transform: rotate(135deg);

        // PLUS
        transform: rotate(-45deg);
      }
    }
  }

  .faq-content {
    padding: 0 0 32px 0;
    color: var(--text);
    font-size: 0.9rem;
    line-height: 1.4;

    @media (min-width: ${props => props.theme.screen.sm}) {
      font-size: 1rem;
      line-height: 1.4;
      padding: 0 72px 32px 0;
    }

    a {
      color: inherit;
    }
  }
`;
