import { defaultTheme } from "vuepress";

export default {
  theme: defaultTheme({
    // default theme config

    navbar: [
      {
        text: "test",
        link: "/",
      },
    ],

    sidebar: [
      {
        text: "Home",
        link: "/",
      },

      {
        text: "AWIN",
        link: "/AWIN",
      },
    ],
  }),
};
