import React, {Component, Fragment} from "react";
import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";


class QuizSummary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score:0,
            numberofQuestions:15,
            numberofAnsweredQuestions:0,
            corerctAnswers:0,
            wrongAnswers:0,
            HintsUsed:0,
            FiftyFiftyUsed:0,
        };
    }


    componentDidMount () {
        const {state} = this.state.state|| {};
        if (state) {
        this.setState ({
            score: (state.score / state.numberofQuestions) * 100,
            numberofQuestions: state.numberofQuestions,
            numberofAnsweredQuestions:state.numberofAnsweredQuestions,
            corerctAnswers:state.corerctAnswers,
            wrongAnswers: state.wrongAnswers,
            HintsUsed:state.HintsUsed,
            FiftyFiftyUsed:state.FiftyFiftyUsed,
        });
      }
    }
   
    render () {
        const { state} = this.props;
        let stats, remark;
        const userScore = this.state.score;
        console.log("score>>>",this.state.score);


        if(userScore <= 30) {
            remark = 'You need more practice!';
        } else if (userScore > 30 && userScore <=50) {
            remark = 'Better luck next time!';
        } else if (userScore > 70 && userScore >50) {
            remark = 'You can do better!';
        } else if (userScore >= 71 && userScore <=84) {
            remark = 'You did great!';
        } else {
            remark = 'You are an absolute genius!';
        }
               
        if (state !== null) {
            stats = (
                <Fragment>
                    <div style={{ textAlign:'center'}}>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1>Quiz has ended</h1>
                    <div className="container stats">
                        <h4>{remark}</h4>
                        <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat left">Total number of questions:</span>
                        <span className="right">{this.state.numberofQuestions}</span><br />


                        <span className="stat left">Number of attempted questions:</span>
                        <span className="right">{this.state.numberofAnsweredQuestions}</span><br />


                        <span className="stat left">Number of Correct Answers:</span>
                        <span className="right">{this.state.corerctAnswers}</span><br />


                        <span className="stat left">Number of Wrong Answers:</span>
                        <span className="right">{this.state.wrongAnswers}</span><br />


                        <span className="stat left">Hints Used:</span>
                        <span className="right">{this.state.HintsUsed}</span><br />


                        <span className="stat left">50-50 Used:</span>
                        <span className="right">{this.state.FiftyFiftyUsed}</span><br />
                         </div>
                    <section>
                        <ul>
                            <li>
                                
                                <Link to="/play/quiz" className="playAgain">Play Again</Link>
                                
                            </li>
                            <li>
                               
                                <Link to="/">Back to Home </Link>
                                
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        }else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                        <ul>
                            <li>
                                <Link to="/">Back to Home</Link>
                            </li>
                            <li>
                                <Link to="/play/quiz">Take a Quiz</Link>
                            </li>
                        </ul>
                    </section>
            );
        }
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                <div className="quiz-summary"></div>
                {stats}
            </Fragment>
        );
    }
}


export default QuizSummary;
