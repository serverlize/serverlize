import cosmiconfig from 'cosmiconfig';

import CosmiConfigAdapter from './CosmiConfigAdapter';

// Maybe use an interface for the `Explorer` class from `cosmiconfig`

jest.mock('cosmiconfig');

describe('CosmiConfigAdapter', () => {
  let adapter: CosmiConfigAdapter;

  beforeEach(() => {
    adapter = new CosmiConfigAdapter(cosmiconfig('serverlize'));
  });

  it('creates a new CosmiConfigAdapter class', () => {
    expect(adapter).toBeInstanceOf(CosmiConfigAdapter);
  });
});
