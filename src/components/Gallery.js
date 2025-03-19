import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Gallery.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Gallery() {
  const images = Array.from(
    { length: 18 },
    (_, i) => `/images/image${i + 1}.jpg`
  );

  return (
    <div className="gallery">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
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
            <img src={src} alt={`Gallery image ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;
