import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import urheilijaContext from "../context/YhteystiedotContext";

const MuokkaaUrheilija = () => {
  const [nimi, setNimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymapaiva, setSyntymapaiva] = useState(null);
  const [paino, setPaino] = useState(null);
  const [linkki, setLinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [list, setList] = useState([]);
  const UrheilijaContext = useContext(urheilijaContext);
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const urheilijatieto = UrheilijaContext.getUrheilija(id).then((res) => {
        setNimi(res.nimi);
        setKutsumanimi(res.kutsumanimi);
        setSyntymapaiva(res.syntymapaiva);
        setPaino(res.paino);
        setLinkki(res.linkki);
        setLaji(res.laji);
        setSaavutukset(res.saavutukset);
      });
    } else mounted = false;
  }, []);

  const handleSubmit = async (e) => {
    const paivitettyUrheilija = {
      nimi: nimi,
      kutsumanimi: kutsumanimi,
      syntymapaiva: syntymapaiva,
      paino: paino,
      linkki: linkki,
      laji: laji,
      saavutukset: saavutukset,
    };

    UrheilijaContext.setUrheilija(id, paivitettyUrheilija);
    history("/");
  };
  const onChangeNimi = (e) => {
    setNimi(e.target.value);
  };
  const onChangeKutsumanimi = (e) => {
    setKutsumanimi(e.target.value);
  };
  const onChangeSyntymapaiva = (e) => {
    setSyntymapaiva(e.target.value);
  };
  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };
  const onChangeLinkki = (e) => {
    setLinkki(e.target.value);
  };
  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilija</div>

      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={nimi}
              onChange={onChangeNimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Kutsumanimi</label>
            <input
              type="text"
              name="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={onChangeKutsumanimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Syntymapaiva</label>
            <input
              type="text"
              name="syntymapaiva"
              className="form-control form-control-lg"
              placeholder="Syötä syntymapaiva..."
              value={syntymapaiva}
              onChange={onChangeSyntymapaiva}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Paino</label>
            <input
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={onChangePaino}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Linkki kuvaan</label>
            <input
              type="text"
              name="linkki"
              className="form-control form-control-lg"
              placeholder="Syötä linkki..."
              value={linkki}
              onChange={onChangeLinkki}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Laji</label>
            <input
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={onChangeLaji}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Saavutukset</label>
            <input
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={onChangeSaavutukset}
            />
          </div>
          <input
            type="submit"
            value="Muokkaa urheilija"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};
export default MuokkaaUrheilija;
