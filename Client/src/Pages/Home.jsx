import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import conster from "../assets/Home/construction-worker.jpg";
// our projects images
import imh from "../assets/Home/projects/Industrial-Manufacturing-Hub.jpg";
import lst from "../assets/Home/projects/Luxury-Residential-Tower.jpg";
import moc from "../assets/Home/projects/Modern-Office-Complex.jpg";
import scc from "../assets/Home/projects/Sustainable-Community-Center.jpg";
import umud from "../assets/Home/projects/Urban-Mixed-Use-Development.jpg";
import whs from "../assets/Home/projects/Waterfront-Hotel-Spa.jpg";

//icons
import {
  ChevronRight,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Calendar,
  Building,
  Users,
} from "lucide-react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    services: false,
    projects: false,
    testimonials: false,
  });

  useEffect(() => {
    setIsVisible({
      hero: true,
      about: true,
      services: true,
      projects: true,
      testimonials: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f1c]/90 to-[#14142b]/70"></div>
          </div>

          {/* Floating Geometric Shapes for Visual Interest */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-40 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
          </div>

          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="max-w-3xl">
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible.hero
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h4 className="text-orange-500 font-semibold mb-4 flex items-center">
                  <span className="mr-2 h-0.5 w-6 bg-orange-500"></span>
                  BUILDING TOMORROW TODAY
                </h4>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                  Transforming <span className="text-orange-500">Visions</span>{" "}
                  Into Exceptional{" "}
                  <span className="text-orange-500">Structures</span>
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-xl">
                  With over 25 years of experience, we deliver innovative
                  construction solutions that exceed expectations and stand the
                  test of time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium flex items-center group transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">Get Started</span>
                    <ChevronRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                  <button className="border border-white/30 hover:border-orange-500 text-white px-8 py-3 rounded-lg font-medium flex items-center group transition-all duration-300">
                    <span>Our Projects</span>
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Stats Floating Bar */}
              <div
                className={`mt-16 bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-300 ${
                  isVisible.hero
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-orange-500 mb-2">
                    25+
                  </h3>
                  <p className="text-white">Years Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-orange-500 mb-2">
                    500+
                  </h3>
                  <p className="text-white">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-orange-500 mb-2">
                    100%
                  </h3>
                  <p className="text-white">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`relative transition-all duration-1000 ${
                  isVisible.about
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="relative z-10">
                  <img
                    src={conster}
                    alt="Construction worker"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="absolute z-50 bottom-10 right-10 bg-orange-500 p-4 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold text-white mb-2">25+</h3>
                  <p className="text-white">Years of Excellence</p>
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-orange-500/20 rounded-full"></div>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible.about
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <h4 className="text-orange-500 font-semibold mb-4 flex items-center">
                  <span className="mr-2 h-0.5 w-6 bg-orange-500"></span>
                  ABOUT OUR COMPANY
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Building Dreams With Excellence & Reliability
                </h2>
                <p className="text-gray-600 mb-6">
                  With decades of industry experience, our team of professional
                  builders and architects are dedicated to bringing your vision
                  to life. We handle projects of any scale with meticulous
                  attention to detail and unwavering commitment to quality.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      Professional team of experienced builders and designers
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      High-quality materials sourced from trusted suppliers
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      On-time project completion and transparent communication
                    </p>
                  </div>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium flex items-center group transition-all duration-300">
                  <span>Learn More About Us</span>
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-orange-500 font-semibold mb-4 inline-flex items-center">
                <span className="mr-2 h-0.5 w-6 bg-orange-500"></span>
                OUR SERVICES
                <span className="ml-2 h-0.5 w-6 bg-orange-500"></span>
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Comprehensive Construction Solutions
              </h2>
              <p className="text-gray-600">
                We offer a wide range of construction services tailored to meet
                the unique needs of each project, delivered with exceptional
                craftsmanship and attention to detail.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Residential Construction",
                  description:
                    "From custom homes to multi-family units, we build comfortable, energy-efficient residential spaces designed for modern living.",
                  icon: "🏠",
                },
                {
                  title: "Commercial Buildings",
                  description:
                    "Office spaces, retail centers, and industrial facilities built to the highest standards of quality and functionality.",
                  icon: "🏢",
                },
                {
                  title: "Interior Design",
                  description:
                    "Transform your space with our expert interior design services, creating environments that inspire and delight.",
                  icon: "🎨",
                },
                {
                  title: "Renovation & Remodeling",
                  description:
                    "Breathe new life into existing structures with our comprehensive renovation and remodeling services.",
                  icon: "🔨",
                },
                {
                  title: "Architectural Design",
                  description:
                    "Innovative architectural solutions that balance aesthetics, functionality, and sustainability.",
                  icon: "📐",
                },
                {
                  title: "Construction Management",
                  description:
                    "Expert oversight of your project from concept to completion, ensuring efficiency and quality at every stage.",
                  icon: "📋",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-orange-500/20 hover:-translate-y-2 transform transition-all duration-1000 delay-${
                    index * 100
                  } ${
                    isVisible.services
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="text-4xl mb-4 bg-orange-100 w-16 h-16 flex items-center justify-center rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                    <span>{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-orange-500 font-medium group-hover:text-orange-600"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-[#14142b] text-white">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
              <div className="max-w-2xl">
                <h4 className="text-orange-500 font-semibold mb-4 flex items-center">
                  <span className="mr-2 h-0.5 w-6 bg-orange-500"></span>
                  OUR PROJECTS
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Featured Construction Projects
                </h2>
                <p className="text-gray-400">
                  Take a look at some of our most impressive projects,
                  showcasing our commitment to quality, innovation, and
                  excellence in construction.
                </p>
              </div>
              <button className="mt-6 md:mt-0 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center group">
                <span>View All Projects</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Modern Office Complex",
                  category: "Commercial",
                  image: moc,
                },
                {
                  title: "Luxury Residential Tower",
                  category: "Residential",
                  image: lst,
                },
                {
                  title: "Sustainable Community Center",
                  category: "Public",
                  image: scc,
                },
                {
                  title: "Industrial Manufacturing Hub",
                  category: "Industrial",
                  image: imh,
                },
                {
                  title: "Waterfront Hotel & Spa",
                  category: "Hospitality",
                  image: whs,
                },
                {
                  title: "Urban Mixed-Use Development",
                  category: "Mixed-Use",
                  image: umud,
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`group relative rounded-xl overflow-hidden transition-all duration-1000 delay-${
                    index * 100
                  } ${
                    isVisible.projects
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-orange-500 text-sm font-semibold mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href="#"
                      className="inline-flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0 transition-transform"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-orange-500 font-semibold mb-4 inline-flex items-center">
                <span className="mr-2 h-0.5 w-6 bg-orange-500"></span>
                TESTIMONIALS
                <span className="ml-2 h-0.5 w-6 bg-orange-500"></span>
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-gray-600">
                Read testimonials from our satisfied clients who have
                experienced our dedication to quality, reliability, and
                excellence in construction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  position: "Property Developer",
                  quote:
                    "Working with this construction team was a fantastic experience. Their attention to detail and commitment to quality exceeded our expectations. They completed our project on time and within budget.",
                  avatar:
                    "https://media.istockphoto.com/id/1833394225/photo/businessman-smiling-in-a-meeting-at-the-office.jpg?s=612x612&w=0&k=20&c=Hmt5obbmDOMiIVWG6ftnr_0F6KgvBFQRBhXSELu9IyM=",
                },
                {
                  name: "Michael Thompson",
                  position: "Business Owner",
                  quote:
                    "I'm extremely impressed with the professionalism and expertise demonstrated throughout our office building project. The team was responsive, transparent, and delivered exceptional results.",
                  avatar:
                    "https://media.istockphoto.com/id/1833394225/photo/businessman-smiling-in-a-meeting-at-the-office.jpg?s=612x612&w=0&k=20&c=Hmt5obbmDOMiIVWG6ftnr_0F6KgvBFQRBhXSELu9IyM=",
                },
                {
                  name: "Emily Rodriguez",
                  position: "Homeowner",
                  quote:
                    "Our home renovation was handled with such care and precision. The team listened to our needs, offered creative solutions, and transformed our space beyond what we could have imagined.",
                  avatar:
                    "https://media.istockphoto.com/id/1833394225/photo/businessman-smiling-in-a-meeting-at-the-office.jpg?s=612x612&w=0&k=20&c=Hmt5obbmDOMiIVWG6ftnr_0F6KgvBFQRBhXSELu9IyM=",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-orange-500/20 hover:shadow-xl transition-all relative group transform duration-1000 delay-${
                    index * 150
                  } ${
                    isVisible.testimonials
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="absolute top-8 right-8 text-4xl text-orange-300 opacity-20 group-hover:opacity-40 transition-opacity">
                    "
                  </div>
                  <div className="flex items-center space-x-1 mb-4 text-orange-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-orange-500 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-400 rounded-full opacity-50"></div>
            <div className="absolute bottom-12 left-12 w-40 h-40 bg-orange-600 rounded-full opacity-30"></div>
          </div>
          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Build Your Dream Project?
                </h2>
                <p className="text-white/80 text-lg mb-6 max-w-xl">
                  Let's discuss how we can bring your vision to life with our
                  expertise in construction and design.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium flex items-center group transition-all duration-300">
                    <span>Get Free Estimate</span>
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium flex items-center group transition-all duration-300">
                    <span>Contact Us</span>
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                  <Building className="mx-auto text-white mb-3" size={32} />
                  <h3 className="text-xl font-bold text-white mb-1">500+</h3>
                  <p className="text-white/80">Projects Completed</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                  <Users className="mx-auto text-white mb-3" size={32} />
                  <h3 className="text-xl font-bold text-white mb-1">120+</h3>
                  <p className="text-white/80">Expert Team Members</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                  <Calendar className="mx-auto text-white mb-3" size={32} />
                  <h3 className="text-xl font-bold text-white mb-1">25+</h3>
                  <p className="text-white/80">Years of Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                  <Clock className="mx-auto text-white mb-3" size={32} />
                  <h3 className="text-xl font-bold text-white mb-1">98%</h3>
                  <p className="text-white/80">On-Time Completion</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
              <div className="max-w-2xl">
                <h4 className="text-orange-500 font-semibold mb-4 flex items-center">
                  <span className="mr-2 h-0.5 w-6 bg-orange-500"></span>
                  LATEST NEWS
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Construction Insights & Updates
                </h2>
                <p className="text-gray-600">
                  Stay informed with our latest articles, industry insights, and
                  company news.
                </p>
              </div>
              <button className="mt-6 md:mt-0 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center group">
                <span>View All Articles</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainable Construction Trends for 2025",
                  excerpt:
                    "Discover the latest eco-friendly building practices and materials that are shaping the future of construction.",
                  date: "April 10, 2025",
                  category: "Industry Trends",
                  image:
                    "https://www.autodesk.com/blogs/construction/wp-content/uploads/2025/01/2025-trends-general-construction-scaled.jpg",
                },
                {
                  title: "How to Choose the Right Construction Partner",
                  excerpt:
                    "Key factors to consider when selecting a construction company for your next building project.",
                  date: "April 5, 2025",
                  category: "Tips & Advice",
                  image:
                    "https://nuvonirmaan.com/wp-content/uploads/2021/05/Blog-Image-940x630px.jpg",
                },
                {
                  title: "Safety Innovations Transforming Construction Sites",
                  excerpt:
                    "New technologies and protocols enhancing worker safety and project efficiency in modern construction.",
                  date: "March 28, 2025",
                  category: "Technology",
                  image:
                    "https://www.autodesk.com/blogs/construction/wp-content/uploads/2021/05/top-construction-safety-innovations.jpg",
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="overflow-hidden h-52">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="text-orange-500">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
