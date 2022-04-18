import styled from "@emotion/styled";

export const Wrapper = styled.div`
  overflow: auto;
  /* width: 100%; */
  height: 425px;
  border: none;
  margin-top: 20px;
  padding: 5px;
`;
export const Row = styled.div`
  width: 755px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px gray;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px 15px 30px;
`;
export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
`;
export const Date = styled.div`
  font-size: 14px;
  color: #999999;
`;
