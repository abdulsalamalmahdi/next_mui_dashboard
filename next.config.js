module.exports = {
  reactStrictMode: true,
  output:"export",
  basePath: process.env.NODE_ENV === 'production' ? "/next_mui_dashboard" : undefined,

  assetPrefix: process.env.NODE_ENV === 'production' ? '/next_mui_dashboard/':null, // assetPrefix requires the trailing slash
  images:{
    unoptimized: true,
  }, 

  // fastRefresh: true,
  // productionBrowserSourceMaps: false, // Disable source maps in development
  // optimizeFonts: false, // Disable font optimization
  // minify: false, // Disable minification
};
