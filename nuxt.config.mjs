// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  // vite: {
  //   base: process.env.NUXT_APP_BASE_URL || '/',
  // },
  // nitro:{
  //   serveStatic:true,
  //   baseURL:process.env.NUXT_APP_BASE_URL,
  //   // buildDir:"nitroBuildDir",//cant override this either, so they're doing this wrong
  //   //nuxt 3 problem i think
  //   logLevel:3,
  //   // logLevel:1,
  //   // preset:"node-server",
  //   // output: {
  //   // //   dir: 'mydir',
  //   // // //   publicDir: '.output/something',
  //   //   publicDir: 'output/public'
  //   //   // //   serverDir:'.output/server',
  //   // },
  // },
  //https://github.com/TimonLukas/nuxt-prerender-baseurl-reproduction/blob/master/nuxt.config.ts
  // hooks: {
  //   "nitro:config"(config) {
  //     if (
  //       !config.prerender?.crawlLinks ||
  //       !Array.isArray(config.prerender?.routes)
  //     ) {
  //       return
  //     }
  //
  //     const routes = config.prerender.routes
  //
  //     config.prerender.routes = routes.map((route) =>
  //       route.replace("/", config.baseURL)
  //   )
  //   }
  // },
})
// console.log('sup',process.env.NITRO_PORT);
/**
 *
 * http://localhost:3000/_payload.js
 * http://localhost:3000/a/_payload.js
 *
 * https://nuxt.com/docs/api/configuration/nuxt-config#ssr
 * https://nitro.unjs.io/config/#baseurl
 */
