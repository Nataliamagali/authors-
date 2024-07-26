import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AuthorList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('/api/authors')
      .then(response => setAuthors(response.data))
      .catch(error => console.error('Error fetching authors:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/authors/${id}`)
      .then(() => setAuthors(authors.filter(author => author._id !== id)))
      .catch(error => console.error('Error deleting author:', error));
  };

  return (
    <div>
      <h1>Author List</h1>
      <Link to="/add">Add New Author</Link>
      <ul>
        {authors.map(author => (
          <li key={author._id}>
            {author.name} - {author.quote}
            <Link to={`/${author._id}/edit`}>Edit</Link>
            <button onClick={() => handleDelete(author._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorList;
