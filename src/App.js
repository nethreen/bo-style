import './App.scss';

import HomePage from "./page/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cartAction } from "./redux/actions/card.action";
import Footer from "./component/Footer";
function App() {
  return (
      <div>
        <Router>
          <Switch>
            <Route  path="/" component={HomePage}/>
            <HomePage/>
          </Switch>
            <Footer/>
        </Router>
      </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      cartAction: (data) => cartAction(data),
    },
    dispatch
  );
};
const mapStateToProps = (state) => {
  return {
      movies : state.cart.movies
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
