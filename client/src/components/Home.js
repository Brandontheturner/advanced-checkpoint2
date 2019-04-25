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
    fetch("/api/heros")
      .then(res => res.json())
      .then(Heros => this.props.listHeros(Heros))
      .catch(() => this.props.listHeros([]));
  }

  render() {
    return (
      <Fragment>
        <Center>
          <h1>Super Heros</h1>
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
