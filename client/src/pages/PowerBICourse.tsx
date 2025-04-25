import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Award, BarChart, FileBarChart, PieChart, LineChart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function PowerBICourse() {
  const modules = [
    {
      id: 1,
      title: "Introduction to Power BI",
      content: [
        "Understanding business intelligence fundamentals",
        "Power BI ecosystem overview",
        "Getting started with Power BI Desktop",
        "Building your first dashboard",
        "Power BI service and sharing capabilities",
      ],
    },
    {
      id: 2,
      title: "Data Connection and Transformation",
      content: [
        "Connecting to various data sources",
        "Using Power Query Editor for data transformations",
        "Creating and managing relationships",
        "Data modeling best practices",
        "Handling different data types and formats",
      ],
    },
    {
      id: 3,
      title: "DAX Fundamentals",
      content: [
        "Introduction to Data Analysis Expressions (DAX)",
        "Creating calculated columns and measures",
        "Time intelligence functions",
        "Filter context and row context",
        "Advanced DAX functions and patterns",
      ],
    },
    {
      id: 4,
      title: "Effective Data Visualization",
      content: [
        "Data visualization principles and best practices",
        "Selecting the right visual for your data",
        "Custom visuals from the marketplace",
        "Creating interactive reports",
        "Mobile-friendly visualization design",
      ],
    },
    {
      id: 5,
      title: "Advanced Analytics",
      content: [
        "Statistical analysis in Power BI",
        "Implementing forecasting and trends",
        "Integration with R and Python",
        "Creating what-if parameters",
        "Key influencers and decomposition tree analysis",
      ],
    },
    {
      id: 6,
      title: "Power BI for Business",
      content: [
        "Report distribution and governance",
        "Row-level security implementation",
        "Power BI deployment strategies",
        "Power BI Embedded integration",
        "Creating a data-driven culture with Power BI",
      ],
    },
  ];

  const highlights = [
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Data Visualization",
      description: "Create compelling visualizations that transform raw data into insights"
    },
    {
      icon: <FileBarChart className="h-6 w-6 text-primary" />,
      title: "Interactive Dashboards",
      description: "Build interactive dashboards that respond to user selections"
    },
    {
      icon: <PieChart className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Leverage Power BI's analytical capabilities for deeper insights"
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Business Intelligence",
      description: "Deliver actionable business intelligence to drive decision making"
    },
  ];

  const courseDetails = [
    { icon: <Clock className="h-5 w-5" />, label: "Duration", value: "6 weeks" },
    { icon: <Users className="h-5 w-5" />, label: "Students", value: "300+" },
    { icon: <Award className="h-5 w-5" />, label: "Certification", value: "Power BI Professional" },
  ];

  return (
    <div className="font-sans text-dark bg-light min-h-screen">
      <Header />
      <main>
        {/* Hero section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-green-800 to-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/">
                <span className="inline-flex items-center text-white hover:underline cursor-pointer">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </span>
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Power BI Data Visualization</h1>
                <p className="text-lg md:text-xl mb-6">
                  Transform your data into powerful interactive dashboards and business insights
                </p>
                
                <div className="flex space-x-6 mb-8">
                  {courseDetails.map((detail, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-2 text-green-300">
                        {detail.icon}
                      </div>
                      <div>
                        <p className="text-xs text-green-200">{detail.label}</p>
                        <p className="font-semibold">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-green-700 font-bold shadow-lg" asChild>
                    <a href="#register">Enroll Now</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold" asChild>
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                  alt="Power BI Data Visualization" 
                  className="rounded-lg shadow-xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Course highlights */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Course Highlights</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                What you'll learn in our comprehensive Power BI Data Visualization program
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="py-16 bg-gray-50">
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
                A structured learning path to master Power BI data visualization
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <motion.div 
                    key={module.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="bg-white px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span>{module.id}</span>
                        </div>
                        <h3 className="text-xl font-bold">{module.title}</h3>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-gray-50">
                      <ul className="space-y-2">
                        {module.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section id="register" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-5xl mx-auto bg-green-700 text-white rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4">Enroll Today</h2>
                  <p className="mb-6">
                    Transform your data into powerful insights and join a network of data visualization experts. Limited seats available.
                  </p>
                  
                  <ul className="mb-8 space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-300 mt-0.5 mr-2" />
                      <span>6-week comprehensive program</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-300 mt-0.5 mr-2" />
                      <span>Live sessions with Power BI experts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-300 mt-0.5 mr-2" />
                      <span>Hands-on practical exercises</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-300 mt-0.5 mr-2" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-300 mt-0.5 mr-2" />
                      <span>Lifetime access to course materials</span>
                    </li>
                  </ul>
                  
                  <div>
                    <div className="mb-2">
                      <span className="text-3xl font-bold">₹49,999</span>
                      <span className="text-xl line-through ml-2">₹79,999</span>
                    </div>
                    <p className="text-white/80 mb-6">Early bird discount: 38% off</p>
                    
                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="bg-white/20 px-4 py-2 rounded-md w-full sm:w-auto text-center">
                        <span className="font-bold">Next Batch:</span>
                        <span> June 15, 2023</span>
                      </div>
                      <div className="bg-green-500 px-4 py-2 rounded-md w-full sm:w-auto text-center">
                        <span className="font-bold">Limited Seats:</span>
                        <span> Only 25 left</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-white p-8 md:p-12">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                      <Input 
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                      <Input 
                        type="email" 
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                      <Input 
                        type="tel" 
                        id="phone"
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="organization" className="text-gray-700">Company/Organization</Label>
                      <Input 
                        type="text" 
                        id="organization"
                        placeholder="Enter your company name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="jobTitle" className="text-gray-700">Job Title</Label>
                      <Input 
                        type="text" 
                        id="jobTitle"
                        placeholder="Enter your job title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-lg"
                      >
                        Secure Your Spot
                      </Button>
                    </div>
                    
                    <p className="text-xs text-gray-600 text-center">
                      By registering, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}