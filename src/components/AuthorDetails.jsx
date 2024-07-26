import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AuthorDetails() {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    axios.get(`/api/authors/${id}`)
      .then(response => setAuthor(response.data))
      .catch(error => console.error('Error fetching author details:', error));
  }, [id]);

  return (
    <div>
      {author ? (
        <div>
          <h1>{author.name}</h1>
          <p>{author.quote}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AuthorDetails;
