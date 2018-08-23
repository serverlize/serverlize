import ParameterBag from './ParameterBag';

describe('ParameterBag', () => {
  let config: ParameterBag;

  beforeEach(() => {
    config = new ParameterBag({
      bar: 'baz',
      foo: 'bar',
    });
  });

  it('creates a new ParameterBag class', () => {
    expect(config).toBeInstanceOf(ParameterBag);
  });

  it('checks if parameter exists', () => {
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
