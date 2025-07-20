import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ExternalLink,
  Video,
  Building,
  Globe
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI in Assembly Lines – Live Webinar",
      date: "February 15, 2025",
      time: "2:00 PM EST",
      format: "Webinar",
      location: "Online",
      description: "Discover how AI transforms assembly line quality control with real-world case studies and live demonstrations.",
      isHighlighted: true,
      registrationLink: "#",
      attendees: "500+ registered"
    },
    {
      id: 2,
      title: "Manufacturing Excellence Summit 2025",
      date: "March 8-10, 2025",
      time: "9:00 AM - 5:00 PM",
      format: "In-Person",
      location: "Detroit, MI",
      description: "Join industry leaders at the premier manufacturing conference. AIMA will showcase latest AI quality control innovations.",
      isHighlighted: false,
      registrationLink: "#",
      attendees: "2,000+ expected"
    },
    {
      id: 3,
      title: "Smart Factory Automation Expo",
      date: "March 22-24, 2025",
      time: "10:00 AM - 6:00 PM",
      format: "Expo",
      location: "Chicago, IL",
      description: "Visit AIMA at booth #245 for hands-on demos of our AI-powered quality control platform.",
      isHighlighted: false,
      registrationLink: "#",
      attendees: "10,000+ visitors"
    },
    {
      id: 4,
      title: "Predictive Quality Analytics Deep Dive",
      date: "April 5, 2025",
      time: "1:00 PM EST",
      format: "Webinar",
      location: "Online",
      description: "Technical session on implementing predictive analytics for quality control with expert Q&A.",
      isHighlighted: false,
      registrationLink: "#",
      attendees: "300+ registered"
    },
    {
      id: 5,
      title: "European Manufacturing Tech Conference",
      date: "April 18-19, 2025",
      time: "9:00 AM - 6:00 PM",
      format: "In-Person",
      location: "Munich, Germany",
      description: "AIMA's European debut showcasing AI quality control solutions for the European manufacturing market.",
      isHighlighted: false,
      registrationLink: "#",
      attendees: "1,500+ expected"
    },
    {
      id: 6,
      title: "Industry 4.0 Innovation Workshop",
      date: "May 12, 2025",
      time: "10:00 AM - 4:00 PM",
      format: "Workshop",
      location: "San Francisco, CA",
      description: "Hands-on workshop on implementing AI in manufacturing processes with personalized guidance from AIMA experts.",
      isHighlighted: false,
      registrationLink: "#",
      attendees: "Limited to 50"
    }
  ];

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "Webinar":
        return Video;
      case "In-Person":
        return Building;
      case "Expo":
        return Globe;
      case "Workshop":
        return Users;
      default:
        return Calendar;
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case "Webinar":
        return "bg-blue-100 text-blue-800";
      case "In-Person":
        return "bg-green-100 text-green-800";
      case "Expo":
        return "bg-purple-100 text-purple-800";
      case "Workshop":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-hsl(var(--aima-gray-100)) text-hsl(var(--aima-gray-800))";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-hsl(var(--aima-gray-50))">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-hsl(var(--aima-gray-900)) mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-hsl(var(--aima-gray-600)) mb-8 max-w-3xl mx-auto">
            Meet us at industry forums, conferences, and online sessions where we explore 
            the future of AI in manufacturing quality control.
          </p>
          <Button className="bg-hsl(var(--aima-red)) hover:bg-hsl(var(--aima-red-dark)) text-white font-semibold">
            View All Events
          </Button>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => {
              const FormatIcon = getFormatIcon(event.format);
              return (
                <Card 
                  key={event.id} 
                  className={`border-hsl(var(--aima-gray-200)) hover:shadow-lg transition-all duration-300 ${
                    event.isHighlighted ? 'ring-2 ring-hsl(var(--aima-red)) ring-opacity-50' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    {event.isHighlighted && (
                      <Badge className="mb-4 bg-hsl(var(--aima-red)) text-white">
                        Next Event
                      </Badge>
                    )}
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className={`text-xs ${getFormatColor(event.format)}`}>
                        <FormatIcon className="w-3 h-3 mr-1" />
                        {event.format}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold text-hsl(var(--aima-gray-900)) mb-4 leading-tight">
                      {event.title}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-hsl(var(--aima-gray-600))">
                        <Calendar className="w-4 h-4 mr-2 text-hsl(var(--aima-red))" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-hsl(var(--aima-gray-600))">
                        <Clock className="w-4 h-4 mr-2 text-hsl(var(--aima-red))" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-hsl(var(--aima-gray-600))">
                        <MapPin className="w-4 h-4 mr-2 text-hsl(var(--aima-red))" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-hsl(var(--aima-gray-600))">
                        <Users className="w-4 h-4 mr-2 text-hsl(var(--aima-red))" />
                        {event.attendees}
                      </div>
                    </div>

                    <p className="text-hsl(var(--aima-gray-600)) text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>

                    <Button 
                      className={`w-full font-semibold ${
                        event.isHighlighted 
                          ? 'bg-hsl(var(--aima-red)) hover:bg-hsl(var(--aima-red-dark)) text-white'
                          : 'bg-hsl(var(--aima-gray-100)) hover:bg-hsl(var(--aima-gray-200)) text-hsl(var(--aima-gray-900))'
                      }`}
                    >
                      {event.format === "Webinar" ? "Register Free" : "Learn More"}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-hsl(var(--hero-bg))">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Host AIMA at Your Event
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Invite our experts to speak at your conference, host a workshop, or showcase 
            our AI quality control solutions at your industry event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-hsl(var(--aima-red)) hover:bg-hsl(var(--aima-red-dark)) text-white font-semibold"
            >
              Request Speaker
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-hsl(var(--hero-bg))"
            >
              Partnership Inquiry
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;