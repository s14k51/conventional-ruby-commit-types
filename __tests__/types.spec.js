const { types, noWIPTypes } = require('../src');

describe('types', () => {
  it('types', () => {
    expect(types).toStrictEqual([
      'feat',
      'fix',
      'refactor',
      'perf',
      'test',
      'docs',
      'chore',
      'wip',
    ]);
  });

  it('noWIPTypes', () => {
    expect(noWIPTypes).toStrictEqual([
      'feat',
      'fix',
      'refactor',
      'perf',
      'test',
      'docs',
      'chore',
    ]);
  });
});
