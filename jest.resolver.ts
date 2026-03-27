module.exports = (path, options) => {
  // Strip ?react from SVG imports
  const pathWithoutQuery = path.replace(/\.svg\?react$/, '.svg');

  return options.defaultResolver(pathWithoutQuery, options);
};
