import React, { useContext, useEffect } from "react";
import Urheilija from "./Urheilija";
import urheilijaContext from "../context/YhteystiedotContext";

const Urheilijat = () => {
  const UrheilijaContext = useContext(urheilijaContext);
  console.log(UrheilijaContext);
  useEffect(() => {
    UrheilijaContext.getUrheilijat();
    console.log(UrheilijaContext);
  }, []);
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-primary">Urheilijat</span>
      </h1>
      <>
        {UrheilijaContext.urheilijatiedot.length
          ? UrheilijaContext.urheilijatiedot.map((urheilijatieto) => (
              <Urheilija
                key={urheilijatieto.id}
                urheilijatieto={urheilijatieto}
              />
            ))
          : null}
      </>
    </>
  );
};
export default Urheilijat;
