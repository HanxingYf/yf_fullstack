import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { inject , observer } from 'mobx-react';
// import articlesStore from './stores/articlesStore';
import Article from './pages/Article'

@inject("articlesStore")
@observer
class App extends React.Component{
  render() {
    console.log(this.props);
    return(
      <div>
        <Switch>
          <Route path="/article/:id" component={Article} />
        </Switch>
        App
      </div>
    )
  }
}
export default App
