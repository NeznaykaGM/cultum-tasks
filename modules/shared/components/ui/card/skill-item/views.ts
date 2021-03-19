import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const ImageWrapper = styled.div``;

export const ItemWrapper = styled.div`
  flex-direction: column;
  margin: 0px 50px 40px;
  @media screen and (max-width: 450px) {
    margin: 0px 20px 20px;
  }
`;
export const Title = styled.span`
  font-size: 24px;
`;
