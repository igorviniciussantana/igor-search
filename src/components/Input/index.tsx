import * as Styled from "./styled";
import { placeholders } from "../../data/placeholders";


export default function Input() {
  return (
    <Styled.InputWrapper>
      <Styled.Input placeholder={placeholders[Math.floor(Math.random() * placeholders.length)]}/>
      <Styled.Button >Pesquisar</Styled.Button>

    </Styled.InputWrapper>
  );
}
