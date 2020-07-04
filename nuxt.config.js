import colors from "vuetify/es5/util/colors"

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/app"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '~/plugins/vuetify.js'
    "~/plugins/axios",
    "~/plugins/compositionApi",
    "~/plugins/common.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/axios", "@nuxtjs/auth"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      light: true,
      themes: {
        dark: {
          primary: "#215237",
          accent: "#55C595",
          secondary: "#6CA0D1",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/v1/users/get-token",
            method: "post",
            propertyName: "token"
          },
          user: {
            url: "/api/v1/users/detail/me/",
            method: "get",
            propertyName: false
          },
          logout: false
        },
        tokenType: "Bearer"
      }
    },
    redirect: {
      login: "/account/login/",
      logout: "/account/login/",
      callback: "/account/login",
      home: "/"
    },
    rewriteRedirects: false,
    fullPathRedirect: false,
    localStorage: false
  },
  router: {
    middleware: ["auth"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
