import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

class heroDetails extends Component {
  state = {
    hero: {}
  };

  componentDidMount() {
    const heroId = this.props.match.params.id;
    fetch(`/api/heros/${heroId}`)
      .then(res => res.json())
      .then(hero => this.setState({ hero }));
  }

  render() {
    return (
      <Fragment>
        <Center>
          <h1>Hero</h1>
        </Center>
        <Center>
          {this.state.hero.heroName && (
            <div>
              <h4>Hero Name: {this.state.hero.heroName}</h4>
              <h4>Power: {this.state.hero.power}</h4>
              <h4>Universe: {this.state.hero.universe}</h4>
              <h4>powerRating: {this.state.hero.powerRating}</h4>
            </div>
          )}
        </Center>
      </Fragment>
    );
  }
}

export default heroDetails;
