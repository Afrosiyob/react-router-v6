import React, { useState } from "react";

import "./App.css";

type CounterProps = {
  readonly defaultCount?: number;
  readonly children?: any;
};

const Counter = ({ defaultCount, children }: CounterProps) => {
  const [count, setCount] = useState(defaultCount);

  return (
    <div>
      {" "}
      {count} {children}
      <button onClick={() => setCount(19)}> add </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      this is app <Counter defaultCount={2}>hello</Counter>{" "}
    </div>
  );
};

export default App;
