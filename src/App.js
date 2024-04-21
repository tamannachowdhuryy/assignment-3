import "./App.css";

// Router
import { Switch, Route } from "react-router-dom";

// Components
import HomePageContainer from './components/containers/HomePageContainer';
import CampusContainer from './components/containers/CampusContainer';
import StudentContainer from './components/containers/StudentContainer';
import AllCampusesContainer from './components/containers/AllCampusesContainer';
import AllStudentsContainer from './components/containers/AllStudentsContainer';
import NewStudentContainer from './components/containers/NewStudentContainer';
import EditStudentContainer from './components/containers/EditStudentContainer';
import EditCampusContainer from './components/containers/EditCampusContainer';
import NewCampusContainer from './components/containers/NewCampusContainer';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/editstudents/:id" component={EditStudentContainer} />
        <Route exact path="/editcampuses/:id" component={EditCampusContainer} />
        <Route exact path="/newcampus" component={NewCampusContainer} />
      </Switch>        
    </div>
  );
}

export default App;
