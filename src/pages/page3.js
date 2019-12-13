import React from "react";

import { Page, Titulo } from "./styles";

export default function Page2({ active }) {
  return (
    <Page
      active={active}
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1447703693928-9cd89c8d3ac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)`
      }}
    >
      <div
        style={{ fontSize: 30, color: "#fff", fontWeight: "bold", padding: 30 }}
      >
        UX
        <ul style={{ display: "block", color: "#ddd" }}>
          <li>Experiencia do usuario</li>
          <li>
            UX é toda relação que uma pessoa tem com um produto ou serviço
          </li>
          <li>
            Desde o momento em que um usuário se interessou por um produto,
            pesquisou, contou para alguém, comprou, carregou, abriu a embalagem,
            tocou e o usou, isto é UX
          </li>
        </ul>
      </div>
    </Page>
  );
}
