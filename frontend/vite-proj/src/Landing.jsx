import React, { useState } from 'react';
import { ArrowRight, Database, Shield, Users, BarChart2, Check, UserCircle, Building } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for joining! We'll notify ${email} when we launch.`);
    setEmail('');
  };

  // Stats section content
  const stats = [
    { value: "$15M+", label: "Data exchanged" },
    { value: "10k+", label: "Active annotators" },
    { value: "99.9%", label: "Uptime" }
  ];

  // Features content
  const features = [
    {
      icon: Shield,
      title: "Trustless Verification",
      description: "Our blockchain-based consensus algorithm ensures data annotations meet quality standards without centralized oversight."
    },
    {
      icon: Users,
      title: "Global Annotator Network",
      description: "Access thousands of skilled annotators worldwide with expertise across various data types and domains."
    },
    {
      icon: BarChart2,
      title: "Real-time Analytics",
      description: "Monitor your project's progress with comprehensive dashboards showing annotation quality metrics and completion rates."
    }
  ];

  // How it works steps
  const steps = [
    { number: 1, title: "Upload Data", description: "Securely upload your data for annotation with customizable privacy settings." },
    { number: 2, title: "Set Parameters", description: "Define annotation guidelines, quality thresholds, and token rewards." },
    { number: 3, title: "Annotators Contribute", description: "Our global network starts annotating your data in a decentralized manner." },
    { number: 4, title: "Receive Quality Data", description: "Download verified annotations or integrate via our API." }
  ];

  // Pricing plans
  const plans = [
    {
      name: "Starter",
      price: "10 DATA",
      description: "Perfect for small projects and individual researchers.",
      features: [
        "Up to 1GB data storage",
        "Basic annotation tools",
        "5 projects",
        "Community support"
      ],
      buttonText: "Get Started",
      buttonClass: "bg-gray-700 hover:bg-gray-600",
      containerClass: "bg-gray-800 bg-opacity-50 border border-gray-700"
    },
    {
      name: "Professional",
      price: "50 DATA",
      description: "Designed for growing teams and multiple projects.",
      features: [
        "Up to 10GB data storage",
        "Advanced annotation tools",
        "15 projects",
        "Priority support",
        "Custom annotation templates"
      ],
      buttonText: "Get Started",
      buttonClass: "bg-blue-500 hover:bg-blue-600",
      containerClass: "bg-blue-900 bg-opacity-50 border border-blue-700 transform md:scale-105 z-10",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale AI projects with specific requirements.",
      features: [
        "Unlimited data storage",
        "Premium annotation tools",
        "Unlimited projects",
        "24/7 dedicated support",
        "Custom integration",
        "Private annotator pool"
      ],
      buttonText: "Contact Sales",
      buttonClass: "bg-gray-700 hover:bg-gray-600",
      containerClass: "bg-gray-800 bg-opacity-50 border border-gray-700"
    }
  ];

  // Footer links
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Use Cases', 'Roadmap'],
    Resources: ['Documentation', 'API', 'Community', 'Blog'],
    Company: ['About', 'Careers', 'Press', 'Contact'],
    Legal: ['Terms', 'Privacy', 'Cookies', 'Licenses']
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-24">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Decentralized Data Annotation Exchange
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            The first blockchain-powered marketplace where AI projects can seamlessly connect with annotators in a trustless environment.
          </p>
          
          {/* User Type Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-blue-900 bg-opacity-70 p-6 rounded-xl border border-blue-700 hover:border-blue-500 transition">
              <div className="flex items-center mb-3">
                <UserCircle className="mr-3 text-blue-400 h-8 w-8" />
                <h3 className="text-xl font-bold">Annotators</h3>
              </div>
              <p className="text-gray-300 mb-4">Earn tokens by contributing your skills to annotation tasks.</p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-2 rounded-lg font-medium flex items-center justify-center">
                Start Annotating
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="bg-indigo-900 bg-opacity-70 p-6 rounded-xl border border-indigo-700 hover:border-indigo-500 transition">
              <div className="flex items-center mb-3">
                <Building className="mr-3 text-indigo-400 h-8 w-8" />
                <h3 className="text-xl font-bold">Firms</h3>
              </div>
              <p className="text-gray-300 mb-4">Access high-quality annotated data for your AI projects.</p>
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 transition py-2 rounded-lg font-medium flex items-center justify-center">
                Request Data
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          

        </div>

      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 py-12 bg-gray-800 bg-opacity-50">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
      
      {/* Features */}
      <div id="features" className="px-8 md:px-16 py-16 md:py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose DataDEX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl">
              <feature.icon className="text-blue-400 mb-4 h-12 w-12" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* User Types Section */}
      <div className="px-8 md:px-16 py-16 md:py-24 bg-gradient-to-r from-blue-900 to-indigo-900">
        <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Annotators */}
          <div className="bg-blue-900 bg-opacity-40 p-8 rounded-xl border border-blue-700 hover:border-blue-500 transition">
            <div className="flex items-center mb-6">
              <UserCircle className="mr-4 text-blue-400 h-12 w-12" />
              <h3 className="text-2xl font-bold">For Annotators</h3>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start">
                <Check className="text-blue-400 mr-3 h-5 w-5 mt-1" />
                <span className="text-gray-300">Earn crypto tokens for each task completed</span>
              </li>
              <li className="flex items-start">
                <Check className="text-blue-400 mr-3 h-5 w-5 mt-1" />
                <span className="text-gray-300">Work on diverse projects across multiple domains</span>
              </li>
              <li className="flex items-start">
                <Check className="text-blue-400 mr-3 h-5 w-5 mt-1" />
                <span className="text-gray-300">Flexible hours and remote work opportunities</span>
              </li>
              <li className="flex items-start">
                <Check className="text-blue-400 mr-3 h-5 w-5 mt-1" />
                <span className="text-gray-300">Build your reputation with our transparent rating system</span>
              </li>
            </ul>
            <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-lg font-medium flex items-center justify-center">
              Join as Annotator
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          {/* Firms */}
          <div className="bg-indigo-900 bg-opacity-40 p-8 rounded-xl border border-indigo-700 hover:border-indigo-500 transition">
            <div className="flex items-center mb-6">
              <Building className="mr-4 text-indigo-400 h-12 w-12" />
              <h3 className="text-2xl font-bold">For Firms</h3>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start">
                <Check className="text-indigo-400 mr-3 h-5 w-5 mt-1" />
                <span className="text-gray-300">Access a global network of skilled annotators</span>
              </li>
              <li className="flex items-start">
                <Check className="text-indigo-400 mr-3 h-5 w-5 mt-1" />
                <span className="text-gray-300">Set precise quality requirements and guidelines</span>
              </li>
              <li className="flex items-start">
                <Check className="text-indigo-400 mr-3 h-5 w-5 mt-1" />
                <span className="text-gray-300">Pay only for verified high-quality annotations</span>
              </li>
              <li className="flex items-start">
                <Check className="text-indigo-400 mr-3 h-5 w-5 mt-1" />
                <span className="text-gray-300">Scale your annotation pipeline with our enterprise API</span>
              </li>
            </ul>
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 transition py-3 rounded-lg font-medium flex items-center justify-center">
              Register Your Firm
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* How It Works */}
      <div id="how-it-works" className="px-8 md:px-16 py-16 md:py-24 bg-gray-800 bg-opacity-30">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pricing */}
      <div id="pricing" className="px-8 md:px-16 py-16 md:py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`p-8 rounded-xl ${plan.containerClass}`}>
              {plan.popular && (
                <div className="bg-blue-500 text-center py-1 px-4 rounded-full text-sm font-bold mb-4 inline-block">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-blue-400 text-3xl font-bold mb-6">{plan.price}</p>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-3">
                    <Check className="text-blue-400 mr-2 h-5 w-5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full ${plan.buttonClass} transition py-3 rounded-lg font-medium`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="px-8 md:px-16 py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data Annotation Workflow?</h2>
          <p className="text-xl mb-8">
            Join our early access program and receive 100 DATA tokens to kickstart your projects.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="bg-blue-900 hover:bg-blue-800 transition px-6 py-3 rounded-lg font-medium whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="px-8 md:px-16 py-12 bg-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Database className="mr-2 text-blue-400" />
            <span className="font-bold">DataDEX</span>
          </div>
          <p className="text-gray-400">© 2025 DataDEX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;