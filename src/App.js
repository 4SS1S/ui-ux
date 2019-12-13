import React, { useState, useEffect } from "react";

import Page1 from "./pages/page1.js";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";

import "./App.css";

import ScrollGif from "./assets/scroll.gif";

export default function App() {
  const [page, setPage] = useState(1);
  const pages = {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5
  };
  const lenght = Object.keys(pages).length;

  useEffect(() => {
    console.log(page);
  }, [page]);

  const handleScroll = event => {
    scrollDown();
  };

  function scrollDown() {
    if (page < lenght && page > 0) {
      setPage(page + 1);
    }

    console.log(page);
  }

  function scrollUp() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const handleKeyUp = event => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      scrollDown();
    }

    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      scrollUp();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("scroll", handleScroll, true);
    };
  });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, true);

    return () => {
      document.removeEventListener("keyup", handleKeyUp, true);
    };
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "101%",
        overflow: "hidden"
      }}
    >
      <Page1 active={page === 1} />
      <Page2 active={page === 2} />
      <Page3 active={page === 3} />
      <Page4 active={page === 4} />
      <Page5 active={page === 5} />
      {page < lenght && (
        <button className="scroll" onClick={scrollDown}>
          <img src={ScrollGif} width={70} />
        </button>
      )}
    </div>
  );
}
