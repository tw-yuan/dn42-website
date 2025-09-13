export default function NetworkInfo() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">網路資訊</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            關於 NCSE NETWORK 基礎設施和分配的詳細技術資訊。
          </p>
        </div>

        {/* AS Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">自治系統</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">基本資訊</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-800">AS 號碼:</span>
                    <code className="text-blue-600 font-mono font-semibold">AS204844</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">網路名稱:</span>
                    <span className="font-semibold text-gray-900">NCSE NETWORK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">國家:</span>
                    <span className="font-semibold text-gray-900">台灣 🇹🇼</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">域名:</span>
                    <span className="text-gray-700 italic">未註冊</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">網路統計</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-800">活躍節點:</span>
                    <span className="font-semibold text-green-600">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">對等政策:</span>
                    <span className="font-semibold text-green-600">開放</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">主要協議:</span>
                    <span className="font-semibold text-gray-900">GRE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IP Allocations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">IP 分配</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IPv4 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                IPv4 網路
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Primary Allocation</div>
                  <code className="text-lg font-mono text-blue-600 font-semibold">172.23.226.64/27</code>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-semibold">Network:</span> 172.23.226.64
                    </div>
                    <div>
                      <span className="font-semibold">Broadcast:</span> 172.23.226.95
                    </div>
                    <div>
                      <span className="font-semibold">Netmask:</span> 255.255.255.224
                    </div>
                    <div>
                      <span className="font-semibold">Hosts:</span> 30 addresses
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IPv6 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                IPv6 Network
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Primary Allocation</div>
                  <code className="text-lg font-mono text-purple-600 font-semibold">fd57:6bdb:8ffd::/48</code>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold">Network:</span> fd57:6bdb:8ffd::
                    </div>
                    <div>
                      <span className="font-semibold">Prefix Length:</span> /48
                    </div>
                    <div>
                      <span className="font-semibold">Available Subnets:</span> 65,536 /64 networks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Node Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Network Nodes</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Active Nodes</h3>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                {/* TPE1 Node */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">TPE1 - Core Node</h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Online
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Location</h5>
                      <p className="text-gray-600">Taipei, Taiwan 🇹🇼</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Function</h5>
                      <p className="text-gray-600">Core Router</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Supported Protocols</h5>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-gray-600">GRE (Preferred)</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          <span className="text-gray-600">WireGuard</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-3">Node Addresses</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-800 mb-1">DN42 IPv4</div>
                        <code className="text-blue-600 font-mono">172.23.226.65</code>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-800 mb-1">DN42 IPv6</div>
                        <code className="text-purple-600 font-mono">fd57:6bdb:8ffd::1</code>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-800 mb-1">Public IPv4</div>
                        <code className="text-green-600 font-mono">23.146.248.23</code>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-800 mb-1">Public IPv6</div>
                        <code className="text-green-600 font-mono">2602:faad:5::23</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network Topology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Network Topology</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">TPE1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Core Node</h3>
              <p className="text-gray-600 mb-6">Taipei, Taiwan</p>
              
              <div className="max-w-md mx-auto">
                <div className="text-sm text-gray-500 mb-4">Connected to DN42 peers via:</div>
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-xs">GRE</span>
                    </div>
                    <span className="text-xs text-gray-600">Primary</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-xs">WG</span>
                    </div>
                    <span className="text-xs text-gray-600">Alternative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">技術規格</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">路由協定</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-800">協定:</span>
                  <span className="font-semibold text-gray-900">BGP (Border Gateway Protocol)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800">支援版本:</span>
                  <span className="font-semibold text-gray-900">BGP v4 + v6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800">Router ID:</span>
                  <code className="text-blue-600 font-mono">172.23.226.65</code>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">通道支援</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">GRE 通道:</span>
                  <span className="inline-flex items-center px-2 py-1 rounded text-sm font-medium bg-green-100 text-green-800">
                    ✓ 支援
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">WireGuard VPN:</span>
                  <span className="inline-flex items-center px-2 py-1 rounded text-sm font-medium bg-green-100 text-green-800">
                    ✓ 支援
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">OpenVPN:</span>
                  <span className="inline-flex items-center px-2 py-1 rounded text-sm font-medium bg-gray-100 text-gray-800">
                    可提供
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
