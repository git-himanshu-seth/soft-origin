import React, { useState } from "react";
import { render } from "react-dom";
import { useTrail, animated as a } from "react-spring";
import "./App.css";

const items = ["Soft", "Origin"];
const config = { mass: 9, tension: 100, friction: 400 };

function App() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    Y: toggle ? 0 : 0,
    height: toggle ? 300 : 0,
    from: { opacity: 0, Y: 20, height: 0 }
  });

  return (
    <div
      className="trails-main"
      onClick={() => set((state) => !state)}
    >
      <div>
        {trail.map(({ Y, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: Y.interpolate((Y) => `translate3d(0,${Y}px,0)`)
            }}
          >
            <a.div
              style={{ height, textTransform: "capitalize" }}
            >
              {items[index]}
            </a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default App;