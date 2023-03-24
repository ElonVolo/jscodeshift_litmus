module.exports = function transformer(fileInfo, api) {
  return api
    .jscodeshift(fileInfo.source)
    .find(api.jscodeshift.Identifier)
    .forEach(function (path) {
      if (path.value.name === "foo") {
        api.jscodeshift(path).replaceWith(api.jscodeshift.identifier("bar"));
      }
    })
    .toSource();
};
