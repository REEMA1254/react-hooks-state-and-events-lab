import React,{useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(!inCart);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <button onClick={handleAddToCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick>Add to Cart</button>
    </li>
    </div>
  );
}

export default Item;
