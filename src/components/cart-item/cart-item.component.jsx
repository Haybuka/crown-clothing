import React from "react";
import { SpanName, ItemDetails, CartItemContainer } from "./cart-item.styles";
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <SpanName>{name}</SpanName>
        <span className="price">
          {quantity} x $ {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
