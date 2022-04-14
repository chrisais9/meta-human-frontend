import React from "react";
import styled from "styled-components";

const BackgroundVideo = styled.video`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export default function HomeView() {
  return (
    <main>
      <BackgroundVideo autoPlay muted loop playsInline>
        <source src="https://azk.imgix.net/beanzwuzhere.mp4" type="video/mp4" />
      </BackgroundVideo>
    </main>
  );
}
