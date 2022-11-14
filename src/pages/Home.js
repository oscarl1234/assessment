import { Link } from "react-router-dom";
import React from "react";
import { Tag } from 'primereact/tag';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title">Top 5 Github Users</h1>
        <p className="info">Tap the username to see more information</p>
        {["GrahamCampbell","fabpot","weierophinney","rkh","josh"].map( item =>
          <Link key={item} className="link" to={`/person/${item}`}>
            <Tag className="mr-2" severity="info" value={item}></Tag>
          </Link>  
        )}
        
      </div>
    </div>
  );
};

export default Home;