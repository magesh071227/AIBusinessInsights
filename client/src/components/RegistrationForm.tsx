import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

type RegistrationFormValues = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  jobTitle: string;
};

export default function RegistrationForm() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      jobTitle: "",
    }
  });

  const registration = useMutation({
    mutationFn: async (data: RegistrationFormValues) => {
      const res = await apiRequest("POST", "/api/register", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering! We will contact you shortly.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: RegistrationFormValues) => {
    registration.mutate(data);
  };

  const benefits = [
    "8-week comprehensive program",
    "Live sessions with industry experts",
    "Hands-on business projects",
    "Certificate of completion",
    "Lifetime access to course materials",
  ];

  return (
    <section id="register" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto bg-primary text-white rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Enroll Today</h2>
              <p className="mb-6">
                Transform your business with AI strategies and join a network of innovative business leaders. Limited seats available.
              </p>
              
              <ul className="mb-8 space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-accent mt-0.5 mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
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
                  <div className="bg-accent/90 px-4 py-2 rounded-md w-full sm:w-auto text-center">
                    <span className="font-bold">Limited Seats:</span>
                    <span> Only 25 left</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white p-8 md:p-12">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                  <Input 
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                  <Input 
                    type="tel" 
                    id="phone"
                    placeholder="Enter your phone number"
                    className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition`}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="organization" className="text-gray-700">Company/Organization</Label>
                  <Input 
                    type="text" 
                    id="organization"
                    placeholder="Enter your company name"
                    className={`w-full px-4 py-2 border ${errors.organization ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition`}
                    {...register("organization")}
                  />
                  {errors.organization && (
                    <p className="text-red-500 text-xs mt-1">{errors.organization.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="jobTitle" className="text-gray-700">Job Title</Label>
                  <Input 
                    type="text" 
                    id="jobTitle"
                    placeholder="Enter your job title"
                    className={`w-full px-4 py-2 border ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition`}
                    {...register("jobTitle")}
                  />
                  {errors.jobTitle && (
                    <p className="text-red-500 text-xs mt-1">{errors.jobTitle.message}</p>
                  )}
                </div>
                
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-lg"
                    disabled={registration.isPending}
                  >
                    {registration.isPending ? "Submitting..." : "Secure Your Spot"}
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
  );
}
