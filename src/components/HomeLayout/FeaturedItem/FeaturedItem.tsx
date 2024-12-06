import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { featuredItems } from "../../../mocks/data";

const FeaturedItems = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className=" rounded-[10px] mt-[30px]">
      <Slider {...settings} className="featured-slider">
        {featuredItems.map((item) => (
          <div key={item.id} className="px-5">
            <div className="w-[202px] rounded-[10px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[150px] object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-medium text-black">{item.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-base font-semibold text-black">
                    ${item.price}
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={12}
                        className={`${
                          index < Math.floor(item.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedItems;
