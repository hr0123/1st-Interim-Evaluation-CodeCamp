import * as S from "./BoardWrite.styles";
import ImageUploadPage from "../../../commons/uploads";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props) {
  return (
    <S.Wrapper>
      <S.ContentsWrapper>
        <S.Head>{props.isEdit ? "게시물 수정" : "새 글 작성"}</S.Head>
        <S.BodyWrapper>
          <S.Title>제목</S.Title>
          <S.InputTitle
            type="text"
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
        </S.BodyWrapper>
        <S.BodyWrapper>
          <S.Title> 내용</S.Title>
          <S.InputContents
            type="text"
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
        </S.BodyWrapper>
        <S.BodyWrapper>
          <S.Title>이미지</S.Title>
          {props.fileUrls.map((el, index) => (
            <ImageUploadPage
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.BodyWrapper>
        <S.Bottom>
          <S.BodyWrapper>
            <S.Title>작성자</S.Title>
            <S.InputWriter
              type="text"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer || ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
          </S.BodyWrapper>
          <S.BodyWrapper>
            <S.Title>비밀번호</S.Title>
            <S.InputPassword
              type="password"
              onChange={props.onChangePassword}
            />
          </S.BodyWrapper>
        </S.Bottom>
      </S.ContentsWrapper>
      <S.ButtonWrapper>
        <S.Button
          onClick={props.isEdit ? props.onClickUpdate : props.onClickPost}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}
        </S.Button>
        <S.Button onClick={props.onClickCancel}>취소</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
