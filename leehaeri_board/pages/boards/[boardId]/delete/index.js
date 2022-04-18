import styled from "@emotion/styled";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { DELETE_BOARD } from "./BoardDetail.queries";
import { useRouter } from "next/router";

const Wrapper = styled.div``;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Head = styled.div`
  width: 684px;
  border-bottom: 1px solid #6400ff;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 20px;
`;
const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Password = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: 30px;
`;
const Input = styled.input`
  width: 242px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 5px;
`;
const Error = styled.input`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
const Bottom = styled.div`
  width: 170px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
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

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function BoardDeletePage() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const router = useRouter()

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  };

  const onClickDelete = () => {
    // if(password !== ){
    //   setPasswordError("비밀번호가 일치하지 않습니다.")
    // } else {
      // 삭제
      deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      // router list
      router.push("/boards");
    }
  }

  const onClickCancel = () => {

  }

  return (
    <Wrapper>
      <Body>
        <Head>게시물 삭제</Head>
        <PasswordWrapper>
          <Password>비밀번호</Password>
          <Input type="password" onChange={onChangePassword} />
          <Error>{passwordError}</Error>
        </PasswordWrapper>
      </Body>
      <Bottom>
        <Button onClick={onClickDelete}>삭제</Button>
        <Button onClick={onClickCancel}>취소</Button>
      </Bottom>
    </Wrapper>
  );
}
