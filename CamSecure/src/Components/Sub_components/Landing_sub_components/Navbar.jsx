import { ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 w-full bg-surface-lowest/90 backdrop-blur-md border-b border-outline-variant z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <Shield className="text-primary group-hover:scale-110 transition-transform w-6 h-6" fill="currentColor" />
          <span className="font-semibold text-xl text-on-surface tracking-tight">CamSecure</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/auth')} className="hidden md:block px-6 py-2 rounded-md border border-outline text-on-surface-variant text-sm font-semibold hover:bg-surface-low hover:text-on-surface transition-colors">
            Create Account
          </button>
          <button className="px-6 py-2 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary-hover shadow-sm transition-colors flex items-center gap-2">
            Go to App
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
