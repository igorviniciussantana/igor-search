import * as Styled from "./styled";

export default function Input() {
  return (
    <Styled.InputWrapper>
      <Styled.Input placeholder="Pesquise agora..." />
      <Styled.Button >Pesquisar</Styled.Button>

    </Styled.InputWrapper>
  );
}
