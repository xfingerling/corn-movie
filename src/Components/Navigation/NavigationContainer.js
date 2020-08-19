import { connect } from "react-redux";
import Navigation from "./Navigation";
import { menuToggle } from "../../Redux/navigation/navigationAction";

const mapStateToProps = (state) => ({
  isMenuOpen: state.navigation.menuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  menuToggle: (isOpen) => dispatch(menuToggle(isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
