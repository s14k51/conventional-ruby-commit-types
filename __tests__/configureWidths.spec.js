const { configureWidths } = require('../src');

describe('configureWidths', () => {
  it('default widths', () => {
    expect(configureWidths()).toStrictEqual({
      maxHeaderWidth: 50,
      maxLineWidth: 72,
    });

    expect(configureWidths({})).toStrictEqual({
      maxHeaderWidth: 50,
      maxLineWidth: 72,
    });
  });

  it('custom widths', () => {
    expect(configureWidths({
      maxHeaderWidth: 100,
      maxLineWidth: 100,
    })).toStrictEqual({
      maxHeaderWidth: 100,
      maxLineWidth: 100,
    });
  });
});
