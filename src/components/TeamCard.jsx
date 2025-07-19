import { useState } from "react";

const TeamCard = ({ image, name, position, description }) => {
  const [showInfo, setShowInfo] = useState(false);
  // Use a placeholder image if none provided
  const placeholderImage = "https://randomuser.me/api/portraits/lego/1.jpg";

  return (
    <div className="mx-3 mb-6 w-[280px] min-w-[280px]">
      <div
        className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer h-[400px]"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        {/* Decorative element */}
        <div className="absolute top-0 left-0 w-1/5 h-full bg-red-600 z-0" />

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-red-600/70 to-transparent z-10" />

        {/* Image */}
        <img
          src={image || placeholderImage}
          alt={name}
          className="w-full h-full object-cover z-0 relative"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderImage;
          }}
        />

        {/* Text information at bottom */}
        <div className="absolute bottom-0 left-0 w-full p-4 text-left z-20 text-white">
          <h4 className="font-bold text-xl mb-0">{name}</h4>
          <p className="mb-1 text-gray-100">{position}</p>
        </div>

        {/* Info overlay */}
        {showInfo && description && (
          <div className="absolute inset-0 bg-black/85 z-30 flex items-center justify-center p-6 backdrop-blur-sm transition-opacity duration-300">
            <div className="text-center max-w-xs">
              <h5 className="text-red-500 font-bold text-xl mb-3">{name}</h5>
              <div className="h-0.5 w-16 bg-red-500 mx-auto mb-3"></div>
              <p className="text-white">{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
