import React, { useState, useEffect } from 'react';

function YelpSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const apiKey = 'YOUR_YELP_API_KEY';
      const businessId = 'ORKIN_BUSINESS_ID'; // You need to replace this with the actual ID from Yelp
      const url = `https://api.yelp.com/v3/businesses/${businessId}/reviews`;

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        if (!response.ok) {
          throw new Error('Could not fetch reviews');
        }
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="flex-shrink-0 min-w-[300px] mx-4">
        <h1>
            this will be the yelp section. we need to create an account with Yelp as developers and miggy needs to create an account as a business.<br /> We need the dev API key and businees ID so we can plug it into section's code <br /> miggy also needs his first review <br /> we have the option to create our own reveiw template or find a yelp widget
        </h1>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Card Title 1
        </h3>
        <p className="text-gray-600">Description of card 1.</p>
      </div>
      <div className="flex justify-center">
        <img
          className="h-48 w-48 object-cover mt-2 rounded-full shadow"
          src="https://source.unsplash.com/random/260x160?sig=1"
          alt="Card 1"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Reviews</h4>
        {reviews.map((review, index) => (
          <div key={index} className="mb-2">
            <p className="text-gray-600">{review.text}</p>
            <p className="text-gray-500">Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YelpSection;
