import React from "react";
import { useDeno } from "aleph/react"
import type { SSROptions } from 'aleph/types'

export default function Time() {
  const podName = useDeno(async () => {
    const response = await fetch(`http://a5e09537e789d416f996ed07876373d1-910665498.ap-northeast-1.elb.amazonaws.com`, { cache: "no-cache" })
    return await response.text()
  }, { revalidate: 0 })
  const now = useDeno(() => Date.now(), { revalidate: true })
  return <p>あなたがアクセスしたPodの名前は 「{podName}」 です{now}</p>
}
