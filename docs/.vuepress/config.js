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
      {
        text: "Backend",
        link: "/Backend",
      },
      {
        text: "Drupal",
        link: "/Drupal",
      },
      {
        text: "Escalations",
        link: "/Escalations",
      },
      {
        text: "Fleet_Discovery",
        link: "/Fleet_Discovery",
      },
      {
        text: "MRO_Prospector",
        link: "/MRO_Prospector",
      },
      {
        text: "TAU",
        link: "/TAU",
      },
      {
        text: "Trial_Set_Up",
        link: "/Trial_Set_Up",
      },
    ],
  }),
};
