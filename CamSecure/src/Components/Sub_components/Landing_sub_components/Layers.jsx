import { motion } from 'motion/react';

const layers = [
  {
    num: "01",
    title: "Register & Generate",
    description: "Create a secure profile for your loved ones. Instantly generate unique, privacy-first QR codes that can be easily attached to belongings, clothing, or bags.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGEiDYLehtlM-ovI8x7oHQ1puI-y85SZi001qenNun_e6zn0WviWMxKBNGa-OdXkO4mR3ZjxUmvBVMi-FKkFblnop9j4gcSOjkryP4phE2nyKbOGu1CNFQefRnCxHtr-4YWY6IKqVAhcWRpOzhLk7724qp4J3A9RMS2C0r7jAvOL8ouW0FIqj0xGCZ3N_UA83ToxiOkKsTo4k1p4RYfq-ZRn2XvtsTlTULuxGRVUO3v_Tnqxhb0c3r8PKyFCjNcwuN6kjR9DNQPwU",
    reverse: false,
    delay: 0.1
  },
  {
    num: "02",
    title: "Active Monitoring",
    description: "Equip them with the Geolocation Wristband. Our hardware provides continuous, active monitoring with precision GPS tracking, feeding data directly to your dashboard.",
    imgSrc: "https://lh3.googleusercontent.com/aida/ADBb0uhltyuejsmvd4DiJZnH_609vSpxTSLUGEF0c8v3utyFI46D8dcg3is4kL_OvIkvAbuzDfqGXeaoIoFwa9EWPcNAOW8r0NOj-cmp5tzGFGkR4y6Q8F6Hdn9my9UX464SnLkdib7WgilAZo_TY-b7WbhSYOvcvNiseOlZ6RcM8lfYgjYOvjzG6hIsqaiPJZn9esjq0ya6mfngHErlUpq9NBNYevBPx5sLvpc5PuitFndXRdxk3eSsiH4DJFk",
    reverse: true,
    delay: 0.2
  },
  {
    num: "03",
    title: "AI Facial Matching",
    description: "In an emergency, our powerful AI automatically scans integrated public feeds and verified partner uploads, significantly accelerating the matching and recovery process.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8nE_HaCl8YlTfwEk2kPozpB6u-QKgqSwX7ilKoO6XvtK0V0iMLp1qz9CJyQJp6JcwAR9ehw-hrCSbuyC--GBaFXvP8BHj_1Rnm241DgOymSsRuO27TBqrUS3zHJv6x6kNawkf34_Z2a--tE7SQ5hUIA4P-6htgxgIXWJIUaH12viR6IQWjgk3hjp3r15vxmRNwx-Z9M1ZfexHolepKOUn7tMECNAVW6N6ua7tLv_lf4Niof8sJ0eZ6E0kcDWoeChGnXLhN3IFpBE",
    reverse: false,
    delay: 0.3,
    darkImg: true
  }
];

export default function Layers() {
  return (
    <section className="py-20 md:py-24 bg-surface-lowest border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl font-semibold text-on-surface">The 3 Layers of Safety</h2>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: layer.delay }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className={`order-2 ${layer.reverse ? 'md:order-2' : 'md:order-1'} rounded-xl overflow-hidden border border-outline-variant shadow-sm ${layer.darkImg ? 'bg-black flex items-center justify-center' : ''}`}>
                <img
                  alt={layer.title}
                  className={`w-full h-auto object-cover aspect-[16/9] ${layer.darkImg ? 'opacity-80 mix-blend-screen' : ''}`}
                  src={layer.imgSrc}
                />
              </div>
              <div className={`order-1 ${layer.reverse ? 'md:order-1 md:pr-12' : 'md:order-2 md:pl-8'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center text-xs font-semibold">
                    {layer.num}
                  </div>
                  <h3 className="text-2xl font-semibold text-on-surface tracking-tight">{layer.title}</h3>
                </div>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  {layer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
