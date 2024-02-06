import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


class QuizSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        this.setState({
            score: parseFloat(params.get('score')),
            numberOfQuestions: parseInt(params.get('numberOfQuestions')),
            correctAnswers: parseInt(params.get('correctAnswers')),
            wrongAnswers: parseInt(params.get('wrongAnswers')),
            hintsUsed: parseInt(params.get('hints')),
            fiftyFiftyUsed: parseInt(params.get('fiftyFifty'))
        });
    }

    render() {
        const { score, numberOfQuestions, correctAnswers, wrongAnswers, hintsUsed, fiftyFiftyUsed } = this.state;
        let remark;

        if (score <= 3) {
            remark = 'You need more practice!';
        } else if (score > 3 && score <= 6) {
            remark = 'Better luck next time!';
        } else if (score > 6 && score <= 9) {
            remark = 'You can do better!';
        } else if (score > 9 && score <= 12) {
            remark = 'You did great!';
        } else {
            remark = 'You are an absolute genius!';
        }

        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                <div className="quiz-summary">
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-check-circle-outline success-icon"></span>
                
                <h1>Quiz has ended</h1>
                <div className="container stats">
                    <h4>{remark}</h4>
                    <h2>Your Score: {score.toFixed(0)}</h2>
                    <span className="stat left">Total number of questions:</span>
                    <span className="right">{numberOfQuestions}</span><br />

                    <span className="stat left">Number of attempted questions:</span>
                    <span className="right">{correctAnswers + wrongAnswers}</span><br />

                    <span className="stat left">Number of Correct Answers:</span>
                    <span className="right">{correctAnswers}</span><br />

                    <span className="stat left">Number of Wrong Answers:</span>
                    <span className="right">{wrongAnswers}</span><br />

                    <span className="stat left">Hints Used:</span>
                    <span className="right">{hintsUsed}</span><br />

                    <span className="stat left">50-50 Used:</span>
                    <span className="right">{fiftyFiftyUsed}</span><br />
                </div>
                <section>
                    <ul>
                        <li>
                            {/* <button> */}
                            <Link to="/play/quiz" className="playAgain">Play Again</Link>
                            {/* </button> */}
                        </li>
                        <li>
                            {/* <button> */}
                            <Link to="/">Back to Home </Link>
                            {/* </button> */}
                        </li>
                    </ul>
                </section>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default QuizSummary;
