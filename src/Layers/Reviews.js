import React, { useState, useEffect } from 'react';
import ReviewCard from '../Components/Cards/ReviewCard';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + process.env.REACT_APP_API_REVIEW);
        const data = await response.json();
        setReviews(data.data.review);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // console.log(reviews , "hohoh")

  return (
    <div>
      {/* <Container> */}
        <div className='w-[80vw] items-center ml-7' > 
          <h1 className="text-3xl font-bold mb-10 text-center">Customer Feedback</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full ">
            {reviews.map(review => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        </div>
      {/* </Container> */}
    </div>
  );
};


export default Reviews;
