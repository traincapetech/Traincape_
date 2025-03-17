// import { useState } from "react";
// import { FaCheck } from "react-icons/fa";
// import CartAmountToggle from "./CartAmountToggle";
// import { NavLink } from "react-router-dom";
// import { useCartContext } from "./CartContext";

// const AddToCart = ({ product }) => {
//   const { addToCart } = useCartContext();
//   const { id, colors, stock } = product;
//   const [color, setColor] = useState(colors[0]);
//   const [amount, setAmount] = useState(1);

//   const setDecrease = () => {
//     setAmount(amount > 1 ? amount - 1 : 1);
//   };

//   const setIncrease = () => {
//     setAmount(amount < stock ? amount + 1 : stock);
//   };

//   return (
//     <div>
//       <div className="flex items-center gap-2 mb-4">
//         <p className="font-medium">Color:</p>
//         {colors.map((curColor, index) => (
//           <button
//             key={index}
//             style={{ backgroundColor: curColor }}
//             className={`w-8 h-8 rounded-full border-none cursor-pointer transition-opacity duration-200 ${
//               color === curColor ? "opacity-100 ring-2 ring-gray-700" : "opacity-50 hover:opacity-100"
//             }`}
//             onClick={() => setColor(curColor)}
//           >
//             {color === curColor && <FaCheck className="text-white" />}
//           </button>
//         ))}
//       </div>

//       <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />

//       <NavLink to="/cart" onClick={() => addToCart(id, amount, product)}>
//         <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Add To Cart</button>
//       </NavLink>
//     </div>
//   );
// };

// export default AddToCart;