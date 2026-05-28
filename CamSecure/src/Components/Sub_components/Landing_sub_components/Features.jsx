import { Fingerprint, LocateFixed, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Fingerprint className="w-6 h-6" />,
    title: "Hybrid Identification",
    description: "A robust triad of protection integrating secure QR codes, AI facial recognition, and precision GPS tracking for a fail-safe safety net.",
    delay: 0.1
  },
  {
    icon: <LocateFixed className="w-6 h-6" />,
    title: "Real-time Geofencing",
    description: "Advanced alert logic triggered by boundary breaches, sudden separation, or abnormal no-motion periods.",
    delay: 0.2
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Safe-Contact Protocols",
    description: "Privacy-first routing. We protect families by directing all contact through verified partners and official M1N helplines.",
    delay: 0.3
  }
];

export default function Features() {
  return (
    <section className="py-20 md:py-24 bg-surface-lowest border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold text-on-surface mb-4 tracking-tight">Engineered for Critical Response</h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
            Precision tools designed for high-stakes operational environments, ensuring clarity and speed when it matters most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="group bg-surface rounded-xl border border-outline-variant p-8 hover:border-primary-fixed transition-colors hover:shadow-sm flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-[#dae2fd] flex items-center justify-center mb-6 border border-[#bec6e0] text-[#131b2e] group-hover:bg-primary-fixed group-hover:text-primary transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-2">{feature.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
