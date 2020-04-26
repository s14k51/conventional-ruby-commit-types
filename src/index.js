const { types: convTypesInfo } = require('conventional-commit-types');

const customTypesInfo = require('./customTypesInfo');

const typesInfo = {
  ...convTypesInfo,
  ...customTypesInfo,
};

module.exports.convTypesInfo = convTypesInfo;

module.exports.convTypes = Object.keys(convTypesInfo);

module.exports.typesInfo = typesInfo;

module.exports.types = Object.keys(typesInfo);

module.exports.configureWidths = function configureWidths(widths = {}) {
  const { maxHeaderWidth = 50, maxLineWidth = 72 } = widths;

  return {
    maxHeaderWidth,
    maxLineWidth,
  };
};
