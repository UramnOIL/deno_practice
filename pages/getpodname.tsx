import React from "react";
import { useDeno } from "aleph/react";
import useFetchName from "~/lib/useGetName.ts";

export default function Time() {
  const [name, done] = useFetchName()
  const now = useDeno(() => Date.now(), { revalidate: true });
  return (
    <>
      <p>{done ? `あなたがアクセスしたPodの名前は 「${name}」 です(unixtime: ${now})` : `フェッチ中`}</p>
      <a href="http://a5e09537e789d416f996ed07876373d1-910665498.ap-northeast-1.elb.amazonaws.com">
        http://a5e09537e789d416f996ed07876373d1-910665498.ap-northeast-1.elb.amazonaws.com
      </a>
    </>
  );
}
