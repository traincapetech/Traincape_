// import React from "react";
// import CartAmountToggle from "./CartAmountToggle";
// import { FaTrash } from "react-icons/fa";
// import { useCartContext } from "./CartContext";
// import FormatPrice from "./Formatprice";

// const CartItem = ({ id, title, image, description, price, amount }) => {
//   const { removeItem } = useCartContext();

//   return (
//     <div className="cart_heading grid grid-five-column">
//       <div className="cart-image--name">
//         <p>{title}</p>
//         <figure>
//           <img src={image} alt={id} />
//         </figure>
//         <div>
//           <p>{description}</p>
//         </div>
//       </div>

//       <div className="cart-hide">
//         <p>
//           <FormatPrice price={price} />
//         </p>
//       </div>

//       <CartAmountToggle
//         amount={amount}
//         setDecrease={() => {}}
//         setIncrease={() => {}}
//       />

//       <div className="cart-hide">
//         <p>
//           <FormatPrice price={price * amount} />
//         </p>
//       </div>

//       <div>
//         <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
//       </div>
//     </div>
//   );
// };

// export default CartItem;
