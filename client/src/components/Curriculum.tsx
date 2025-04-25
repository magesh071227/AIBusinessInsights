import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, ArrowRight, Check } from "lucide-react";

export default function Curriculum() {
  const [openModule, setOpenModule] = useState(0);

  const curriculumModules = [
    {
      id: 1,
      title: "Foundations of AI in Business",
      content: [
        "Introduction to AI and its business applications",
        "Understanding machine learning, deep learning, and neural networks",
        "AI ethics and governance in business context",
        "Case studies: Successful AI implementations in various industries",
      ],
    },
    {
      id: 2,
      title: "Strategic AI Implementation",
      content: [
        "Identifying AI opportunities in your business",
        "Building an AI roadmap and implementation strategy",
        "Resource allocation and team structure for AI projects",
        "Measuring ROI and success metrics for AI initiatives",
      ],
    },
    {
      id: 3,
      title: "Data Strategy for AI Success",
      content: [
        "Data readiness assessment for AI implementation",
        "Building data infrastructure for AI workloads",
        "Data governance, privacy, and security considerations",
        "From data to insights: Analytics foundations for AI",
      ],
    },
    {
      id: 4,
      title: "AI-Driven Customer Experience",
      content: [
        "Using AI to personalize customer experiences",
        "Implementing conversational AI and chatbots",
        "Customer journey analysis with AI",
        "Building predictive models for customer behavior",
      ],
    },
  ];

  const toggleModule = (moduleIndex: number) => {
    setOpenModule(openModule === moduleIndex ? -1 : moduleIndex);
  };

  return (
    <section id="curriculum" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Course Curriculum</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning path designed to transform you into an AI-powered business leader
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {curriculumModules.map((module, index) => (
              <motion.div 
                key={module.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div 
                  className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span>{module.id}</span>
                    </div>
                    <h3 className="text-xl font-bold">{module.title}</h3>
                  </div>
                  {openModule === index ? (
                    <ChevronDown className="h-6 w-6 text-gray-500 transform transition-transform" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500 transform transition-transform rotate-[-90deg]" />
                  )}
                </div>
                <div className={`px-6 py-4 bg-white ${openModule === index ? 'block' : 'hidden'}`}>
                  <ul className="space-y-3">
                    {module.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mt-0.5 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <a href="#" className="text-primary hover:underline font-medium flex items-center justify-center">
                View Complete Curriculum
                <ArrowRight className="h-5 w-5 ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
