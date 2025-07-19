import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-aima-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-aima-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-aima-gray-600 max-w-3xl mx-auto">
              Ready to transform your manufacturing operations with AI? 
              Our experts are here to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border border-aima-gray-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-aima-gray-900 mb-6">
                  Send us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-aima-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-aima-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-aima-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-aima-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-aima-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-aima-gray-700 mb-2">
                      How can we help you? *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red"
                    >
                      <option value="">Select an option</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="implementation">Implementation Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-aima-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red resize-none"
                      placeholder="Tell us about your manufacturing challenges and how we can help..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-aima-red hover:bg-aima-red-dark text-white font-semibold py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-aima-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-aima-gray-600 mb-8">
                  Get in touch with our team of AI manufacturing experts. 
                  We're here to answer your questions and help you transform your operations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-aima-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-aima-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-aima-gray-900 mb-1">Email</h3>
                    <p className="text-aima-gray-600">contact@aima.ai</p>
                    <p className="text-aima-gray-600">support@aima.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-aima-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-aima-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-aima-gray-900 mb-1">Phone</h3>
                    <p className="text-aima-gray-600">+1 (555) 123-4567</p>
                    <p className="text-aima-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-aima-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-aima-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-aima-gray-900 mb-1">Office</h3>
                    <p className="text-aima-gray-600">
                      123 Innovation Drive<br />
                      Tech Park, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-aima-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-aima-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-aima-gray-900 mb-1">Business Hours</h3>
                    <p className="text-aima-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Demo CTA */}
              <Card className="border border-aima-red/20 bg-aima-red/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-aima-gray-900 mb-3">
                    Need a Quick Demo?
                  </h3>
                  <p className="text-aima-gray-600 mb-4">
                    See AIMA in action with a personalized demo tailored to your manufacturing needs.
                  </p>
                  <Button className="bg-aima-red hover:bg-aima-red-dark text-white">
                    Schedule Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;