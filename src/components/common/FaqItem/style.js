import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  .faq {
    border-bottom: 2px solid var(--border);
    // border-bottom: 2px solid ${props => props.theme.color.black.lighter};
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

    // THIS IS THE ARROW
    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-left: 2px solid var(--text);
      border-bottom: 2px solid var(--text);
      position: absolute;
      top: 26px;
      right: 26px;
      transform: rotate(-45deg);
      transition: transform 0.3s ease-in-out;

      @media (min-width: ${props => props.theme.screen.sm}) {
        top: 32px;
        right: 32px;
      }
    }

    &.active {
      &::after {
        transform: rotate(135deg);
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
