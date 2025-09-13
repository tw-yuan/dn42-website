export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Network Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              網路資訊
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>AS204844</p>
              <p>fd57:6bdb:8ffd::/48</p>
              <p>172.23.226.64/27</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              聯絡方式
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                Email:{" "}
                <a href="mailto:me@yuan-tw.net" className="text-blue-600 hover:text-blue-800">
                  me@yuan-tw.net
                </a>
              </p>
              <p>
                Telegram:{" "}
                <a href="https://t.me/yuan_tw_1111" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  @yuan_tw_1111
                </a>
              </p>
              <p>Discord: yuan_net</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              相關資源
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <a href="https://dn42.dev" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  DN42 Wiki
                </a>
              </p>
              <p>
                <a href="https://ncse.tw" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  NCSE.tw
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © 2024 NCSE NETWORK. DN42 實驗性網路的一部分。
          </p>
        </div>
      </div>
    </footer>
  );
}
