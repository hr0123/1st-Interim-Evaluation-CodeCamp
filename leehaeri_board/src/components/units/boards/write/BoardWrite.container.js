import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // const [fileUrls, setFileUrls] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // useEffect(() => {
  //   if (props.data?.fetchBoard.images?.length) {
  //     setFileUrls([...props.data?.fetchBoard.images]);
  //   }
  // }, [props.data]);

  const onClickPost = async () => {
    if (title !== "" && contents !== "" && writer !== "" && password !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              images: fileUrls,
            },
          },
        });
        console.log(result);
        alert("게시물이 성공적으로 등록되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      alert("게시물 수정에 성공했습니다.");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert(error);
    }
  };

  const onClickCancel = () => {};

  return (
    <BoardWriteUI
      isEdit={props.isEdit}
      data={props.data}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onClickPost={onClickPost}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
