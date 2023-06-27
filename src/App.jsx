import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./data";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="card">
        <Header photo={data.photo} />
        <Main
          name={data.name}
          position={data.position}
          site={data.site}
          email={data.email}
          resume={data.resume}
          about={data.about}
          interests={data.interests}
        />
        <Footer
          twitter={data.twitter}
          facebook={data.facebook}
          instagram={data.instagram}
          telegram={data.telegram}
          github={data.github}
        />
      </div>
    </>
  );
}
