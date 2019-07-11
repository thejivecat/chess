import styled from 'styled-components';

const WhitePawn = styled.i`
  &&&&& {
    display: inline-block;
    font: normal normal normal 2.5rem 'ChessMerida';
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #f5f5f5;
    ::before {
      content: "♙";
    }
  }
`;

const WhiteKnight = styled.i`
  &&&&& {
    display: inline-block;
    font: normal normal normal 2.5rem 'ChessMerida';
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #f5f5f5;
    ::before {
      content: "♘";
    }
  }
`;

const WhiteBishop = styled.i`
  display: inline-block;
  font: normal normal normal 2.5rem 'ChessMerida';
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f5f5f5;
  ::before {
      content: "♗";
    }
`;

const WhiteRook = styled.i`
  display: inline-block;
  font: normal normal normal 2.5rem 'ChessMerida';
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f5f5f5;
  ::before {
      content: "♖";
    }
`;

const WhiteQueen = styled.i`
  display: inline-block;
  font: normal normal normal 2.5rem 'ChessMerida';
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f5f5f5;
  ::before {
      content: "♕";
    }
`;

const WhiteKing = styled.i`
  display: inline-block;
  font: normal normal normal 2.5rem 'ChessMerida';
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f5f5f5;
  ::before {
      content: "♔";
    }
`;

export default {
  WhitePawn,
  WhiteKnight,
  WhiteBishop,
  WhiteRook,
  WhiteQueen,
  WhiteKing
};

const All = styled.div`

.cm {
  display: inline-block;
  font: normal normal normal 14px/1 ChessMerida;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cm-rotate-180 {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);  /* IE6,IE7 */
  ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"; /* IE8 */
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

.cm-w-pawn:before {
  content: "p";
}

.cm-b-pawn:before {
  content: "o";
}


.cm-w-knight:before {
  content: "n";
}

.cm-b-knight:before {
  content: "m";
}

.cm-w-bishop:before {
  content: "b";
}

.cm-b-bishop:before {
  content: "v";
}

.cm-w-rook:before {
  content: "r";
}

.cm-b-rook:before {
  content: "t";
}

.cm-w-queen:before {
  content: "q";
}

.cm-b-queen:before {
  content: "w";
}

.cm-w-king:before {
  content: "k";
}

.cm-b-king:before {
  content: "l";
}

.cm-w-x:before {
  content: "x";
}

.cm-w-dot:before {
  content: ".";
}
`