const { conventionalTypes, conventionalRubyTypes } = require('../src');

describe('types', () => {
  it('conventionalTypes', () => {
    expect(conventionalTypes).toStrictEqual([
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
    expect(conventionalRubyTypes).toStrictEqual([
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
