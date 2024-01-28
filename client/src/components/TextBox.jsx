import styled from 'styled-components';

export default function Textbox(props) {
  const English = styled.div`
    color: black;
    font-family: Itim;
    font-size: 40px;
    font-weight: 400;
    text-align: center;
  `

  const Korean = styled.div`
    color: black;
    font-size: 30px;
    text-align: center;
  `
  
  return(
    <div>
      <English>{props.english}</English>
      <Korean>{props.korean}</Korean>
    </div>
  )
}