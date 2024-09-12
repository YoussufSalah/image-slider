import ImageSlider from "./components/ImageSlider";
import "./App.css";

import img_1 from "./assets/images/img-1.jpg";
import img_2 from "./assets/images/img-2.jpg";
import img_3 from "./assets/images/img-3.jpg";
const imgs = [
  { url: img_1, alt: "Image 1" },
  { url: img_2, alt: "Image 2" },
  { url: img_3, alt: "Image 3" },
];

export default function App(props) {
  return (
    <div className="app">
      <ImageSlider images={imgs} />
    </div>
  );
}
