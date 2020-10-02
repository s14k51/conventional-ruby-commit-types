const { typesInfo, noWIPTypesInfo } = require('../src');

describe('typesInfo', () => {
  it('typesInfo', () => {
    expect(typesInfo).toStrictEqual({
      feat: {
        description: 'A new feature',
        title: 'Features',
      },
      fix: {
        description: 'A bug fix',
        title: 'Bug Fixes',
      },
      refactor: {
        description: 'A code change that improves readability/style',
        title: 'Code Refactoring',
      },
      perf: {
        description: 'A code change that improves performance',
        title: 'Performance Improvements',
      },
      test: {
        description: 'A code change that adds/updates tests',
        title: 'Tests',
      },
      docs: {
        description: 'Documentation only changes',
        title: 'Documentation',
      },
      chore: {
        description: "Other changes that don't modify src/test/docs files",
        title: 'Chores',
      },
      wip: {
        description: 'A code change that is still work-in-progress',
        title: 'WIP',
      },
    });
  });

  it('noWIPTypesInfo', () => {
    expect(noWIPTypesInfo).toStrictEqual({
      feat: {
        description: 'A new feature',
        title: 'Features',
      },
      fix: {
        description: 'A bug fix',
        title: 'Bug Fixes',
      },
      refactor: {
        description: 'A code change that improves readability/style',
        title: 'Code Refactoring',
      },
      perf: {
        description: 'A code change that improves performance',
        title: 'Performance Improvements',
      },
      test: {
        description: 'A code change that adds/updates tests',
        title: 'Tests',
      },
      docs: {
        description: 'Documentation only changes',
        title: 'Documentation',
      },
      chore: {
        description: "Other changes that don't modify src/test/docs files",
        title: 'Chores',
      },
    });
  });
});
