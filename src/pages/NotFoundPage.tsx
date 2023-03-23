import React from 'react';
import './styles/notFound.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1 className="not-found-page">404! Page not found!</h1>
      <Link to="/">{'Home page'}</Link>
    </div>
  );
}

export default NotFoundPage;
