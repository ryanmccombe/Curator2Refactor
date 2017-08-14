/* Application's main router
    - Changes here should only required if adding an additional route to the application
* */

import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// Route Containers
import Home from './Containers/Home';
import Storylines from './Containers/Storylines';
import Storyline from './Containers/Storyline';
import StorylineEditor from './Containers/StorylineEditor';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact render={() => {
            // Temp dev aide: Everything redirects to editing a storyline
            // return <Redirect to="/storylines" />;
            return <Redirect to="/storyline/0/english/edit" />;
          }} />
          <Route path="/" exact component={Home} />
          <Route path="/storylines" exact component={Storylines} />
          <Route path="/storyline/:id/" exact component={Storyline} />
          <Route path="/storyline/:id/:lang/edit" exact component={StorylineEditor} />
        </div>
      </BrowserRouter>
    );
  }
}