import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import AuthorDetails from './components/AuthorDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorList />} />
        <Route path="/add" element={<AuthorForm />} />
        <Route path="/:id/edit" element={<AuthorForm />} />
        <Route path="/:id" element={<AuthorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
