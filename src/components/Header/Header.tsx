import * as S from "./Header.styles";
import logoimg from '../../assets/images/logo.svg'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <S.Header>
      <Link to="/">
        <img src={logoimg} alt="Logo Cripto App" />
      </Link>
    </S.Header>
  )
}