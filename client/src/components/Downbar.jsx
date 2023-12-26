import styled from 'styled-components';

export default function Downbar() {
  const Icon = styled.div`
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #D9D9D9;
    color: black;
  `

  return(
    <div style={{width: '100%', height: '10%', backgroundColor: 'black', color: 'white'}}>
      <div>
        <Icon>icon 1</Icon>
        <Icon>icon 2</Icon>
        <Icon>icon 3</Icon>
      </div>

      <div style={{textAlign: 'center'}}>
        © 2024. Lee Gwang Ho. All rights reserved 
      </div>
    </div>
  )
}