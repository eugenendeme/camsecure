import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    title: "Community Basic",
    price: "Free",
    period: "forever",
    features: [
      "Basic Registration",
      "Public Feed Browsing",
      "QR Scanning Access"
    ],
    buttonText: "Get Started",
    isPrimary: false,
    delay: 0.1
  },
  {
    title: "Premium Shield",
    price: "$5",
    period: "/mo",
    features: [
      "Priority Alerts",
      "Geofence Monitoring",
      "SMS Broadcasts",
      "Advanced AI Matches"
    ],
    buttonText: "Upgrade to Premium",
    isPrimary: true,
    badge: "RECOMMENDED",
    delay: 0.2
  },
  {
    title: "Smart Hardware",
    price: "$50",
    period: "one-time",
    features: [
      "Active GPS Tracking",
      "Geolocation Wristband",
      "Long Battery Life"
    ],
    buttonText: "Order Hardware",
    isPrimary: false,
    delay: 0.3
  }
];

export default function Pricing() {
  return (
    <section className="py-20 md:py-24 bg-transparent border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold text-on-surface mb-4 tracking-tight">Accessible Protection for All</h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
            Flexible plans designed to bring peace of mind to every family, regardless of budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: plan.delay }}
              className={`relative bg-surface-lowest rounded-xl flex flex-col ${
                plan.isPrimary 
                  ? 'border-2 border-primary p-8 shadow-lg md:scale-105 z-10' 
                  : 'border border-outline-variant p-8'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-on-surface">{plan.title}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-on-surface">{plan.price}</span>
                  <span className="text-sm text-on-surface-variant">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full px-6 py-3 rounded-md text-sm font-semibold transition-colors ${
                  plan.isPrimary 
                    ? 'bg-primary text-white hover:bg-primary-hover shadow-sm' 
                    : 'border border-outline text-on-surface hover:bg-surface-low'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
