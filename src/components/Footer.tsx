import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import aimaLogo from "@/assets/aima-logo.png";

const Footer = () => {
  const productLinks = [
    { name: "Platform Overview", href: "/" },
    { name: "AI Features", href: "/" },
    { name: "Integrations", href: "/" },
    { name: "Pricing", href: "/" },
  ];

  const resourcesLinks = [
    { name: "Documentation", href: "/" },
    { name: "Case Studies", href: "/" },
    { name: "White Papers", href: "/" },
    { name: "Webinars", href: "/" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/" },
    { name: "Careers", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "News", href: "/insights" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/" },
    { name: "Terms of Service", href: "/" },
    { name: "Cookie Policy", href: "/" },
  ];

  return (
    <footer className="bg-aima-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={aimaLogo} alt="AIMA" className="h-8 w-auto mb-4" />
              <p className="text-aima-gray-400 text-sm leading-relaxed max-w-md">
                AI-powered smart factory solutions that prevent mistakes before they happen. 
                Transform your manufacturing operations with intelligent automation and predictive insights.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-aima-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-aima-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-aima-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-aima-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-aima-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-aima-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-aima-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-aima-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-aima-gray-400 text-sm">
              © {new Date().getFullYear()} AIMA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-aima-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;