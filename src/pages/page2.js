import React from "react";

import { Page, Titulo } from "./styles";

export default function Page2({ active }) {
  return (
    <Page
      active={active}
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)`
      }}
    >
      <div
        style={{ fontSize: 30, color: "#fff", fontWeight: "bold", padding: 30 }}
      >
        UI DESIGN
        <ul style={{ display: "block", color: "#ddd" }}>
          <li>
            Área que estuda o meio pelo qual uma pessoa interage ou controla um
            dispositivo, software ou aplicativo
          </li>
          <li>
            É a parte ”visível” do projeto ou sistema em qual o usuário interage
          </li>
        </ul>
      </div>
    </Page>
  );
}
