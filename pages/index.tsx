import React from 'react'

export default function Home() {
  return (
    <div>
      <header><h1>ポートフォリオ</h1></header>
      <div>
        <div>
        <h2>Get Pod Name</h2>
        <div>
          <a href="/getpodname">/aws_eks_practice</a>
          <p>アクセスしたAPIサーバーが動いているPod名を表示します。</p>
          <p>
            EKS上にAPIサーバをデプロイしています。<br />
            CircleCIとArgoCDでGitOpsをコンセプトとしたCI/CDパイプラインを構築しています。
          </p>
        </div>
        </div>
          <h2>Repositories</h2>
          <div>
            <ul>
              <li>IaC: <a href='https://github.com/UramnOIL/aws_eks_practice' target='_blank'>https://github.com/UramnOIL/aws_eks_practice</a></li>
              <li>Kubernetes: <a href='https://github.com/UramnOIL/kubernetes_practice' target='_blank'>https://github.com/UramnOIL/kubernetes_practice</a></li>
              <li>APIサーバー: <a href='https://github.com/UramnOIL/rust_practice' target='_blank'>https://github.com/UramnOIL/rust_practice</a></li>
              <li>フロントエンド: <a href='https://github.com/UramnOIL/deno_practice' target='_blank'>https://github.com/UramnOIL/deno_practice</a></li>
            </ul>
          </div>
        <div>
        </div>
      </div>
    </div>
  )
}
