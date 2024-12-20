import React from 'react'
import { useGetschoolQuery } from '../services/schoolApi'

function Home() {
  var {isLoading,data}=useGetschoolQuery()
  return (
    <div>
      <h1>home</h1>
    </div>
  )
}

export default Home
