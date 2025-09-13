export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">關於 NCSE NETWORK</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            認識我們的 DN42 發展歷程，以及這個網路背後的故事。
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Network Administrator */}
          <section className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">網路管理員</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Yuan</h3>
                <p className="text-gray-600 mb-4">
                  我是 Yuan，NCSE NETWORK (AS204844) 的管理者。對網路技術很有興趣，
                  特別喜歡在 DN42 環境中測試各種協定和設定。
                </p>
                <p className="text-gray-600">
                  希望透過實作來學習網路技術，同時為 DN42 社群提供穩定的對等互連服務。
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">聯絡資訊</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      Email:{" "}
                      <a href="mailto:me@yuan-tw.net" className="text-blue-600 hover:text-blue-800">
                        me@yuan-tw.net
                      </a>
                    </p>
                    <p>
                      Telegram:{" "}
                      <a 
                        href="https://t.me/yuan_tw_1111" 
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @yuan_tw_1111
                      </a>
                    </p>
                    <p>Discord: yuan_net</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why DN42 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">為什麼選擇 DN42？</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <p className="text-gray-600 mb-4">
                DN42 提供了一個安全的學習環境，讓人可以實驗真實的網路技術。在這裡我可以：
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>學習 BGP 路由協定和 AS 管理</li>
                <li>測試各種 VPN 技術（GRE、WireGuard、OpenVPN）</li>
                <li>了解網路架構和拓撲設計</li>
                <li>練習網路安全和監控技術</li>
                <li>與世界各地的網路愛好者交流</li>
              </ul>
            </div>
          </section>

          {/* Network Philosophy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">網路理念</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">開放合作</h3>
                <p className="text-blue-800">
                  我們支持開放式對等互連和知識分享，歡迎所有 DN42 參與者連線，
                  不論經驗多寡。
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">可靠性優先</h3>
                <p className="text-green-800">
                  雖然是實驗性質，但我們致力於維持穩定的連線品質，
                  讓每位夥伴都能有良好的使用體驗。
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">持續學習</h3>
                <p className="text-purple-800">
                  每個挑戰都是學習機會，我們會記錄經驗並與社群分享心得。
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-4">技術探索</h3>
                <p className="text-orange-800">
                  我們樂於在 DN42 環境中嘗試新的網路技術和協定。
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">我們的 DN42 旅程</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1 mr-4"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">加入 DN42</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    註冊 AS204844 並獲得 IP 分配
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1 mr-4"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">建立 TPE1 節點</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    在台灣台北設立核心基礎設施
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1 mr-4"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">首次對等連接</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    與其他網路建立初始的 GRE 和 WireGuard 隧道
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mt-1 mr-4"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">推出網路網站</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    建立這個網站來分享資訊並促進對等互連
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
