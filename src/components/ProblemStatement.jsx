import React from "react";
import { FaDownload, FaCode, FaLightbulb, FaRocket, FaTerminal, FaCog, FaMicrochip } from "react-icons/fa";
import BlurElement from "./BlurElement";

const ProblemStatement = () => {
  const handleDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement("a");
    link.href = "/Vibe_Code_2025_Problem_Statements.pdf"; // PDF file in the public folder
    link.download = "Vibe_Code_2025_Problem_Statements.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full my-12 relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 1, 5, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 1, 5, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute top-10 left-10 text-[#FF0105]/20 animate-pulse">
        <FaTerminal className="text-2xl" />
      </div>
      <div className="absolute top-20 right-20 text-[#FF3B30]/20 animate-bounce">
        <FaCog className="text-xl animate-spin" style={{ animationDuration: '3s' }} />
      </div>
      <div className="absolute bottom-20 left-20 text-[#FF0105]/20 animate-pulse">
        <FaMicrochip className="text-lg" />
      </div>

      <BlurElement
        elements={[
          <div className="flex flex-col items-center gap-8 relative z-10">
            {/* Header with Tech Enhancement */}
            <div className="text-center relative">
              {/* Glitch Effect Lines */}
              <div className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF0105] to-transparent opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF3B30] to-transparent opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

              <h2 className="font-poppins text-[#CF2C3C] font-bold ms:text-5xl text-3xl mb-4 relative">
                <span className="relative z-10">Problem Statement</span>
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0105]/20 to-[#FF3B30]/20 blur-sm -z-10 animate-pulse"></div>
              </h2>
              <p className="font-syne ms:text-xl text-lg text-gray-300 max-w-3xl mx-auto">
                Ready to tackle real-world challenges? Download the official
                problem statement and start planning your innovative solution.
              </p>
            </div>

            {/* Enhanced Main Card */}
            <div className="relative bg-[#1C1A1A] rounded-4xl ms:p-12 p-8 max-w-4xl w-full mx-auto border border-[#FF0105]/20 overflow-hidden">
              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-4xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0105]/30 via-transparent to-[#FF3B30]/30 animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF0105] to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF3B30] to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Matrix-style Corner Elements */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#FF0105] opacity-60"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[#FF0105] opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-[#FF3B30] opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#FF3B30] opacity-60"></div>

              <div className="flex max-lg:flex-col items-center justify-between gap-8 relative z-10">
                {/* Enhanced Left Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6 relative">
                    <div className="bg-[#FF0105]/20 p-3 rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0105]/30 to-transparent animate-pulse"></div>
                      <FaCode className="text-[#FF0105] text-2xl relative z-10 animate-pulse" />
                    </div>
                    <h3 className="font-syne font-bold ms:text-3xl text-2xl text-white relative">
                      Challenge Awaits
                      {/* Scanning Line Effect */}
                      <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF0105] animate-pulse" style={{
                        animation: 'scan 2s ease-in-out infinite',
                      }}></div>
                    </h3>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-[#0A0A0A]/50 border border-[#FF0105]/10 hover:border-[#FF0105]/30 transition-all duration-300">
                      <div className="bg-[#FF3B30]/20 p-2 rounded-lg">
                        <FaLightbulb className="text-[#FF3B30] mt-1 flex-shrink-0 animate-pulse" />
                      </div>
                      <p className="font-syne text-gray-300">
                        <span className="text-white font-semibold">
                          Innovation Focus:
                        </span>{" "}
                        Build creative solutions using modern web technologies
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-[#0A0A0A]/50 border border-[#FF0105]/10 hover:border-[#FF0105]/30 transition-all duration-300">
                      <div className="bg-[#FF3B30]/20 p-2 rounded-lg">
                        <FaRocket className="text-[#FF3B30] mt-1 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </div>
                      <p className="font-syne text-gray-300">
                        <span className="text-white font-semibold">
                          Time Limit:
                        </span>{" "}
                        4 hours of intense coding and problem-solving
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Download Button */}
                  <button
                    onClick={handleDownload}
                    className="group relative bg-gradient-to-r from-[#FF0105] to-[#FF3B30] hover:from-[#FF3B30] hover:to-[#FF0105] 
                             font-inter font-bold ms:text-lg text-base px-8 py-4 rounded-xl 
                             transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                             hover:shadow-[#FF0105]/25 flex items-center gap-3 w-fit overflow-hidden"
                  >
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF0105]/50 to-[#FF3B30]/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Scanning Line */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                    <FaDownload className="group-hover:animate-bounce relative z-10" />
                    <span className="relative z-10">Download Problem Statement</span>
                  </button>
                </div>

                {/* Enhanced Right Visual Element */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Multiple Animated Rings */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF0105]/20 to-[#FF3B30]/20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-2 bg-gradient-to-r from-[#FF3B30]/15 to-[#FF0105]/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-[#FF0105]/10 to-[#FF3B30]/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                    {/* Main Icon Container with Enhanced Effects */}
                    <div className="relative bg-[#0A0A0A] border-2 border-[#FF0105] rounded-full ms:w-48 ms:h-48 w-32 h-32 flex items-center justify-center overflow-hidden">
                      {/* Rotating Border Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF0105] via-transparent to-[#FF3B30] animate-spin" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute inset-1 rounded-full bg-[#0A0A0A]"></div>

                      <div className="text-[#FF0105] ms:text-6xl text-4xl relative z-10 animate-pulse">
                        <FaCode />
                      </div>

                      {/* Enhanced Floating Elements */}
                      <div className="absolute -top-2 -right-2 bg-[#FF3B30] rounded-full w-6 h-6 flex items-center justify-center animate-bounce border border-[#FF0105]/50">
                        <span className="text-white text-xs font-bold animate-pulse">!</span>
                      </div>

                      <div className="absolute -bottom-2 -left-2 bg-[#FF0105] rounded-full w-8 h-8 flex items-center justify-center animate-pulse border border-[#FF3B30]/50">
                        <FaLightbulb className="text-white text-sm" />
                      </div>

                      {/* Additional Tech Elements */}
                      <div className="absolute top-4 -right-4 bg-[#FF0105]/80 rounded-full w-4 h-4 flex items-center justify-center animate-ping">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>

                      <div className="absolute -top-4 left-4 bg-[#FF3B30]/80 rounded-full w-3 h-3 animate-pulse"></div>
                    </div>

                    {/* Orbiting Elements */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                      <div className="absolute -top-2 left-1/2 w-2 h-2 bg-[#FF0105] rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                      <div className="absolute top-1/2 -right-2 w-1 h-1 bg-[#FF3B30] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Bottom Info */}
              <div className="mt-8 pt-6 border-t border-[#FF0105]/20 relative">
                <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-[#FF0105] to-transparent animate-pulse"></div>
                <div className="absolute top-0 right-0 w-20 h-[1px] bg-gradient-to-l from-[#FF3B30] to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>

                <div className="flex max-ms:flex-col items-center justify-between gap-4 text-sm text-gray-400">
                  <p className="font-syne flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#FF0105] rounded-full animate-pulse"></span>
                    📄 PDF Format • 🔍 Detailed Requirements • 💡 Sample Use Cases
                  </p>
                </div>
              </div>
            </div>
          </div>,
        ]}
        delay={300}
        direction="top"
        className="w-full flex justify-center items-center"
      />

      <style jsx>{`
        @keyframes scan {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
      `}</style>
    </section>
  );
};

export default ProblemStatement;
