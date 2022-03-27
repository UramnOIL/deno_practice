import { useEffect, useState } from 'react'

export default function useFetchName(): [string, boolean] {
    const [name, setName] = useState("not yet loaded")
    const [done, setDone] = useState(false)
    useEffect(() => {
        const get = async () => {
            const response = await fetch(
                `http://a5e09537e789d416f996ed07876373d1-910665498.ap-northeast-1.elb.amazonaws.com`,
                {
                    cache: "no-cache"
                },
            )
            setName(await response.text())
            setDone(true)
        }
        get()
    }, [])
    return [name, done]
}