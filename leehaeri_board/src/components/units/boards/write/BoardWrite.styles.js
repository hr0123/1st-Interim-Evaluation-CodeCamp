import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
export const ContentsWrapper = styled.div`
  width: 764px;
  height: 648px;
  padding: 40px 40px 73px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 5px gray;
  margin-bottom: 35px;
`;
export const Head = styled.div`
  width: 684px;
  border-bottom: 1px solid #6400ff;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 20px;
`;
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
`;
export const Title = styled.div`
  width: 65px;
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`;
export const InputTitle = styled.input`
  width: 604px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;
export const InputContents = styled.input`
  width: 604px;
  height: 240px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;
export const Bottom = styled.div`
  /* width: 764px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const InputWriter = styled.input`
  width: 242px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin-right: 50px;
`;
export const InputPassword = styled.input`
  width: 242px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin-left: 10px;
`;
export const ButtonWrapper = styled.div`
  width: 170px;
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
  /* background-color: ${(props) => (props.isActive ? "#6400ff" : "gray")}; */
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;
