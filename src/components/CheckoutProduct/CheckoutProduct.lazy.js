import React, { lazy, Suspense } from 'react';

const LazyCheckoutProduct = lazy(() => import('./CheckoutProduct'));

const CheckoutProduct = props => (
  <Suspense fallback={null}>
    <LazyCheckoutProduct {...props} />
  </Suspense>
);

export default CheckoutProduct;
