import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI for Business Growth</h1>
          <p className="text-lg md:text-xl mb-6">
            Master artificial intelligence strategies to transform your business and drive exceptional growth
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-[#F59E0B] hover:bg-amber-600 text-white font-bold shadow-lg" asChild>
              <a href="#register">Enroll Now</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-primary font-bold" asChild>
              <a href="#curriculum">View Curriculum</a>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" 
            alt="Business professionals using AI technology" 
            className="rounded-lg shadow-xl w-full"
          />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 mt-12">
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-wrap justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="w-1/2 md:w-1/4 mb-4 md:mb-0 text-center">
            <div className="text-3xl font-bold">8</div>
            <div className="text-sm">Weeks Duration</div>
          </div>
          <div className="w-1/2 md:w-1/4 mb-4 md:mb-0 text-center">
            <div className="text-3xl font-bold">24+</div>
            <div className="text-sm">Live Sessions</div>
          </div>
          <div className="w-1/2 md:w-1/4 text-center">
            <div className="text-3xl font-bold">12</div>
            <div className="text-sm">Industry Projects</div>
          </div>
          <div className="w-1/2 md:w-1/4 text-center">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm">Job Assistance</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
