import { useRouter } from "next/router";
import styled from "@emotion/styled";

const MenuWrapper = styled.div`
  width: 200px;
  height: 708px;
  border: 1px solid white;
  box-shadow: 0px 0px 5px gray;
  border-radius: 10px;
  background-color: white;
  text-align: left;
  padding: 30px 20px 530px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 5px;
`;
const Head = styled.div`
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 30px;
`;
const MenuMap = styled.div`
  width: 160px;
`;
const Menus = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const NAVIGATION_MENUS = [
  { name: "전체 글 보기", page: "/boards" },
  { name: "새 글 작성", page: "/boards/new" },
];

export default function Navigation() {
  const router = useRouter();

  const onClickMenu = (event) => {
    router.push(event.target.id);
  };

  return (
    <MenuWrapper>
      <Head>TALKR</Head>
      {NAVIGATION_MENUS.map((el) => (
        <MenuMap key={el.page}>
          <Menus id={el.page} onClick={onClickMenu}>
            {el.name}
          </Menus>
        </MenuMap>
      ))}
    </MenuWrapper>
  );
}
