function omitWIP(collection) {
  if (Array.isArray(collection)) {
    return collection.filter((type) => type !== 'wip');
  }

  const { wip, ...result } = collection;

  return result;
}

module.exports = {
  omitWIP,
};
