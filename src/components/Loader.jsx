import React from "react";
import { Spinner, Button } from 'react-bootstrap'

const Loader = () => {
  return (
    <div className="loader">
      <Button variant="success" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};

export default Loader;
