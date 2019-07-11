import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const ChessFont = createGlobalStyle`
  @font-face {
    font-family: 'ChessMerida';
    src: url('./fonts/chessmerida-webfont.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 16px;
  margin: 0;
  padding: 0;
`;
// const ChessFont = createGlobalStyle`
//   @font-face {
//     font-family: 'ChessMerida';
//     src: url('./fonts/chessmerida-webfont.eot');
//     src: url('./fonts/chessmerida-webfont.woff') format('woff'), url('./fonts/chessmerida-webfont.ttf') format('truetype'), url('./fonts/chessmerida-webfont.svg') format('svg');
//     font-weight: normal;
//     font-style: normal;
//   }
//   font-size: 16px;
//   margin: 0;
//   padding: 0;
// `;

export default ChessFont;