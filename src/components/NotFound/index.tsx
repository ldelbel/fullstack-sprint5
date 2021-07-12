import { Link } from "react-router-dom";
import { StyledNotFound } from "./styled";

export function NotFound() {
  return (
    <StyledNotFound>
      <img src="/assets/not_found.svg" alt="" />
      <p>Ops! Página não Encontrada</p>
      <Link to="/"><span>Clique aqui para voltar para Home</span></Link>
    </StyledNotFound>

  )
}