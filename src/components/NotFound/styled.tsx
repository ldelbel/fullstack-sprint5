import styled from 'styled-components';

export const StyledNotFound = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 50rem;
  }

  p { 
    font-weight: 400;
    font-size: 3rem;
    margin-top: 4rem;
  }

  a { 
    margin-top: 3rem;
    color: #6C63FF;
  }
`