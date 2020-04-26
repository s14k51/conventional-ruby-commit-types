const { types } = require('conventional-commit-types');

const { convTypesInfo, typesInfo } = require('../src');

describe('typesInfo', () => {
  it('conventionalTypesInfo', () => {
    expect(convTypesInfo).toStrictEqual(types);
  });

  it('conventionalRubyTypesInfo', () => {
    expect(typesInfo).toStrictEqual({
      ...types,
      wip: {
        description: "A 'wip' type. Use this ONLY if you plan to cherry-pick its changes later into your working branch",
        title: 'WIP',
      },
    });
  });
});
