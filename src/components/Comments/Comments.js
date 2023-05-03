import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.
  const { comments } = props;
  console.log('Comments',props.comments.text);
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {/* Dulmar prop-ka 'comments', kadib soo celi 'Comment' component, adigoo waxa ay 'Comment' u baahantahay u diraayo. */}
      {comments.map(singleComment =>(
     <Comment comment = {singleComment } />
     ))}
    </div>
  );
};

export default Comments;
