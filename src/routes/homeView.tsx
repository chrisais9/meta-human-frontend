import React from "react";

export default function HomeView() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <video
        className="d-block"
        autoPlay
        muted
        loop
        style={{ height: "100vh", width: "100%", marginTop: "-90px", objectFit: "cover" }}
      >
        <source src="https://azk.imgix.net/beanzwuzhere.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
