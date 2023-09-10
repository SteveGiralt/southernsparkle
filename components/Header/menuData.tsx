import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Neurotoxins",
        path: "/services/neurotoxins/",
        newTab: false,
      },
      {
        id: 42,
        title: "Dermal Fillers",
        path: "/services/dermal-fillers/",
        newTab: false,
      },
      {
        id: 43,
        title: "IV Therapy",
        path: "/services/iv-therapy/",
        newTab: false,
      },
    ],
  },
];
export default menuData;
