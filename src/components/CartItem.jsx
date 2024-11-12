export default function CartItem({ item, onCartItemRemove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-title">{item.title}</div>
        <div className="cart-item-price">${item.price}</div>
        <div className="cart-item-quantity">
          <span>Quantity: {item.quantity}</span>
        </div>
        <button className="remove-item" onClick={onCartItemRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
