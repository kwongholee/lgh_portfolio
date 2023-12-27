import styled from 'styled-components'

export default function SearchBtn() {
  const Btn = styled.div`
    width: 100px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    background: linear-gradient(90deg, #42F092 0%, #42F092 0.01%, #42B1F0 100%);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: Itim;
    cursor: pointer;
  `

  return(
    <div>
      <Btn>Search</Btn>
    </div>
  )
}