import React from 'react';

// TODO: Add code to import necessary component for creating internal hyperlinks
import { Link } from 'react-router-dom';
const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {thought.thoughtAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this thought on {thought.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
            {/* TODO: Add code to create a link to this thought's single thought page at `/thoughts/<id>` */}
          { <Link to={`/thoughts/${thought._id}`}><button className="btn btn-primary">See Discussion</button></Link>}
          // we are using the Link component to create a link to the single thought page and 
          // we are using the thought's id to create the link
          // we are also using the button component to create a button that will take us to the single thought page
          // the link is inside the curly braces because we are using JSX
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
