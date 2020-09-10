import React, { lazy, Suspense } from 'react';

const LazySubtotal = lazy(() => import('./Subtotal'));

const Subtotal = props => (
  <Suspense fallback={null}>
    <LazySubtotal {...props} />
  </Suspense>
);

export default Subtotal;
