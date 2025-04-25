import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqItems = [
    {
      id: 1,
      question: "Who should take this program?",
      answer:
        "This program is designed for business leaders, executives, managers, and entrepreneurs who want to leverage AI for business growth. It's ideal for professionals looking to implement AI strategies in their organizations or enhance existing AI initiatives.",
    },
    {
      id: 2,
      question: "Do I need a technical background to enroll?",
      answer:
        "No technical background is required. The program is designed for business professionals and focuses on strategic implementation rather than technical development. Technical concepts are explained in a business context.",
    },
    {
      id: 3,
      question: "What is the time commitment?",
      answer:
        "The program runs for 8 weeks with approximately 5-7 hours of commitment per week, including live sessions, self-paced learning, and project work. Sessions are recorded for those who cannot attend live.",
    },
    {
      id: 4,
      question: "Will I receive a certificate upon completion?",
      answer:
        "Yes, upon successful completion of the program requirements, you will receive a verified digital certificate from TimesLearn, which you can share on your LinkedIn profile and with your professional network.",
    },
    {
      id: 5,
      question: "Is there any job assistance provided?",
      answer:
        "Yes, we provide career guidance, networking opportunities with industry partners, and access to our exclusive job board. Our career services team can also assist with resume reviews and interview preparation.",
    },
  ];

  const toggleFAQ = (faqIndex: number) => {
    setOpenFAQ(openFAQ === faqIndex ? -1 : faqIndex);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our AI for Business Growth program
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div 
                  className="bg-white px-6 py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
                <div className={`px-6 py-4 bg-gray-50 ${openFAQ === index ? 'block' : 'hidden'}`}>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
