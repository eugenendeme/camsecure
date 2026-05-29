import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './Sub_components/MainScreen_sub_components/SideBAr.jsx';
import TopNavbar from './Sub_components/MainScreen_sub_components/navbar.jsx';
import FamilyTreeRoot from './Sub_components/MainScreen_sub_components/Tabs/FamilyTree/FamilyTreeRoot.jsx';
import { LayoutGrid } from 'lucide-react';


export default function WebSystem() {
    return (
        <div className="flex flex-col h-screen w-full bg-gray-50 overflow-hidden font-sans">
            <TopNavbar />

            <div className="flex flex-1 overflow-hidden relative z-10">
                <SideBar />

                {/* Main Content Area */}
                <main className="flex-1 flex overflow-hidden">
                    <Routes>
                        {/* Default redirect to family tree */}
                        <Route path="/" element={<Navigate to="feeds" replace />} />

                        {/* Modules */}
                        <Route path="family-tree" element={<FamilyTreeRoot />} />

                        {/* Placeholder for other routes */}
                        <Route path="*" element={
                            <div className="flex-1 overflow-y-auto p-8 flex items-center justify-center bg-white m-4 rounded-xl shadow-sm border border-gray-100 w-full">
                                <div className="flex flex-col items-center text-center max-w-sm opacity-60">
                                    <LayoutGrid className="w-16 h-16 text-gray-400 mb-6" strokeWidth={1.5} />
                                    <h2 className="text-2xl font-bold text-gray-700 mb-2">Module Not Found</h2>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        This module is either under construction or doesn't exist. Select a valid module from the command center.
                                    </p>
                                </div>
                            </div>
                        } />
                    </Routes>
                </main>
            </div>
        </div>
    );
}
