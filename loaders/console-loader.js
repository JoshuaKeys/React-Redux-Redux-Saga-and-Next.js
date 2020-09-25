module.exports = function (source, map, meta) {
  const resourcePath = this.resourcePath.split('/');
  const fileName = resourcePath[resourcePath.length - 1];
  const updatedSource = `console.log('${fileName}'); \n\n ${source}`;
  return updatedSource;
};
