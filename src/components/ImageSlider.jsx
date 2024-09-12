import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle } from "lucide-react";
import "../styles/image-slider.scss";

export default function ImageSlider(props) {
  const [imageIndex, setImageIndex] = useState(0);
  function decreaseIndex() {
    if (imageIndex === 0) {
      setImageIndex(props.images.length - 1);
    } else {
      setImageIndex((prevIndex) => prevIndex - 1);
    }
  }
  function increaseIndex() {
    if (imageIndex === props.images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <section aria-label="Image slider" className="image_slider">
      <div style={{ display: "flex", overflow: "hidden" }}>
        {props.images.map(({ url, alt }, index) => (
          <img
            src={url}
            key={url}
            alt={alt}
            aria-hidden={index !== imageIndex}
            className="image_slider-image"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className="image_slider-button prev"
        onClick={decreaseIndex}
        aria-label="View previous image"
      >
        <ArrowBigLeft />
      </button>
      <button
        className="image_slider-button next"
        onClick={increaseIndex}
        aria-label="View next image"
      >
        <ArrowBigRight />
      </button>
      <div className="image_slider-index_btns">
        {props.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setImageIndex(index)}
            aria-label={`View image ${index + 1}`}
          >
            {index === imageIndex ? (
              <Circle
                aria-hidden
                style={{ stroke: "hsl(267, 97%, 14%)", fill: "#f7f7f7" }}
              />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
