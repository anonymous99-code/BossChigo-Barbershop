import React from "react";
import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyBookBar from "./components/StickyBookBar";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Home />
      <WhatsAppButton />
      <StickyBookBar />
    </div>
  );
}

export default App;