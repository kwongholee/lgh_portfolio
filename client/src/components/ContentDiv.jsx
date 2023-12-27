import styled from 'styled-components';

export default function ContentDiv(props) {
  const Content = styled.div`
    width: 1200px;
    height: 300px;
  `

  return(
    <Content>{props.content}</Content>
  )
}