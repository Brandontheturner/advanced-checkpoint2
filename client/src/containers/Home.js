import { connect } from "react-redux";
import Home from "../components/Home";
import { listHeros } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    listHeros: heros => dispatch(listHeros(heros))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
