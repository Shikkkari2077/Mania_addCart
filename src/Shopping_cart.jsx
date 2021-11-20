import { React, useState, useEffect } from "react";

const Shopping_cart = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Pesto Kale Pizza",
      price: "510",
      description:
        "Rich Pesto Pizza Topped with Crispy Kale, Drizzled with Our Signature Pesto Kale Mayo",
    },
    {
      id: 2,
      name: "Spicy Paneer Pizza",
      price: "460",
      description:
        "Spicy Paneer made with Kashmiri & Birds Eye Chilli Drizzled with our House Spicy Mayonnaise!",
    },
    {
      id: 3,
      name: "Margherita Pizza",
      price: "650",
      description: "Our Original Sauce & Fresh Basil Leaves with Mozzarella",
    },
    {
      id: 4,
      name: "The ABD Pizza",
      price: "595",
      description:
        "Onion, Capsicum & Birds Eye Chilli on a Classic Margherita for an Extra Zing",
    },
    {
      id: 5,
      name: "Verdure Pizza",
      price: "705",
      description:
        "Sicilian Olives, Bell Peppers, Sweet Corn Kernels, Mini Heirloom Tomatoes, Red Onions with Mozzarella Cheese",
    },
    {
      id: 6,
      name: "The Pizza Davide",
      price: "640",
      description:
        "An Elevation of the Classic Margherita with the Supplement of Roasted Garlic , Soft G.o.a.t Cheese and Our Signature Pesto Sauce with a Personal Touch of Italy",
    },
    {
      id: 7,
      name: "Pizza Ai Porcini",
      price: "730",
      description:
        "Porcini Mushroom Ragout with Fresh Mozzarella Chilli, Lime and Truffle Oil",
    },
    {
      id: 8,
      name: "Fiamma Pizza",
      price: "595",
      description: "Francesco's Signature Fiama with onions and chilly Flakes",
    },
    {
      id: 9,
      name: "Fruits Of The Forest Pizza",
      price: "852",
      description:
        "Thyme Flavoured Button Mushrooms with our Mozzarella & Parmesan Cheese",
    },
    {
      id: 10,
      name: "Insalata & Garden Pizza",
      price: "715",
      description:
        "Margherita Topped with Rocket Leaf Salad, Balsamic Reduction, Heirloom Tomatoes & Pickled Onion Slices",
    },
    {
      id: 11,
      name: "Pizza Bianca",
      price: "620",
      description:
        "An Italian Favorite Topped with Mozzarella, Kalamata Olives, Sliced Mushrooms, Yoghurt and Feta Drizzle",
    },
    {
      id: 12,
      name: "Pizza Primavera",
      price: "475",
      description:
        "Topped with a Selection of Exotic Greens - Asparagus, Sliced Black Olives & Sundried Tomatoes.",
    },
    {
      id: 13,
      name: "Four Cheese Pizza",
      price: "560",
      description:
        "The Perfect Blend of Four Cheeses on a Thin Crust Pizza, Francescos Style!",
    },
    {
      id: 14,
      name: "Double Cheese Margherita Pizza",
      price: "580",
      description:
        "Our Ever Famous Margherita with Extra Cheese, for the Cheese Lovers!",
    },
    {
      id: 15,
      name: "Spicy Margherita Pizza",
      price: "500",
      description:
        "Our In House Buffalo Sauce With Our Classic Margherita to Give You The Perfect Punch of Spice! It's New, It's Loved And We Are Sure You Will Love It To!",
    },
  ]);
  const [cart, setCart] = useState([]);

  const [subtotal, setSubtotal] = useState(0);

  const [display, setDisplay] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const addCart = (product) => {
    setCart([...cart, product]);
    console.log("Add to Cart is Working", cart);
  };

  const removeCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
    console.log("Remove From cart is working", cart);
  };

  var total = 0;
  useEffect(() => {
    if (cart.length) {
      cart.forEach((value) => {
        total = total + parseInt(value.price);
      });
      setSubtotal(total);
    }
  }, [cart]);

  const showCart = () => {
    setDisplay(!display);
  };

  const handleClick = () => {
    setMenuToggle(!menuToggle)
  };

  return (
    <>
      <nav className="navBar">
        <div className="container">
          <div className="MenuToggle" onClick={handleClick}>
            <img className="toggle" src={menuToggle?"./resource/menuc.svg":"./resource/menu.svg"} alt="" />
          </div>
          <div className="nav_logo">
            <span>MANIA</span>
          </div>
          <ul className={menuToggle?"navLinks activeMenu":"navLinks"}>
            <li>
              <img src="./resource/search.svg" alt="" />
              Search
            </li>
            <li>
              <img src="./resource/offers.svg" alt="" />
              Offers
            </li>
            <li>
              <img src="./resource/help.svg" alt="" />
              Help
            </li>
            <li>
              <img src="./resource/signin.svg" alt="" />
              Sign In
            </li>
          </ul>
          <div className="CART" onClick={showCart}>
            <span className={cart.length ? "cart_tag activeTag" : "cart_tag"}>
              Cart
            </span>
            <span
              className={cart.length ? "cart_size activeCart" : "cart_size"}
            >
              {cart.length}
            </span>
          </div>
          <div className={display ? "CART_products" : "CART_Products"}>
            <h1>{cart.length ? "MANIA CART" : "CART EMPTY"}</h1>
            <div className="CartProducts">
              {cart.map((cartData, index) => (
                <div className="navCart" key={index}>
                  <h4>{cartData.name}</h4>
                  <img
                    onClick={() => removeCart(cartData)}
                    src="./resource/delete.svg"
                    alt=""
                  />
                  <span className="price">Rs.{cartData.price}</span>
                </div>
              ))}
            </div>
            <div className="navCheckout">
              <div className="chkHead">
                <h4>Subtotal</h4>
                <h4>Rs.{cart.length ? subtotal : 0}</h4>
              </div>
              <span>Extra charges may apply</span>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </nav>
      <section className="item_section">
        <div className="container">
          <div className="left_menu">
            <ul>
              <li>Pizza</li>
              <li>Veg Pizza</li>
              <li>Non Veg Pizza</li>
              <li>Pastas</li>
              <li>Tacos</li>
              <li>Gellato</li>
              <li>Burgers</li>
              <li>Dolci</li>
              <li>Vadilal</li>
              <li>Dipping Sauce</li>
              <li>Build Your Own Pizza</li>
              <li>Build Your Combo</li>
            </ul>
          </div>
          <div className="middle_menu">
          <div className="category">
              <select name="" id="">
                  <option>Pizza</option>
                  <option>Veg Pizza</option>
                  <option>Non Veg Pizza</option>
                  <option>Pastas</option>
                  <option>Tacos</option>
                  <option>Gellato</option>
                  <option>Burgers</option>
                  <option>Dolci</option>
                  <option>Vadilal</option>
                  <option>Dipping Sauce</option>
                  <option>Build Your Own Pizza</option>
                  <option>Build Your Combo</option>
              </select>
            </div>
            <div className="middle_head">
              <h1>Pizza</h1>
              <h3>Veg Pizza</h3>
              <span>{products.length} Items</span>
              <div className="dishCards">
                {products.map((product, index) => (
                  <div className="card" key={index}>
                    <div className="head">
                      <div className="left">
                        <h3>{product.name}</h3>
                        <span>Rs.{product.price}</span>
                      </div>
                      <div className="right">
                        <button onClick={() => addCart(product)}>Add</button>
                      </div>
                    </div>
                    <span className="description">{product.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right_menu">
            <h1>{cart.length ? "Cart" : "Cart Empty"}</h1>
            <span>
              {cart.length
                ? `${cart.length} ${cart.length < 10 ? "ITEM" : "ITEMS"}`
                : null}
            </span>
            <div className={cart.length ? "div scroll" : "div"}>
              {cart.map((cartData, index) => (
                <div className="card" key={index}>
                  <h4>#. {cartData.name}</h4>
                  <img
                    onClick={() => removeCart(cartData)}
                    src="./resource/delete.svg"
                    alt=""
                  />
                  <span className="price">Rs.{cartData.price}</span>
                </div>
              ))}

              {cart.length ? null : <img src="./resource/kitchen.png" alt="" />}
            </div>
            {cart.length ? (
              <div className="checkout">
                <div className="chkHead">
                  <h4>Subtotal</h4>
                  <h4>Rs.{subtotal}</h4>
                </div>
                <span>Extra charges may apply</span>
                <button>Checkout</button>
              </div>
            ) : (
              <span className="span">
                Good food is always cooking! Go ahead, order some yummy items
                from the menu.
              </span>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopping_cart;
