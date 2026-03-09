import React, { useState } from 'react';
import { FiShoppingCart, FiTrash2, FiPlus, FiMinus, FiX } from 'react-icons/fi';
import './Store.css';

const fruits = [
  { id: 1, name: 'Apple', price: 120, img: '/fruit/apple.jpg' },
  { id: 2, name: 'Apricot', price: 250, img: '/fruit/apricot.jpg' },
  { id: 3, name: 'Avocado', price: 180, img: '/fruit/avocado.jpg' },
  { id: 4, name: 'Banana', price: 40, img: '/fruit/banana.jpg' },
  { id: 5, name: 'Blackberry', price: 300, img: '/fruit/blackberry.jpg' },
  { id: 6, name: 'Blueberry', price: 350, img: '/fruit/blueberry.jpg' },
  { id: 7, name: 'Cantaloupe', price: 60, img: '/fruit/cantaloupe.jpg' },
  { id: 8, name: 'Cherry', price: 280, img: '/fruit/cherry.jpg' },
  { id: 9, name: 'Clementine', price: 150, img: '/fruit/clementine.jpg' },
  { id: 10, name: 'Coconut', price: 50, img: '/fruit/coconut.jpg' },
  { id: 11, name: 'Cranberry', price: 320, img: '/fruit/cranberry.jpg' },
  { id: 12, name: 'Date', price: 400, img: '/fruit/date.jpg' },
  { id: 13, name: 'Dragonfruit', price: 200, img: '/fruit/dragonfruit.jpg' },
  { id: 14, name: 'Durian', price: 500, img: '/fruit/durian.jpg' },
  { id: 15, name: 'Elderberry', price: 380, img: '/fruit/elderberry.jpg' },
  { id: 16, name: 'Fig', price: 220, img: '/fruit/fig.jpg' },
  { id: 17, name: 'Gooseberry', price: 260, img: '/fruit/gooseberry.jpg' },
  { id: 18, name: 'Grape', price: 90, img: '/fruit/grape.jpg' },
  { id: 19, name: 'Grapefruit', price: 100, img: '/fruit/grapefruit.jpg' },
  { id: 20, name: 'Guava', price: 80, img: '/fruit/guava.jpg' },
  { id: 21, name: 'Honeydew', price: 70, img: '/fruit/honeydew.jpg' },
  { id: 22, name: 'Jackfruit', price: 110, img: '/fruit/jackfruit.jpg' },
  { id: 23, name: 'Kiwi', price: 160, img: '/fruit/kiwi.jpg' },
  { id: 24, name: 'Kumquat', price: 240, img: '/fruit/kumquat.jpg' },
  { id: 25, name: 'Lemon', price: 30, img: '/fruit/lemon.jpg' },
  { id: 26, name: 'Lime', price: 35, img: '/fruit/lime.jpg' },
  { id: 27, name: 'Lychee', price: 300, img: '/fruit/lychee.jpg' },
  { id: 28, name: 'Mango', price: 150, img: '/fruit/mango.jpg' },
  { id: 29, name: 'Mulberry', price: 280, img: '/fruit/mulberry.jpg' },
  { id: 30, name: 'Nectarine', price: 170, img: '/fruit/nectarine.jpg' },
  { id: 31, name: 'Orange', price: 60, img: '/fruit/orange.jpg' },
  { id: 32, name: 'Papaya', price: 90, img: '/fruit/papaya.jpg' },
  { id: 33, name: 'Passionfruit', price: 350, img: '/fruit/passionfruit.jpg' },
  { id: 34, name: 'Peach', price: 140, img: '/fruit/peach.jpg' },
  { id: 35, name: 'Pear', price: 100, img: '/fruit/pear.jpg' },
  { id: 36, name: 'Persimmon', price: 200, img: '/fruit/persimmon.jpg' },
  { id: 37, name: 'Pineapple', price: 80, img: '/fruit/pineapple.jpg' },
  { id: 38, name: 'Plantain', price: 45, img: '/fruit/plantain.jpg' },
  { id: 39, name: 'Plum', price: 130, img: '/fruit/plum.jpg' },
  { id: 40, name: 'Pomegranate', price: 180, img: '/fruit/pomegranate.jpg' },
  { id: 41, name: 'Pomelo', price: 120, img: '/fruit/pomelo.jpg' },
  { id: 42, name: 'Quince', price: 190, img: '/fruit/quince.jpg' },
  { id: 43, name: 'Raspberry', price: 320, img: '/fruit/raspberry.jpg' },
  { id: 44, name: 'Starfruit', price: 210, img: '/fruit/starfruit.jpg' },
  { id: 45, name: 'Strawberry', price: 250, img: '/fruit/strawberry.jpg' },
  { id: 46, name: 'Tangerine', price: 70, img: '/fruit/tangerine.jpg' },
  { id: 47, name: 'Watermelon', price: 50, img: '/fruit/watermelon.jpg' },
  { id: 48, name: 'Yuzu', price: 400, img: '/fruit/yuzu.jpg' },
];

const vegetables = [
  { id: 101, name: 'Artichoke', price: 120, img: '/vegetable/artichoke.jpg' },
  { id: 102, name: 'Asparagus', price: 180, img: '/vegetable/asparagus.jpg' },
  { id: 103, name: 'Beetroot', price: 50, img: '/vegetable/beetroot.jpg' },
  { id: 104, name: 'Bell Pepper', price: 80, img: '/vegetable/bell_pepper.jpg' },
  { id: 105, name: 'Broccoli', price: 90, img: '/vegetable/broccoli.jpg' },
  { id: 106, name: 'Brussels Sprout', price: 150, img: '/vegetable/brussels_sprout.jpg' },
  { id: 107, name: 'Cabbage', price: 30, img: '/vegetable/cabbage.jpg' },
  { id: 108, name: 'Carrot', price: 40, img: '/vegetable/carrot.jpg' },
  { id: 109, name: 'Cauliflower', price: 60, img: '/vegetable/cauliflower.jpg' },
  { id: 110, name: 'Celery', price: 70, img: '/vegetable/celery.jpg' },
  { id: 111, name: 'Chard', price: 90, img: '/vegetable/chard.jpg' },
  { id: 112, name: 'Collard Greens', price: 80, img: '/vegetable/collard_greens.jpg' },
  { id: 113, name: 'Corn', price: 35, img: '/vegetable/corn.jpg' },
  { id: 114, name: 'Cucumber', price: 25, img: '/vegetable/cucumber.jpg' },
  { id: 115, name: 'Daikon', price: 45, img: '/vegetable/daikon.jpg' },
  { id: 116, name: 'Eggplant', price: 50, img: '/vegetable/eggplant.jpg' },
  { id: 117, name: 'Fennel', price: 110, img: '/vegetable/fennel.jpg' },
  { id: 118, name: 'Garlic', price: 200, img: '/vegetable/garlic.jpg' },
  { id: 119, name: 'Ginger', price: 180, img: '/vegetable/ginger.jpg' },
  { id: 120, name: 'Green Bean', price: 60, img: '/vegetable/green_bean.jpg' },
  { id: 121, name: 'Kale', price: 100, img: '/vegetable/kale.jpg' },
  { id: 122, name: 'Kohlrabi', price: 75, img: '/vegetable/kohlrabi.jpg' },
  { id: 123, name: 'Leek', price: 85, img: '/vegetable/leek.jpg' },
  { id: 124, name: 'Lettuce', price: 40, img: '/vegetable/lettuce.jpg' },
  { id: 125, name: 'Mushroom', price: 120, img: '/vegetable/mushroom.jpg' },
  { id: 126, name: 'Okra', price: 55, img: '/vegetable/okra.jpg' },
  { id: 127, name: 'Onion', price: 30, img: '/vegetable/onion.jpg' },
  { id: 128, name: 'Parsnip', price: 70, img: '/vegetable/parsnip.jpg' },
  { id: 129, name: 'Pea', price: 65, img: '/vegetable/pea.jpg' },
  { id: 130, name: 'Potato', price: 25, img: '/vegetable/potato.jpg' },
  { id: 131, name: 'Pumpkin', price: 50, img: '/vegetable/pumpkin.jpg' },
  { id: 132, name: 'Radish', price: 35, img: '/vegetable/radish.jpg' },
  { id: 133, name: 'Scallion', price: 30, img: '/vegetable/scallion.jpg' },
  { id: 134, name: 'Shallot', price: 90, img: '/vegetable/shallot.jpg' },
  { id: 135, name: 'Spinach', price: 45, img: '/vegetable/spinach.jpg' },
  { id: 136, name: 'Squash', price: 55, img: '/vegetable/squash.jpg' },
  { id: 137, name: 'Sweet Potato', price: 40, img: '/vegetable/sweet_potato.jpg' },
  { id: 138, name: 'Tomato', price: 35, img: '/vegetable/tomato.jpg' },
  { id: 139, name: 'Turnip', price: 30, img: '/vegetable/turnip.jpg' },
  { id: 140, name: 'Yam', price: 45, img: '/vegetable/yam.jpg' },
  { id: 141, name: 'Zucchini', price: 50, img: '/vegetable/zucchini.jpg' },
];

export default function Store() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [tab, setTab] = useState('fruits');

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const items = tab === 'fruits' ? fruits : vegetables;

  return (
    <div className="store">
      {/* Header */}
      <div className="store-header">
        <h1>🏪 Super Market Store</h1>
        <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
          <FiShoppingCart size={22} />
          {itemCount > 0 && <span className="badge">{itemCount}</span>}
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={tab === 'fruits' ? 'tab active' : 'tab'}
          onClick={() => setTab('fruits')}
        >
          🍎 Fruits ({fruits.length})
        </button>
        <button
          className={tab === 'vegetables' ? 'tab active' : 'tab'}
          onClick={() => setTab('vegetables')}
        >
          🥬 Vegetables ({vegetables.length})
        </button>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <div className="card-info">
              <h3>{item.name}</h3>
              <p className="price">Rs. {item.price}/kg</p>
              <button className="add-btn" onClick={() => addToCart(item)}>
                <FiPlus size={16} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="cart-overlay" onClick={() => setShowCart(false)}>
          <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>🛒 Your Cart</h2>
              <button className="close-btn" onClick={() => setShowCart(false)}>
                <FiX size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="empty">Cart is empty</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.img} alt={item.name} className="cart-img" />
                      <div className="cart-item-info">
                        <p className="cart-item-name">{item.name}</p>
                        <p className="cart-item-price">Rs. {item.price}/kg</p>
                      </div>
                      <div className="qty-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <FiMinus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <FiPlus size={14} />
                        </button>
                      </div>
                      <button className="del-btn" onClick={() => removeFromCart(item.id)}>
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <h3>Total: Rs. {total}</h3>
                  <button className="checkout-btn">Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
