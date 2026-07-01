import { NavLink, Link, Outlet } from "react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className="sticky top-0 backdrop-blur-sm border-b border-gray-300/50 z-50"
        style={{ backgroundColor: "rgba(217,217,217,0.9)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src="/vn-logo.svg" alt="VN Logo" className="h-10 w-10" />
            </Link>
            <div className="flex gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-2 py-1 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#2f2f2f] text-white"
                      : "text-[#2f2f2f] hover:bg-[#bebebe]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  `px-2 py-1 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#2f2f2f] text-white"
                      : "text-[#2f2f2f] hover:bg-[#bebebe]"
                  }`
                }
              >
                Work
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="flex pt-8">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex justify-center mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Connect</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/g3ar-v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors text-gray-700"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/victorn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors text-gray-700"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://x.com/victorn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors text-gray-700"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:vfranktor@gmail.com"
                    className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors text-gray-700"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-[#2f2f2f] max-w-2/3 mx-auto pb-8">
          <p>&copy; 2026 Victor Nyoyoko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
