import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardList() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const router = useRouter();

  const onClickMoveToBoard = (event) => {
    // if (event.target instanceof Element)
    router.push(`/boards/${event.target.id}`);
  };

  const loadMore = () => {
    // 1.fetchBoards없으면, More로직 중단
    if (!data) return;
    // 2.더 조회하기
    fetchMore({
      // 글 전체갯수를 10(한page당 글 수)로 나누고, 올리고, +1(소숫점아래 포함 위해)
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      // rev(fetchBoards의 useQuery)를 수정 -> 2가지 케이스
      updateQuery: (prev, { fetchMoreResult }) => {
        // 2-(1)더조회할 글 없으면->기존 글 보여주기
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        // 2-(2)더조회할 글 있으면->기존 글+더조회 결과
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoard={onClickMoveToBoard}
      loadMore={loadMore}
    />
  );
}
