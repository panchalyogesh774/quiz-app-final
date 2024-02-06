import React, {Fragment} from 'react';
import { Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';




const Home = () => (
    <Fragment>
        <Helmet><title>Home - Quiz App</title></Helmet>
    <div id="Home">
        <section>
           <div style={{ textAlign:'center'}}>
            <span className="mdi mdi-cube-outline cube"></span>
            </div>  
            <h1>Quiz</h1>
            <div className="play-button-container" >
                <ul>
                    <li><Link className="play-button" to="/Play/instructions">Play</Link></li>
                </ul>
            </div>
            {/* <div className='auth-container'>
                 <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                 <Link to="/register" className="auth-buttons" id="signup-button">Sign up</Link>        
            </div> */}
            <p style={{ fontSize:'1.5rem',marginTop: '80px', textAlign: 'center', color: 'white',fontWeight:'bold' }}>“Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.”</p>
            <br></br>
            <p style={{ marginTop: '0px', textAlign: 'right', color: 'white' }}>― John Maxwell</p>
        </section>
    </div>    
    </Fragment>  
);


export default Home;
