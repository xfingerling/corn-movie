import { connect } from "react-redux";
import Navigation from "./Navigation";

const mapStateToProps = (state) => ({
  isOpen: state.navigation.menuIsOpen,
});

export default connect(mapStateToProps)(Navigation);
