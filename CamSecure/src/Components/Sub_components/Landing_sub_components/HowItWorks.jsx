import { motion } from 'motion/react';

const steps = [
  {
    num: 1,
    title: "Secure Enrollment",
    description: "Register family members and critical belongings on our encrypted platform.",
    delay: 0.1
  },
  {
    num: 2,
    title: "Guardian Assignment",
    description: "Designate trusted contacts and set operational geofence perimeters.",
    delay: 0.2
  },
  {
    num: 3,
    title: "Response Activation",
    description: "Instant alerts and coordinated M1N support if boundaries are breached.",
    delay: 0.3
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-surface border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold text-on-surface mb-4 tracking-tight">How It Works</h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
            A streamlined process to ensure your family is protected and connected in three simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
          {/* Main connecting line for desktop */}
          <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-0.5 bg-outline-variant z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold mb-6 shadow-sm border-4 border-surface">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-2">{step.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
