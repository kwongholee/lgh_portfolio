import {styled} from 'styled-components';
import {useNavigate} from 'react-router-dom';

export default function Navbar() {
  const Title = styled.div`
    display: inline-block;
    font-family: Itim;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: linear-gradient(90deg, #F91E1E 0%, #FD9B29 7.81%, #C5DA43 21.35%, #85EE1D 33.85%, #3BF34E 45.83%, #54F2AF 56.25%, #4F88F7 66.67%, #5A35ED 74.48%, #A837EE 84.9%, #E53BE9 90.63%, #FE005C 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    float: left;
    cursor: pointer;
    margin: 10px;
  `;

  const Direct = styled.div`
    display: inline-block;
    color: #000;
    text-align: center;
    font-family: Itim;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    float: right;
    margin: 20px;
    cursor: pointer;
  `

  let navigate = useNavigate();

  return(
    <div style={{width: '100%', backgroundColor: '#D9D9D9', height: '10%', textAlign: 'justify', overflow: 'hidden'}}>
      <Title>Gwangholee's Portfolio</Title>
      <Direct onClick={() => {navigate('/introduce')}}>Introduce</Direct>
      <Direct onClick={() => {navigate('/work')}}>Works</Direct>
      <Direct onClick={() => {navigate('/question')}}>Questions</Direct>
    </div> 
  )
}