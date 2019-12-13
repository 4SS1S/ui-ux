import React from "react";

import { Page, Titulo } from "./styles";

export default function Page2({ active }) {
  return (
    <Page
      active={active}
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80)`
      }}
    >
      <div
        style={{ fontSize: 30, color: "#fff", fontWeight: "bold", padding: 30 }}
      >
        Sem eles a internet seria como era no final <br />dos anos 90 e inicio dos
        anos 2000
        <a href="https://www.marvel.com/captainmarvel/">
          <img src="https://assets.b9.com.br/wp-content/uploads/2019/02/captainmarvel-1280x720.jpg" width="80" />
        </a>
      </div>
    </Page>
  );
}
