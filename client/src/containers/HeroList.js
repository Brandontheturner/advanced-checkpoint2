import { connect } from "react-redux";
import HeroList from "../components/HeroList";
import { deleteHero } from "../redux/actions";

const mapStateToProps = store => {
  return {
    heros: store.heros
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteHero: id => dispatch(deleteHero(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList);
