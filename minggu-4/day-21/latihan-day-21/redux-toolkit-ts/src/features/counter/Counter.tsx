import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store"; 
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { useState } from "react";


export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h2>Redux Toolkit + TypeScript Example</h2>
      <h3>Count: {count}</h3>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Masukkan angka"
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Tambah Nilai
        </button>
      </div>
    </div>
  );
}
