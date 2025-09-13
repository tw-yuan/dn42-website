export default function Peering() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">對等互連資訊</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            與 NCSE NETWORK 建立連線！我們歡迎所有 DN42 參與者提出對等互連申請。
          </p>
        </div>

        {/* Peering Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">對等互連政策</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-green-900">開放對等互連政策</h3>
            </div>
            <p className="text-green-800 mb-4">
              NCSE NETWORK 採用開放式對等互連政策，歡迎所有 DN42 網路連線，
              不論規模大小或技術經驗。
            </p>
            <ul className="space-y-2 text-green-800 list-disc list-inside">
              <li>無流量需求或限制</li>
              <li>支援 IPv4 和 IPv6</li>
              <li>支援多種通道協定</li>
              <li>24/7 監控和技術支援</li>
              <li>對等互連申請快速回覆</li>
            </ul>
          </div>
        </section>

        {/* Connection Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">支援的連接方式</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* GRE */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">GRE</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">GRE 隧道</h3>
                  <span className="inline-flex items-center px-2 py-1 rounded text-sm font-medium bg-green-100 text-green-800">
                    首選方式
                  </span>
                </div>
              </div>
              <p className="text-gray-800 mb-4">
                GRE 通用路由封裝通道，提供穩定且簡便的連線方式。
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-800">協議:</span>
                  <span className="font-mono text-gray-900">GRE over IPv4/IPv6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800">MTU:</span>
                  <span className="font-mono text-gray-900">1436 bytes</span>
                </div>
              </div>
            </div>

            {/* WireGuard */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">WG</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">WireGuard VPN</h3>
                  <span className="inline-flex items-center px-2 py-1 rounded text-sm font-medium bg-blue-100 text-blue-800">
                    替代方式
                  </span>
                </div>
              </div>
              <p className="text-gray-800 mb-4">
                現代化 VPN 協定，具備優異效能和安全性。
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-800">協議:</span>
                  <span className="font-mono text-gray-900">WireGuard</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800">MTU:</span>
                  <span className="font-mono text-gray-900">1420 bytes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Peer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">如何連接</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">聯絡我們</h3>
                <p className="text-gray-800 text-sm">
                  請使用 Email 或 Telegram 傳送您的對等互連申請和網路資訊。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">交換詳細資訊</h3>
                <p className="text-gray-800 text-sm">
                  我們會提供適合您的通道端點和相關配置資訊。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">建立 BGP</h3>
                <p className="text-gray-800 text-sm">
                  設定 BGP 連線並測試連接品質，如有問題我們會協助排除。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">技術需求</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">需要提供的資訊</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  您的 AS 號碼
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  偏好的通道類型（GRE/WireGuard）
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-blue-800">
                    <strong>注意：</strong>點對點 IP 將由我們統一分配
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">我們的資訊</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-800">AS 號碼:</span>
                  <code className="text-blue-600 font-mono font-semibold">AS204844</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">聯絡資訊</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">電子郵件</h3>
                <a 
                  href="mailto:me@yuan-tw.net" 
                  className="text-blue-600 hover:text-blue-800 font-mono text-sm"
                >
                  me@yuan-tw.net
                </a>
                <p className="text-gray-700 text-xs mt-1">主要聯絡方式</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169.7-.896 4.581-1.266 6.057-.156.625-.462.833-.759.852-.644.059-1.134-.426-1.759-.836-.978-.64-1.529-.937-2.476-1.502-.109-.065-.234-.143-.234-.143-.089-.042-.179-.063-.27-.063-.246 0-.492.095-.663.235-.171.14-.257.327-.257.537 0 .253.116.486.291.655.175.169.396.291.655.291h.001c.175 0 .344-.044.491-.122.147-.078.27-.185.359-.309.304-.425.653-.926 1.097-1.529.17-.23.35-.474.537-.726.748-.978 1.134-1.498 1.134-1.533 0-.035-.035-.07-.105-.07-.07 0-.175.035-.315.105-.42.21-.875.455-1.344.691-.469.236-.924.455-1.344.691-.42.236-.77.402-1.049.498-.279.096-.486.105-.621.026-.135-.079-.201-.238-.201-.476 0-.238.066-.497.201-.776.135-.279.335-.576.6-.892.265-.316.594-.651.987-1.005 1.572-1.414 2.544-2.281 2.915-2.601.371-.32.518-.45.441-.389-.077.061-.301.371-.672.931-.371.56-.896 1.346-1.575 2.358-.679 1.012-1.512 2.248-2.499 3.708-.164.243-.246.486-.246.729 0 .243.082.455.246.636.164.181.39.272.678.272.288 0 .58-.091.876-.272.296-.181.608-.454.936-.819 1.312-1.459 2.484-2.76 3.516-3.903 1.032-1.143 1.548-1.714 1.548-1.714z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Telegram</h3>
                <a 
                  href="https://t.me/yuan_tw_1111" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-mono text-sm"
                >
                  @yuan_tw_1111
                </a>
                <p className="text-gray-700 text-xs mt-1">快速回應</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discord</h3>
                <span className="text-gray-900 font-mono text-sm">yuan_net</span>
                <p className="text-gray-700 text-xs mt-1">替代聯絡方式</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-200 text-center">
              <p className="text-blue-800 font-semibold">
                回覆時間：通常 24 小時內
              </p>
              <p className="text-blue-700 text-sm mt-1">
                請在初次聯絡時提供您的 AS 號碼和偏好的通道類型。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
