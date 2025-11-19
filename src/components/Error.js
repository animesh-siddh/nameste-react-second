import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {

    const err  = useRouteError()
  return (
    <div><h1>Oops Something went wrong</h1>
    <h3>{err?.error?.message}</h3>
    </div>
  )
}

export default Error