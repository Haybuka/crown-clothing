import styled from "styled-components";
import { Link } from "react-router-dom";

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
export const Title = styled(Link)`
  font-size: 28px;
  margin: 30px 0;
  cursor: pointer;
`;
export const CategoryPreviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;
