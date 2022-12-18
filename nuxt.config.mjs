// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  target:"static",
  nitro:{
    serveStatic:true,
    baseURL:'/a/',
    logLevel:3,
    preset:"node-server",
  },
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
console.log('sup',process.env.NITRO_PORT);
/**
 *
 * http://localhost:3000/_payload.js
 * http://localhost:3000/a/_payload.js
 *
 * https://nuxt.com/docs/api/configuration/nuxt-config#ssr
 * https://nitro.unjs.io/config/#baseurl
 */
