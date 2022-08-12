import React from "react";
import Banner from "../Banner";
import "../screens/HomeScreen.css"
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";
 



function HomeScreen() {
	return (
		<div className="homeScreen">
	
	<Nav />
	<Banner />
	               <Row  
			title='NETFLIX ORGINALS'
			fetchUrl={requests.fetchNetflixOriginals}
			isLargeRow
			/>
	                  <Row  title="Trending" fetchUrl={requests.fetchTrending}/>
                          <Row  title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row  title="Action Movies" fetchUrl={requests.fetchActionMovies} />

	
	                	
       		</div>
	);
}

export default HomeScreen;
