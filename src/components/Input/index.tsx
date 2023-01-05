import * as Styled from "./styled";
import { placeholders } from "@data/placeholders";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

export default function Input() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.push("https://www.google.com/search?q=" + search);
  };

  return (
    <Styled.InputWrapper onSubmit={handleSubmit}>
      <Styled.Input
        placeholder={
          placeholders[Math.floor(Math.random() * placeholders.length)]
        }
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <Styled.Button type="submit">
        <Image
          src="./searchSvg.svg"
          width="32"
          alt="Ícone de busca"
          height="32"
        />
      </Styled.Button>
    </Styled.InputWrapper>
  );
}
