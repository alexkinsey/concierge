import React from 'react'

const CustomerCard = ({customer}) => {
  return (
    <>
        <h3>CustomerCard</h3>
        <p>{customer.first_name}</p>
        <p>{customer.date_of_birth}</p>
    </>
  )
}

export default CustomerCard