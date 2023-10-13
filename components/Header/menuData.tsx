import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    title: "Services",
    newTab: false,
    submenu: [
      {
        title: "Neurotoxins",
        path: "/services/neurotoxins/",
        newTab: false,
      },
      {
        title: "Dermal Fillers",
        path: "/services/dermal-fillers/",
        newTab: false,
      },
      {
        title: "IV Therapy",
        path: "/services/iv-therapy/",
        newTab: false,
      },
      {
        title: "Prescription Weight Loss",
        path: "/services/weight-loss/",
        newTab: false,
      },
    ],
  },
  {
    title: "After Care Instructions",
    newTab: false,
    submenu: [
      {
        title: "Neurotoxins",
        path: "/aftercare/neurotoxins/",
        newTab: false,
      },
      {
        title: "Dermal Fillers",
        path: "/aftercare/dermal-fillers/",
        newTab: false,
      },
      {
        title: "IV Therapy",
        path: "/aftercare/iv-therapy/",
        newTab: false,
      },
    ],
  },
];
export default menuData;
