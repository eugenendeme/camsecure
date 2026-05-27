import { Shield, Globe, HelpCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-lowest pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-on-surface w-6 h-6" fill="currentColor" />
              <span className="font-semibold text-xl text-on-surface tracking-tight">CamSecure</span>
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm">
              Africa's first unified missing persons platform. Built for resilience. Designed for safety.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-on-surface mb-4 tracking-wide">Platform</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hardware</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-on-surface mb-4 tracking-wide">Legal & Support</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-[11px] font-medium text-on-surface-variant">
            © 2024 CamSecure. All rights reserved. Operations centered in Cameroon.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Language selection" className="text-on-surface-variant hover:text-on-surface transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Help center" className="text-on-surface-variant hover:text-on-surface transition-colors">
              <HelpCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
