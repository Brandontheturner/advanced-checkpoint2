import { connect } from "react-redux";
import HeroList from "../components/HeroList";
import { deleteHero } from "../redux/actions";

const mapStateToProps = store => {
  return {
    heros: store.heros
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    deleteHero: id => dispatch(deleteHero(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(HeroList);
