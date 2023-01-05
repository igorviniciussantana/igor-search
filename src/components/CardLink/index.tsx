import * as Styled from "./styled";
import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
}

export default function CardLink({ img, title }: CardProps) {
  return (
    <Styled.Card>
      <Styled.Icon src={img} />
      <Styled.Name>{title}</Styled.Name>
    </Styled.Card>
  );
}
