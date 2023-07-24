import React from 'react'
import styled from 'styled-components';
// import Logo from "../../public/logoUTRPR.gif"

const Header = () => {

  const LogoWithTextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem
`;

  const Logo = styled.img`
  width: 200px; /* Ajuste o tamanho da logo conforme necessário */
`;

  const Texto = styled.span`
  margin-left: 2rem; /* Espaçamento entre a logo e o texto */
  font-weight: 500;
`;


  return (
    <div>

      <LogoWithTextWrapper>
        <Logo src="/logoUTRPR.gif" alt="Logo" />
        <Texto>
          MINISTÉRIO DA EDUCAÇÃO <br />
          UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ<br />
          DEPARTAMENTO DE RECURSOS HUMANOS<br />
          DIVISÃO DE CADASTRO E PAGAMENTO<br />
        </Texto>
      </LogoWithTextWrapper>




      {/* < Wrapper>
        <Logo>
          
        </Logo>
        <img style={{ width: "250px", height: 'auto' }} src='/logoUTRPR.gif' alt="Minha Imagem" />
        <Header>
          
          
        </Header>
      </Wrapper> */}

    </div>
  )
}

export default Header