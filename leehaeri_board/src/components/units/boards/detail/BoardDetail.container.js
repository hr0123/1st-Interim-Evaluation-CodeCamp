import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
// import { useQuery } from "@apollo/client";
// import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickMoveToList = () => {
    router.push("/boards");
  };

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: String(router.query.boardId) },
    });
    router.push("/boards");
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
    />
  );
}
