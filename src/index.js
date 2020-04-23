const { types: conventionalTypesInfo } = require('conventional-commit-types');

const customTypesInfo = require('./customTypesInfo');

const conventionalRubyTypesInfo = {
  ...conventionalTypesInfo,
  ...customTypesInfo,
};

module.exports.conventionalTypesInfo = conventionalTypesInfo;

module.exports.conventionalTypes = Object.keys(conventionalTypesInfo);

module.exports.conventionalRubyTypesInfo = conventionalRubyTypesInfo;

module.exports.conventionalRubyTypes = Object.keys(conventionalRubyTypesInfo);
