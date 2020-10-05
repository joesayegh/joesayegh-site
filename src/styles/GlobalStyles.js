import { createGlobalStyle } from 'styled-components';

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

const GlobalStyles = createGlobalStyle`
  ${normalize};

  html {

    // CSS VARIABLES

    // FONTS
    --sans: system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif;

    // FONT SIZES
    --fs-body: 1.8rem;
    --fs-small: 1.6rem;
    --fs-smaller: 1.4rem;

    // LINE HEIGHTS
    --lh-body: 1.44em;
    --lh-title: 1.2em;

    // COLORS
    --accent: #e74832;
    --text: rgba( 0, 0, 0, 1 );
    --text-light: rgba( 0, 0, 0, .6 );
    --text-lightest: rgba( 0, 0, 0, .3 );
    --border-dark: rgba( 0, 0, 0, .2 );
    --border: rgba( 0, 0, 0, .125 );
    --bg-light: rgba( 0, 0, 0, .05 );
    // PURE WHITE
    --bg: rgba( 255, 255, 255, 1 );
    // IVORY
    // --bg: rgba( 255, 255, 240, 1 );

    // DARK MODE COLORS
    @media ( prefers-color-scheme: dark ) {
      --text: rgba( 255, 255, 255, 1 );
      --text-light: rgba( 255, 255, 255, .5 );
      --text-lightest: rgba( 255, 255, 255, .25 );
      --border-dark: rgba( 255, 255, 255, .3 );
      --border: rgba( 255, 255, 255, .15 );
      --bg-light: rgba( 255, 255, 255, .1 );
      --bg: rgba( 0, 0, 0, 1 );
    }

  }

  body {
    font-family: ${props => props.theme.font.primary};
  }

  // Mobile Safari - Fixes the blinking effect when a link has been hit
  body * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *,
  *:before,
  *:after {
      -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
    box-sizing: inherit;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
  }

  ::selection {
    background: var(--text);
    color: var(--bg);
  }

  h1, h2, h3, p {
    margin: 0;
    font-weight: normal;
  }

  h1, h2 {
    font-family: ${props => props.theme.font.primary};
  }

  h1 {
    ${props => props.theme.font_size.larger};
  }

  h2 {
    ${props => props.theme.font_size.large};
  }

  h3 {
    ${props => props.theme.font_size.regular};
  }

  p {
    ${props => props.theme.font_size.small};
    color: var(--text);
    // color: ${props => props.theme.color.black.light};
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    h1 {
      ${props => props.theme.font_size.xlarge};
    }

    h2 {
      ${props => props.theme.font_size.larger};
    }

    h3 {
      ${props => props.theme.font_size.large};
    }

    p {
      ${props => props.theme.font_size.regular};
    }
  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }
`;

export default GlobalStyles;
