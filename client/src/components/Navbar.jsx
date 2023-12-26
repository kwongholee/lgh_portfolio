import {styled} from 'styled-components';

export default function Navbar() {
  const Title = styled.div`
    color: #000;
    text-align: center;
    font-family: Itim;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;

  const Direct = styled.div`
    color: #000;
    text-align: center;
    font-family: Itim;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `

  return(
    <div style={{width: '100%', backgroundColor: '#D9D9D9', height: '10%'}}>
      <Title>Gwangholee's Portfolio</Title>
      <Direct>Introduce</Direct>
      <Direct>Works</Direct>
      <Direct>Questions</Direct>
    </div> 
  )
}