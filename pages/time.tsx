import React from "react";
import { useDeno } from "aleph/react"

export default function Time() {
  const time = useDeno(() => { return Date.now()})
  return <p>The server time is {time}</p>;
}
