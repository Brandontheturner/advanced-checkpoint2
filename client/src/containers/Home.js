import { connect } from "react-redux";
import Home from "../components/Home";
import { listHeros } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    listHeros: hero => dispatch(listHeros(hero))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
