import * as Styled from "./styled";
import { placeholders } from "../../data/placeholders";
import Image from "next/image";


export default function Input() {
  return (
    <Styled.InputWrapper>
      <Styled.Input placeholder={placeholders[Math.floor(Math.random() * placeholders.length)]}/>
      <Styled.Button ><Image src='./searchSvg.svg' width='32' alt='Ícone de busca' height='32'/></Styled.Button>

    </Styled.InputWrapper>
  );
}
