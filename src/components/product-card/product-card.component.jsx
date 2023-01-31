import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Footer,
  FooterName,
  FooterPrice,
  ProductImg,
  ProductCardContainer,
} from "./product-card";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = (product) => {
    addItemToCart(product);
  };
  return (
    <ProductCardContainer>
      <ProductImg src={imageUrl} alt={`${name}`} />
      <Footer>
        <FooterName>{name} hi</FooterName>
        <FooterPrice>{price}</FooterPrice>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => addProductToCart(product)}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
