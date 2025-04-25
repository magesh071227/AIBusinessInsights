import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CourseOverview() {
  const features = [
    {
      title: "Industry-Relevant Curriculum",
      description: "Course content designed with input from industry leaders to address real business challenges",
    },
    {
      title: "Expert Instructors",
      description: "Learn from AI practitioners and business leaders with extensive experience in digital transformation",
    },
    {
      title: "Hands-on Projects",
      description: "Apply your knowledge through practical projects that simulate real-world business scenarios",
    },
    {
      title: "Networking Opportunities",
      description: "Connect with industry professionals and like-minded participants to expand your professional network",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Course Overview</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Equip yourself with the knowledge and skills to harness the power of artificial intelligence for business transformation
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" 
              alt="Digital transformation in business" 
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Why Choose This Program?</h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 h-6 w-6 text-accent mr-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold" size="lg" asChild>
                <a href="#register">Register Now</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
