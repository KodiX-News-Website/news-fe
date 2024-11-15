import { ROUTES } from "@/enums";

let id = 0;

export const pagesList = [
  {
    id: id++,
    name: "Home",
    href: ROUTES.HOME,
  },
  {
    id: id++,
    name: "Feature",
    href: ROUTES.FEATURE,
  },
  {
    id: id++,
    name: "Blog",
    href: ROUTES.BLOG,
  },
  {
    id: id++,
    name: "Testimonials",
    href: ROUTES.TESTIMONIALS,
  },
];
