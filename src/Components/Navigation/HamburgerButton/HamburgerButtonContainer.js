import { connect } from "react-redux";
import HamburgerButton from "./HamburgerButton";
import { menuToggle } from "../../../Redux/navigation/navigationAction";

const mapStateToProps = (state) => ({
  isMenuOpen: state.navigation,
});

const mapDispatchToProps = (dispatch) => ({
  menuToggle: (isOpen) => dispatch(menuToggle(isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerButton);
