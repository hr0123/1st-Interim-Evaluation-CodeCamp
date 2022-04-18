import Navigation from "./navigation";
import Banner from "./banner";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 1024px;
  height: 768px;
  display: flex;
  flex-direction: row;
  background-color: #fafafa;
  padding: 30px 20px 30px 20px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const Body = styled.div`
  width: 764px;
  height: 708px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

const HIDDEN_HEADERS = ["/boards/new", "boards/edit"];

export default function Layout(props) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      <Navigation />
      <Right>
        {!isHiddenBanner && <Banner />}
        <Body>{props.children}</Body>
      </Right>
    </Wrapper>
  );
}
