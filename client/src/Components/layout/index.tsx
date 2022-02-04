import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SideBar = styled.div`
  border: 1px solid black;
  background: gray;
  width: 25%;
`;

const MainView = styled.div`
  width: 75%;
  background: #ffff;
`;

const Layout: React.FC = ({ children }) => {
  let _children = React.Children.toArray(children);

  return (
    <Container>
      <InnerContainer>
        <SideBar>{_children[0]}</SideBar>
        <MainView>{_children[1]}</MainView>
      </InnerContainer>
    </Container>
  );
};

export default Layout;
