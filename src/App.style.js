import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
/* FONTS */
@font-face {
  font-family: 'Roboto';
  font-weight: 400;
  src: url('./assets/fonts/roboto-v30-latin-regular.woff2') format('woff2'),
       url('./assets/fonts/roboto-v30-latin-regular.woff') format('woff');
}
/* red-hat-display-500 - latin */
@font-face {
	font-family: 'Red Hat Display';
	font-style: normal;
	font-weight: 500;
	src:url('./assets/fonts/red-hat-display-v14-latin-500.woff2') format('woff2'),
			url('./assets/fonts/red-hat-display-v14-latin-500.woff') format('woff');
}

/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/poppins-v20-latin-regular.woff2') format('woff2'),
       url('./assets/fonts/poppins-v20-latin-regular.woff') format('woff');
}
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('./assets/fonts/poppins-v20-latin-500.woff2') format('woff2'),
       url('./assets/fonts/poppins-v20-latin-500.woff') format('woff');
}
/* GENERAL */
* {
	box-sizing: border-box;
}

/* *:focus {
	outline: 2px dashed blue;
	outline-offset: 3px;
} */

html {
	height: 100%;
}

img {
	display: block;
	height: auto;
}

body {
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 0;
	padding: 0;
	font-family:"Poppins", "Arial", sans-serif;
	font-weight: 400;
	overflow-x: hidden;
}

/* VISUALLY-HIDDEN */

.visually-hidden {
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	border: 0;
	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
}

/* CONTAINER */

.container {
	width: 100%;
  max-width: 1240px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 20px;
	padding-left: 20px;
}

/* STICKY-FOOTER */

.site-main {
	flex-grow: 1;
}


`;
