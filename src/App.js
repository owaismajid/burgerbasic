import React, { Component } from 'react';

import Layout from "./Components/Layout/Layout"
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
