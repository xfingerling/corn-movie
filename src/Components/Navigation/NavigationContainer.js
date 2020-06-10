import { connect } from "react-redux";
import Navigation from "./Navigation";

const mapStateToProps = (state) => ({
  isOpen: state.navigation,
});

export default connect(mapStateToProps)(Navigation);
