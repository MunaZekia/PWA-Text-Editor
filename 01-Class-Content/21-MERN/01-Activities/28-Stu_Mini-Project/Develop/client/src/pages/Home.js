import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllMatchups } from '../utils/api';

// Uncomment import statements below after building queries and mutations
import { useMutation } from '@apollo/client';

// this is the hook that allows us to execute mutations
import { ADD_MATCHUP } from '../utils/mutations';
// we have to change ADD_MATCHUP to the name of our mutation

import { useQuery } from '@apollo/client';
// this is the hook that allows us to execute queries
import { QUERY_MATCHUPS } from '../utils/queries';
// this is the query we will execute,


const Home= () => {
  // this will be the component that will display the list of matchups
  const{loading, data} = useQuery(QUERY_MATCHUPS);
  // this will execute the query and store the response in the data variable
  const QUERY_MATCHUPS = data?.matchups || [];
  // this will store the matchups in the QUERY_MATCHUPS variable



// const Home = () => {// this will be the component that will display the list of matchups
//   const [matchupList, setMatchupList] = useState([
//     // this will hold the list of matchups
//     {
//       _id: 1,// this is the id of the matchup
//       tech1: 'React',// this is the first technology
//       tech2: 'Angular',// this is the second technology
//     },
//    ]);
  useEffect(() => {
    const getMatchupList = async () => {
      try {
        const res = await getAllMatchups();
        if (!res.ok) {
          throw new Error('No list of matchups');
        }
        const matchupList = await res.json();
        setMatchupList(matchupList);
      } catch (err) {
        console.error(err);
      }
    };
    getMatchupList();
  }, []);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Tech Matchup!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of matchups you can vote on:</h2>
        <ul className="square">
          {matchupList.map((matchup) => {
            return (
              <li key={matchup._id}>
                <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                  {matchup.tech1} vs. {matchup.tech2}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new matchup?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Create Matchup!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
