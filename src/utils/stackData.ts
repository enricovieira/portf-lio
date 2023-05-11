import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiChakraui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiDjango, DiPython } from "react-icons/di";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "Vuejs", img: FaVuejs },
  { title: "TypeScript", img: SiTypescript },
  { title: "TailWind", img: SiTailwindcss },
  { title: "NextJS", img: TbBrandNextjs },
  { title: "ChakraUi", img: SiChakraui },
  { title: "Django", img: DiDjango },
  { title: "Python", img: DiPython },
];
