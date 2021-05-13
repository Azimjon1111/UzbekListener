import './App.css';
import MyApp from './components/MyApp';
import Function from './components/Function';
import Component from './props/Component';
import Component2 from './props/Component2';
import State from './State/State';
import Backend from './APIfolder/Backend';
import Axios from './APIfolder/Axios';
import Sass from './SassFolder/Sass';
import Navbar from './Navbar'
import About from './About'
import Blog from './Blog';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import JsonApp from './JsonLesson/JsonApp'
import Hooks from './Hooks/Hooks'
import PostList from './API/PostList'
import PostForm from './API/PostForm'
import Practise from './Practise/Practise'
import UseEffect from './UseEffect/UseEffect'
import Sound from './Sound/Sound'
function App() {
  return (
    <BrowserRouter>
     <div className="App">
      {/* <MyApp/>
      <Function/> */}
      {/* <Component name="Azimjon" surname="Bekmuratov" />
      <Component2 text="Learning React" props="Props" /> */}
      {/* <State/> */}
      {/* <Backend/> */}
      {/* <Axios/> */}
      {/* <Sass/> */}
      {/* <Navbar/> */}
      {/* <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>
      </Switch> */}
      {/* <JsonApp/> */}
      {/* <Hooks/> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}
      {/* <Practise/> */}
      {/* <UseEffect/> */}
      <Sound/>
    </div>
    </BrowserRouter>
   
  );
  
}
const Home = () => {
    return(
      <>
      <h1> Home Page </h1>
      <p>This is a home page</p>
      </>
    )
  }

export default App;
