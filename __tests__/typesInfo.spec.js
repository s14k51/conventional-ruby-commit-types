const { types: typesInfo } = require('conventional-commit-types');

const { conventionalTypesInfo, conventionalRubyTypesInfo } = require('../src');

describe('typesInfo', () => {
  it('conventionalTypesInfo', () => {
    expect(conventionalTypesInfo).toStrictEqual(typesInfo);
  });

  it('conventionalRubyTypesInfo', () => {
    expect(conventionalRubyTypesInfo).toStrictEqual({
      ...typesInfo,
      wip: {
        description: "A 'wip' type. Use this ONLY if you plan to cherry-pick its changes later into your working branch",
        title: 'WIP',
      },
    });
  });
});
