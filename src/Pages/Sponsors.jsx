import { useState, useEffect, useRef } from "react";
import image from "/star.svg";
import { FaInstagram, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

// Sponsor Card Component
const SponsorCard = ({ name, logo, type, description, website, instagram }) => {
  return (
    <div className="relative my-4 sm:my-6 mx-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl w-full rounded-xl overflow-hidden bg-black bg-opacity-90 border border-red-600/30 shadow-2xl shadow-red-500/20 transition-all duration-300 hover:shadow-red-500/30 hover:scale-[1.01]">
      <div className="absolute left-0 top-[7.5%] h-[85%] w-1 sm:w-1.5 bg-gradient-to-b from-red-500 to-red-600"></div>

      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 sm:mb-5">
          <div className="flex-1">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-bold bg-red-600 text-white mb-2 shadow-md shadow-red-600/20">
              {type}
            </span>
            <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-tight leading-tight">
              {name}
            </h3>
          </div>
          <div className="relative rounded-full p-2 bg-gradient-to-br from-black/50 to-red-600/10 backdrop-blur-sm self-center sm:self-start flex-shrink-0">
            <img
              src={logo}
              alt={name}
              className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 object-contain"
            />
          </div>
        </div>

        <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          {/* <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border border-red-500 text-red-400 hover:bg-red-500/10 transition-colors duration-300 text-sm sm:text-base"
          >
            <FaGlobe className="text-base sm:text-lg" /> Visit Website
          </a> */}
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border border-white/20 text-white/90 hover:bg-white/5 transition-colors duration-300 text-sm sm:text-base"
          >
            <FaInstagram className="text-base sm:text-lg" /> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

const Sponsors = () => {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInView((prev) => ({ ...prev, [key]: true }));
              observers[key].unobserve(sectionRefs.current[key]);
            }
          },
          { threshold: 0.1, rootMargin: "0px" }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  // Sponsor data with refined descriptions
  const sponsors = [
    {
      name: "SURYAVANSHI VENTURES",
      logo: "https://placehold.co/200x200?text=SV",
      type: "Title Sponsor",
      description:
        "We extend our heartfelt gratitude to SURYAVANSHI VENTURES for partnering with us as our esteemed Title Sponsor. We appreciate your support and look forward to a successful collaboration. Thank you for believing in our event and helping us make it a grand success.",
      website: "https://example.com",
      instagram: "https://www.instagram.com/suryavanshi_ventures/",
    },
    {
      name: "PRO TURF ARENA",
      logo: "https://placehold.co/200x200?text=PTA",
      type: "Sports Sponsor",
      description:
        "We are thrilled to announce that PRO TURF ARENA has joined us as our Sports Sponsor. Their generous support enhances our event experience and contributes significantly to making VIBE CODE 2025 a remarkable success. We deeply appreciate their commitment to our tech community.",
      website: "https://example.com",
      instagram: "https://www.instagram.com/proturfarena/",
    },
  ];

  const SectionHeading = ({ title }) => (
    <div className="relative text-center my-4 sm:my-6 md:my-8 lg:my-10 py-2 sm:py-3 md:py-4">
      <img
        src={image}
        alt="star"
        className="absolute left-[10%] sm:left-[15%] md:left-[20%] top-[-6px] sm:top-[-8px] md:top-[-10px] w-4 sm:w-6 md:w-7 lg:w-8 opacity-70 transform rotate-[15deg] animate-pulse"
      />
      <img
        src={image}
        alt="star"
        className="absolute right-[15%] sm:right-[20%] md:right-[25%] bottom-0 w-3 sm:w-4 md:w-5 opacity-50 transform -rotate-[10deg] animate-pulse"
      />
      <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative inline-block px-2">
        <span className="relative">
          {title}
          <div className="absolute h-0.5 sm:h-1 w-[70%] bg-gradient-to-r from-red-500 to-red-600 bottom-[-4px] sm:bottom-[-6px] md:bottom-[-8px] left-[15%]"></div>
        </span>
      </h2>
    </div>
  );

  return (
    <div className="bg-black min-h-screen">
      <div className="w-full">
        {/* Hero section */}
        <div
          className="relative overflow-hidden flex items-center justify-center min-h-[50vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] py-8 sm:py-12"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)",
            backgroundSize: "cover",
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "radial-gradient(circle, rgba(220,53,69,0.3) 0%, rgba(0,0,0,0.9) 70%)",
              zIndex: 1,
            }}
          ></div>

          <img
            src={image}
            alt="star"
            className="absolute z-[2] hidden sm:block"
            style={{
              left: "calc(5% - 30px)",
              top: "calc(30% - 30px)",
              width: "30px",
              opacity: 0.7,
              transform: `rotate(${scrollY * 0.1}deg)`,
              pointerEvents: "none",
            }}
          />

          <img
            src={image}
            alt="star"
            className="absolute z-[2] hidden sm:block"
            style={{
              right: "calc(5% - 20px)",
              bottom: "calc(10% - 15px)",
              width: "20px",
              opacity: 0.5,
              transform: `rotate(${-scrollY * 0.05}deg)`,
              pointerEvents: "none",
            }}
          />

          <motion.div
            ref={(el) => (sectionRefs.current["hero"] = el)}
            className="text-center relative z-[3] px-4 sm:px-6 lg:px-8 w-full max-w-6xl"
            initial={{ filter: "blur(10px)", opacity: 0, y: -50 }}
            animate={
              inView["hero"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: -50 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-red-600 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-2 sm:mb-0 leading-tight">
              Our Sponsors
            </h1>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-red-500 to-red-600 h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 my-2 sm:my-3 md:my-4"></div>
            </div>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mx-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-2 sm:px-4 text-balance leading-relaxed">
              We proudly acknowledge our amazing partners{" "}
              <span className="text-red-500 font-bold">
                SURYAVANSHI VENTURES
              </span>{" "}
              and <span className="text-red-500 font-bold">PRO TURF ARENA</span>{" "}
              whose generous support is making{" "}
              <span className="text-red-500 font-bold">VIBE CODE 2025</span>{" "}
              possible. Their commitment is empowering the next generation of
              developers, fostering innovation, and building a stronger tech
              community.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Title Sponsor */}
          <motion.div
            ref={(el) => (sectionRefs.current["title"] = el)}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              inView["title"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <SectionHeading title="Title Sponsor" />
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                {sponsors
                  .filter((sponsor) => sponsor.type === "Title Sponsor")
                  .map((sponsor, index) => (
                    <SponsorCard {...sponsor} key={index} />
                  ))}
              </div>
            </div>
          </motion.div>

          {/* Sports Sponsor */}
          <motion.div
            ref={(el) => (sectionRefs.current["sports"] = el)}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              inView["sports"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <SectionHeading title="Sports Sponsor" />
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                {sponsors
                  .filter((sponsor) => sponsor.type === "Sports Sponsor")
                  .map((sponsor, index) => (
                    <SponsorCard {...sponsor} key={index} />
                  ))}
              </div>
            </div>
          </motion.div>

          {/* Sponsorship opportunities */}
          <motion.div
            ref={(el) => (sectionRefs.current["cta"] = el)}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              inView["cta"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-center my-8 sm:my-12 md:my-16 py-6 sm:py-8 px-4 sm:px-6 rounded-xl relative max-w-4xl mx-auto"
            style={{
              background:
                "linear-gradient(to right, rgba(220,53,69,0.05), rgba(220,53,69,0.1), rgba(220,53,69,0.05))",
            }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-red-500/5 to-transparent blur-xl opacity-70"></div>
            <div className="relative z-10">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Become a Sponsor
              </h3>
              <p className="text-white/70 mb-4 sm:mb-6 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Support the tech community and gain visibility for your brand by
                sponsoring VIBE CODE 2025. We offer various sponsorship packages
                to match your organization's goals.
              </p>
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-lg shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300 hover:translate-y-[-2px] text-sm sm:text-base">
                Contact for Sponsorship
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
