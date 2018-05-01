function getEnhancer() {
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      return devToolsExtension();
    }
  }
  return next => next;
}

export default getEnhancer();
