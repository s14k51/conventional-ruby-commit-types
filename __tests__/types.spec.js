const { convTypes, types } = require('../src');

describe('types', () => {
  it('conventionalTypes', () => {
    expect(convTypes).toStrictEqual([
      'feat',
      'fix',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'build',
      'ci',
      'chore',
      'revert',
    ]);
  });

  it('conventionalRubyTypes', () => {
    expect(types).toStrictEqual([
      'feat',
      'fix',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'build',
      'ci',
      'chore',
      'revert',
      'wip',
    ]);
  });
});
