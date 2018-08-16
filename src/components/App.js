/* @flow */

import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
//component
import Header from './landing/Header';
import PageNotFound from './common/PageNotFound';
import CourseListContainer from './course/CourseListContainer';
import AddOrEditCourseContainer from './course/AddOrEditCourseContainer';
import EditContainer from './course/EditContainer';
import { FetchDataList } from '../action';

const history = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    this.props.FetchDataList()
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/PageTable" component={CourseListContainer}/>
              <Route exact path="/pageAdd" component={AddOrEditCourseContainer} />
              <Route path="/pageEdit/:id" component={EditContainer} />
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default connect(null,{FetchDataList})(App);
