import { useState } from "react";

const TeamCard = ({ image, name, position, description }) => {
  const [showInfo, setShowInfo] = useState(false);
  // Use a placeholder image if none provided
  const placeholderImage = "https://randomuser.me/api/portraits/lego/1.jpg";

  return (
    <div className="mx-2 sm:mx-3 md:mx-4 mb-6 sm:mb-8 w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] min-w-[240px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px]">
      <div
        className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[.02] sm:hover:scale-[1.03] hover:shadow-red-500/20 cursor-pointer h-[320px] sm:h-[350px] md:h-[380px] lg:h-[400px] border border-red-500/10 backdrop-blur-sm"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        onClick={() => setShowInfo(!showInfo)} // Add touch support for mobile
        style={{
          boxShadow:
            "0 15px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(220, 53, 69, 0.15) inset",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-gradient-to-b from-red-500 to-red-600 z-10" />
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 rounded-full border-2 border-red-500/50 z-10" />
        <div className="absolute bottom-16 sm:bottom-20 right-6 sm:right-8 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-600/80 z-10" />

        {/* Shimmering effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-red-500/10 z-[5] opacity-60" />

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70  to-transparent z-10" />

        {/* Image with better styling */}
        <img
          src={image || placeholderImage}
          alt={name}
          className="w-full h-full object-cover z-0 relative scale-105 filter contrast-[1.1]"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderImage;
          }}
        />

        {/* Text information at bottom with improved design */}
        <div className="absolute bottom-0 left-0 w-full px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-left z-20">
          <h4 className="font-bold text-lg sm:text-xl tracking-tight mb-1 text-white leading-tight">
            {name}
          </h4>
          <p className="text-red-300 font-medium text-xs sm:text-sm leading-tight">
            {position}
          </p>
        </div>

        {/* Info overlay with improved animation and styling */}
        {showInfo && description && (
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-30 flex items-center justify-center p-4 sm:p-5 md:p-6 backdrop-blur-sm animate-fade-in-word"
            style={{
              backdropFilter: "blur(7px)",
            }}
          >
            <div className="text-center max-w-[200px] sm:max-w-xs">
              <h5 className="text-red-500 font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                {name}
              </h5>
              <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-3 sm:mb-4"></div>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                {description}
              </p>
              <div className="mt-3 sm:mt-4 h-6 sm:h-8 w-6 sm:w-8 mx-auto rounded-full border border-red-500/30 flex items-center justify-center">
                <div className="h-1 w-1 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
