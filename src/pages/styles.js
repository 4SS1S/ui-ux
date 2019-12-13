import styled from 'styled-components';

export const Page = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: .9s;
  transform: translate(0,${props => props.active ? 0 : 100}%);
  /* animation: bg-anim 1s infinite ease; */
  /* background: linear-gradient(#ff0000,#00ff00,#0000ff); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;

  @keyframes bg-anim {
    0% {
      background: linear-gradient(#ff0000,#00ff00,#0000ff);
    }
    100% {
      background: linear-gradient(#0000ff,#ff0000,#00ff00);
    }
  }
`;

export const Titulo = styled.div `
  position: relative;
  display: flex;
  font-size: 5em;
  color: #fff;
  text-shadow: 0 0 15px #303030;
  text-align: center;
  transition: 1s ease;
  padding: 5px 125px;
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(#ddd0, #fff, #0000) 1 100%;
  

  :hover {
    text-shadow: 0 0 15px #593;
  }
`;