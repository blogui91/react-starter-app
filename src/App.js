import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';


import Header from './components/header';
import Footer from './components/footer';
import HomeView from './views/Home'
import AboutView from './views/About'
import LoginView from './views/Login'

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Container>
        <Route path="/" exact component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route path="/login" component={LoginView} />
      </Container>
      <Footer />
    </div>
  </Router>
)

export default App;
