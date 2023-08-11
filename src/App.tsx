import "./App.css";
import Layout from "./Components/Layout";
import { useEffect } from "react";
import { Bugfender } from "@bugfender/sdk";


function App() {
  useEffect(() => {
    Bugfender.log("App Created");
  }, []);
  console.log(import.meta.env.VITE_BUGFENDER_API_KEY);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
