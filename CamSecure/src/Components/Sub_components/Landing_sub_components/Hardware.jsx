import { motion } from 'motion/react';

const hardwareItems = [
  {
    title: "Guardian Clip",
    description: "A versatile, high-durability tracking clip designed for apparel, backpacks, and essential gear.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0e3OaFWiayju2o7N0-Sxi4IbdXlJGz8HmAcp2p10HSliLgwAYCugQkOt-07RbVIDhpg5v_f1_a9r1qaRXy9YLwRcaefuOssI5k8PMRSkKGRxB8WKQpElWakhkdu-Ye8cuA-NrXbI9AEEaiAHzxWd0wY2AuTFKF_PrWyTktUGlbnpu6-HmM6IngXdMhaBfHWYeY_dTS7yYxBiBGSZORaOj3g-Xm_6CHSu5XFzoxowMBPsCVlZTw2C3k8y32tkTICQfHkr4N5T6j-s",
    delay: 0.1
  },
  {
    title: "SecureBand",
    description: "An adjustable, tamper-resistant wristband providing continuous location monitoring for loved ones.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjFVCvvRTKlXKyFPXK3e0gTm7enFarp3EakA3B6GsC4XfmXDPScrvCB45i0RSyUe5VlxnO8uMeb9ZJvkS6Gr9GKxbJxMimEWXyGlVe5eKV2xFPHahstMNp91vVF5NChOB-1kAQOCE93B0s1ytKUAahKlqSJw2Uw3AIy2bQ-YgHuQcwGOEcSN9QgyfBon8quCnYwg11-OR0kbbXIQ6hjGJljEUxetU3vSUd3d5ZTjzi3gpI6VDGjbukcabWvDVrIItieQ0c34hXJjM",
    delay: 0.2
  },
  {
    title: "RuggedTag",
    description: "Weatherproof tracking tag built for high-stakes environments and long-range durability.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLaUO6xD54QHAtZkQ7cBkmm2NXbRsJpGIAZ0U5zac6OaqR6yAtLIQOiWUr84U5TGCQGZv1af1C-ddRhyFqgjHhGM_iy9CfP4eC0enYrz1rbom1RC7EolaFwaybkj-GaTnWflrf-Nj4Uy41gV7FagJBsRPWZV56PXBIEhTB-RGHqOogihy8Iqn0dWR0lb6a2T-s_p_hZT1pxE2G1e7QD21LYyyOUATP0GeC1pe_WmUKXQoAWexlSHSw5nEqn6nCJUE-bmXIl8KCkws",
    delay: 0.3
  }
];

export default function Hardware() {
  return (
    <section className="py-20 md:py-24 bg-surface-low border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold text-on-surface mb-4 tracking-tight">Mission-Critical Hardware</h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
            Purpose-built devices designed for reliability and seamless integration with the CamSecure platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hardwareItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="group bg-surface rounded-xl border border-outline-variant overflow-hidden hover:border-primary-fixed transition-colors hover:shadow-md flex flex-col"
            >
              <div className="overflow-hidden">
                <img 
                  alt={item.title} 
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={item.imgSrc} 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-on-surface mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant flex-grow leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
