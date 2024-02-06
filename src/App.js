import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import RegisterForm from './registerpage';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';



function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" Component = {RegisterForm}/>
            <Route path="/play/home"Component={Home} />
            <Route path="/play/instructions" exact Component={QuizInstructions} />
            <Route path="/play/quiz" exact Component={Play} />
            <Route path="/play/quizSummary" exact Component={QuizSummary} />
            </Routes>
    </Router>
  );
}


export default App;
