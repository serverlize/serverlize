import deploy from './deploy';

describe('Deploy', () => {
  it('wraps a Lambda function properly', () => {
    expect(deploy('app')).toHaveBeenCalled();
  });
});
