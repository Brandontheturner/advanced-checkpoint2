import React, { Component, Fragment } from "react";
import styled from "styled-components";
import HeroList from "../containers/HeroList";
import HeroActions from "../containers/HeroActions";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Home extends Component {
  componentDidMount() {
    console.log("HomeMounted");
    fetch("/api/heros")
      .then(res => res.json())
      .then(heros => {
        this.props.listHeros(heros);
        console.log("heros", heros);
      })
      .catch(() => {
        this.props.listHeros([]);
        console.log("Home didMount");
      });
  }

  render() {
    return (
      <Fragment>
        <Center>
          <h1>Super Hero Registry</h1>
        </Center>
        <Center>
          <FlexWrapper>
            <HeroList />
            <HeroActions />
          </FlexWrapper>
        </Center>
      </Fragment>
    );
  }
}

export default Home;
