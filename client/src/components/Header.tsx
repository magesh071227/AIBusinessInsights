import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [coursesDropdownVisible, setCoursesDropdownVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const toggleCoursesDropdown = () => {
    setCoursesDropdownVisible(!coursesDropdownVisible);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "#", hasDropdown: true },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];
  
  const courseItems = [
    { label: "AI for Business Growth", href: "/courses/ai" },
    { label: "AWS Cloud Computing", href: "/courses/aws" },
    { label: "Azure Cloud Solutions", href: "/courses/azure" },
    { label: "Power BI Data Visualization", href: "/courses/powerbi" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="h-10 w-10 mr-2 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="text-primary font-bold text-xl">TimesLearn</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <div>
                  <button 
                    className="text-dark hover:text-primary font-medium flex items-center" 
                    onClick={toggleCoursesDropdown}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  {coursesDropdownVisible && (
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                      {courseItems.map((course, courseIndex) => (
                        <a 
                          key={courseIndex} 
                          href={course.href} 
                          className="block px-4 py-2 text-dark hover:bg-gray-100 hover:text-primary"
                        >
                          {course.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-dark hover:text-primary font-medium"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuVisible && (
        <div className="md:hidden bg-white w-full">
          <div className="px-4 py-3 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div>
                    <button 
                      className="flex items-center text-dark hover:text-primary font-medium w-full text-left"
                      onClick={() => setCoursesDropdownVisible(!coursesDropdownVisible)}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${coursesDropdownVisible ? 'rotate-180' : ''}`} />
                    </button>
                    {coursesDropdownVisible && (
                      <div className="pl-4 mt-2 space-y-2">
                        {courseItems.map((course, courseIndex) => (
                          <a 
                            key={courseIndex} 
                            href={course.href} 
                            className="block text-dark hover:text-primary"
                            onClick={() => setMobileMenuVisible(false)}
                          >
                            {course.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block text-dark hover:text-primary font-medium"
                    onClick={() => setMobileMenuVisible(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
