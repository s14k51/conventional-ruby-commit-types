const typesInfo = require('./typesInfo.json');
const { omitWIP } = require('./utils');

const types = Object.keys(typesInfo);

module.exports = {
  typesInfo,
  types,
  noWIPTypesInfo: omitWIP(typesInfo),
  noWIPTypes: omitWIP(types),
};
