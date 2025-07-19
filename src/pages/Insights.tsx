import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Insights = () => {
  const insights = [
    {
      image: "src/assets/factory-1.jpg",
      tag: "Case Study",
      title: "How AIMA Reduced Manufacturing Defects by 85% at GlobalTech",
      excerpt: "Comprehensive analysis of our AI implementation at GlobalTech Manufacturing, detailing the 6-month journey that transformed their quality control processes and delivered unprecedented results.",
      date: "January 12, 2025",
      readTime: "8 min read",
      category: "Quality Control"
    },
    {
      image: "src/assets/control-room.jpg",
      tag: "Industry Report",
      title: "The Future of Smart Manufacturing: 2025 Trend Analysis",
      excerpt: "In-depth report examining the key trends shaping smart manufacturing, including AI adoption rates, investment patterns, and technological breakthroughs expected in 2025.",
      date: "January 8, 2025",
      readTime: "12 min read",
      category: "Industry Trends"
    },
    {
      image: "src/assets/quality-control.jpg",
      tag: "White Paper",
      title: "ROI Analysis: Implementing AI-Powered Quality Control Systems",
      excerpt: "Detailed financial analysis examining the return on investment for AI quality control implementations across 50+ manufacturing facilities.",
      date: "January 5, 2025",
      readTime: "15 min read",
      category: "Financial Analysis"
    },
    {
      image: "/placeholder.svg",
      tag: "Technical Guide",
      title: "Building Predictive Maintenance Models for Manufacturing Equipment",
      excerpt: "Step-by-step technical guide for implementing predictive maintenance AI models, including data collection strategies, model selection, and deployment best practices.",
      date: "December 30, 2024",
      readTime: "20 min read",
      category: "Predictive Maintenance"
    },
    {
      image: "/placeholder.svg",
      tag: "Market Analysis",
      title: "AI Manufacturing Market Outlook: $50B by 2028",
      excerpt: "Comprehensive market analysis examining growth drivers, key players, and investment opportunities in the rapidly expanding AI manufacturing sector.",
      date: "December 28, 2024",
      readTime: "10 min read",
      category: "Market Intelligence"
    },
    {
      image: "/placeholder.svg",
      tag: "Case Study",
      title: "Achieving Zero Unplanned Downtime: TechCorp Success Story",
      excerpt: "How TechCorp Manufacturing achieved 99.9% equipment uptime using AIMA's predictive maintenance platform, eliminating costly emergency repairs and production delays.",
      date: "December 25, 2024",
      readTime: "6 min read",
      category: "Predictive Maintenance"
    },
    {
      image: "/placeholder.svg",
      tag: "Expert Interview",
      title: "Future of AI in Manufacturing: Interview with Dr. Sarah Chen",
      excerpt: "Exclusive interview with leading AI researcher Dr. Sarah Chen discussing breakthrough technologies, implementation challenges, and the future of intelligent manufacturing.",
      date: "December 22, 2024",
      readTime: "14 min read",
      category: "Expert Insights"
    },
    {
      image: "/placeholder.svg",
      tag: "Regulatory Update",
      title: "Navigating New EU AI Regulations for Manufacturing",
      excerpt: "Comprehensive guide to understanding and complying with the latest EU AI Act requirements for manufacturing companies, including practical implementation steps.",
      date: "December 20, 2024",
      readTime: "11 min read",
      category: "Compliance"
    },
    {
      image: "/placeholder.svg",
      tag: "Technology Deep Dive",
      title: "Computer Vision in Quality Control: Beyond Human Capability",
      excerpt: "Technical exploration of advanced computer vision applications in manufacturing quality control, showcasing capabilities that exceed human inspection accuracy.",
      date: "December 18, 2024",
      readTime: "16 min read",
      category: "Computer Vision"
    },
    {
      image: "/placeholder.svg",
      tag: "Best Practices",
      title: "Data Strategy for AI Manufacturing Success",
      excerpt: "Essential guide to building robust data infrastructure for AI manufacturing applications, covering data collection, preprocessing, and governance frameworks.",
      date: "December 15, 2024",
      readTime: "13 min read",
      category: "Data Strategy"
    },
    {
      image: "/placeholder.svg",
      tag: "Industry Analysis",
      title: "Automotive Manufacturing Leads AI Adoption in 2024",
      excerpt: "Analysis of AI adoption patterns across manufacturing sectors, with automotive industry leading in implementation of intelligent production systems.",
      date: "December 12, 2024",
      readTime: "9 min read",
      category: "Industry Trends"
    },
    {
      image: "/placeholder.svg",
      tag: "Case Study",
      title: "Energy Efficiency Gains Through AI Optimization at MegaCorp",
      excerpt: "How MegaCorp reduced energy consumption by 30% while increasing production output using AIMA's operations optimization platform.",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Energy Efficiency"
    }
  ];

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      "Case Study": "bg-green-600",
      "Industry Report": "bg-blue-600",
      "White Paper": "bg-purple-600",
      "Technical Guide": "bg-orange-600",
      "Market Analysis": "bg-indigo-600",
      "Expert Interview": "bg-pink-600",
      "Regulatory Update": "bg-yellow-600",
      "Technology Deep Dive": "bg-cyan-600",
      "Best Practices": "bg-teal-600",
      "Industry Analysis": "bg-red-600"
    };
    return colors[tag] || "bg-aima-red";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-aima-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-aima-gray-900 mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-aima-gray-600 max-w-3xl mx-auto">
              Expert analysis, case studies, and industry insights to help you navigate 
              the evolving landscape of AI-powered manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-aima-gray-900 mb-4">
              Featured Article
            </h2>
          </div>
          
          <Card className="border border-aima-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="src/assets/factory-1.jpg" 
                  alt="Featured Article"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${getTagColor("Case Study")} text-white text-sm px-3 py-1 rounded font-medium`}>
                    Featured Case Study
                  </span>
                  <span className="text-sm text-aima-gray-500">January 12, 2025</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-aima-gray-900 mb-4">
                  How AIMA Reduced Manufacturing Defects by 85% at GlobalTech
                </h3>
                
                <p className="text-aima-gray-600 mb-6 leading-relaxed">
                  Comprehensive analysis of our AI implementation at GlobalTech Manufacturing, 
                  detailing the 6-month journey that transformed their quality control processes 
                  and delivered unprecedented results.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-aima-gray-500">8 min read</span>
                  <Button className="bg-aima-red hover:bg-aima-red-dark text-white">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-aima-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-aima-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-aima-gray-600">
              Stay informed with our latest insights and analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.slice(1).map((insight, index) => (
              <Card key={index} className="border border-aima-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getTagColor(insight.tag)} text-white text-xs px-2 py-1 rounded font-medium`}>
                      {insight.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-aima-gray-500" />
                    <span className="text-sm text-aima-gray-500">{insight.date}</span>
                    <span className="text-sm text-aima-gray-400">•</span>
                    <span className="text-sm text-aima-gray-500">{insight.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-aima-gray-900 mb-3 line-clamp-2">
                    {insight.title}
                  </h3>
                  
                  <p className="text-aima-gray-600 text-sm mb-4 line-clamp-3">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-aima-gray-500 bg-aima-gray-100 px-2 py-1 rounded">
                      {insight.category}
                    </span>
                    <Button 
                      variant="ghost" 
                      className="text-aima-red hover:text-aima-red-dark hover:bg-aima-red/5 p-0 h-auto font-medium"
                    >
                      Read more <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-aima-red text-aima-red hover:bg-aima-red hover:text-white"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;