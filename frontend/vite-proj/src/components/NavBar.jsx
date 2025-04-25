import { Database } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16">
      <div className="flex items-center">
        <Database className="mr-2 text-blue-400" />
        <span className="text-xl font-bold">DataDEX</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#features" className="hover:text-blue-400 transition">
          Features
        </a>
        <a href="#how-it-works" className="hover:text-blue-400 transition">
          How It Works
        </a>
        <a href="#pricing" className="hover:text-blue-400 transition">
          Pricing
        </a>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-lg font-medium">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
