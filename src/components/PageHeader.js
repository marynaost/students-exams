import styled from "styled-components";
import Icon from "./Icon";
export default function PageHeader(params) {
  return (
    <Headerwrap>
      <LeftSide>
        <PageSectionName>
          <Icon
            width="16px"
            height="16px"
            fill="#B3BEC2"
            iconName="icon-task-list"
          />
          <Text margin={"0px 8px"}>Exams</Text>
          <Icon
            width="16px"
            height="16px"
            fill="#B3BEC2"
            iconName="icon-chevron_right"
          />
          <Text margin={"0px 0px 0px 8px"}>New Exam Title Here</Text>
        </PageSectionName>
        <PageSectionTitle>New Exam Title Here</PageSectionTitle>
      </LeftSide>
      <RightSide>
        <Button type="button" margin={"0px 24px 0px 0px"}>
          <Icon
            width="20px"
            height="20px"
            fill="currentColor"
            iconName="icon-clear"
          />
          Delete Exam
        </Button>
        <Button primary type="button">
          <Icon
            width="20px"
            height="20px"
            fill="currentColor"
            iconName="icon-check"
          />
          Save Exam
        </Button>
      </RightSide>
    </Headerwrap>
  );
}

const Headerwrap = styled.section`
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightSide = styled.div`
  display: flex;
`;

const PageSectionName = styled.div`
  height: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const PageSectionTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2;
  text-decoration-line: underline;

  color: #4282aa;
`;

const Text = styled.p`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  color: #727783;
  margin: ${(props) => props.margin};
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  width: 137px;
  height: 36px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  border-radius: 4px;
  fill: #b3bec2;
  margin: ${(props) => props.margin};
  color: ${(props) => (props.primary ? "white" : "rgba(119, 119, 119, 1)")};
  background-color: ${(props) =>
    props.primary ? "rgba(66, 130, 170, 1);" : "transparent"};
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background-color: rgba(66, 130, 170, 1);
    color: white;
    fill: white;
  }
`;
