import { motion } from 'motion/react';
import { Search, FileText, Users } from 'lucide-react';

const services = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnostic technique & gouvernance cyber',
    price: 'À partir de 3 900 € HT',
    description:
      'Nous réalisons un état des lieux de vos applications, API et environnements exposés afin d\'identifier les risques techniques, les vulnérabilités connues, les technologies obsolètes, les mauvaises configurations et les écarts de gouvernance.'
  },
  {
    icon: FileText,
    number: '02',
    title: 'Analyse & avis sécurité projet',
    price: 'À partir de 2 500 € HT',
    description:
      'Nous analysons vos projets applicatifs avant une mise en production, une livraison client ou une décision importante afin de formuler un avis sécurité clair, argumenté et exploitable.'
  },
  {
    icon: Users,
    number: '03',
    title: 'Accompagnement sécurité applicative',
    price: 'À partir de 1 500 € HT / mois',
    description:
      'Nous aidons vos équipes à intégrer la sécurité dans le cycle de vie applicatif : exigences sécurité, revues de risques, bonnes pratiques de développement, critères de mise en production et suivi des corrections.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs tracking-wide uppercase text-accent-cyan mb-4">Nos services</div>
          <h2 className="text-balance text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-foreground">
            Une approche complète de la sécurité applicative
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="border border-border p-6 sm:p-8 h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <service.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  <span className="font-mono text-3xl sm:text-4xl font-light text-border">{service.number}</span>
                </div>
                <h3 className="mb-3 text-lg sm:text-xl text-foreground">{service.title}</h3>
                <p className="text-primary mb-4">{service.price}</p>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
