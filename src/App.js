import React from 'react'
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Header from './components/header/Header';
import HomePages from './home/HomePages';
import SinglePage from './components/watch/SinglePage';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element = {<HomePages/>} />
          
          <Route path='/singlepage/:id' element={<SinglePage/>} exact />
        </Routes>
        <Footer/>
    </Router>

  )
}

export default App
