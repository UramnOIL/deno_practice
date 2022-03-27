import React from 'react'
import Header from '~/components/organisms/Header/index.tsx'

export default function Home() {
  return (
    <div>
      <header><h1>ポートフォリオ</h1></header>
      <div>
        <h2>Get Pod Name</h2>
        <a href="/getpodname">/aws_eks_practice</a>
        <p>アクセスしたAPIサーバーが動いているPod名を表示します。</p>

        <p>EKS上にAPIサーバをデプロイしています。</p>
        <p>CircleCIとArgoCDでGitOpsをコンセプトとしたCI/CDパイプラインを構築しています。</p>

        <p>IaC: https://github.com/UramnOIL/aws_eks_practice</p>
        <p>Kubernetes: https://github.com/UramnOIL/kubernetes_practice</p>
        <p>APIサーバー: https://github.com/UramnOIL/rust_practice</p>
        <p>フロントエンド: https://github.com/UramnOIL/deno_practice</p>
      </div>
    </div>
  )
}
