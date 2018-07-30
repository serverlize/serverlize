// Generated automatically by nearley, version 2.15.0
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any {
  return d[0];
}

export interface Token {
  value: any;
  [key: string]: any;
}

export interface Lexer {
  reset: (chunk: string, info: any) => void;
  next: () => Token | undefined;
  save: () => any;
  formatError: (token: Token) => string;
  has: (tokenType: string) => boolean;
}

export interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
}

export type NearleySymbol =
  | string
  | { literal: any }
  | { test: (token: any) => boolean };

export var Lexer: Lexer | undefined = undefined;

export var ParserRules: NearleyRule[] = [
  { name: 'string$ebnf$1', symbols: [/[a-zA-Z]/] },
  {
    name: 'string$ebnf$1',
    symbols: ['string$ebnf$1', /[a-zA-Z]/],
    postprocess: (d) => d[0].concat([d[1]]),
  },
  {
    name: 'string',
    symbols: ['string$ebnf$1'],
    postprocess: (d) => ({ type: 'string', value: d[0].join('') }),
  },
  { name: 'number$ebnf$1', symbols: [/[0-9]/] },
  {
    name: 'number$ebnf$1',
    symbols: ['number$ebnf$1', /[0-9]/],
    postprocess: (d) => d[0].concat([d[1]]),
  },
  {
    name: 'number',
    symbols: ['number$ebnf$1'],
    postprocess: (d) => ({ type: 'number', value: d[0].join('') }),
  },
  {
    name: 'boolean',
    symbols: [/[true|false]/],
    postprocess: (d) => ({ type: 'boolean', value: d[0].join('') }),
  },
  {
    name: '_',
    symbols: [{ literal: ' ' }],
    postprocess: (d) => ({ type: 'whitespace', value: d[0] }),
  },
  {
    name: 'attribute',
    symbols: [{ literal: 'S' }],
    postprocess: (d) => ({ type: 'attribute', value: d[0] }),
  },
  {
    name: 'attribute$string$1',
    symbols: [{ literal: 'S' }, { literal: 'S' }],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'attribute',
    symbols: ['attribute$string$1'],
    postprocess: (d) => ({ type: 'attribute', value: d[0] }),
  },
  {
    name: 'attribute',
    symbols: [{ literal: 'N' }],
    postprocess: (d) => ({ type: 'attribute', value: d[0] }),
  },
  {
    name: 'attribute$string$2',
    symbols: [{ literal: 'N' }, { literal: 'S' }],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'attribute',
    symbols: ['attribute$string$2'],
    postprocess: (d) => ({ type: 'attribute', value: d[0] }),
  },
  {
    name: 'attribute',
    symbols: [{ literal: 'B' }],
    postprocess: (d) => ({ type: 'attribute', value: d[0] }),
  },
  {
    name: 'attribute$string$3',
    symbols: [{ literal: 'B' }, { literal: 'S' }],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'attribute',
    symbols: ['attribute$string$3'],
    postprocess: (d) => ({ type: 'attribute', value: d[0] }),
  },
  {
    name: 'attribute$string$4',
    symbols: [
      { literal: 'B' },
      { literal: 'O' },
      { literal: 'O' },
      { literal: 'L' },
    ],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'attribute',
    symbols: ['attribute$string$4'],
    postprocess: (d) => ({ type: 'attribute', value: d[0] }),
  },
  {
    name: 'attribute$string$5',
    symbols: [
      { literal: 'N' },
      { literal: 'U' },
      { literal: 'L' },
      { literal: 'L' },
    ],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'attribute',
    symbols: ['attribute$string$5'],
    postprocess: (d) => ({ type: 'attribute', value: d[0] }),
  },
  {
    name: 'attribute',
    symbols: [{ literal: 'L' }],
    postprocess: (d) => ({ type: 'attribute', value: d[0] }),
  },
  {
    name: 'attribute',
    symbols: [{ literal: 'M' }],
    postprocess: (d) => ({ type: 'attribute', value: d[0] }),
  },
  {
    name: 'comparator',
    symbols: [{ literal: '=' }],
    postprocess: (d) => ({ type: 'comparator', value: d[0] }),
  },
  {
    name: 'comparator$string$1',
    symbols: [{ literal: '<' }, { literal: '>' }],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'comparator',
    symbols: ['comparator$string$1'],
    postprocess: (d) => ({ type: 'comparator', value: d[0] }),
  },
  {
    name: 'comparator',
    symbols: [{ literal: '<' }],
    postprocess: (d) => ({ type: 'comparator', value: d[0] }),
  },
  {
    name: 'comparator$string$2',
    symbols: [{ literal: '<' }, { literal: '=' }],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'comparator',
    symbols: ['comparator$string$2'],
    postprocess: (d) => ({ type: 'comparator', value: d[0] }),
  },
  {
    name: 'comparator',
    symbols: [{ literal: '>' }],
    postprocess: (d) => ({ type: 'comparator', value: d[0] }),
  },
  {
    name: 'comparator$string$3',
    symbols: [{ literal: '>' }, { literal: '=' }],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'comparator',
    symbols: ['comparator$string$3'],
    postprocess: (d) => ({ type: 'comparator', value: d[0] }),
  },
  {
    name: 'boolBetween$string$1',
    symbols: [
      { literal: 'B' },
      { literal: 'E' },
      { literal: 'T' },
      { literal: 'W' },
      { literal: 'E' },
      { literal: 'E' },
      { literal: 'N' },
    ],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'boolBetween',
    symbols: ['boolBetween$string$1'],
    postprocess: (d) => ({ type: 'boolBetween', value: d[0] }),
  },
  {
    name: 'boolAnd$string$1',
    symbols: [{ literal: 'A' }, { literal: 'N' }, { literal: 'D' }],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'boolAnd',
    symbols: ['boolAnd$string$1'],
    postprocess: (d) => ({ type: 'boolAnd', value: d[0] }),
  },
  {
    name: 'boolOr$string$1',
    symbols: [{ literal: 'O' }, { literal: 'R' }],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'boolOr',
    symbols: ['boolOr$string$1'],
    postprocess: (d) => ({ type: 'boolOr', value: d[0] }),
  },
  {
    name: 'boolNot$string$1',
    symbols: [{ literal: 'N' }, { literal: 'O' }, { literal: 'T' }],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'boolNot',
    symbols: ['boolNot$string$1'],
    postprocess: (d) => ({ type: 'boolNot', value: d[0] }),
  },
  {
    name: 'boolIn$string$1',
    symbols: [{ literal: 'I' }, { literal: 'N' }],
    postprocess: (d) => d.join(''),
  },
  {
    name: 'boolIn',
    symbols: ['boolIn$string$1'],
    postprocess: (d) => ({ type: 'boolIn', value: d[0] }),
  },
  { name: 'opValues$ebnf$1', symbols: [] },
  {
    name: 'opValues$ebnf$1',
    symbols: ['opValues$ebnf$1', 'extraOpValue'],
    postprocess: (d) => d[0].concat([d[1]]),
  },
  {
    name: 'opValues',
    symbols: ['opValue', 'opValues$ebnf$1'],
    postprocess: (d) => ({ type: 'opValues', value: [d[0]].concat(d[1]) }),
  },
  {
    name: 'extraOpValue$subexpression$1$ebnf$1',
    symbols: ['_'],
    postprocess: id,
  },
  {
    name: 'extraOpValue$subexpression$1$ebnf$1',
    symbols: [],
    postprocess: () => null,
  },
  {
    name: 'extraOpValue$subexpression$1',
    symbols: [
      { literal: ',' },
      'extraOpValue$subexpression$1$ebnf$1',
      'opValue',
    ],
  },
  {
    name: 'extraOpValue',
    symbols: ['extraOpValue$subexpression$1'],
    postprocess: (d) => {
      return d[0][2];
    },
  },
  {
    name: 'path',
    symbols: ['opKey'],
    postprocess: (d) => ({ type: 'parameter', value: d }),
  },
  {
    name: 'type',
    symbols: ['attribute'],
    postprocess: (d) => ({ type: 'parameter', value: d }),
  },
  {
    name: 'substr',
    symbols: ['opValue'],
    postprocess: (d) => ({ type: 'parameter', value: d }),
  },
  {
    name: 'operand',
    symbols: ['opValue'],
    postprocess: (d) => ({ type: 'parameter', value: d }),
  },
  {
    name: 'opKey',
    symbols: ['string', { literal: '.' }, 'string'],
    postprocess: (d) => ({ type: 'opKey', value: d }),
  },
  {
    name: 'opKey',
    symbols: ['string'],
    postprocess: (d) => ({ type: 'opKey', value: d[0] }),
  },
  {
    name: 'opValue',
    symbols: ['string'],
    postprocess: (d) => ({ type: 'opValue', value: d[0] }),
  },
  {
    name: 'opValue',
    symbols: ['number'],
    postprocess: (d) => ({ type: 'opValue', value: d[0] }),
  },
  {
    name: 'opValue',
    symbols: ['boolean'],
    postprocess: (d) => ({ type: 'opValue', value: d[0] }),
  },
  {
    name: 'condition',
    symbols: ['opKey', '_', 'comparator', '_', 'opValue'],
    postprocess: (d) => ({ type: 'condition', value: d }),
  },
  {
    name: 'condition',
    symbols: [
      'opKey',
      '_',
      'boolBetween',
      '_',
      'opValue',
      '_',
      'boolAnd',
      '_',
      'opValue',
    ],
    postprocess: (d) => ({ type: 'condition', value: d }),
  },
  {
    name: 'condition',
    symbols: ['condition', '_', 'boolAnd', '_', 'condition'],
    postprocess: (d) => ({ type: 'condition', value: d }),
  },
  {
    name: 'condition',
    symbols: ['condition', '_', 'boolOr', '_', 'condition'],
    postprocess: (d) => ({ type: 'condition', value: d }),
  },
  {
    name: 'condition',
    symbols: [
      'opKey',
      '_',
      'boolIn',
      '_',
      { literal: '(' },
      'opValues',
      { literal: ')' },
    ],
    postprocess: (d) => ({ type: 'condition', value: d }),
  },
  { name: 'condition', symbols: ['function'] },
  {
    name: 'condition',
    symbols: ['boolNot', '_', 'condition'],
    postprocess: (d) => ({ type: 'condition', value: d }),
  },
  {
    name: 'condition',
    symbols: [{ literal: '(' }, 'condition', { literal: ')' }],
    postprocess: (d) => ({ type: 'condition', value: d }),
  },
  {
    name: 'function$string$1',
    symbols: [
      { literal: 'a' },
      { literal: 't' },
      { literal: 't' },
      { literal: 'r' },
      { literal: 'i' },
      { literal: 'b' },
      { literal: 'u' },
      { literal: 't' },
      { literal: 'e' },
      { literal: '_' },
      { literal: 'e' },
      { literal: 'x' },
      { literal: 'i' },
      { literal: 's' },
      { literal: 't' },
      { literal: 's' },
    ],
    postprocess: (d) => d.join(''),
  },
  { name: 'function$ebnf$1', symbols: ['_'], postprocess: id },
  { name: 'function$ebnf$1', symbols: [], postprocess: () => null },
  {
    name: 'function',
    symbols: [
      'function$string$1',
      'function$ebnf$1',
      { literal: '(' },
      'path',
      { literal: ')' },
    ],
    postprocess: (d) => ({ type: 'function', value: d }),
  },
  {
    name: 'function$string$2',
    symbols: [
      { literal: 'a' },
      { literal: 't' },
      { literal: 't' },
      { literal: 'r' },
      { literal: 'i' },
      { literal: 'b' },
      { literal: 'u' },
      { literal: 't' },
      { literal: 'e' },
      { literal: '_' },
      { literal: 'n' },
      { literal: 'o' },
      { literal: 't' },
      { literal: '_' },
      { literal: 'e' },
      { literal: 'x' },
      { literal: 'i' },
      { literal: 's' },
      { literal: 't' },
      { literal: 's' },
    ],
    postprocess: (d) => d.join(''),
  },
  { name: 'function$ebnf$2', symbols: ['_'], postprocess: id },
  { name: 'function$ebnf$2', symbols: [], postprocess: () => null },
  {
    name: 'function',
    symbols: [
      'function$string$2',
      'function$ebnf$2',
      { literal: '(' },
      'path',
      { literal: ')' },
    ],
    postprocess: (d) => ({ type: 'function', value: d }),
  },
  {
    name: 'function$string$3',
    symbols: [
      { literal: 'a' },
      { literal: 't' },
      { literal: 't' },
      { literal: 'r' },
      { literal: 'i' },
      { literal: 'b' },
      { literal: 'u' },
      { literal: 't' },
      { literal: 'e' },
      { literal: '_' },
      { literal: 't' },
      { literal: 'y' },
      { literal: 'p' },
      { literal: 'e' },
    ],
    postprocess: (d) => d.join(''),
  },
  { name: 'function$ebnf$3', symbols: ['_'], postprocess: id },
  { name: 'function$ebnf$3', symbols: [], postprocess: () => null },
  { name: 'function$ebnf$4', symbols: ['_'], postprocess: id },
  { name: 'function$ebnf$4', symbols: [], postprocess: () => null },
  {
    name: 'function',
    symbols: [
      'function$string$3',
      'function$ebnf$3',
      { literal: '(' },
      'path',
      { literal: ',' },
      'function$ebnf$4',
      'type',
      { literal: ')' },
    ],
    postprocess: (d) => ({ type: 'function', value: d }),
  },
  {
    name: 'function$string$4',
    symbols: [
      { literal: 'b' },
      { literal: 'e' },
      { literal: 'g' },
      { literal: 'i' },
      { literal: 'n' },
      { literal: 's' },
      { literal: '_' },
      { literal: 'w' },
      { literal: 'i' },
      { literal: 't' },
      { literal: 'h' },
    ],
    postprocess: (d) => d.join(''),
  },
  { name: 'function$ebnf$5', symbols: ['_'], postprocess: id },
  { name: 'function$ebnf$5', symbols: [], postprocess: () => null },
  { name: 'function$ebnf$6', symbols: ['_'], postprocess: id },
  { name: 'function$ebnf$6', symbols: [], postprocess: () => null },
  {
    name: 'function',
    symbols: [
      'function$string$4',
      'function$ebnf$5',
      { literal: '(' },
      'path',
      { literal: ',' },
      'function$ebnf$6',
      'substr',
      { literal: ')' },
    ],
    postprocess: (d) => ({ type: 'function', value: d }),
  },
  {
    name: 'function$string$5',
    symbols: [
      { literal: 'c' },
      { literal: 'o' },
      { literal: 'n' },
      { literal: 't' },
      { literal: 'a' },
      { literal: 'i' },
      { literal: 'n' },
      { literal: 's' },
    ],
    postprocess: (d) => d.join(''),
  },
  { name: 'function$ebnf$7', symbols: ['_'], postprocess: id },
  { name: 'function$ebnf$7', symbols: [], postprocess: () => null },
  { name: 'function$ebnf$8', symbols: ['_'], postprocess: id },
  { name: 'function$ebnf$8', symbols: [], postprocess: () => null },
  {
    name: 'function',
    symbols: [
      'function$string$5',
      'function$ebnf$7',
      { literal: '(' },
      'path',
      { literal: ',' },
      'function$ebnf$8',
      'operand',
      { literal: ')' },
    ],
    postprocess: (d) => ({ type: 'function', value: d }),
  },
  {
    name: 'function$string$6',
    symbols: [
      { literal: 's' },
      { literal: 'i' },
      { literal: 'z' },
      { literal: 'e' },
    ],
    postprocess: (d) => d.join(''),
  },
  { name: 'function$ebnf$9', symbols: ['_'], postprocess: id },
  { name: 'function$ebnf$9', symbols: [], postprocess: () => null },
  {
    name: 'function',
    symbols: [
      'function$string$6',
      'function$ebnf$9',
      { literal: '(' },
      'path',
      { literal: ')' },
    ],
    postprocess: (d) => ({ type: 'function', value: d }),
  },
];

export var ParserStart: string = 'condition';
