import { useState, useEffect } from "react";

export default function SimulatedFetch() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ name: "Tsaqif", hobby: "desain/fotografi" });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Simulated Fetch</h2>
      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <p>{data.name} suka {data.hobby}</p>
      )}
    </div>
  );
}
