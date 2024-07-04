import NoDataTasks from '../../components/NoDataTasks/index.jsx';
import React from 'react';
import './Fallback.css';
import { Button, Typography } from '@material-ui/core';

const Fallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className={'Fallback-root'}>
      <NoDataTasks message="Something went wrong!" />
      {error?.message && (
        <Typography>
          ERROR MESSAGE:&nbsp;
          <Typography>
            {error.message}
          </Typography>
        </Typography>
      )}
      <Button onClick={resetErrorBoundary}>
        Try Again
      </Button>
    </div>
  );
};

export default Fallback;
