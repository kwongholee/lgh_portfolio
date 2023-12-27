import styled from "styled-components";

export default function NormalBtn(props) {
  const Btn = styled.div`
    width: 150px;
    height: 50px;
    border: 2px solid black;
    border-radius: 5px;
  `

  return(
    <Btn>{props.word}</Btn>
  )
}