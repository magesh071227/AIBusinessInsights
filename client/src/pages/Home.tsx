import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CourseOverview from "@/components/CourseOverview";
import KeyBenefits from "@/components/KeyBenefits";
import Curriculum from "@/components/Curriculum";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";

export default function Home() {
  return (
    <div className="font-sans text-dark bg-light min-h-screen">
      <Header />
      <main>
        <Hero />
        <CourseOverview />
        <Courses />
        <KeyBenefits />
        <Curriculum />
        <Instructors />
        <Testimonials />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
