import './App.css';
import Home from './Home';
import Pfes from './Components/Pfes';
import Etudiants from './Components/Etudiants';
import Enseignants from './Components/Enseignants';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import Logout from './Components/Logout';
import signin from './Components/Signin';
import signup from './Components/Signup';
import etudiant from './Components/etudiant.component'
import AjouterEtudiant from './Components/AjouterEtudiant';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AjouterEnseignant from './Components/AjouterEnseignant';
import enseignant from "./Components/enseignant.component";
import AjouterPfe from "./Components/AjouterPfe";
import Pfe from "./Components/pfe.component";


function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Pfes' component={Pfes} />
            <Route exact path='/Pfes/new' component={AjouterPfe} />
            <Route exact path='/Pfes/:id' component={Pfe} />
            <Route exact path='/Etudiants' component={Etudiants} />
            <Route exact path='/Etudiants/new' component={AjouterEtudiant} />
            <Route exact path='/Etudiants/:id' component={etudiant} />
            <Route exact path='/Enseignants' component={Enseignants} />
            <Route exact path='/Enseignants/new' component={AjouterEnseignant} />
            <Route exact path='/Enseignants/:id' component={enseignant} />
            <Route exact path='/Profile/:id' component={Profile} />
            <Route exact path='/Logout' component={Logout} />
            <Route exact path='/Signin' component={signin} />
            <Route exact path='/Signup' component={signup} />

          </Switch>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
