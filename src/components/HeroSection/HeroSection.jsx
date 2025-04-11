import React from 'react';

/**
 * Hero Section Component
 * 
 * @param {Object} props
 * @param {string} props.catchcopy - Main catchphrase text (vertical)
 * @param {string} props.phoneImageSrc - Path to the smartphone mockup image
 * @param {Array} props.badges - Array of badge texts
 * @param {string} props.ctaText - Call to action button text
 * @param {function} props.onCtaClick - Function to handle CTA button click
 * @param {string} props.className - Additional CSS classes
 */
const HeroSection = ({
  catchcopy = "3万人以上が選んだ チャットレディ事務所",
  phoneImageSrc = "/img/hero_main.png",
  badges = ["日払いOK", "未経験から月収40万円", "大阪No.1 14店舗"],
  ctaText = "LINEで応募",
  onCtaClick = () => {},
  className = "",
}) => {
  return (
    <section 
      className={`relative w-full py-16 ${className}`}
      style={{ 
        backgroundColor: "#FFF0F5", // Soft pink background
      }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Vertical Catchcopy Text */}
        <div className="mb-8 text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold text-white writing-vertical-rl"
            style={{ 
              writingMode: "vertical-rl", 
              textOrientation: "upright",
              textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
              color: "#FFFFFF",
              lineHeight: "1.5",
              letterSpacing: "0.05em",
            }}
          >
            {catchcopy}
          </h1>
        </div>

        {/* Smartphone Mockup Image */}
        <div className="relative mb-10 w-full max-w-xs">
          <img 
            src={phoneImageSrc} 
            alt="Smartphone Mockup" 
            className="w-full h-auto"
          />
        </div>

        {/* Circular Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="rounded-full flex items-center justify-center p-4 w-24 h-24 md:w-28 md:h-28"
              style={{ 
                backgroundColor: "#FF6B8A", 
                color: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "2px solid white"
              }}
            >
              <span className="text-center text-sm md:text-base font-bold">
                {badge}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="px-8 py-3 rounded-full text-white font-bold text-lg transition-transform transform hover:scale-105"
          style={{ 
            backgroundColor: "#4CAF50", // Green color
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
