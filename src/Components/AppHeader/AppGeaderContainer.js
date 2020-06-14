import { connect } from "react-redux";
import AppHeader from "./AppHeader";
import * as sessionSelectors from "../../Redux/session/sessionSelectors";
import * as sessionAction from "../../Redux/session/sessionAction";

const mapStateToProps = (state) => ({
  authenticated: sessionSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onLogOut: sessionAction.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
