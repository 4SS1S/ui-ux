import React from "react";

import { Page, Titulo } from "./styles";

export default function Page2({ active }) {
  return (
    <Page
      active={active}
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1510614199820-efbf8627600b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80)`
      }}
    >
      <div
        style={{ fontSize: 30, color: "#fff", fontWeight: "bold", padding: 30 }}
      >
        Autor: Assis Duarte
        <br />
        fontes:
        <ul>
          <li>https://www.chiefofdesign.com.br/ui-design/</li>
          <li>https://medium.com/aela/o-que-%C3%A9-ux-design-2f8161cd1a7b</li>
        </ul>
      </div>
    </Page>
  );
}
