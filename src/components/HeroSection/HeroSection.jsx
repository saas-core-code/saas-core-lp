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
      style={{ 
        backgroundColor: "#FFF0F5", // Soft pink background
        minHeight: "100vh",
        width: "100%",
        padding: "2rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
      className={className}
    >
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        {/* Vertical Catchcopy Text */}
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <h1 
            style={{ 
              writingMode: "vertical-rl", 
              textOrientation: "mixed",
              color: "#FFFFFF",
              fontSize: "2.5rem",
              fontWeight: "bold",
              lineHeight: "1.5",
              letterSpacing: "0.05em",
              textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
              margin: "0 auto",
              padding: "1rem 0",
              height: "auto",
              maxHeight: "80vh",
            }}
          >
            {catchcopy}
          </h1>
        </div>

        {/* Smartphone Mockup Image */}
        <div style={{ marginBottom: "2rem", width: "100%", maxWidth: "300px" }}>
          <img 
            src={phoneImageSrc} 
            alt="Smartphone Mockup" 
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Circular Badges */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          gap: "1.5rem",
          marginBottom: "2rem",
          width: "100%",
        }}>
          {badges.map((badge, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: "#FF6B8A", 
                color: "white",
                borderRadius: "50%",
                width: "120px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "2px solid white",
                padding: "0.5rem",
                fontWeight: "bold",
              }}
            >
              <span style={{ textAlign: "center", fontSize: "1rem" }}>
                {badge}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          style={{ 
            backgroundColor: "#4CAF50", // Green color
            color: "white",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            fontSize: "1.25rem",
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
