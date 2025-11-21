import React from "react";

const Retro8BallEmbed = () => {
  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    height: 0,
    overflow: "hidden",
  };

  return (
    <div>
      <h1>Play the Pixel Magic 8‑Ball</h1>
      <div style={containerStyle}>
        <iframe
          src="https://datnerdashley.github.io/retro-8ball/"
          title="Retro 8‑Ball Game"
          style={iframeStyle}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Retro8BallEmbed;
