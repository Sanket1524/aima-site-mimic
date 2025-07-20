import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Play,
  Eye,
  AlertTriangle,
  Clock,
  Target,
  Cpu,
  Camera,
  TrendingUp
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Product = () => {
  const features = [
    {
      icon: Eye,
      title: "Real-Time Visual Inspection",
      description: "Advanced computer vision algorithms detect defects instantly across production lines, preventing costly recalls and maintaining quality standards.",
      benefits: ["99.7% accuracy rate", "Sub-second detection", "Multi-camera integration"]
    },
    {
      icon: AlertTriangle,
      title: "Predictive Quality Analytics",
      description: "AI-powered analytics predict potential quality issues before they occur, enabling proactive interventions and process optimization.",
      benefits: ["40% reduction in defects", "Early warning system", "Root cause analysis"]
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning Engine",
      description: "Machine learning models continuously improve from production data, adapting to new patterns and enhancing detection capabilities.",
      benefits: ["Self-improving accuracy", "Pattern recognition", "Anomaly detection"]
    },
    {
      icon: BarChart3,
      title: "Quality Intelligence Dashboard",
      description: "Comprehensive analytics and reporting provide actionable insights into quality trends, performance metrics, and improvement opportunities.",
      benefits: ["Real-time monitoring", "Custom reporting", "KPI tracking"]
    },
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "On-device processing ensures low latency, data privacy, and reliable operation even in network-constrained environments.",
      benefits: ["Ultra-low latency", "Data sovereignty", "24/7 operation"]
    },
    {
      icon: Shield,
      title: "Enterprise Integration",
      description: "Seamless integration with existing manufacturing systems, ERP platforms, and quality management workflows.",
      benefits: ["API-first architecture", "ERP connectivity", "Workflow automation"]
    }
  ];

  const industries = [
    {
      name: "Automotive",
      description: "Critical component inspection and assembly line quality control",
      useCase: "Engine part defect detection with 99.9% accuracy"
    },
    {
      name: "Electronics",
      description: "PCB inspection and semiconductor quality assurance",
      useCase: "Microscopic solder joint analysis and component placement verification"
    },
    {
      name: "Pharmaceuticals",
      description: "Packaging integrity and label compliance verification",
      useCase: "Tablet coating consistency and blister pack seal inspection"
    },
    {
      name: "Food & Beverage",
      description: "Product quality and packaging compliance monitoring",
      useCase: "Contamination detection and fill level consistency checks"
    }
  ];

  const roi = [
    { metric: "40%", label: "Reduction in defects", icon: Target },
    { metric: "60%", label: "Faster quality inspections", icon: Clock },
    { metric: "25%", label: "Lower operational costs", icon: TrendingUp },
    { metric: "99.7%", label: "Detection accuracy", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-hsl(var(--hero-bg)) to-hsl(var(--hero-bg)) relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                AI-Powered Quality Control
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Prevent Manufacturing
                <span className="text-aima-red-400"> Defects</span>
                <br />Before They Happen
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Advanced AI technology that revolutionizes quality control with real-time defect detection, 
                predictive analytics, and continuous learning capabilities for manufacturing excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-hsl(var(--aima-red)) hover:bg-hsl(var(--aima-red-dark)) text-white font-semibold"
                >
                  Request Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-hsl(var(--hero-bg))"
                >
                  <Play className="w-4 h-4 mr-2" /> Watch How It Works
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/control-room.jpg" 
                alt="AI Quality Control Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="py-16 bg-hsl(var(--aima-gray-50))">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-hsl(var(--aima-gray-900)) mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-hsl(var(--aima-gray-600)) max-w-3xl mx-auto">
              Our AI-powered quality control platform delivers measurable improvements 
              in manufacturing efficiency and product quality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {roi.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center border-hsl(var(--aima-gray-200))">
                  <CardContent className="p-6">
                    <IconComponent className="w-8 h-8 text-hsl(var(--aima-red)) mx-auto mb-4" />
                    <div className="text-3xl font-bold text-hsl(var(--aima-gray-900)) mb-2">
                      {item.metric}
                    </div>
                    <div className="text-hsl(var(--aima-gray-600)) font-medium">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-hsl(var(--aima-gray-900)) mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-hsl(var(--aima-gray-600)) max-w-3xl mx-auto">
              Comprehensive AI-powered quality control capabilities designed for modern manufacturing environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-hsl(var(--aima-gray-200)) hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <IconComponent className="w-10 h-10 text-hsl(var(--aima-red)) mb-6" />
                    <h3 className="text-xl font-semibold text-hsl(var(--aima-gray-900)) mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-hsl(var(--aima-gray-600)) mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-hsl(var(--aima-gray-700))">
                          <CheckCircle className="w-4 h-4 text-hsl(var(--aima-red)) mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 lg:py-24 bg-hsl(var(--aima-gray-50))">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-hsl(var(--aima-gray-900)) mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-hsl(var(--aima-gray-600)) max-w-3xl mx-auto">
              Tailored AI solutions for diverse manufacturing sectors with specific quality control requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-hsl(var(--aima-gray-200)) hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-hsl(var(--aima-gray-900)) mb-4">
                    {industry.name}
                  </h3>
                  <p className="text-hsl(var(--aima-gray-600)) mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="border-l-4 border-hsl(var(--aima-red)) pl-4">
                    <p className="text-sm text-hsl(var(--aima-gray-700)) italic">
                      Use case: {industry.useCase}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-hsl(var(--hero-bg))">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Quality Control?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join leading manufacturers who have revolutionized their production quality with AIMA's AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-hsl(var(--aima-red)) hover:bg-hsl(var(--aima-red-dark)) text-white font-semibold"
            >
              Schedule Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-hsl(var(--hero-bg))"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;