import "../src/assets/styles/globals.scss";
import { Home } from "./components/templates/home";
import { Layout } from "./layouts";
// import { Navbar } from "./components/molecules/Navbar.ts";
// import { setupCounter } from "./counter.ts";
import generateTestimonial from "./components/molecules/CardTestimonial";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${Layout(`${Home}`)}
`;

generateTestimonial(
  document.querySelector<HTMLDivElement>("#card-testimonial")!
);
