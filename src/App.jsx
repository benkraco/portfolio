import { useState } from "react";
import "./style.css";

import TaskBar from "./components/TaskBar";
import DesktopApp from "./components/DesktopApp";
import AppWindow from "./AppWindow";
 
function App() {
  const [activeApp, setActiveApp] = useState("intro");

  return (
    <div className="content">
      <div className="desktop">

        <DesktopApp
          name="About Me"
          icon="👤"
          position="top-left"
          onClick={() => setActiveApp("about")}
        />

        <DesktopApp
          name="Projects"
          icon="💻"
          position="top-right"
          onClick={() => setActiveApp("projects")}
        />

        <DesktopApp
          name="Music"
          icon="🎵"
          position="bottom-right"
          onClick={() => setActiveApp("music")}
        />

        <DesktopApp
          name="Archive"
          icon="📁"
          position="bottom-left"
          onClick={() => setActiveApp("archive")}
        />

        <AppWindow
          activeApp={activeApp}
          setActiveApp={setActiveApp}
        />

      </div>

      <TaskBar />
    </div>
  );
}

export default App;