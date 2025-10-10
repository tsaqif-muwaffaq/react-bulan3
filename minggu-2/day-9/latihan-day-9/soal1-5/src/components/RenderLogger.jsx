import { useEffect } from "react";

export default function RenderLogger() {
  useEffect(() => {
    console.log("Komponen di-render atau di-update!");
  });

  return <h2>Komponen sedang di-render!</h2>;
}
