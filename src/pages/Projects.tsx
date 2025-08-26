import { Play, ArrowRight, TrendingUp, ArrowDown, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Projects = () => {
  const projects = [
    {
      client: "John Lewis",
      year: "2015–2016",
      headline: "Fixing Friction Across £5bn in Online Sales",
      summary: "We worked with John Lewis to improve key ecommerce journeys like checkout, search, and loyalty. The customer experience was redesigned around shopper needs — but our real success came from aligning that work to business impact.",
      impactStats: [
        "↑ Checkout conversion",
        "↑ Basket size and repeat usage"
      ],
      tags: ["Retail", "Checkout", "Customer Journey"],
      videoThumbnail: "/placeholder.svg"
    },
    {
      client: "Virgin Media",
      year: "2018–2019",
      headline: "From Service Complexity to Customer Clarity",
      summary: "We helped Virgin Media simplify their digital self-service experience for broadband and TV customers. By removing friction from key support journeys, we reduced operational costs while improving customer satisfaction.",
      impactStats: [
        "↓ 40% reduction in support calls",
        "↑ 35% improvement in self-service completion",
        "↑ Net Promoter Score increase"
      ],
      tags: ["Telecommunications", "Self-Service", "Support Experience"],
      videoThumbnail: "/placeholder.svg"
    },
    {
      client: "Sainsbury's",
      year: "2019–2020",
      headline: "Grocery Shopping Reimagined for Digital-First Customers",
      summary: "We redesigned Sainsbury's online grocery experience to compete with new market entrants. Our focus on mobile-first design and simplified checkout drove significant improvements in conversion and customer retention.",
      impactStats: [
        "↑ 28% mobile conversion increase",
        "↓ 45% cart abandonment reduction",
        "↑ Customer lifetime value improvement"
      ],
      tags: ["Retail", "Grocery", "Mobile Experience", "Ecommerce"],
      videoThumbnail: "/placeholder.svg"
    },
    {
      client: "Ticketmaster",
      year: "2020–2021",
      headline: "High-Pressure Purchasing Under Extreme Load",
      summary: "We optimized Ticketmaster's checkout flow for high-demand events where every second counts. Our improvements reduced abandonment during peak traffic periods and increased successful bookings under pressure.",
      impactStats: [
        "↑ 22% conversion during peak events",
        "↓ 50% reduction in checkout errors",
        "↑ Customer satisfaction scores"
      ],
      tags: ["Entertainment", "High-Traffic", "Checkout Optimization"],
      videoThumbnail: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Projects That Delivered a FlawlessCX
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Strategic, Customer-Led. Always Business-Focused.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <Separator className="mb-16" />
      </div>

      {/* Intro Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Over the past 11 years, we've worked with some of the UK's biggest brands — solving complex experience challenges across retail, finance, tech, government, and more.
            </p>
            <p>
              Designing a great customer experience is expected. The real challenge? Aligning it with measurable business value. Every project we take on delivers both.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <Separator className="mb-16" />
      </div>

      {/* Projects Timeline */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                {/* Project Header */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.client} – {project.year}
                  </h3>
                </div>

                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Video Section */}
                    <div className="relative bg-muted/30 flex items-center justify-center min-h-64">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                          <Play className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          30-second video of Alex explaining the challenge + impact
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl mb-4">
                          From Customer Friction to Commercial Impact
                        </CardTitle>
                        <CardTitle className="text-xl mb-4 text-primary">
                          {project.headline}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {project.summary}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        {/* Impact Stats */}
                        {project.impactStats.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Quick Impact Stats:</h4>
                            <ul className="space-y-2">
                              {project.impactStats.map((stat, statIndex) => (
                                <li key={statIndex} className="flex items-center gap-2 text-muted-foreground">
                                  {stat.startsWith('↑') && <TrendingUp className="w-4 h-4 text-green-600" />}
                                  {stat.startsWith('↓') && <ArrowDown className="w-4 h-4 text-blue-600" />}
                                  <span>{stat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tags */}
                        <div>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>

                {/* Timeline connector */}
                {index < projects.length - 1 && (
                  <div className="absolute left-1.5 top-8 w-0.5 h-16 bg-border translate-y-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <Separator className="my-16" />
      </div>

      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to deliver a FlawlessCX in your business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's talk about how we can bring strategic clarity, measurable results, and customer-focused design to your organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Contact Alex
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Search className="mr-2 h-5 w-5" />
              Learn about DiscoveryStack
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;