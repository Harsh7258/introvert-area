import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroller";
import Conversation from "./compoents/Conversation";

function App() {
  const alanBtnInstance = useRef(null);
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "471675296627810526a39d04ae9b26bc2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "gotoFaq") {
            scroller.scrollTo(`MuiPaper-${commandData.qId}`, {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            });
          } else if (commandData.command === "openMyYoutube") {
             window.location.href = "https://youtube.com";
            window.open("https://www.youtube.com/watch?v=I2PU-VazuZg", "_blank");
          } else if (commandData.command === "openSourceCode") {
             window.location.href =
              "https://github.com/akkySrivastava/chat-bot-ai";
            window.open(
              "https://github.com/akkySrivastava/chat-bot-ai",
              "_blank"
            );
          }
        },
      });
    }
  }, []);
  return (
    <div className="App">
      <Conversation />
    </div>
  );
}

export default App;
