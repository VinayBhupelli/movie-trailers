import React from 'react'
import './HomeScreen.css'
import Banner from './Banner.js'
import Nav from './Nav.js'
import request from './Requests.js'
import Row from './Row.js'

function HomeScreen() {
    console.log("HomeScreen");
  return (
    

        <div className="homeScreen">
            {/* NavBar */}
            <Nav />
            {/* Banner */}
            <Banner />
            {/* Rows */}
            <Row 
              title="Trending Now"
              fetchURL= {request.fetchTrending}
              isLargeRow
            />
            <Row 
              title="Netflix Originals"
              fetchURL= {request.fetchNetflixOrginials}
              isLargeRow
            />
            <Row 
              title="Top Rated"
              fetchURL= {request.fetchTopRated}
              isLargeRow
            />
            <Row 
              title="Action Movies"
              fetchURL= {request.fetchActionMovies}
              isLargeRow
            />
            <Row 
              title="Comedy Movies"
              fetchURL= {request.fetchComedyMovies}
              isLargeRow
            />
             <Row 
              title="Horror Movies"
              fetchURL= {request.fetchHorrorMovies}
              isLargeRow
            />
             <Row 
              title="Romance Movies"
              fetchURL= {request.fetchRomanceMovies}
              isLargeRow
            />
            <Row 
              title="Documentries"
              fetchURL= {request.fecthDocumentries}
              isLargeRow
            />
        </div>
  )
}

export default HomeScreen
