const images = import.meta.glob("/src/assets/img/*", { eager: true });

function getImage(fileName) {
  return images[`/src/assets/img/${fileName}`].default;
}

export default function SoapCards({ soaps }) {
  return (
    <div className="cards">
      {soaps.map((soap) => (
        <div className="card" key={soap.id}>
          <img src={getImage(soap.image)} alt={soap.name} />
          <h3>{soap.name}</h3>
        </div>
      ))}
    </div>
  );
}
