import { Link, Outlet } from "react-router";
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
              <Link
                to="/"
                className="text-[#2f2f2f] hover:text-[#f6f6f6] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/experience"
                className="text-[#2f2f2f] hover:text-[#f6f6f6] transition-colors"
              >
                Experience
              </Link>
              <Link
                to="/products"
                className="text-[#2f2f2f] hover:text-[#f6f6f6] transition-colors"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-[#2f2f2f] hover:text-[#f6f6f6] transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Contact Footer */}
      <footer className="bg-gray-100  border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-[#2f2f2f] mb-6">
                Backend and platform engineer. Reach me at vfranktor@gmail.com or on
                LinkedIn.
              </p>
              <a
                href="mailto:vfranktor@gmail.com"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-[#bebebe] transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect</h3>
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
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-[#2f2f2f]">
            <p>&copy; 2026 Victor Nyoyoko. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
