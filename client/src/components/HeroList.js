import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px;
`;

const deleteHero = (id, props) => {
  e.preventDefault();
  fetch(`/api/heros/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(result => props.deleteHero(this.state.deleteHero(id)));
};

const heroList = props => (
  <Wrapper>
    <h3>Available Heros</h3>
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

export default heroList;
