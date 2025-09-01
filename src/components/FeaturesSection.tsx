import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Zap,
  Shield,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Advanced algorithms analyze your skills, interests, and personality to recommend perfect career matches.",
    badge: "Core Feature"
  },
  {
    icon: Target,
    title: "Personalized Learning Paths",
    description: "Get custom roadmaps with courses, certifications, and milestones tailored to your career goals.",
    badge: "Popular"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Real-time job market data and salary trends to make informed career decisions.",
    badge: "Data-Driven"
  },
  {
    icon: Users,
    title: "Mentorship Network",
    description: "Connect with industry professionals and mentors in your field of interest.",
    badge: "Premium"
  },
  {
    icon: BookOpen,
    title: "Skill Assessment",
    description: "Comprehensive evaluations to identify your strengths and areas for improvement.",
    badge: "Free"
  },
  {
    icon: Zap,
    title: "Instant Recommendations",
    description: "Get career suggestions in real-time as you chat with our AI advisor.",
    badge: "AI-Powered"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and secure. We never share your personal information.",
    badge: "Secure"
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Explore career opportunities worldwide with location-specific insights.",
    badge: "International"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Powerful Features for Your 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Career Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to discover, plan, and achieve your dream career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-3 group-hover:shadow-glow transition-shadow">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">{feature.badge}</Badge>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};