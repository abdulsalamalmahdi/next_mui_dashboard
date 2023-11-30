const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');
const isDev = process.env.NODE_ENV !== "production";

// module.exports = withPlugins([
  
//   [
//     withImages, 
//     {
//     assetPrefix: isDev ? "": "/next_mui_dashboard/"
// }
// ],
//   ,{
//   reactStrictMode: true,
//   output:"export",
//   basePath: process.env.NODE_ENV === 'production' ? "/next_mui_dashboard" : undefined,

//   assetPrefix: process.env.NODE_ENV === 'production' ? '/next_mui_dashboard/':null, // assetPrefix requires the trailing slash
//   images:{
//     unoptimized: true,
//   }, 

//   // fastRefresh: true,
//   // productionBrowserSourceMaps: false, // Disable source maps in development
//   // optimizeFonts: false, // Disable font optimization
//   // minify: false, // Disable minification
// }]
// )


// const defaultConfig = {};

// module.exports =(_phase, {defaultConfig})=>{
//   const plugins = [withImages]
//   return plugins.reduce((acc,plugin)=> plugin(acc), {...defaultConfig, ...nextConfig })
// }


module.exports = async (phase) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    output:"export",
    basePath: process.env.NODE_ENV === 'production' ? "/next_mui_dashboard" : undefined,
  
    assetPrefix: process.env.NODE_ENV === 'production' ? '/next_mui_dashboard':null, // assetPrefix requires the trailing slash
    images:{
      unoptimized: true,
    }, 
  }

  const defaultConfig = {}
  return withPlugins([], nextConfig)(phase, { defaultConfig });
  // return withPlugins([], nextConfig)(phase, { undefined }); // also works
};
