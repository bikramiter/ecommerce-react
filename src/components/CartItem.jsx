export default function CartItem({ item, onCartItemRemove, onQuantityChange }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-title">{item.title}</div>
        <div className="cart-item-price">${item.price}</div>
        <div className="cart-item-quantity">
          <span>Quantity: </span>
          <button
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span> {item.quantity} </span>
          <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
        <button
          className="remove-item"
          onClick={() => onCartItemRemove(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
