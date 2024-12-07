import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { featuredItems } from "../../../mocks/data";
import FeaturedCard from "./FeaturedCard";

const FeaturedItems = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-[30px]">
      <Slider {...settings} className="featured-slider -mx-2">
        {featuredItems.map((item) => (
          <FeaturedCard key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedItems;
