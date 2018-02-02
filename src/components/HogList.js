import React from 'react'
import HogItem from './HogItem'

// const nameSortHogs = hogsToRender.sort((a,b) => {
//   let hogA = a[`${searchDetails.sortType}`].toUpperCase()
//   let hogB = b[`${searchDetails.sortType}`].toUpperCase()
//   if (hogA < hogB) {
//     return -1
//   }
//   if (hogA > hogB) {
//     return 1
//   }
//   return 0
// })

const HogComponents = (hogs, searchDetails) => {

  function nameSortHogs(arr) {
    arr.sort((a,b) => {
      let hogA = a[`${searchDetails.sortType}`].toUpperCase()
      let hogB = b[`${searchDetails.sortType}`].toUpperCase()
      if (hogA < hogB) {
        return -1
      }
      if (hogA > hogB) {
        return 1
      }
      return 0
    })
    return arr
  }

  function weightSortHogs(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
    return arr
  }

  let hogsToRender = hogs
  if (searchDetails.greasyChecked) {
    hogsToRender = hogs.filter((hog) => hog.greased)
  }

  let sortedHogs = hogsToRender
  if (searchDetails.sortType === "weight") {
    sortedHogs = weightSortHogs(hogsToRender)
  } else {
    sortedHogs = nameSortHogs(hogsToRender)
  }

  const hogItems = sortedHogs.map((hog) => <HogItem hog={hog} key={hog.name}/>)
  return hogItems
}

const HogList = ({hogs, searchDetails}) => {
  return (
    <div>
      { HogComponents(hogs, searchDetails) }
    </div>
  )
}

export default HogList
