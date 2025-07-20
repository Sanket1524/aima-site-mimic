import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Zap, 
  Target,
  BarChart3,
  Settings,
  TrendingUp,
  Calendar,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Brain
} from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const HomePage = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Quality Control Issues",
      description: "Traditional quality control methods often miss defects until it's too late, leading to costly rework and customer dissatisfaction.",
      bulletPoints: [
        "Reactive instead of proactive detection",
        "High defect rates in production",
        "Expensive recalls and rework",
        "Customer complaints and lost trust"
      ]
    },
    {
      icon: Settings,
      title: "Equipment Downtime",
      description: "Unexpected equipment failures cause significant production delays and maintenance costs that could be prevented.",
      bulletPoints: [
        "Unplanned maintenance shutdowns",
        "Lost production time",
        "Emergency repair costs",
        "Supply chain disruptions"
      ]
    },
    {
      icon: BarChart3,
      title: "Inefficient Operations",
      description: "Manufacturing processes running below optimal efficiency waste resources and reduce profitability.",
      bulletPoints: [
        "Energy waste and overconsumption",
        "Suboptimal production schedules",
        "Material waste and inefficiency",
        "Reduced competitive advantage"
      ]
    }
  ];

  const products = [
    {
      icon: Brain,
      title: "Predictive Quality AI",
      description: "Advanced machine learning algorithms analyze production data in real-time to predict and prevent quality issues before they occur.",
      features: [
        "Real-time defect prediction",
        "Automated quality alerts",
        "Root cause analysis",
        "Continuous learning models"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Smart Maintenance",
      description: "Intelligent predictive maintenance that monitors equipment health and schedules repairs before failures happen.",
      features: [
        "Predictive failure detection",
        "Optimized maintenance scheduling",
        "Equipment health monitoring",
        "Cost reduction analytics"
      ]
    },
    {
      icon: TrendingUp,
      title: "Operations Optimizer",
      description: "AI-driven optimization engine that continuously improves manufacturing efficiency and reduces waste across all operations.",
      features: [
        "Production schedule optimization",
        "Energy efficiency improvements",
        "Resource allocation automation",
        "Performance benchmarking"
      ]
    }
  ];

  const legislationItems = [
    {
      date: "Jan 15, 2025",
      title: "New EU Manufacturing Safety Standards",
      excerpt: "Updated safety requirements for AI-powered manufacturing systems take effect across European markets...",
      category: "Safety"
    },
    {
      date: "Dec 28, 2024",
      title: "FDA Guidelines for AI in Production",
      excerpt: "New FDA guidance on artificial intelligence applications in pharmaceutical and medical device manufacturing...",
      category: "Healthcare"
    }
  ];

  const insights = [
    {
      image: "src/assets/factory-1.jpg",
      tag: "Case Study",
      title: "How AIMA Reduced Defects by 85% at GlobalTech",
      excerpt: "Learn how our AI implementation transformed quality control processes...",
      date: "Jan 12, 2025"
    },
    {
      image: "src/assets/control-room.jpg",
      tag: "Industry Report",
      title: "The Future of Smart Manufacturing",
      excerpt: "Comprehensive analysis of AI trends shaping the manufacturing industry...",
      date: "Jan 8, 2025"
    },
    {
      image: "src/assets/quality-control.jpg",
      tag: "White Paper",
      title: "ROI Analysis: AI-Powered Quality Control",
      excerpt: "Detailed financial analysis of implementing AI quality control systems...",
      date: "Jan 5, 2025"
    }
  ];

  const trustLogos = [
    "GlobalTech", "MegaCorp", "InnovateInc", "FutureFab", "SmartSys", "TechGiant"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                AI That Prevents Mistakes.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Not Just Detects Them.
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl leading-relaxed">
                Never miss a quality issue. Get real-time, AI-powered insights that prevent errors 
                before they impact your manufacturing operations, products, and delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-aima-red hover:bg-aima-red-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link to="/demo">Request Demo</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300"
                  asChild
                >
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <img 
                  src={dashboardMockup} 
                  alt="AIMA Dashboard Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AIMA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-aima-red tracking-wide uppercase mb-4">
              WHY CHOOSE AIMA?
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-aima-gray-900 mb-6">
              The Fastest, Smartest Way to Prevent Quality Issues
            </h3>
            <p className="text-xl text-aima-gray-600 max-w-3xl mx-auto mb-12">
              AIMA replaces hours of manual monitoring with AI-driven insights designed for manufacturing professionals.
            </p>
            
            {/* Testimonial Quote */}
            <div className="max-w-2xl mx-auto mb-16">
              <blockquote className="text-2xl lg:text-3xl font-light text-aima-gray-800 italic mb-6">
                "You're streamlining 20 hours of work into a quick search."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format" 
                  alt="Mike Chen"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold text-aima-gray-900">Mike Chen</div>
                  <div className="text-sm text-aima-gray-600">Senior Manufacturing Manager</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border border-aima-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-aima-red/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-aima-red" />
                    </div>
                    <h3 className="text-xl font-semibold text-aima-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-aima-gray-600 mb-6">
                      {feature.description}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {feature.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-aima-gray-600">
                        <CheckCircle className="w-4 h-4 text-aima-red mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aima-gray-900 mb-4">
              AI-Powered Solutions That Work
            </h2>
            <p className="text-xl text-aima-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI platform transforms your manufacturing operations with predictive intelligence 
              and automated optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.title} className="border border-aima-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-aima-red/10 rounded-lg flex items-center justify-center mb-4">
                      <product.icon className="w-6 h-6 text-aima-red" />
                    </div>
                    <h3 className="text-xl font-semibold text-aima-gray-900 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-aima-gray-600 mb-6">
                      {product.description}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-aima-gray-600">
                        <CheckCircle className="w-4 h-4 text-aima-red mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legislation Preview */}
      <section className="py-16 lg:py-24 bg-aima-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-aima-gray-900 mb-4">
                Latest Regulations & Standards
              </h2>
              <p className="text-xl text-aima-gray-600">
                Stay compliant with evolving manufacturing regulations
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/legislation" className="hidden sm:flex items-center gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legislationItems.map((item, index) => (
              <Card key={index} className="border border-aima-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-aima-gray-500" />
                    <span className="text-sm text-aima-gray-500">{item.date}</span>
                    <span className="text-xs bg-aima-red text-white px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-aima-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-aima-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <Link 
                    to="/legislation" 
                    className="text-aima-red hover:text-aima-red-dark font-medium text-sm flex items-center gap-1"
                  >
                    Read more <ArrowRight className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-aima-gray-100 to-aima-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-aima-gray-900 mb-4">
              The Weekly Manufacturing AI Brief
            </h2>
            <p className="text-xl text-aima-gray-600 mb-8">
              Get the latest insights on AI in manufacturing, industry trends, and regulatory updates 
              delivered to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-aima-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aima-red focus:border-aima-red"
              />
              <Button className="bg-aima-red hover:bg-aima-red-dark text-white px-8 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-aima-gray-500 mb-8">
              100% free. No spam. Unsubscribe anytime.
            </p>
            
            <div className="text-sm text-aima-gray-500 mb-6">
              Trusted by professionals at
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {trustLogos.map((logo) => (
                <div key={logo} className="text-aima-gray-600 font-medium">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-aima-gray-900 mb-4">
                Latest Insights
              </h2>
              <p className="text-xl text-aima-gray-600">
                Expert analysis and industry insights
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/insights" className="hidden sm:flex items-center gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="border border-aima-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-aima-red text-white text-xs px-2 py-1 rounded font-medium">
                      {insight.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-aima-gray-500 mb-2">{insight.date}</div>
                  <h3 className="text-lg font-semibold text-aima-gray-900 mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-aima-gray-600 mb-4">
                    {insight.excerpt}
                  </p>
                  <Link 
                    to="/insights" 
                    className="text-aima-red hover:text-aima-red-dark font-medium text-sm flex items-center gap-1"
                  >
                    Read more <ArrowRight className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;