import React from 'react';
import { useHistory } from 'react-router-dom'
import MainContent from "../MainContent/MainContent";

function NotFoundPage({ title }) {
  const history = useHistory()
  const handleClick = () => history.goBack()

  return (
    <MainContent title={title}>
      <button
        className="waves-effect btn grey darken-3"
        onClick={handleClick}>&larr; Go back</button>
    </MainContent>
  );
}

export default NotFoundPage
