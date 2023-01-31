import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const Quantity = styled.div`
  display: flex;
`;
export const CheckoutItemContainer = styled.section`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  ${Quantity},
  .price {
    width: 23%;
  }
`;

export const Name = styled.h3`
  width: 23%;
`;
export const Arrow = styled.p`
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
