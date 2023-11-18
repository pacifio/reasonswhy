import { useEffect, useState } from "react";
import { Card } from "./card";
import { bn, en } from "./notes";
import TinderCard from "react-tinder-card";
import { Footer } from "./Footer";

function App() {
  const [isEn, setIsEn] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "C" || event.key === "c") {
        setIsEn((prev) => !prev);
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <main>
      {isEn
        ? en.map((msg) => (
            <TinderCard
              key={{ msg }}
              className="swipe"
              onCardLeftScreen={() => {}}
            >
              <Card title={msg} />
            </TinderCard>
          ))
        : bn.map((msg) => (
            <TinderCard
              key={{ msg }}
              className="swipe"
              onCardLeftScreen={() => {}}
            >
              <Card title={msg} />
            </TinderCard>
          ))}
      <Footer />
    </main>
  );
}

export default App;
