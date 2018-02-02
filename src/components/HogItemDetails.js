import React from 'react'

const HogItemDetails = ({specialty, medal}) => {
  return (
    <div>
      <span>Specialty: {specialty}</span>
      <span>Highest Medal Achieved: {medal}</span>
    </div>
  )
}

export default HogItemDetails
