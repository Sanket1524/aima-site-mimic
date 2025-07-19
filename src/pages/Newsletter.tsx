import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Newsletter = () => {
  const trustLogos = [
    "GlobalTech", "MegaCorp", "InnovateInc", "FutureFab", "SmartSys", "TechGiant",
    "NextGen", "AutoCorp", "TechFlow", "ManufacturePlus", "SmartFactory", "AIManufacturing"
  ];

  const sampleIssue = {
    date: "January 15, 2025",
    title: "AI Breakthrough in Quality Control + New EU Manufacturing Standards",
    blurb: "This week: Revolutionary AI quality control system reduces defects by 90%, new European manufacturing safety standards, and exclusive interview with industry leaders on the future of smart manufacturing."
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-aima-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-aima-gray-900 mb-6">
            The Weekly Manufacturing AI Brief
          </h1>
          <p className="text-xl text-aima-gray-600 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with the latest insights on AI in manufacturing, 
            industry trends, regulatory updates, and technology breakthroughs delivered 
            to your inbox every Tuesday.
          </p>
          
          {/* Newsletter Signup Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-aima-gray-200 max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red text-base"
              />
              <Button className="bg-aima-red hover:bg-aima-red-dark text-white px-8 py-3 font-semibold text-base">
                Subscribe Free
              </Button>
            </div>
            <p className="text-sm text-aima-gray-500">
              100% free. No spam. Unsubscribe anytime.
            </p>
          </div>
          
          {/* Trust Logos */}
          <div>
            <p className="text-sm text-aima-gray-500 mb-6">
              Trusted by manufacturing professionals at
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-60">
              {trustLogos.map((logo) => (
                <div key={logo} className="text-center">
                  <div className="text-aima-gray-600 font-medium text-sm">
                    {logo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Issue */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-aima-gray-900 mb-4">
              Sample Issue
            </h2>
            <p className="text-xl text-aima-gray-600">
              Get a preview of what you'll receive every week
            </p>
          </div>
          
          <Card className="border border-aima-gray-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-aima-gray-500" />
                <span className="text-aima-gray-500 font-medium">{sampleIssue.date}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-aima-gray-900 mb-4">
                {sampleIssue.title}
              </h3>
              
              <p className="text-aima-gray-600 text-lg leading-relaxed mb-8">
                {sampleIssue.blurb}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-aima-red pl-4">
                  <h4 className="font-semibold text-aima-gray-900 mb-2">This Week's Highlights:</h4>
                  <ul className="space-y-2 text-aima-gray-600">
                    <li>• Revolutionary AI quality control breakthrough at TechCorp</li>
                    <li>• New EU manufacturing safety standards take effect</li>
                    <li>• Exclusive Q&A with leading AI manufacturing experts</li>
                    <li>• Market analysis: $2.3B investment in smart factory tech</li>
                    <li>• Case study: 40% efficiency gains with predictive maintenance</li>
                  </ul>
                </div>
              </div>
              
              <Button 
                className="bg-aima-red hover:bg-aima-red-dark text-white font-semibold"
                size="lg"
              >
                Read Full Issue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 lg:py-24 bg-aima-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-aima-gray-900 mb-4">
              What You'll Get Every Week
            </h2>
            <p className="text-xl text-aima-gray-600">
              Comprehensive coverage of everything that matters in AI manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry News & Trends",
                description: "Latest developments, funding rounds, partnerships, and breakthrough technologies shaping the manufacturing landscape."
              },
              {
                title: "Regulatory Updates",
                description: "New standards, compliance requirements, and policy changes affecting AI implementation in manufacturing."
              },
              {
                title: "Case Studies",
                description: "Real-world success stories and lessons learned from companies implementing AI manufacturing solutions."
              },
              {
                title: "Technology Deep Dives",
                description: "Technical analysis of emerging AI technologies, tools, and platforms for manufacturing applications."
              },
              {
                title: "Market Intelligence",
                description: "Investment trends, market size data, competitive landscape analysis, and growth forecasts."
              },
              {
                title: "Expert Insights",
                description: "Interviews and commentary from industry leaders, researchers, and technology innovators."
              }
            ].map((item, index) => (
              <Card key={index} className="border border-aima-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-aima-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-aima-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;