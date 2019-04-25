import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";

const FlexForm = styled.form`
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

class HeroActions extends Component {
  state = {
    heroName: "",
    power: "",
    universe: "",
    powerRating: ""
  };

  handleTextChange = e => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  createHero = e => {
    e.preventDefault();
    fetch("/api/heros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        heroName: this.state.heroName,
        power: this.state.power,
        universe: this.state.universe,
        powerRating: this.state.powerRating
      })
    })
      .then(res => res.json())
      .then(result => this.props.createHero(result))
      .then(() => {
        this.setState({
          heroName: "",
          power: "",
          universe: "",
          powerRating: ""
        });
      });
  };

  render() {
    return (
      <div>
        <FlexForm onSubmit={this.createHero}>
          <TextField
            onChange={this.handleTextChange}
            id="heroName"
            label="Hero Name"
            value={this.state.heroName}
            variant="outlined"
          />
          <TextField
            onChange={this.handleTextChange}
            id="power"
            label="Super Hero Power"
            value={this.state.power}
            variant="outlined"
          />
          <TextField
            onChange={this.handleTextChange}
            id="universe"
            label="Super Hero Universe"
            value={this.state.universe}
            variant="outlined"
          />
          <TextField
            onChange={this.handleTextChange}
            id="powerRating"
            label="Super Hero Power Rating"
            value={this.state.powerRating}
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Create Super Hero
          </Button>
        </FlexForm>
      </div>
    );
  }
}

HeroActions.propTypes = {
  createHero: PropTypes.func
};

export default HeroActions;
