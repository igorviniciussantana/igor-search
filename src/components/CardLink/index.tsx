import * as Styled from "./styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


interface CardProps {
  img: string;
  title: string;
  url: string;
}

export default function CardLink({ img, title, url }: CardProps) {

  const router = useRouter();
  return (
    <Styled.Card onClick={() => router.push(url)}>
      <Styled.Icon src={img} />
      <Styled.Name>{title}</Styled.Name>
    </Styled.Card>
  );
}
