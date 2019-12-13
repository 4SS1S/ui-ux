import React from "react";

import { Page, Titulo } from "./styles";
import backgroundImage from "../assets/bg-1.jpg";

export default function Page1({ active }) {
  return (
    <Page
      active={active}
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/b9/c8/f8/b9c8f893c9a782033a01f47e0c0b1d6e.jpg)`
      }}
    >
      <Titulo>
        UI/UX
        <br />
        DESIGN
      </Titulo>
    </Page>
  );
}
