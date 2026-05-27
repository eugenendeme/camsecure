import { Users, Handshake, Headset, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

const supports = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "System Administration",
    email: "admin@camsecure.ops",
    phone: "+237 (800) OPS-SEC",
    desc: "Infrastructure and security queries.",
    delay: 0.1,
    isPriority: false
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Partnership & Integration",
    email: "partnerships@camsecure.ops",
    desc: "Official agency and hardware partnerships.",
    delay: 0.2,
    isPriority: false
  },
  {
    icon: <Headset className="w-6 h-6" />,
    title: "24/7 Technical Command",
    email: "support@camsecure.ops",
    priorityText: "Priority Line: 1515",
    desc: "Operational assistance and critical support.",
    delay: 0.3,
    isPriority: true
  }
];

export default function Support() {
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
          <h2 className="text-3xl font-semibold text-on-surface mb-4 tracking-tight">Operational Inquiry & Support</h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
            Direct channels for system administration, partnership inquiries, and specialized support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supports.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="bg-surface rounded-xl border border-outline-variant p-8 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 border ${
                item.isPriority 
                  ? 'bg-primary-fixed border-primary-fixed-dim text-primary' 
                  : 'bg-[#dae2fd] border-[#bec6e0] text-[#131b2e]'
              }`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-on-surface mb-4">{item.title}</h3>
              
              <div className="mb-6 text-on-surface-variant text-sm flex-grow">
                <div className={`${item.phone || item.priorityText ? 'mb-2' : ''}`}>{item.email}</div>
                {item.phone && <div>{item.phone}</div>}
                {item.priorityText && (
                  <div className="inline-flex items-center gap-1.5 bg-[#ffdad6] text-[#93000a] px-2.5 py-1 rounded text-xs font-semibold mt-1">
                    <AlertTriangle className="w-4 h-4" /> {item.priorityText}
                  </div>
                )}
              </div>
              
              <p className="text-xs font-semibold tracking-wide text-on-surface-variant pt-4 border-t border-outline-variant uppercase">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
