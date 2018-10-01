import ParameterBag from './ParameterBag';

interface Config {
  bar: string;
  foo: string;
}

describe('ParameterBag', () => {
  let config: ParameterBag<Config>;

  beforeEach(() => {
    config = new ParameterBag<Config>({
      bar: 'baz',
      foo: 'bar',
    });
  });

  it('creates a new ParameterBag class', () => {
    expect(config).toBeInstanceOf(ParameterBag);
  });

  it('checks for parameter existence', () => {
    expect(config.has('foo')).toEqual(true);
    expect(config.has('baz')).toEqual(false);
  });

  it('gets parameters', () => {
    expect(config.get('foo')).toEqual('bar');
    expect(config.get('bar')).toEqual('baz');
  });

  it('returns all parameters', () => {
    expect(config.all()).toEqual({
      bar: 'baz',
      foo: 'bar',
    });
  });
});
