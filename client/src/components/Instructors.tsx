import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

export default function Instructors() {
  const instructors = [
    {
      name: "Dr. Alex Johnson",
      role: "AI Strategy Consultant & Former CTO",
      bio: "15+ years of experience implementing AI solutions for Fortune 500 companies. Expert in AI-driven business transformation.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Martinez",
      role: "Digital Transformation Director",
      bio: "Led AI-driven transformations at leading financial institutions. Specializes in business process optimization with AI.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "AI Product Executive",
      bio: "Founded three successful AI startups. Expert in identifying AI opportunities and creating scalable AI product strategies.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
      },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Expert Instructors</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn from industry leaders with extensive experience in AI and business transformation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 * index }}
            >
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                <p className="text-primary font-medium mb-3">{instructor.role}</p>
                <p className="text-gray-600 mb-4">{instructor.bio}</p>
                <div className="flex space-x-3">
                  <a href={instructor.social.linkedin} className="text-gray-600 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={instructor.social.twitter} className="text-gray-600 hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
