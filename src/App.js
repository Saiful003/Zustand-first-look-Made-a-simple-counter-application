import { useStore } from "./store/store";
import "./styles.css";

export default function App() {
  const { count, increament, decreament, reset } = useStore((state) => state);

  return (
    <div className="counter__container">
      <div className="counter__wrapper">
        <div className="counter__title">
          <h2>Counter Using Zustand!</h2>
        </div>
        <div>
          <p> {count} </p>
        </div>
        <div>
          <button onClick={() => increament()}>+</button>
          <button onClick={() => decreament()}>-</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
}
