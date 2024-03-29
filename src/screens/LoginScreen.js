import React, { useState } from 'react'
import "./LoginScreen.css";
import SignupScreen from './SignupScreen';

function LoginScreen() {
                        const [signIn, setSignIn] = useState(false);

	return( 
		<div className="loginScreen">
			<div className="loginScreen__background">
				<img
			         className="loginScreen__logo"	
				src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                                        
					<button onClick={() => setSignIn(true)}
					 className="loginScreen__button	">

				Sign In	</button>
				 <div className="loginScreen__gradient">
				 </div>
				  <div className="loginScreen__body">
                                       {signIn ? (
					        <SignupScreen/>
				       ):( 
                                        
					 <>
					  <h1> Unlimited films, TV programmer and more.</h1>
	                             <h2>watch anywhere. Cancel at any time.</h2>				 
					 <h3>Ready to watch? Enter you email to create or restart your membership</h3>
					  <div className="loginScreen__input">
                                          <form>
						  <input type="email" placeholder="Email address" />
						   <button  onClick={() => setSignIn(true)}
						    className="loginScreen__getStarted">
							   GET STARTE
						   </button>
						  </form> 
                                          </div>    
					 
					 
					 
					  </>
				       )}

					 
					  </div>
			</div>
			
		</div>
       );	
}

export default LoginScreen;
