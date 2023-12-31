//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
//import { createBrowserRouter, RouterProvider } from "react-router-dom"; // importing only two items from react-router-dom
// to install router dom in react project use npm install react-router-dom
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; // For v5 of react-router-dom

function App() {
  // Added router variable contain create browser router function for setting path for routing
  /*const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);*/
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </Router>
      {/*<RouterProvider router={router} />*/}
      {/* Using thar router variable in router provider as router */}
      {/* No need to change anchor tag in navbar to Link and href attribute to to , only set path in href as required */}
    </div>
  );
}

export default App;
