import * as Styled from "./styled";
import { placeholders } from "../../data/placeholders";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Input() {
  const [search, setSearch] = useState("");

  return (
    <Styled.InputWrapper>
      <Styled.Input
        placeholder={
          placeholders[Math.floor(Math.random() * placeholders.length)]
        }
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <Link href={"https://www.google.com/search?q=" + search}>
        {" "}
        <Styled.Button>
          <Image
            src="./searchSvg.svg"
            width="32"
            alt="Ícone de busca"
            height="32"
          />
        </Styled.Button>
      </Link>
    </Styled.InputWrapper>
  );
}
