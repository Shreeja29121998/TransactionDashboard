import React from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';

const NoDataTasks = ({
  message = 'No data can be shown',
}) => {
  return (
    <div className={'NoDataTasks-viewRoot'}>
      {/* <NoDataTasksImg className={'NoDataTasks-noDataTaskImg'} /> */}
      <Typography>{message}</Typography>
    </div>
  );
};

export default NoDataTasks;
