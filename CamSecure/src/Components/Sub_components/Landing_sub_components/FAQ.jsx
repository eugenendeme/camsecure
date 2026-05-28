import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

const faqs = [
  {
    question: "How does the QR code protect my privacy?",
    answer: "Our QR codes act as a secure bridge. Scanning them does not reveal sensitive personal details or contact information. It only provides essential first-name identification and explicit instructions to contact our official, secure support line, ensuring your family's data remains private."
  },
  {
    question: "Who can see my child's GPS location?",
    answer: "GPS data is strictly guarded. It is visible ONLY to registered parents/guardians and authorized CAMSECURE administrators during an active alert. We employ enterprise-grade encryption to ensure location data cannot be accessed by unauthorized parties."
  },
  {
    question: "Is the MTN helpline really free?",
    answer: "Yes. Through our strategic partnership with MTN, dialing 1515 to report a missing person or respond to a QR code scan is completely toll-free across Cameroon. We believe communication during emergencies should never be hindered by cost."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-24 bg-surface border-b border-outline-variant">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold text-on-surface mb-2 tracking-tight">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-surface-lowest rounded-xl border border-outline-variant p-6 marker:content-['']">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-xl text-on-surface list-none">
                {faq.question}
                <ChevronDown className="text-primary w-6 h-6 group-open:-rotate-180 transition-transform duration-300" />
              </summary>
              <p className="mt-4 text-base text-on-surface-variant leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
