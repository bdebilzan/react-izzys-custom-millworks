import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Gallery.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Gallery() {
  const images = Array.from(
    { length: 143 },
    (_, i) => `${process.env.PUBLIC_URL}/images/image${i + 1}.webp`
  );
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (index) => {
    const percentage = ((index + 1) / images.length) * 100;
    setProgress(percentage);
  };

  return (
    <div className="gallery">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        showIndicators={false}
        onChange={handleSlideChange}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button className="carousel-arrow left" onClick={onClickHandler}>
              <FaChevronLeft />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button className="carousel-arrow right" onClick={onClickHandler}>
              <FaChevronRight />
            </button>
          )
        }
      >
        {images.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </Carousel>

      <div className="carousel-progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Gallery;
