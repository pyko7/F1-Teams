import React from "react";
import Header from "./components/Header/Header";
import TeamHomepage from "./components/Main/TeamHomepage";

const App = () => {
  return (
    <>
      <Header />
      <main className="w-screen h-screen">
        <TeamHomepage />
      </main>
    </>
  );
};

export default App;
