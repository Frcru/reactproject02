import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Button } from './components'
import { useFetch } from './hooks'

interface Data{
  abilities: [string];
}

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url2 = "hhttp"

function App() {  
  const {data,loading,error} = useFetch<Data>(url);
  //This is an example to fetch data
  // const {data:dataUser,loading:loadingUser,error:errorUser} = useFetch<{name:string}>(url2)
  //dataUser?.name

  if (loading) {
    return <div>Data is still loading</div>
  }

  if (error) {
    return <div>Something went wrong: {error.message}</div>
  }

  return (
    <>
      <div> {JSON.stringify(data)}</div>
    </>
  )
}

export default App
