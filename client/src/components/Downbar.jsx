import styled from 'styled-components';

export default function Downbar() {
  const Icon = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background: #D9D9D9;
    color: black;
    margin: 10px;
  `

  return(
    <div style={{width: '100%', height: '13%', backgroundColor: 'black', color: 'white', textAlign: 'center', position: 'fixed', left: 0, bottom: 0}}>
      <Icon>Gmail</Icon>
      <Icon>Github</Icon>
      <Icon>Instagram</Icon>

      <div style={{textAlign: 'center'}}>
        © 2024. Lee Gwang Ho. All rights reserved 
      </div>
    </div>
  )
}