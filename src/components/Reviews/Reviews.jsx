import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../Api/fetchMovies';
import { StyledReviews } from './Reviews.styled';
import { Loader } from '../Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId)
      .then(res => setReviews(res))
      .catch(err => console.log(err));
  }, [movieId]);

  if (!reviews) {
    return (
      <p>
        <Loader />
      </p>
    );
  }

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <StyledReviews>
            <div key={id}>
              <p>
                <span>Author:</span> {author}
              </p>
              <p>{content}</p>
            </div>
          </StyledReviews>
        ))
      ) : (
        <b>Sorry, we couldn't find any reviews for this movie.</b>
      )}
    </>
  );
};

export default Reviews;
