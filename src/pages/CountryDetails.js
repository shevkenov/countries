import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { faTimesCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatNumber } from "../utils/formatNumber";
import mapboxgl from "../mapbox";

const CountryDetails = () => {
  const { state } = useLocation();
  const history = useHistory();
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  const [lat, setLat] = React.useState(state.country.latlng[0]);
  const [lng, setLng] = React.useState(state.country.latlng[1]);
  const [zoom, setZoom] = React.useState(6);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [mapContainer, map, lat, lng, zoom]);

  React.useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="modal-detail">
      <div className="modal-detail-body">
        <div className="modal-detail-header">
          <button onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={() => history.push("/")}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
        <h1>{state.country.name}</h1>
        <p>Area: {formatNumber(state.country.area)}</p>
        <p>
          Currecy:{" "}
          {state.country.currencies
            .map((cur) => `${cur.name} ${cur.symbol}`)
            .join(", ")}
        </p>
        <p>
          Languages: {state.country.languages.map((cur) => cur.name).join(", ")}
        </p>
        <div className="map">
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
