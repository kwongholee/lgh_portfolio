import styled from 'styled-components';

export default function InputBar() {
  const Input = styled.input`
    border: 2px solid black;
    border-radius: 10px
    width: 850px;
    height: 70px;
  `

  return(
    <Input></Input>
  )
}