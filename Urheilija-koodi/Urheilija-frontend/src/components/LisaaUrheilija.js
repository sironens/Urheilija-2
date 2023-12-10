import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import urheilijaContext from "../context/YhteystiedotContext";

export default function LisaaUrheilija() {
  let history = useNavigate();
  const [nimi, setNimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymapaiva, setSyntymapaiva] = useState(null);
  const [paino, setPaino] = useState(null);
  const [linkki, setLinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const UrheilijaContext = useContext(urheilijaContext);

  const handleSubmit = async (e) => {
    const uusiUrheilija = {
      nimi: nimi,
      kutsumanimi: kutsumanimi,
      syntymapaiva: syntymapaiva,
      paino: paino,
      linkki: linkki,
      laji: laji,
      saavutukset: saavutukset,
    };
    console.log("Tarkistetaan uusiUrheilija -objekti:");
    console.log(uusiUrheilija);

    UrheilijaContext.addUrheilija(uusiUrheilija);
    history("/");
  };
  return (
    <div class="card text-white bg-primary mb-3">
      <div class="card-header">Lisää urheilija</div>
      <div class="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              id="nimitieto"
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={nimi}
              onChange={(event) => setNimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä nimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="puhelin">Kutsumanimi</label>
            <input
              id="kutsumanimitieto"
              type="text"
              name="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={(event) => setKutsumanimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä kutsumanimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Syntymapaiva</label>
            <input
              id="syntymapaivatieto"
              type="text"
              name="syntymapaiva"
              className="form-control form-control-lg"
              placeholder="Syötä syntympaiva (muotoa YYYY-MM-DD)..."
              value={syntymapaiva}
              onChange={(event) => setSyntymapaiva(event.target.value)}
            />
            <div className="invalid-feedback">Täytä syntymapaiva</div>
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Paino</label>
            <input
              id="painotieto"
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={(event) => setPaino(event.target.value)}
            />
            <div className="invalid-feedback">Täytä paino</div>
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Linkki kuvaan</label>
            <input
              id="linkkitieto"
              type="text"
              name="linkki"
              className="form-control form-control-lg"
              placeholder="Syötä linkki kuvaan..."
              value={linkki}
              onChange={(event) => setLinkki(event.target.value)}
            />
            <div className="invalid-feedback">Lisää linkki</div>
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Laji</label>
            <input
              id="lajitieto"
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={(event) => setLaji(event.target.value)}
            />
            <div className="invalid-feedback">Täytä laji</div>
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Saavutukset</label>
            <input
              id="saavutustieto"
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
            />
            <div className="invalid-feedback">Täytä saavutukset</div>
          </div>
          <input
            type="submit"
            value="Lisää urheilija"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
}
