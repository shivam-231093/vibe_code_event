import { useState } from "react";

const TeamCard = ({ image, name, position, description }) => {
  const [showInfo, setShowInfo] = useState(false);
  // Use a placeholder image if none provided
  const placeholderImage = "https://randomuser.me/api/portraits/lego/1.jpg";

  return (
    <div className="mx-4 mb-8 w-[280px] min-w-[280px]">
      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-red-500/20 cursor-pointer h-[380px] border border-red-500/10 backdrop-blur-sm"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        style={{
          boxShadow:
            "0 15px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(220, 53, 69, 0.15) inset",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-500 to-red-600 z-10" />
        <div className="absolute top-6 right-6 w-6 h-6 rounded-full border-2 border-red-500/50 z-10" />
        <div className="absolute bottom-20 right-8 w-3 h-3 rounded-full bg-red-600/80 z-10" />

        {/* Shimmering effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-red-500/10 z-[5] opacity-60" />

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

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
        <div className="absolute bottom-0 left-0 w-full px-5 py-4 text-left z-20">
          <h4 className="font-bold text-xl tracking-tight mb-1 text-white">
            {name}
          </h4>
          <p className="text-red-300 font-medium text-sm">{position}</p>
        </div>

        {/* Info overlay with improved animation and styling */}
        {showInfo && description && (
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/95 to-black/95 z-30 flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in-word"
            style={{
              backdropFilter: "blur(5px)",
            }}
          >
            <div className="text-center max-w-xs">
              <h5 className="text-red-500 font-bold text-xl mb-3">{name}</h5>
              <div className="h-0.5 w-16 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-4"></div>
              <p className="text-white/90 leading-relaxed">{description}</p>
              <div className="mt-4 h-8 w-8 mx-auto rounded-full border border-red-500/30 flex items-center justify-center">
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
