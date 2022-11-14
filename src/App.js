import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home";
import Person from "./pages/Person";

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/person/:username" exact component={Person} />
        </Router>
    );
}

export default App;

