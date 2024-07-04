import React from 'react';

const loadable = (
  importFunc,
  {
    fallback = <div>Loading ...</div> ,
    preload = false,
  } = {
    fallback: <div>Loading ...</div> ,
    preload: false,
  },
) => {
  const LazyComponent = React.lazy(importFunc);

  const SuspenseComponent = (props) => (
    <React.Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </React.Suspense>
  );

  if (preload) SuspenseComponent.preload = importFunc;

  return SuspenseComponent;
};

export default loadable;
