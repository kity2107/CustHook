import React, { useMemo } from "react";
import useBackground from "./hooks/useBackground";
// import useMousePosition from "./hooks/useMousePosition";

export const MouseApp = () => {
  //const position = useMousePosition();
  //con window.innerWidth obtenemos el ancho de la pantalla

  // const background = position.x < window.innerWidth / 2 ? "pink" : "blue";

  //   const background = useMemo(
  //     () => (position.x < window.innerWidth / 2 ? "pink" : "blue"),
  //     [position]);

  const [background, position] = useBackground();
  //si fuese un arreglo podemos traer cualq de los dos elementos sin importar el orden
  //const {background, position} = useBackground();
  //const { position }= useBackground();
  //const [ ,position ]= useBackground();
  return (
    <div style={{ background, heigth: "100vh" }}>
      <h1>MouseApp</h1>
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
};
