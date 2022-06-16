import React from 'react'

const CustomerCard = ({customer}) => {
  return (
    <>
        <h3>CustomerCard</h3>
        <p>{customer.firstName} {customer.lastName}</p>
        <p>{customer.dateOfBirth}</p>
        <p>{customer.postcode}</p>
    </>
  )
}

export default CustomerCard