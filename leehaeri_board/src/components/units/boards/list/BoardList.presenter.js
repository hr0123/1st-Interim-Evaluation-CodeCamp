import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardList.styles";
import InfiniteSroll from "react-infinite-scroller";

export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      <InfiniteSroll
        pageStart={0}
        loadMore={props.loadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoards.map((el) => (
          <S.Row key={el._id}>
            <S.Title id={el._id} onClick={props.onClickMoveToBoard}>
              {el.title}
            </S.Title>
            <S.Date>{getDate(el.createdAt)}</S.Date>
          </S.Row>
        )) || <div></div>}
      </InfiniteSroll>
    </S.Wrapper>
  );
}
