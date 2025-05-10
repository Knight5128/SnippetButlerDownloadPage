export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#0a0e17] border-t border-[#c9a55c]/10 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-black dark:text-white font-medium mb-4">Snippet Butler</h3>
            <p className="text-gray-500 text-sm">
              Your personal assistant for organizing, retrieving, and optimizing AI prompts.
            </p>
          </div>

          <div>
            <h3 className="text-black dark:text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://docs.snippetbutler.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.snippetbutler.com/tutorials"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="https://docs.snippetbutler.com/api"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="https://community.snippetbutler.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black dark:text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black dark:text-white font-medium mb-4">Languages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://downloads.snippetbutler.com/en"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]"
                >
                  🇺🇸 English
                </a>
              </li>
              <li>
                <a
                  href="https://downloads.snippetbutler.com/zh"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]"
                >
                  🇨🇳 中文
                </a>
              </li>
              <li>
                <a
                  href="https://downloads.snippetbutler.com/jp"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#c9a55c] dark:hover:text-[#c9a55c]"
                >
                  🇯🇵 日本語
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#c9a55c]/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Snippet Butler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
