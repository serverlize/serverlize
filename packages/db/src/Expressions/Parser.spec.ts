import find from 'lodash.find';

import Parser from './Parser';
import * as Grammar from './Grammars';

describe('Parser', () => {
  let parser: Parser | null;

  beforeEach(() => {
    parser = new Parser(Grammar);
  });

  afterEach(() => {
    parser = null;
  });

  it('can parse `Price > 500`', async () => {
    const [result] = await parser.parse('Price > 500');

    expect(result.type).toEqual('condition');
    expect(result.value).toHaveLength(5);
  });

  it('can parse `f BETWEEN 0 AND 9`', async () => {
    const [result] = await parser.parse('f BETWEEN 0 AND 9');

    expect(result.type).toEqual('condition');
    expect(result.value).toHaveLength(9);
  });

  it('can parse `attribute_exists(Pictures.SideView)`', async () => {
    const [[result]] = await parser.parse(
      'attribute_exists(Pictures.SideView)'
    );

    expect(result.type).toEqual('function');
    expect(result.value).toHaveLength(5);
  });

  it('can parse `attribute_not_exists(Manufacturer)`', async () => {
    const [[result]] = await parser.parse('attribute_not_exists(Manufacturer)');

    expect(result.type).toEqual('function');
    expect(result.value).toHaveLength(5);
  });

  it('can parse `attribute_type(ProductReviews.FiveStar, S)`', async () => {
    const [[result]] = await parser.parse(
      'attribute_type(ProductReviews.FiveStar, S)'
    );

    expect(result.type).toEqual('function');
    expect(result.value).toHaveLength(8);
  });

  it('can parse `begins_with (Pictures.FrontView, http)`', async () => {
    const [[result]] = await parser.parse(
      'begins_with (Pictures.FrontView, http)'
    );

    expect(result.type).toEqual('function');
    expect(result.value).toHaveLength(8);
  });

  it('can parse `contains(Brand, Company)`', async () => {
    const [[result]] = await parser.parse('contains(Brand, Company)');

    expect(result.type).toEqual('function');
    expect(result.value).toHaveLength(8);
  });

  it('can parse `size(Brand) <= 20`', async () => {
    const [result] = await parser.parse('size(Brand) <= 20');

    expect(result.type).toEqual('condition');
    expect(result.value).toHaveLength(5);

    const [func, , comp, , value] = result.value;

    expect(func).toHaveProperty('type', 'function');
    expect(comp).toHaveProperty('type', 'comparator');
    expect(value).toHaveProperty('type', 'opValue');
  });

  it('can parse `Product.Category IN (Sports, Gardening)`', async () => {
    const [result] = await parser.parse(
      'Product.Category IN (Sports, Gardening)'
    );

    expect(result.type).toEqual('condition');
    expect(result.value).toHaveLength(7);

    const parameters = find(result.value, { type: 'opValues' })!;
    expect(parameters).toBeDefined();
    expect(parameters.value).toHaveLength(2);

    parameters.value.map((opValue) => {
      expect(opValue.type).toEqual('opValue');
    });
  });
});
