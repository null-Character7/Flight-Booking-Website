import React from 'react';
import Reserve from '../../../components/reserve/Reserve';

function Page({ params }: { params: { reserveId: string } }) {
  console.log(params.reserveId);
  
  return (
    <Reserve reserveId={params.reserveId} />
  );
}

export default Page;
