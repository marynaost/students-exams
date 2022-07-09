import React from "react";
import styled from "styled-components";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  // const ButtonsFunction = (e, name) => {
  //   alert(`${name} was clicked`);
  // };
  // const ButtonMain2Function = (e, name) => {
  //   alert(`${name} was clicked`);
  // };
  // const ButtonMain3Function = (e, name) => {
  //   alert(`${name} was clicked`);
  // };
  return (
    <ExamPage>
      {/* <WhiteFlexRow> */}
      <>
        <Sidebar />
        <MainContent />
        {/* <MainContent height={"900px"}>
        <MainMenuItem gap={"0px"}>
          <PageHeader>
            <Header>
              <FlexColumn gap={"8px"}>
                <MainMenuItem gap={"8px"}>
                  <FlexRow9 gap={"8px"}>
                    <Image4
                      src={"https://file.rendit.io/n/gPa3Qg9cqqfFMyIpLCuc.svg"}
                    />
                    <Title>Exams</Title>
                  </FlexRow9>
                  <Image4
                    src={"https://file.rendit.io/n/up9q3hZjkKPrer39k8hw.svg"}
                  />
                  <Title1>New Exam Title Here</Title1>
                </MainMenuItem>
                <FlexRow10 gap={"16px"}>
                  <FlexRow10 gap={"12px"}>
                    <StudentName>New Exam Title Here</StudentName>
                  </FlexRow10>
                </FlexRow10>
              </FlexColumn>
              <Buttons onClick={(e) => ButtonsFunction(e, "Buttons")}>
                <FlexColumn gap={"10px"}>
                  <MasterButton>
                    <Clear
                      src={"https://file.rendit.io/n/t3Zl9v32DhI2vvAPVXMW.svg"}
                    />
                    <Title2 color={"#777777"}>Delete Exam</Title2>
                  </MasterButton>
                </FlexColumn>
                <FlexColumn gap={"10px"}>
                  <MasterButton1>
                    <Clear
                      src={"https://file.rendit.io/n/QXw2N02kdyncybuIOju1.svg"}
                    />
                    <Title2 color={"#ffffff"}>Save Exam</Title2>
                  </MasterButton1>
                </FlexColumn>
              </Buttons>
            </Header>
          </PageHeader>
        </MainMenuItem>
        <MainMenuItem gap={"20px"}>
          <LeftSide>
            <FlexRow12>
              <FlexRow13>
                <FlexColumn gap={"20px"}>
                  <Counter>
                    <FlexRow9 gap={"12px"}>
                      <Graduationcapf
                        src={
                          "https://file.rendit.io/n/EIAO1nQOwv2zg6mwWIYn.png"
                        }
                      />
                      <MainMenu margin={"0"}>
                        <Title4>Grade</Title4>
                        <Title6 fontSize={"18px"}>Grade 1</Title6>
                      </MainMenu>
                    </FlexRow9>
                  </Counter>
                  <Counter1>
                    <FlexRow9 gap={"12px"}>
                      <Graduationcapf
                        src={
                          "https://file.rendit.io/n/LsXyE398Ys8656nSaytp.png"
                        }
                      />
                      <MainMenu margin={"0"}>
                        <Title4>Subject Area</Title4>
                        <Title6 fontSize={"18px"}>Science</Title6>
                      </MainMenu>
                    </FlexRow9>
                  </Counter1>
                </FlexColumn>
                <Counter2>
                  <FlexRow16>
                    <FlexRow9 gap={"12px"}>
                      <Graduationcapf
                        src={
                          "https://file.rendit.io/n/AzzrLolt1FcI9Wr78mWP.png"
                        }
                      />
                      <MainMenu margin={"0"}>
                        <Title4>Course</Title4>
                        <Title6 fontSize={"20px"}>Biology</Title6>
                      </MainMenu>
                    </FlexRow9>
                  </FlexRow16>
                  <Image5 src={""} />
                  <Image6
                    src={"https://file.rendit.io/n/zZ7WjOztMI7CrdFAEDKx.svg"}
                  />
                  <Image7 src={""} />
                  <FlexRow16>
                    <FlexRow9 gap={"12px"}>
                      <UnsplashCTagwPbQg
                        src={
                          "https://file.rendit.io/n/SE97NuUdX1xG7SkR6Wnv.png"
                        }
                      />
                      <MainMenu margin={"0"}>
                        <Title4>Amount of Time to Complete the Exam </Title4>
                        <Title6 fontSize={"20px"}>180 minutes</Title6>
                      </MainMenu>
                    </FlexRow9>
                  </FlexRow16>
                </Counter2>
              </FlexRow13>
            </FlexRow12>
            <MainContent height={"auto"}>
              <Table>
                <FlexRow20>
                  <Text2>Questions (0)</Text2>
                  <ButtonMain2
                    onClick={(e) => ButtonMain2Function(e, "ButtonMain2")}
                  >
                    <MasterButton2>
                      <Clear
                        src={
                          "https://file.rendit.io/n/0pqvupKY8cprUNHpFhmk.svg"
                        }
                      />
                      <Title2 color={"#4282aa"}>Add Question</Title2>
                    </MasterButton2>
                  </ButtonMain2>
                </FlexRow20>
              </Table>
            </MainContent>
          </LeftSide>
          <Assignee2>
            <Assignee1>
              <MainMenuItem gap={"1px"}>
                <WhiteFlexRow1>
                  <Graduationcapf
                    src={"https://file.rendit.io/n/QXJZqnt6oT1lWc5RRoKr.png"}
                  />
                  <Text3>Assigned Teachers</Text3>
                </WhiteFlexRow1>
              </MainMenuItem>
              <Devider
                src={"https://file.rendit.io/n/Bh5Qlof5hjg4T4GHlLMe.svg"}
              />
              <SchoolsScroll>
                <Schools>
                  <Search1>
                    <Image4
                      src={"https://file.rendit.io/n/Lgku1mKtp6sUSznW84n3.svg"}
                    />
                    <SearchByName />
                  </Search1>
                  <FlexRow21>
                    <FlexRow22>
                      <Text4 color={"#777777"}>All Schools</Text4>
                      <Image9
                        src={
                          "https://file.rendit.io/n/6QnA6VRZEAd8YTSVOGFL.svg"
                        }
                      />
                    </FlexRow22>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/j8MQAP3vnjSIJzynyQYd.svg"
                        }
                      />
                    </CheckBox1>
                  </FlexRow21>
                  <WhiteFlexRow2 backgroundColor={"#ffffff"}>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/XhEmKdmg5l0IpPR2avIg.svg"
                        }
                      />
                    </CheckBox1>
                    <FlexRow24 height={"32px"}>
                      <Text4 color={"#4282aa"}>School A</Text4>
                    </FlexRow24>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/j8MQAP3vnjSIJzynyQYd.svg"
                        }
                      />
                    </CheckBox1>
                  </WhiteFlexRow2>
                  <WhiteFlexRow2 backgroundColor={"transparent"}>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/XhEmKdmg5l0IpPR2avIg.svg"
                        }
                      />
                    </CheckBox1>
                    <FlexRow24 height={"32px"}>
                      <Text4 color={"#777777"}>School B</Text4>
                    </FlexRow24>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/j8MQAP3vnjSIJzynyQYd.svg"
                        }
                      />
                    </CheckBox1>
                  </WhiteFlexRow2>
                  <WhiteFlexRow2 backgroundColor={"transparent"}>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/XhEmKdmg5l0IpPR2avIg.svg"
                        }
                      />
                    </CheckBox1>
                    <FlexRow24 height={"32px"}>
                      <Text4 color={"#777777"}>School C</Text4>
                    </FlexRow24>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/j8MQAP3vnjSIJzynyQYd.svg"
                        }
                      />
                    </CheckBox1>
                  </WhiteFlexRow2>
                  <WhiteFlexRow2 backgroundColor={"transparent"}>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/XhEmKdmg5l0IpPR2avIg.svg"
                        }
                      />
                    </CheckBox1>
                    <FlexRow24 height={"32px"}>
                      <Text4 color={"#777777"}>School D</Text4>
                    </FlexRow24>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/j8MQAP3vnjSIJzynyQYd.svg"
                        }
                      />
                    </CheckBox1>
                  </WhiteFlexRow2>
                  <WhiteFlexRow2 backgroundColor={"transparent"}>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/XhEmKdmg5l0IpPR2avIg.svg"
                        }
                      />
                    </CheckBox1>
                    <FlexRow24 height={"32px"}>
                      <Text4 color={"#777777"}>School E</Text4>
                    </FlexRow24>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/j8MQAP3vnjSIJzynyQYd.svg"
                        }
                      />
                    </CheckBox1>
                  </WhiteFlexRow2>
                  <WhiteFlexRow2 backgroundColor={"transparent"}>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/XhEmKdmg5l0IpPR2avIg.svg"
                        }
                      />
                    </CheckBox1>
                    <FlexRow24 height={"32px"}>
                      <Text4 color={"#777777"}>School F</Text4>
                    </FlexRow24>
                    <CheckBox1>
                      <Image4
                        src={
                          "https://file.rendit.io/n/j8MQAP3vnjSIJzynyQYd.svg"
                        }
                      />
                    </CheckBox1>
                  </WhiteFlexRow2>
                  <FlexRow46>
                    <CheckBox1>
                      <Arrowright6
                        src={
                          "https://file.rendit.io/n/XhEmKdmg5l0IpPR2avIg.svg"
                        }
                      />
                    </CheckBox1>
                    <FlexRow24 height={"14px"}>
                      <SchoolB6>School G</SchoolB6>
                    </FlexRow24>
                    <CheckBox1>
                      <Arrowright6
                        src={
                          "https://file.rendit.io/n/j8MQAP3vnjSIJzynyQYd.svg"
                        }
                      />
                    </CheckBox1>
                  </FlexRow46>
                </Schools>
                <Scroll1
                  src={"https://file.rendit.io/n/f82oFRCvb8C4549Xbifc.svg"}
                />
              </SchoolsScroll>
            </Assignee1>
            <ButtonMain3 onClick={(e) => ButtonMain3Function(e, "ButtonMain3")}>
              <Title21>Assign To Class</Title21>
            </ButtonMain3>
          </Assignee2>
        </MainMenuItem>
      </MainContent> */}
      </>
      {/* </WhiteFlexRow> */}
    </ExamPage>
  );
}
const ExamPage = styled.main`
  display: flex;
`;
const NewRootRoot = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto; */
  /* min-width: 1440px;
  height: 100vh; */
  /* position: relative; */
  /* height: 100vh; */
  /* position: absolute; */
  /* align-items: center; */
`;
const WhiteFlexRow = styled.div`
  background-color: #f6f9fb;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 1px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const WhiteFlexColumn = styled.div`
  width: 48px;
  height: 772px;
  background-color: #ffffff;
  display: flex;
  align-self: stretch;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 72px 10px 56px 10px;
`;
const FlexRow6 = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const Element1 = styled.div`
  text-align: center;
  display: flex;
  font-size: 11px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 13.86px;
  color: #ffffff;
  background-color: #e32a99;
  overflow: hidden;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 1px 5px;
`;
const UserMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
const FlexRow8 = styled.div`
  border-width: 2px;
  border-color: #b2b7c1;
  border-style: solid;
  width: 44px;
  height: 44px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 48px;
`;
const PageHeader = styled.div`
  width: 1371px;
  background-color: #f6f9fb;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
`;
const Header = styled.div`
  width: 1323px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  padding: 24px;
`;
const Title = styled.div`
  font-size: 10px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 14px;
  color: #717782;
`;
const Title1 = styled.div`
  display: flex;
  font-size: 10px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 14px;
  color: #717782;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
const StudentName = styled.div`
  text-align: center;
  display: flex;
  font-size: 30px;
  font-family: Poppins;
  text-decoration: underline;
  font-weight: 700;
  line-height: 36px;
  color: #4282aa;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Buttons = styled.button`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;
const MasterButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
`;
const MasterButton1 = styled.div`
  border-width: 1px;
  border-color: #4282aa;
  border-style: solid;
  background-color: #4282aa;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
`;
const LeftSide = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4px;
`;
const FlexRow12 = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 24px;
`;
const FlexRow13 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
`;
const Counter = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 280px;
  border-radius: 4px;
  padding: 16px 24px 16px 16px;
`;
const Counter1 = styled.div`
  width: 280px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  padding: 16px 24px 16px 16px;
`;
const Counter2 = styled.div`
  width: 616px;
  height: 174px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 1;
  border-radius: 4px;
  padding: 16px 24px 11px 16px;
`;
const Image5 = styled.img`
  width: 23px;
  height: 7px;
`;
const Image6 = styled.img`
  height: 1px;
  align-self: stretch;
  min-width: 588px;
`;
const Image7 = styled.img`
  width: 23px;
  height: 6px;
`;
const UnsplashCTagwPbQg = styled.img`
  width: 34px;
  height: 34px;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 968px;
  padding: 0px 24px 0px 0px;
`;
const FlexRow20 = styled.div`
  width: 992px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`;
const Text2 = styled.div`
  text-align: center;
  display: flex;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 27px;
  color: #193046;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 0px 0px 24px;
`;
const ButtonMain2 = styled.button`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;
const MasterButton2 = styled.div`
  border-width: 1px;
  border-color: #4282aa;
  border-style: solid;
  width: 154px;
  height: 34px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
`;
const Assignee2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
`;
const Assignee1 = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
`;
const WhiteFlexRow1 = styled.div`
  width: 151px;
  background-color: #f6f9fb;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 4px 4px 0px 0px;
  padding: 8px;
`;
const Text3 = styled.div`
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 18px;
  color: #4282aa;
`;
const Devider = styled.img`
  height: 1px;
  align-self: stretch;
  min-width: 335px;
`;
const SchoolsScroll = styled.div`
  width: 335px;
  height: 399px;
  position: relative;
`;
const Schools = styled.div`
  height: 393px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 6px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 10px;
  border-radius: 0px 0px 8px 8px;
  padding: 10px 0px;
`;
const Search1 = styled.div`
  height: 27px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 335px;
  border-radius: 4px;
  padding: 10px 12px 9px 12px;
`;
const SearchByName = styled.div``;
const FlexRow21 = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 311px;
  border-radius: 4px;
  padding: 4px 12px;
`;
const FlexRow22 = styled.div`
  width: 275px;
  height: 32px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
const Image9 = styled.img`
  width: 18.67px;
  height: 21.3px;
`;
const FlexRow46 = styled.div`
  height: 18px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 335px;
  border-radius: 4px;
  padding: 4px 24px 4px 12px;
`;
const SchoolB6 = styled.div`
  width: 160px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 21px;
  color: #777777;
  height: 8px;
`;
const Scroll1 = styled.img`
  width: 8px;
  height: 348px;
  position: absolute;
  top: 51px;
  left: 327px;
`;
const ButtonMain3 = styled.button`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 335px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;
const Title21 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 24px;
  color: #4282aa;
  align-self: stretch;
  border-width: 1px;
  border-color: #4282aa;
  border-style: solid;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  min-width: 333px;
  border-radius: 4px;
  padding: 12px 24px;
`;
const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${(props) => props.margin};
`;
const MainMenuMaster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: flex-start;
  margin: ${(props) => props.margin};
`;
const MainMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const FlexRow = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
`;
const Lsgraph = styled.img`
  width: 28px;
  height: 28px;
`;
// const MainContent = styled.div`
//   display: flex;
//   overflow: hidden;
//   flex-direction: column;
//   gap: 20px;
//   justify-content: flex-start;
//   align-items: flex-start;
//   height: ${(props) => props.height};
// `;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const FlexRow9 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Image4 = styled.img`
  width: 16px;
  height: 16px;
`;
const FlexRow10 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: ${(props) => props.gap};
`;
const Clear = styled.img`
  width: 20px;
  height: 20px;
`;
const Title2 = styled.div`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 19.6px;
  color: ${(props) => props.color};
`;
const Graduationcapf = styled.img`
  width: 32px;
  height: 32px;
`;
const Title4 = styled.div`
  text-align: center;
  display: flex;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 18px;
  color: #193046;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Title6 = styled.div`
  display: flex;
  font-family: Poppins;
  font-weight: 600;
  color: #4282aa;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: ${(props) => props.fontSize};
`;
const FlexRow16 = styled.div`
  width: 596px;
  display: flex;
  flex-direction: row;
  gap: 504px;
  justify-content: flex-start;
  align-items: center;
`;
const Text4 = styled.div`
  width: 160px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 21px;
  color: ${(props) => props.color};
`;
const CheckBox1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
`;
const WhiteFlexRow2 = styled.div`
  height: 40px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 335px;
  border-radius: 4px;
  padding: 4px 24px 4px 12px;
  background-color: ${(props) => props.backgroundColor};
`;
const FlexRow24 = styled.div`
  width: 251px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  height: ${(props) => props.height};
`;
const Arrowright6 = styled.img`
  width: 16px;
  height: 6px;
`;

export default App;
