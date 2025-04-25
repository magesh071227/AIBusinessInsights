import { motion } from "framer-motion";
import { Zap, BarChart2, Clock } from "lucide-react";

export default function KeyBenefits() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Accelerated Business Growth",
      description: "Learn how to implement AI solutions that drive revenue, optimize operations, and create competitive advantages",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      title: "Data-Driven Decision Making",
      description: "Develop the ability to leverage data analytics and AI insights to make informed strategic business decisions",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Future-Ready Strategies",
      description: "Prepare your business for future technological advancements with scalable AI implementation strategies",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Key Benefits</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            How this program will transform your business approach
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 * index }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
