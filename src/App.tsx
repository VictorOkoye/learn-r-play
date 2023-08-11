import "./App.css";
import Layout from "./Components/Layout";
import { useEffect } from "react";
import { Bugfender } from "@bugfender/sdk";


function App() {
  useEffect(() => {
    Bugfender.log("App Created");
  }, []);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
