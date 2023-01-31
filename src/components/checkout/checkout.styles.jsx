import styled from "styled-components";

export const Total = styled.h3`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
export const HeaderBlock = styled.h3`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
export const CheckoutHeader = styled.section`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
