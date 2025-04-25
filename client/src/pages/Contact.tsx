
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function Contact() {
  const contactInfo = [
    { 
      icon: <Mail className="h-8 w-8 text-primary" />, 
      label: "Email",
      text: "info@timeslearn.com",
      link: "mailto:info@timeslearn.com"
    },
    { 
      icon: <Phone className="h-8 w-8 text-primary" />, 
      label: "Phone",
      text: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    { 
      icon: <MapPin className="h-8 w-8 text-primary" />, 
      label: "Address",
      text: "Times Building, Mumbai, India",
      link: "https://maps.google.com/?q=Times+Building+Mumbai+India"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <section className="py-24 bg-gradient-to-br from-primary/90 to-primary text-white">
          <div className="container mx-auto px-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions? We're here to help and provide more information about our programs.
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.icon.type === MapPin ? "_blank" : undefined}
                  rel={item.icon.type === MapPin ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                  <p className="text-gray-600 text-center">{item.text}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
