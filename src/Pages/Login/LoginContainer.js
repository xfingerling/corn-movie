import { connect } from "react-redux";
import * as sessionSelectors from "../../Redux/session/sessionSelectors";
import Login from "./Login";

const mapStateToProps = (state) => ({
  authenticated: sessionSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Login);
