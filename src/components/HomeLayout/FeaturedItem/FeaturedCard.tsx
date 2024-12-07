import { Star } from "lucide-react";
import { FeaturedCardProps } from "../../../types/interfaces";

const FeaturedCard = ({ image, title, price, rating }: FeaturedCardProps) => {
  return (
    <div className="px-2">
      <div className="bg-white rounded-[10px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[150px] object-cover"
        />
        <div className="p-3">
          <h3 className="text-sm font-medium text-black truncate">{title}</h3>
          <div className="flex items-center justify-between mt-2">
            <p className="text-base font-semibold text-black">${price}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={12}
                  className={`${
                    index < Math.floor(rating)
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
  );
};

export default FeaturedCard;
