import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";



import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
	const user =useSelector(selectUser);
	return (
		<div className="profileScreen">
			<Nav />
			<div className="profileScreen__body">
                             <h1>Edit profile</h1>
			     <div className="profileScreen__info">
				     <img 
				     src="https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Revamps-Logo-1280x720.jpg"
				     alt=""
				     />
				     <div className="profileScreen__details">
                                           <h2>{user.email}</h2>
					   <div className="profile__plans">
						   <h3> Plane </h3>

						 
                                           <button  onClick={() => auth.signOut()} 
					   className="profileScreen__signOut"
					   >
						   Sign Out
						   </button>
					   </div>
				     </div>

			     </div>
			</div>
			
		</div>
	);
}

export default ProfileScreen;
