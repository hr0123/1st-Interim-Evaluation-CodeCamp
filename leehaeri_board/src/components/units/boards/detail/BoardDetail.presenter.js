import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.Body>
        <S.Head>{props.data?.fetchBoard?.title}</S.Head>
        <S.ImageWrapper>
          {props.data?.fetchBoard.images
            ?.filter((el) => el)
            .map((el) => (
              <S.Image key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </S.ImageWrapper>
        <S.ContentsWrapper>
          <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        </S.ContentsWrapper>
      </S.Body>
      <S.Bottom>
        <S.Button onClick={props.onClickMoveToList}>글목록</S.Button>
        <S.Button onClick={props.onClickMoveToEdit}>수정</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제</S.Button>
      </S.Bottom>
    </S.Wrapper>
  );
}
