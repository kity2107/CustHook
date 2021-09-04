import { useMemo } from "react";
import useMousePosition from "./useMousePosition";

const useBackground = () => {
  //a su vez importamos otro hooks, para obtener la posicion del mouse
  const position = useMousePosition();

  const background = useMemo(
    () => (position.x < window.innerWidth / 2 ? "pink" : "blue"),
    [position]
  );

  return [background, position];
};
export default useBackground;
