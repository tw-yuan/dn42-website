import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mx-auto mb-8 flex justify-center">
            <img 
              src="https://cdn-file.ncse.tw/image/Logo_NCSE_Network_Banner.svg" 
              alt="NCSE NETWORK" 
              className="h-24 w-auto"
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            歡迎來到我們的 DN42 實驗網路！我們在台灣進行網路技術研究，並提供對等互連服務。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/peering"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              與我們連接
            </Link>
            <Link
              href="/network"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              網路資訊
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">AS204844</div>
              <div className="text-gray-600">自治系統</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">TPE1</div>
              <div className="text-gray-600">台北核心節點</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">開放</div>
              <div className="text-gray-600">對等互連政策</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DN42 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">什麼是 DN42？</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                DN42 是一個去中心化的網路覆蓋層，讓網路愛好者可以在真實的環境中學習和實驗 BGP、VPN 技術。
                它提供了一個安全的沙盒環境，讓你可以：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">學習 BGP 路由</h4>
                      <p className="text-gray-600 text-sm">在真實環境中練習 BGP 協定設定</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">測試 VPN 技術</h4>
                      <p className="text-gray-600 text-sm">實驗各種 VPN 協定和設定</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">建立全球連線</h4>
                      <p className="text-gray-600 text-sm">與世界各地的網路愛好者交流</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">實作網路服務</h4>
                      <p className="text-gray-600 text-sm">架設 DNS、Web 等各種服務</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-800 text-sm font-medium">
                  DN42 是完全免費的教育性網路，歡迎所有人參與！
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">聯絡我們</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            想要與我們建立對等互連嗎？歡迎所有 DN42 參與者與我們聯絡！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:me@yuan-tw.net"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Email: me@yuan-tw.net
            </a>
            <a
              href="https://t.me/yuan_tw_1111"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Telegram: @yuan_tw_1111
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
