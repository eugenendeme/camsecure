import { PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section
      className="relative bg-transparent overflow-hidden border-b border-outline-variant py-24 md:py-32 min-h-[70vh] flex items-center bg-cover bg-center bg-no-repeat pt-[120px]"
      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0uiQM3DNHgJ6T0TA31aTICsKBhAVQ8BoqNPiPPOUviJNHSi2jXfHjOr5IrKGQruYsOj8m0Ek4vCmiQgOzCnE9GnTUjcH--jpm0h3PAs1qr-YFGylKMwoihxbU0a13xL5LychSFoZEJQjpcrEAhBbeBEvri050-IsRXpxEvU6wj3ly5LhGU9doPXmPlRdMWWnr35Uv6H_tbW4XOac67bpUcjanCyPv4pGmiaMjlZq2Dkcf7LKkQFesXWHAw')" }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed mb-6 text-xs font-medium border border-primary-fixed-dim">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Operational Command Active
          </div>

          <h1 className="font-bold text-4xl md:text-5xl text-white mb-6 leading-tight tracking-tight">
            Securing Every Connection. <br className="hidden md:block" />Protecting Every Family.
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-normal">
            A unified missing persons platform combining advanced facial recognition, real-time geofencing, and secure QR protocols to protect your loved ones during critical hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/auth')} className="px-8 py-3 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary-hover shadow-sm transition-colors text-center w-full sm:w-auto">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-md border border-outline-variant bg-white text-on-surface text-sm font-semibold hover:bg-surface-low transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
              <PlayCircle className="w-5 h-5" />
              View Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
