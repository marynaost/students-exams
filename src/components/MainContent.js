import styled from "styled-components";
import PageHeader from "./PageHeader";
export default function MainContent(params) {
  return (
    <MainContentWrap>
      <PageHeader />
    </MainContentWrap>
  );
}

const MainContentWrap = styled.div`
  width: calc(100vw - 68px);
  background-color: rgba(246, 249, 251, 1);
`;
