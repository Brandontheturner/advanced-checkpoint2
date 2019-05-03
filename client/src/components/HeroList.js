import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding: 50px;
`;

const deleteHero = (id, props) => {
  fetch(`/api/heros/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(result => props.deleteHero(id));
};

const HeroList = props => (
  <Wrapper>
    <h3>Current Heroes</h3>
    {props.heros.map((hero, index) => (
      <p key={index}>
        {hero.heroName} &nbsp;
        <Link to={`/heros/${hero._id}`}>details</Link>
        &nbsp;{" "}
        <Button
          onClick={() => deleteHero(hero._id, props)}
          type="Submit"
          variant="contained"
        >
          Delete Hero
        </Button>
      </p>
    ))}
  </Wrapper>
);

HeroList.propTypes = {
  heros: PropTypes.array
};

export default HeroList;
