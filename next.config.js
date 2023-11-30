module.exports = {
  reactStrictMode: true,
  output:"export",
  basePath: process.env.NODE_ENV === 'production' ? "" : undefined,
  images:{
    unoptimized: true,
  }, 
  
  // fastRefresh: true,
  // productionBrowserSourceMaps: false, // Disable source maps in development
  // optimizeFonts: false, // Disable font optimization
  // minify: false, // Disable minification
};
