import React, { Suspense, lazy, useState } from "react";
import GreetingMemo from "../components/GreetingMemo";
import HeavyCalculation from "../components/HeavyCalculation";
import ButtonCallback from "../components/ButtonCallback";

const LazyAbout = lazy(() => import("../components/LazyAbout"));

export default function Home() {
  const [name, setName] = useState("Mahasiswa");

  return (
    <div>
      <h1>tugas react js day 15</h1>
      <GreetingMemo name={name} />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ubah nama..."
      />

      <hr />
      <HeavyCalculation />
      <hr />
      <ButtonCallback />

      <hr />
      <Suspense fallback={<p>Memuat komponen About...</p>}>
        <LazyAbout />
      </Suspense>
    </div>
  );
}
