'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/content';

const skillCategories = [
  { key: 'frontend', title: 'Frontend', data: skills.frontend },
  { key: 'backend', title: 'Backend', data: skills.backend },
  { key: 'databases', title: 'Databases', data: skills.databases },
  { key: 'cloudDevops', title: 'Cloud & DevOps', data: skills.cloudDevops },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-[#737373] max-w-2xl mx-auto">
            Technologies I work with to build modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-[#141414] rounded-xl p-6 border border-[#262626]"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.data.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#1f1f1f] text-[#a3a3a3] rounded-lg text-sm border border-[#262626] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
