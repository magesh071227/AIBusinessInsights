import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "AI for Business Growth",
      description: "Master artificial intelligence strategies to transform your business and drive exceptional growth",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      duration: "8 weeks",
      level: "Intermediate",
      link: "/courses/ai",
    },
    {
      id: 2,
      title: "AWS Cloud Computing",
      description: "Comprehensive training on AWS services and cloud infrastructure for modern businesses",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      duration: "10 weeks",
      level: "All levels",
      link: "/courses/aws",
    },
    {
      id: 3,
      title: "Azure Cloud Solutions",
      description: "Leverage Microsoft Azure to build, deploy, and manage applications in the cloud",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      duration: "10 weeks",
      level: "Intermediate",
      link: "/courses/azure",
    },
    {
      id: 4,
      title: "Power BI Data Visualization",
      description: "Transform your data into powerful interactive dashboards and business insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      link: "/courses/powerbi",
    },
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Courses</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our range of professional development courses designed to enhance your career
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-2 py-1 rounded">
                  Popular
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">{course.duration}</span>
                  <span className="text-sm text-gray-500">{course.level}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                
                <Button 
                  variant="outline" 
                  className="group w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  asChild
                >
                  <a href={course.link || "#"}>
                    View Course
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white"
          >
            View All Courses
          </Button>
        </motion.div>
      </div>
    </section>
  );
}