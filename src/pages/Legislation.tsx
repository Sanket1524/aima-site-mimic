import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Legislation = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const regions = ["All", "European Union", "United States", "Canada", "Global", "Asia-Pacific"];
  const categories = ["All", "Safety", "Environmental", "Quality", "Data Privacy", "AI Governance"];

  const legislationItems = [
    {
      date: "January 15, 2025",
      title: "EU AI Act Implementation Guidelines for Manufacturing",
      summary: "Detailed implementation guidelines for the EU AI Act specifically addressing artificial intelligence applications in manufacturing environments, including risk assessment procedures and compliance requirements.",
      region: "European Union",
      category: "AI Governance",
      status: "Active"
    },
    {
      date: "January 10, 2025",
      title: "Updated FDA Guidelines for AI in Medical Device Manufacturing",
      summary: "New FDA guidance document outlining requirements for artificial intelligence and machine learning applications in medical device manufacturing processes, including validation and quality assurance standards.",
      region: "United States",
      category: "Quality",
      status: "Proposed"
    },
    {
      date: "December 28, 2024",
      title: "ISO 23053:2024 - AI Risk Management in Manufacturing",
      summary: "International standard for implementing AI risk management frameworks in manufacturing operations, covering identification, assessment, and mitigation of AI-related risks.",
      region: "Global",
      category: "Safety",
      status: "Active"
    },
    {
      date: "December 20, 2024",
      title: "OSHA Guidelines for AI-Powered Workplace Safety Systems",
      summary: "Occupational Safety and Health Administration guidance on implementing and maintaining AI-powered safety monitoring systems in manufacturing facilities.",
      region: "United States",
      category: "Safety",
      status: "Active"
    },
    {
      date: "December 15, 2024",
      title: "Canadian Privacy Act Updates for Industrial IoT",
      summary: "Amendments to Canadian privacy legislation addressing data collection and processing requirements for Industrial Internet of Things devices and AI systems in manufacturing.",
      region: "Canada",
      category: "Data Privacy",
      status: "Under Review"
    },
    {
      date: "December 8, 2024",
      title: "EU Machinery Regulation 2024 - AI Safety Requirements",
      summary: "Updated machinery regulation establishing safety requirements for AI-enabled machinery and equipment in industrial settings, including certification procedures.",
      region: "European Union",
      category: "Safety",
      status: "Active"
    },
    {
      date: "November 30, 2024",
      title: "EPA Guidelines for AI in Environmental Monitoring",
      summary: "Environmental Protection Agency guidance on using artificial intelligence for environmental monitoring and compliance reporting in manufacturing facilities.",
      region: "United States",
      category: "Environmental",
      status: "Active"
    },
    {
      date: "November 25, 2024",
      title: "Asia-Pacific AI Manufacturing Standards Initiative",
      summary: "Collaborative framework for harmonizing AI manufacturing standards across Asia-Pacific markets, including technical specifications and trade requirements.",
      region: "Asia-Pacific",
      category: "Quality",
      status: "Under Development"
    },
    {
      date: "November 18, 2024",
      title: "Global Supply Chain Transparency Act - AI Provisions",
      summary: "International framework requiring transparency in AI-powered supply chain management systems, including algorithmic decision-making documentation.",
      region: "Global",
      category: "AI Governance",
      status: "Proposed"
    }
  ];

  const filteredItems = legislationItems.filter(item => {
    const regionMatch = selectedRegion === "All" || item.region === selectedRegion;
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    return regionMatch && categoryMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Proposed":
        return "bg-blue-100 text-blue-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Under Development":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-aima-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-aima-gray-900 mb-6">
              Manufacturing Legislation Hub
            </h1>
            <p className="text-xl text-aima-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest regulations, standards, and policy changes 
              affecting AI-powered manufacturing operations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-aima-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-aima-gray-500" />
              <span className="font-medium text-aima-gray-700">Filter by:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="text-sm font-medium text-aima-gray-600">Region:</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-3 py-2 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red text-sm"
                >
                  {regions.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label className="text-sm font-medium text-aima-gray-600">Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red text-sm"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-sm text-aima-gray-500">
              {filteredItems.length} of {legislationItems.length} items
            </div>
          </div>
        </div>
      </section>

      {/* Legislation Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={index} className="border border-aima-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-aima-gray-500" />
                      <span className="text-sm text-aima-gray-500">{item.date}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-xs bg-aima-red text-white px-2 py-1 rounded mr-2">
                      {item.region}
                    </span>
                    <span className="text-xs bg-aima-gray-200 text-aima-gray-700 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-aima-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-aima-gray-600 text-sm mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-aima-red hover:text-aima-red-dark hover:bg-aima-red/5 p-0 h-auto font-medium"
                  >
                    Read more <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-aima-gray-500 text-lg">
                No legislation items found for the selected filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legislation;