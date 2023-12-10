import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import urheilijaContext from "../context/YhteystiedotContext";
import { useNavigate } from "react-router-dom";

const Urheilija = (props) => {
  const UrheilijaContext = useContext(urheilijaContext);
  let history = useNavigate();
  const [naytaUrheilija, setnaytaUrheilija] = useState(false);
  const onDeleteClick = (id) => {
    UrheilijaContext.deleteUrheilija(id);
    window.location.reload();
    history("/");
  };
  const onShowClick = (e) => {
    let lippu = !naytaUrheilija;
    setnaytaUrheilija(lippu);
  };
  const {
    id,
    nimi,
    kutsumanimi,
    syntymapaiva,
    paino,
    linkki,
    laji,
    saavutukset,
  } = props.urheilijatieto;
  return (
    <div className="card card-body mb-3 display:flex, justifyContent: flex-end">
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h4>{nimi}</h4>
        <button className="button_left" onClick={onShowClick.bind(this)}>
          ...
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          className="btn-group mr-2 text-right"
          role="group"
          aria-label="Second group"
        >
          <button
            className="button_right"
            onClick={onDeleteClick.bind(this, { id })}
          >
            Poista
          </button>
          <Link to={`puhelintieto/muokkaa/${id}`}>
            <button className="button_right">Muokkaa</button>
          </Link>
        </div>
      </div>
      {naytaUrheilija ? (
        <ul className="list-group">
          <li className="list-group-item">Kutsumanimi: {kutsumanimi}</li>
          <li className="list-group-item">Syntymapaiva: {syntymapaiva}</li>
          <li className="list-group-item">Paino: {paino}</li>
          <li className="list-group-item">Linkki kuvaan: {linkki}</li>
          <li className="list-group-item">Laji: {laji}</li>
          <li className="list-group-item">Saavutukset: {saavutukset}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Urheilija;
