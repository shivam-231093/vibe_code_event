import TeamCard from "../components/TeamCard";
import image from "/star.svg";
import matrix from "/matrixLogo.png";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Humans = () => {
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

  const SectionHeading = ({ title }) => (
    <div className="relative text-center my-6 sm:my-8 md:my-10 py-2 sm:py-3 md:py-4">
      <img
        src={image}
        alt="star"
        className="absolute left-[15%] sm:left-[20%] top-[-8px] sm:top-[-10px] w-6 sm:w-7 md:w-8 opacity-70 transform rotate-[15deg] animate-pulse"
      />
      <img
        src={image}
        alt="star"
        className="absolute right-[20%] sm:right-[25%] bottom-0 w-4 sm:w-5 opacity-50 transform -rotate-[10deg] animate-pulse"
      />
      <h2 className="faculty text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl relative inline-block">
        <span className="relative">
          {title}
          <div className="absolute h-1 w-[70%] bg-gradient-to-r from-red-500 to-red-600 bottom-[-6px] sm:bottom-[-8px] left-[15%]"></div>
        </span>
      </h2>
    </div>
  );

  return (
    <div className="bg-black min-h-screen">
      <div className="w-full">
        {/* Hero section with parallax effect */}
        <div
          className="relative overflow-hidden flex items-center justify-center h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh]"
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

          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/matrixLogo.png')] bg-center bg-no-repeat bg-contain z-1 blur-sm"></div>

          <img
            src={image}
            alt="star"
            className="absolute z-[2]"
            style={{
              left: "calc(10% - 60px)",
              top: "calc(30% - 60px)",
              width: "40px",
              opacity: 0.7,
              transform: `rotate(${scrollY * 0.1}deg)`,
              pointerEvents: "none",
            }}
          />

          <img
            src={image}
            alt="star"
            className="absolute z-[2]"
            style={{
              right: "calc(30% - 50px)",
              bottom: "calc(30% - 50px)",
              width: "25px",
              opacity: 0.5,
              transform: `rotate(${-scrollY * 0.05}deg)`,
            }}
          />

          <motion.div
            ref={(el) => (sectionRefs.current["hero"] = el)}
            className="text-center relative z-[3] px-4 sm:px-6 lg:px-8"
            initial={{ filter: "blur(10px)", opacity: 0, y: -50 }}
            animate={
              inView["hero"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: -50 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-red-600 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-0 leading-tight">
              The Team Behind the Vibe
            </h1>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-red-500 to-red-600 h-1 w-16 sm:w-20 my-3 sm:my-4"></div>
            </div>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-xl mx-auto max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl px-2 sm:px-4 text-balance leading-relaxed">
              Meet the faculty advisors students, designers, and developers
              turning ideas into action. Organizers, mentors, and the extended
              Matrix family — working together to make{" "}
              <span className="text-red-500 font-bold">VIBE CODE 2025</span> a
              reality.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-red-600/5 pointer-events-none"></div>
          {/* Faculty Advisors Section */}
          <motion.div
            ref={(el) => (sectionRefs.current["faculty"] = el)}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              inView["faculty"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <SectionHeading title="Faculty Advisors" />
            <div className="relative">
              <div className="hidden sm:block absolute top-1/2 left-0 transform -translate-y-1/2 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="hidden sm:block absolute top-1/2 right-0 transform -translate-y-1/2 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-l from-black to-transparent z-10"></div>
              <div
                className="flex flex-row flex-nowrap overflow-x-auto py-4 sm:py-6 md:py-8 px-2 sm:px-3 mt-3 sm:mt-4 md:mt-5 scrollbar-hide scroll-smooth justify-start sm:justify-center gap-4 sm:gap-6"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <TeamCard
                  image={"/sachinsir.jpeg"}
                  name="Mr.Sachindra Dubey"
                  position="Associate Professor, Computer Science"
                  description="8+ years of experience in Computer Science education"
                />
                <TeamCard
                  image={"/mamtamam.jpeg"}
                  name="Dr. Mamta Lambert"
                  position="Head of Department, IT"
                  description="Specializes in Database Management Systems and Software Engineering with 8+ years of teaching experience."
                />
                <TeamCard
                  image={"/abhilashsir.jpeg"}
                  name="Mr. Abhilash Patel"
                  position="Assistant Professor, Mechatronics Engineering"
                  description="Research focus on Cybersecurity and Cloud Computing. Active contributor to academic journals."
                />
              </div>
            </div>
          </motion.div>

          {/* Student Coordinators Section */}
          <motion.div
            ref={(el) => (sectionRefs.current["coordinators"] = el)}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              inView["coordinators"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <SectionHeading title="Student Coordinators" />
            <div className="relative">
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-l from-black to-transparent z-10"></div>
              <div
                className="flex flex-row flex-nowrap overflow-x-auto py-8 px-3 scrollbar-hide scroll-smooth justify-center md:justify-center"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <TeamCard
                  image={"/shivam.jpg"}
                  name="Shivam Mishra"
                  position="Lead Coordinator"
                  description="Student at JEC and a member of MATRIX JEC. Specializes in event management, team coordination and technical aspects."
                />
                <TeamCard
                  image={"/rishika.jpg"}
                  name="Rishika Fulwani"
                  position="Co-Lead Coordinator"
                  description="Student at JEC and a member of MATRIX JEC. Handles technical aspects of events and workshops."
                />
              </div>
            </div>
          </motion.div>

          
          {/* <motion.div
            ref={(el) => (sectionRefs.current["volunteers"] = el)}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              inView["volunteers"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          > */}
            {/* <SectionHeading title="Volunteers" />
            <div className="relative">
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-l from-black to-transparent z-10"></div>
              <div
                className="flex flex-row flex-nowrap overflow-x-auto py-8 px-3 scrollbar-hide scroll-smooth justify-center md:justify-center"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <TeamCard
                  image={"https://randomuser.me/api/portraits/men/55.jpg"}
                  name="Suraj Dubey"
                  position="Member, MATRIX JEC"
                  description="Student at JEC and a member of MATRIX JEC."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/men/43.jpg"}
                  name="Aaditya Patel"
                  position="Member, MATRIX JEC"
                  description="Student at JEC and a member of MATRIX JEC."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/men/33.jpg"}
                  name="Ishaan Singh"
                  position="Member, MATRIX JEC"
                  description="Student at JEC and a member of MATRIX JEC."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/men/28.jpg"}
                  name="Naman Yadav"
                  position="Member, MATRIX JEC"
                  description="Student at JEC and a member of MATRIX JEC."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/women/28.jpg"}
                  name="Sariska"
                  position="Member, MATRIX JEC"
                  description="Student at JEC and a member of MATRIX JEC."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/women/43.jpg"}
                  name="Akansha"
                  position="Member, MATRIX JEC"
                  description="Student at JEC and a member of MATRIX JEC."
                />
              </div>
            </div>
          </motion.div>

          {/* Domain Heads Section */}
          {/* <motion.div
            ref={(el) => (sectionRefs.current["domain"] = el)}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              inView["domain"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <SectionHeading title="Domain Heads" />
            <div className="relative">
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-l from-black to-transparent z-10"></div>
              <div
                className="flex flex-row flex-nowrap overflow-x-auto py-8 px-3 scrollbar-hide scroll-smooth justify-center md:justify-center"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <TeamCard
                  image={"https://randomuser.me/api/portraits/men/11.jpg"}
                  name="John Smith"
                  position="Web Development Lead"
                  description="Expert in frontend and backend technologies with focus on React and Node.js."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/women/11.jpg"}
                  name="Jane Doe"
                  position="UI/UX Design Lead"
                  description="Passionate about creating intuitive user experiences and visually appealing interfaces."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/men/15.jpg"}
                  name="Alex Johnson"
                  position="Competitive Programming Lead"
                  description="Experienced competitive programmer with multiple hackathon wins."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/women/15.jpg"}
                  name="Sarah Williams"
                  position="AI/ML Lead"
                  description="Researcher in artificial intelligence and machine learning applications."
                />
              </div>
            </div>
          </motion.div>

          
          <motion.div
            ref={(el) => (sectionRefs.current["developers"] = el)}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              inView["developers"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <SectionHeading title="Website Developers" />
            <div className="relative">
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-l from-black to-transparent z-10"></div>
              <div
                className="flex flex-row flex-nowrap overflow-x-auto py-8 px-3 scrollbar-hide scroll-smooth justify-center md:justify-center"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <TeamCard
                  image={"https://randomuser.me/api/portraits/men/22.jpg"}
                  name="Shivam Mishra"
                  position="Student Technical Council"
                  description="Student at JEC and a member of MATRIX JEC."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/women/65.jpg"}
                  name="Anshika Gupta"
                  position="Student Technical Council"
                  description="Student at JEC and a member of MATRIX JEC."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/women/63.jpg"}
                  name="Monal Jain"
                  position="Student Technical Council"
                  description="Student at JEC and a member of MATRIX JEC."
                />
                <TeamCard
                  image={"https://randomuser.me/api/portraits/men/63.jpg"}
                  name="Deepesh Gupta"
                  position="Student Technical Council"
                  description="Student at JEC and a member of MATRIX JEC."
                />
              </div>
            </div>
          </motion.div> */} 

          {/* Matrix Logo */}
          <motion.div
            ref={(el) => (sectionRefs.current["footer"] = el)}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              inView["footer"]
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          >
            <div className="flex justify-center items-center mt-12 sm:mt-14 md:mt-16 mb-6 sm:mb-8">
              <div className="relative">
                <img
                  src={matrix}
                  alt="Matrix Logo"
                  className="w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28 md:h-32 lg:h-36 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute -inset-2 rounded-full bg-red-500/5 blur-xl"></div>
              </div>
            </div>

            <p className="text-center text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8 px-4">
              Proudly organized by{" "}
              <span className="text-red-500">MATRIX JEC</span> - The Technical
              Society of JEC
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Humans;
