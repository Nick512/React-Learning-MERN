import React from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/itemModal'
import { Container } from 'reactstrap'
import './bootstrap-4.5.0-dist/css/bootstrap.min.css'
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/authActions'
 
class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }


  render() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
        <ItemModal />
        <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
  }
}

export default App;
