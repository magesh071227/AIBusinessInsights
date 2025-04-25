import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Robert Park",
      role: "CEO, Innovate Solutions",
      testimonial:
        "The AI for Business Growth program transformed our approach to customer service. We implemented AI chatbots and predictive analytics that increased our customer satisfaction by 35% and reduced response time by half.",
    },
    {
      name: "Jennifer Lee",
      role: "Marketing Director, Global Retail",
      testimonial:
        "The insights from this program helped us develop an AI-driven marketing strategy that increased our conversion rates by 28%. The practical approach and expert guidance were invaluable for our team's success.",
    },
    {
      name: "David Wilson",
      role: "CTO, FinTech Innovations",
      testimonial:
        "This program provided a clear roadmap for AI integration in our financial services. We've reduced operational costs by 22% and improved fraud detection accuracy. The ROI has been outstanding.",
    },
    {
      name: "Priya Sharma",
      role: "Operations VP, Healthcare Solutions",
      testimonial:
        "The hands-on projects and expert guidance helped us implement AI solutions that improved patient care and operational efficiency. We're now seen as innovators in our industry thanks to this program.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Success Stories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who have transformed their businesses with our program
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div className="flex items-center mb-4">
                <div className="text-accent">
                  <Quote className="h-8 w-8" fill="currentColor" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.testimonial}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
