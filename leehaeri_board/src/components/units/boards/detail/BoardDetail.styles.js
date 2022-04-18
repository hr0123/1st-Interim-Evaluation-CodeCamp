import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 764px;
  height: 450px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
export const Body = styled.div`
  width: 764px;
  height: 388px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px 20px 40px;
`;
export const Head = styled.div`
  width: 684px;
  border-bottom: 1px solid #6400ff;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 20px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 670px;
  height: 125px; */
  margin: 20px 40px 30px 40px;
`;
export const Image = styled.img`
  width: 220px;
  height: 125px;
  margin-right: 15px;
`;
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: initial;
  justify-content: space-between;
`;
export const Writer = styled.div`
  height: 20px;
  font-size: 14px;
  font-weight: bold;
`;
export const Contents = styled.div`
  width: 564px;
  font-size: 15px;
`;
export const Bottom = styled.div`
  width: 260px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 30px;
  border-color: #6400ff;
  background-color: #6400ff;
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;
