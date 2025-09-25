import * as S from "./Home.styles";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom"; 


export const Home = () => {

  return (
    <S.Main>
      <S.Form>
       <input 
       type="text"  
       placeholder="Digite o nome da moeda... Ex: bitcoin"
       />
       <button type="submit">
        <BsSearch size={30} color="#fff"/>
       </button>
      </S.Form>

    <S.Table>
      <thead>
        <tr>
          <th>Moeda</th>
          <th>Valor mercado</th>
          <th>Preço</th>
          <th>Volume</th>
          <th>Mudança 24h</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Moeda">
            <div >
              <Link to={"/detail/bitcoin"}> 
              <span>Bitcoin</span> | BTC   
              </Link>
           </div>  
          </td>    
          <td data-label="Valor mercado">
            1T  
          </td>  
           <td data-label="Preço">
            8.000
          </td>  
           <td data-label="Volume">
            2B
          </td>  
           <td data-label="Mudança 24h">
            <span>1.20</span>
          </td>  
        </tr>
      </tbody>
    </S.Table>

    </S.Main>
  )
}