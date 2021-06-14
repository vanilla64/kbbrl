import React from 'react';
import { useHistory } from "react-router-dom";

function MainContent({ title, goBackBtn, children }) {
  const history = useHistory()
  const handleClick = () => history.goBack()

  const styles = {
    heading: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },

  }

  return (
    <>
      <div
        style={styles.heading}
        className="">
        <h1 className="col grey-text text-lighten-2">{ title }</h1>
        {
          goBackBtn &&
          <button
            style={{ zIndex: 0 }}
            className="waves-effect waves-light col right btn grey darken-3"
            onClick={handleClick}>&larr; Go back</button>
        }
      </div>

      { children }
    </>
  );
}

export default MainContent
