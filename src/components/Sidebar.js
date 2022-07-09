import styled from "styled-components";
import { nanoid } from "nanoid";
import img from "../img/icon.jpg";
import Icon from "./Icon";
import { Data } from "./Data";
export default function Sidebar(params) {
  return (
    <SidebarWrap>
      <ul>
        {Data.map((data) => (
          <Item key={nanoid()}>
            <Button name={data.value} type="button">
              <Icon
                width="28px"
                height="28px"
                fill="#B3BEC2"
                iconName={data.iconName}
              />
            </Button>
          </Item>
        ))}
      </ul>
      <MainMenuMaster>
        <Settings>
          <Button type="button" margin={"0px 0px 8px 0px"}>
            <Icon
              width="28px"
              height="28px"
              fill="#B3BEC2"
              iconName="icon-notification"
            />
            <Text>309</Text>
          </Button>
          <Button type="button">
            <Icon
              width="28px"
              height="28px"
              fill="#B3BEC2"
              iconName="icon-settings"
            />
          </Button>
        </Settings>
        <img src={img} alt="user icon" />
      </MainMenuMaster>
    </SidebarWrap>
  );
}

const SidebarWrap = styled.div`
  height: calc(100vh - 128px);
  position: relative;
  width: 48px;
  padding: 72px 10px 56px 10px;
  border-right: 1px solid #d0e7ef;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainMenuMaster = styled.div`
  display: flex;
  flex-direction: column;
`;

const Settings = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const Item = styled.li`
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background-color: rgba(66, 130, 170, 1);
  }
`;
const Text = styled.p`
  text-align: center;
  font-size: 11px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 13.86px;
  color: #ffffff;
  background-color: #e32a99;
  /* overflow: hidden; */
  border-radius: 4px;
  padding: 1px 5px;
  position: absolute;
  top: 0px;
  right: 5px;
`;
