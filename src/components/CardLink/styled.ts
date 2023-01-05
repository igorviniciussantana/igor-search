import styled from "styled-components";

export const Card = styled.section`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
 width: 14rem;


  padding: 1.5rem 0;

  border-radius: 0.5rem;

  border: 2px solid #7de2d1;

  cursor: pointer;

  background-color: #191b1b;
`;

export const Name = styled.p`
  color: #7de2d1;
  font-size: 1.5rem;
`;

export const Icon = styled.img`
  width: 50%;
`;
