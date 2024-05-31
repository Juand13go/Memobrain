import React from "react";
import BoardGame from "../BoardGame";
import lv1m from "../data/lv1m.json";

const Boardlv1m = () => {
  return (
    <>
      <h1>Math - Level 1</h1>

      <BoardGame
        lvs={lv1m}
        width={"340px"}
        showImg={true}
        showElementsBeforeStarting={true}
        showTime={1000}
        levelDifficult={1}
        levelCategory={"ma"}
        levelNum={1}
      />
      {/* prop lvs = nombre del archivo json en donde esta la informacion del nivel, recordar importarlo*/}
      {/* prop width = (segun cantidad de elementos del board) establecer como: x5= 820px x4= 650px x3= 500px x2= 340px */}
      {/* prop showImg = establecer como true si el nivel en cuestion tendra imagenes, o false si tendra texto */}
      {/* prop showElementsBeforeStarting = establecer como true en los niveles de mayor dificultad (mayor cantidad de elementos), esto servirá para mostrar el contenido de los elementos del tablero de juego durante 2.5 segundos  */}
      {/* prop showTime = establece el tiempo que se mostraran los elementos antes de empezar, valores en milisegundos (1000 = 1s)*/}
    </>
  );
};

export default Boardlv1m;
