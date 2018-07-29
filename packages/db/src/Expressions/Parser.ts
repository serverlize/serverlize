import nearley from 'nearley';

export default class Parser {
  grammar: nearley.CompiledRules;
  parser: nearley.Parser;

  constructor(grammar: nearley.CompiledRules, parser?: nearley.Parser) {
    this.grammar = grammar;
    this.parser =
      parser || new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  }

  parse(string: string) {
    this.parser.feed(string);

    return Promise.resolve(this.parser.results);
  }
}
