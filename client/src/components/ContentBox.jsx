import {styled} from 'styled-components';

export default function ContentBox() {
  const Box = styled.div`
    width: 1250px;
    height: 100px;
    background: rgba(66, 240, 146, 0.40);
    box-shadow: 3px 4px 3px 1px rgba(0, 0, 0, 0.25);
  `

  return(
    <Box>
      <div>
        작성 날짜
      </div>
      <div>
        제목
        작성자
      </div>
      <div>
        아래방향 화살표
      </div>
    </Box>
  )
}