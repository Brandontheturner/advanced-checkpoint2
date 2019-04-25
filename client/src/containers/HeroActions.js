import { connect } from "react-redux";
import HeroActions from "../components/HeroActions";
import { createHero } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    createHero: hero => dispatch(createHero(hero))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HeroActions);
