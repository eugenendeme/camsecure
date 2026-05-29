import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import CamSecureLogo from '../../Parts/CamSecureLogo.jsx';

export default function TopNavbar() {
    return (
        <header className="h-14 bg-[#0f52ba] border-b border-[#0b3d8c] flex items-center justify-between px-6 z-20 w-full shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center shrink-0">
                    <CamSecureLogo size={20} />
                </div>
                <div className="flex items-baseline gap-2">
                    <h1 className="text-lg font-bold text-white tracking-tight leading-tight">CAMSECURE</h1>
                    <span className="text-[10px] text-blue-200 font-medium tracking-wide uppercase hidden sm:inline-block">Command Center</span>
                </div>
            </div>

            <div className="flex items-center gap-5">
                <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-3.5 w-3.5 text-blue-200" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 bg-black/20 border-none rounded-md py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-blue-200 transition-all"
                    />
                </div>

                <div className="flex items-center gap-4 text-blue-100">
                    <button className="hover:text-white transition-colors">
                        <Bell className="h-4 w-4" />
                    </button>
                    <button className="hover:text-white transition-colors">
                        <Settings className="h-4 w-4" />
                    </button>
                    <button className="h-7 w-7 rounded-full overflow-hidden border border-blue-400 ml-1">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile"
                            className="h-full w-full object-cover"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}
