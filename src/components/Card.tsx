import "../components/style.css";

type CardProps = {
  image: string;
  name: string;
  price: number;
  count: number;
  onAdd: () => void;
  onRemove: () => void;
};

function Card({ image, name, price, count, onAdd, onRemove }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Rp {price.toLocaleString()}</p>

      {count === 0 ? (
        <button className="btn" onClick={onAdd}>
          + Tambah ke Keranjang
        </button>
      ) : (
        <div className="cart-controls">
          <button onClick={onRemove}>-</button>
          <span>Jumlah: {count}</span>
          <button onClick={onAdd}>+</button>
        </div>
      )}
    </div>
  );
}

export default Card;
