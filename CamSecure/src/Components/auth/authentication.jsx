import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';
import CamSecureLogo from '../Parts/CamSecureLogo.jsx';
import authBg from '../../assets/auth-bg.png';

export default function Authentication() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [persistSession, setPersistSession] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle authentication logic here
        console.log({ email, password, persistSession });
    };

    return (
        <div className="flex w-full h-screen font-sans bg-white">
            {/* Left Panel - Image & Mission Statement */}
            <div className="relative hidden w-[55%] overflow-hidden lg:block bg-black">
                {/* Background Image Placeholder - using a reliable Unsplash image similar to the rescue theme */}
                <img
                    src={authBg}
                    alt="Rescue operational team"
                    className="object-cover w-full h-full opacity-80"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-16 text-white">
                    <h1 className="mb-1 text-5xl font-bold tracking-tight">
                        Your Mission: Family Safety.
                    </h1>
                    <h1 className="mb-4 text-5xl font-bold tracking-tight">
                        Our Mission: Reliable Command.
                    </h1>
                    <p className="max-w-2xl mt-6 text-xl text-gray-200">
                        Securing Every Connection, Protecting Every Family. Advanced
                        operational intelligence and incident response coordination.
                    </p>
                </div>
            </div>

            {/* Right Panel - Sign In Form */}
            <div className="flex flex-col items-center justify-center w-full px-8 lg:w-[45%]">
                <div className="w-full max-w-[400px]">

                    {/* Header & Logo */}
                    <div className="flex flex-col items-center mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <CamSecureLogo size={40} className='mr-[-15px]' />
                            <span className="text-2xl font-semibold text-black-500 tracking-tight">
                                CAMSECURE
                            </span>
                        </div>
                        <p className="text-sm text-gray-600">Operational Command Sign-In</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Email Field */}
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                                Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Mail className="w-5 h-5 text-blue-500" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full py-2.5 pl-10 pr-3 text-sm text-gray-900 border border-gray-400 rounded-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Lock className="w-5 h-5 text-blue-500" />
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full py-2.5 pl-10 pr-3 text-sm text-gray-900 border border-gray-400 rounded-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>

                        {/* Persist Session Checkbox */}
                        <div className="flex items-center">
                            <input
                                id="persist"
                                type="checkbox"
                                checked={persistSession}
                                onChange={(e) => setPersistSession(e.target.checked)}
                                className="w-4 h-4 text-blue-500 bg-white border-gray-400 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <label htmlFor="persist" className="ml-2 text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-semibold text-white transition-colors bg-blue-500 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2"
                        >
                            <span>Sign In</span>
                            <LogIn className="w-4 h-4" />
                        </button>
                    </form>

                    {/* Footer Text */}
                    <div className="mt-10 text-sm text-center text-gray-600">
                        Don't Have an account yet?{' '}
                        <a href="#" className="font-semibold text-blue-500 hover:underline">
                            Create Account
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
