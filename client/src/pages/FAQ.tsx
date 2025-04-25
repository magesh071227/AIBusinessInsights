import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqCategories = [
    {
      category: "Course Information",
      questions: [
        {
          id: "q1",
          question: "How long do I have access to the course materials?",
          answer: "Upon enrollment, you receive lifetime access to all course materials, including any future updates. This ensures you can revisit the content whenever needed and stay current with the latest developments."
        },
        {
          id: "q2",
          question: "Are the courses self-paced or do they have a fixed schedule?",
          answer: "Our courses combine both approaches. While the live sessions follow a set schedule over the course duration, all sessions are recorded and made available in your learning dashboard. You can complete the hands-on assignments and projects at your own pace within the course timeframe."
        },
        {
          id: "q3",
          question: "What prerequisites are required for the courses?",
          answer: "Prerequisites vary by course. For AI and data courses, basic programming knowledge is helpful but not mandatory as we provide foundational resources. Cloud computing courses assume basic IT understanding. Each course page specifies exact prerequisites, and our advisors can help you determine the right fit for your experience level."
        },
        {
          id: "q4",
          question: "Do you provide certification upon course completion?",
          answer: "Yes, all courses include a certificate of completion from TimesLearn. Several courses also prepare you for industry certifications such as AWS Certified Cloud Practitioner, Microsoft Azure Fundamentals, or similar credentials, though the certification exams themselves are administered separately by the respective organizations."
        }
      ]
    },
    {
      category: "Enrollment & Payment",
      questions: [
        {
          id: "q5",
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, net banking, UPI, and EMI options. Corporate enrollments can be processed through purchase orders or direct bank transfers. For international students, we accept PayPal and international credit cards."
        },
        {
          id: "q6",
          question: "Do you offer any scholarships or financial assistance?",
          answer: "Yes, we offer merit-based scholarships for exceptional candidates and need-based financial assistance. We also partner with various organizations to provide sponsored seats. Please contact our admissions team at admissions@timeslearn.com to learn more about these opportunities."
        },
        {
          id: "q7",
          question: "What is your refund policy?",
          answer: "We offer a 7-day money-back guarantee from the date of enrollment or before completion of 20% of the course content, whichever comes first. This allows you to experience the course and ensure it meets your expectations. Refund requests should be submitted in writing to support@timeslearn.com."
        },
        {
          id: "q8",
          question: "Can I transfer my enrollment to a later batch?",
          answer: "Yes, you can defer your enrollment to a future batch one time at no additional cost, provided the request is made at least 7 days before the course start date. Additional transfers may incur a nominal administrative fee. Please contact our support team to arrange a transfer."
        }
      ]
    },
    {
      category: "Learning Experience",
      questions: [
        {
          id: "q9",
          question: "How are the online classes conducted?",
          answer: "Classes are conducted live via our interactive learning platform that supports video, audio, screen sharing, and collaborative features. You'll be able to interact with instructors in real-time, participate in discussions, and engage with fellow learners through breakout rooms and collaborative projects."
        },
        {
          id: "q10",
          question: "What if I miss a live session?",
          answer: "All live sessions are recorded and made available in your learning dashboard within 24 hours. You can watch these recordings at your convenience and post any questions you have in the course discussion forum, where instructors provide regular feedback."
        },
        {
          id: "q11",
          question: "How much time should I dedicate to the course each week?",
          answer: "Most courses require 5-8 hours per week, including 2-3 hours of live or recorded sessions and 3-5 hours for assignments, projects, and additional reading. The specific time commitment is detailed on each course page, and you can adjust your pace for self-study components."
        },
        {
          id: "q12",
          question: "What kind of support will I receive during the course?",
          answer: "You'll have access to instructor support through live Q&A sessions, discussion forums, and dedicated office hours. Our technical support team is available via chat and email for platform-related assistance. Many courses also include mentorship components or peer learning communities."
        }
      ]
    },
    {
      category: "Corporate Training",
      questions: [
        {
          id: "q13",
          question: "Do you offer custom training programs for organizations?",
          answer: "Yes, we specialize in developing customized training programs for organizations based on their specific needs, objectives, and industry context. Our enterprise solutions team works closely with you to create tailored learning journeys for your teams."
        },
        {
          id: "q14",
          question: "How do you handle corporate enrollments for multiple employees?",
          answer: "We provide streamlined corporate enrollment processes with bulk registration, custom learning paths, and dedicated account management. Organizations receive special pricing based on the number of participants, along with progress tracking and impact assessment reports."
        },
        {
          id: "q15",
          question: "Can you integrate with our existing learning management system?",
          answer: "Yes, our courses can be integrated with most major Learning Management Systems (LMS) through SCORM, xAPI, or direct API connections. We also offer a white-labeled instance of our learning platform for larger engagements with custom branding and single sign-on capabilities."
        },
        {
          id: "q16",
          question: "Do you provide post-training implementation support?",
          answer: "Yes, our enterprise engagements include post-training support to help teams apply their learning to real-world projects. This can include facilitated workshops, implementation clinics, and consulting services to ensure the training translates into tangible business outcomes."
        }
      ]
    }
  ];

  // Filter questions based on search query
  const filteredFAQs = searchQuery.trim() === "" 
    ? faqCategories 
    : faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0);

  return (
    <div className="font-sans text-dark bg-light min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-indigo-800 to-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find answers to common questions about our courses, enrollment process, and learning experience
            </motion.p>
            
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for questions..."
                  className="w-full px-4 py-6 rounded-full text-gray-800 border-0 focus:ring-2 focus:ring-indigo-500 pl-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((category, categoryIndex) => (
                category.questions.length > 0 && (
                  <motion.div 
                    key={categoryIndex}
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                  >
                    <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, itemIndex) => (
                        <AccordionItem key={item.id} value={item.id}>
                          <AccordionTrigger className="text-lg font-medium text-left hover:text-primary transition-colors">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                )
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-4">No results found for "{searchQuery}"</h3>
                <p className="text-gray-600 mb-6">Please try searching with different keywords or browse our FAQ categories.</p>
                <Button onClick={() => setSearchQuery("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Still Have Questions?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our team is ready to assist you with any other questions you might have about our courses or enrollment process.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Schedule a Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}