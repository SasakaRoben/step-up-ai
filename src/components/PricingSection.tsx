import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for exploring career options",
    icon: Zap,
    badge: null,
    features: [
      "Basic career assessments",
      "5 AI chat sessions per month",
      "Limited learning path access",
      "Community access",
      "Email support"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: "29",
    description: "Ideal for serious career planning",
    icon: Sparkles,
    badge: "Most Popular",
    features: [
      "Unlimited AI career advisor",
      "Personalized learning paths",
      "Advanced market insights",
      "1-on-1 mentor sessions (2/month)",
      "Priority support",
      "Progress analytics",
      "Certificate tracking"
    ],
    cta: "Start Pro Trial",
    popular: true
  },
  {
    name: "Premium",
    price: "79",
    description: "For comprehensive career transformation",
    icon: Crown,
    badge: "Best Value",
    features: [
      "Everything in Pro",
      "Unlimited mentor sessions",
      "Personal career coach",
      "Industry insider network",
      "Job placement assistance",
      "Salary negotiation support",
      "Custom learning content",
      "24/7 priority support"
    ],
    cta: "Go Premium",
    popular: false
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose Your 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Career Growth Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade as you advance in your career journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative shadow-elevated border-border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? "ring-2 ring-primary shadow-glow" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-hero text-white">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="space-y-1">
                  <div className="text-3xl font-bold">
                    ${plan.price}
                    <span className="text-base font-normal text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-hero shadow-glow" 
                      : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12 p-6 bg-gradient-card rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-2">30-Day Money-Back Guarantee</h3>
          <p className="text-muted-foreground">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};