import React from 'react';

function ReviewsList({reviews = []}) {
  return (
    <div className="ReviewsList">
      <h3>Reviews</h3>
      <ul>
        {
          reviews.map(review => {
            return (
              <li key={review.id}>
                <p>{review.body}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ReviewsList;
