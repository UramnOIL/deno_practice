import React from 'react'
import Header from '~/components/organisms/Header/index.tsx'

export default function Home() {
  return (
    <>
      <Header />
      <h1>Hello, Deno!</h1>
      <h2>SSR Pages</h2>
      <a href="/time">Now Server Time</a>
    </>
  )
}
