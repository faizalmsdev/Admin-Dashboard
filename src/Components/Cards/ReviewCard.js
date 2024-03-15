const ReviewCard = ({ review }) => {
    return (
      <div className="border border-gray-300 bg-white rounded p-4 shadow-md transition-transform transform hover:scale-105">
        <p className="text-lg font-semibold mb-2">{review.ratings} Stars</p>
        <p className="text-gray-700">{review.feedback}</p>
      </div>
    );
  };

export default ReviewCard;