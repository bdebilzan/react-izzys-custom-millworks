import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Gallery.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Gallery() {
  const totalImages = 138;
  const [visibleImages, setVisibleImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(10);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadMoreImages = () => {
      if (loadedCount < totalImages) {
        setTimeout(() => {
          setLoadedCount((prev) => Math.min(prev + 10, totalImages));
        }, 500);
      }
    };

    loadMoreImages();
  }, [progress]);

  useEffect(() => {
    setVisibleImages(
      Array.from(
        { length: loadedCount },
        (_, i) => `/images/image${i + 1}.webp`
      )
    );
  }, [loadedCount]);

  const handleSlideChange = (index) => {
    setProgress(((index + 1) / totalImages) * 100);
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
        {visibleImages.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              loading="lazy"
              className="carousel-image"
            />
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
