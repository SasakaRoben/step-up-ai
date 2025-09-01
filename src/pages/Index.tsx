import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ChatbotDemo } from "@/components/ChatbotDemo";
import { DashboardPreview } from "@/components/DashboardPreview";
import { PricingSection } from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  BrainCircuit,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ChatbotDemo />
      <DashboardPreview />
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How <span className="bg-gradient-hero bg-clip-text text-transparent">NextStep AI</span> Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to discover your perfect career path
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Share Your Interests",
                description: "Tell our AI about your passions, skills, and career preferences through an interactive chat."
              },
              {
                step: "02", 
                title: "Get AI Recommendations",
                description: "Receive personalized career suggestions based on market trends and your unique profile."
              },
              {
                step: "03",
                title: "Follow Your Path",
                description: "Access custom learning paths, connect with mentors, and track your progress to success."
              }
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-card border-border">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who've found their perfect career path with NextStep AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-hero rounded-lg">
                  <BrainCircuit className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  NextStep AI
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering careers through AI-driven guidance and personalized learning paths. 
                Making quality education accessible for everyone, aligned with SDG 4.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@nextstep.ai</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2024 NextStep AI. All rights reserved. Built for SDG 4: Quality Education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;