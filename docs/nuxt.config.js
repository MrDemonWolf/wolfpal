import theme from "@nuxt/content-theme-docs";

export default theme({
  loading: {
    color: "#7F8CCC"
  },
  generate: {
    fallback: true,
    routes: ["/"]
  },
  target: "static",
  router: {
    base: "/wolfpal/"
  }
});
