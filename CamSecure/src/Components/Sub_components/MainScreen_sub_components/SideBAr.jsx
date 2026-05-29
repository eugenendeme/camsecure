import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Network,
    QrCode,
    Rss,
    MapPin,
    Bell,
    CircleUser,
    Settings,
    HelpCircle,
    AlertTriangle
} from 'lucide-react';

export default function SideBar() {
    const menuItems = [
        { id: 'familyTree', label: 'Family Tree', icon: <Network className="w-5 h-5" />, path: '/app/family-tree' },
        { id: 'scan', label: 'Scan Me', icon: <QrCode className="w-5 h-5" />, path: '/app/scan' },
        { id: 'feeds', label: 'Feeds', icon: <Rss className="w-5 h-5" />, path: '/app/feeds' },
        { id: 'tracker', label: 'Tracker', icon: <MapPin className="w-5 h-5" />, path: '/app/tracker' },
        { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" />, path: '/app/notifications' },
        { id: 'profile', label: 'Profile', icon: <CircleUser className="w-5 h-5" />, path: '/app/profile' },
    ];

    const bottomItems = [
        { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" />, path: '/app/settings' },
        { id: 'help', label: 'Help', icon: <HelpCircle className="w-5 h-5" />, path: '/app/help' },
    ];

    return (
        <aside className="w-64 bg-[#0f172a] h-full flex flex-col text-gray-300 font-sans border-r border-gray-800 shrink-0">

            {/* Main Menu */}
            <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) => 
                            `w-full flex items-center gap-4 px-4 py-3 rounded text-sm font-semibold transition-colors ${
                                isActive
                                    ? 'bg-[#2A3441] text-[#72D5FF] border-l-2 border-[#72D5FF]'
                                    : 'text-gray-400 hover:bg-[#1E2738] hover:text-white border-l-2 border-transparent'
                            }`
                        }
                    >
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            {/* Bottom Menu */}
            <div className="px-4 pb-6 space-y-1">
                {bottomItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) => 
                            `w-full flex items-center gap-4 px-4 py-3 rounded text-sm font-semibold transition-colors ${
                                isActive
                                    ? 'bg-[#2A3441] text-[#72D5FF] border-l-2 border-[#72D5FF]'
                                    : 'text-gray-400 hover:bg-[#1E2738] hover:text-white border-l-2 border-transparent'
                            }`
                        }
                    >
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}

                <button className="w-full flex items-center justify-center gap-2 mt-4 px-4 py-3 bg-[#CE1126] hover:bg-[#b00f20] text-white rounded text-sm font-bold shadow-md transition-colors">
                    <AlertTriangle className="w-5 h-5" />
                    Emergency SOS
                </button>
            </div>
        </aside>
    );
}
