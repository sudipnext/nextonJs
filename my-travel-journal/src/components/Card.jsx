export default function Card(props) {
  return (
    <section className="card">
      <img src={props.imageUrl}></img>
      <div className="Hero">
        <div className="card-location">
            📍{props.location.toUpperCase()} 
              <a className="cards-link" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
        <h1 className="card-title">{props.title}</h1>
        <strong><span>{props.startDate}-{props.endDate}</span></strong>
        <p>{props.description}</p>
      </div>
    </section>
  );
}
