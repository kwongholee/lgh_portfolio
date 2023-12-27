import styled from 'styled-components';

export default function RainbowBtn(props) {
  const Btn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(224, 85, 210, 0.80) 0%, rgba(234, 168, 70, 0.80) 100%);
    color: white;
    text-align: center;
    font-family: Itim;
    cursor: pointer;
  `
  
  return(
    <div>
      <Btn>{props.word}</Btn>
    </div>
  )
}