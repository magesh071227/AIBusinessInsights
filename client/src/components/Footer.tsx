import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const programs = [
    { label: "AI for Business Growth", href: "#" },
    { label: "AWS Cloud Computing", href: "/courses/aws" },
    { label: "Azure Cloud Solutions", href: "#" },
    { label: "Power BI Data Visualization", href: "#" },
    { label: "Digital Marketing Mastery", href: "#" },
    { label: "Data Analytics Certification", href: "#" },
    { label: "Leadership in Digital Age", href: "#" },
    { label: "Product Management", href: "#" },
  ];

  const resources = [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Free Webinars", href: "#" },
    { label: "Career Support", href: "#" },
    { label: "Student Success Stories", href: "#" },
  ];

  const contactInfo = [
    { 
      icon: <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />, 
      text: "info@timeslearn.com", 
    },
    { 
      icon: <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />, 
      text: "+91 98765 43210", 
    },
    { 
      icon: <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />, 
      text: "Times Building, Mumbai, India", 
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-6 w-6" />, href: "#" },
    { icon: <Linkedin className="h-6 w-6" />, href: "#" },
    { icon: <Instagram className="h-6 w-6" />, href: "#" },
    { icon: <Facebook className="h-6 w-6" />, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <svg
                className="h-10 w-10 mr-2 text-white bg-white rounded-md p-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1E40AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span className="text-white font-bold text-xl">TimesLearn</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering professionals with cutting-edge skills for the future of business and technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a href={program.href} className="text-gray-400 hover:text-white transition">
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-gray-400 hover:text-white transition">
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} TimesLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
