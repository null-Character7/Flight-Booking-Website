import React from 'react'
import Reserve from '../../../components/reserve/Reserve';

function page({ params }: { params: { reserveId: string } }) {
  console.log(params.reserveId);
  // get the info of tht offer from get call
  return (
    // pass the offer as child
    <Reserve ></Reserve>
  )
}

export default page