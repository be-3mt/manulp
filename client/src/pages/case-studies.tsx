import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "Automotive Parts Manufacturer",
    industry: "Automotive",
    challenge: "High defect rates in precision components manufacturing",
    solution: "Implemented AI-powered computer vision quality control system",
    results: [
      "90% reduction in defect rates",
      "Annual savings of $2.5M",
      "ROI achieved in 6 months"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
  },
  {
    title: "Electronics Assembly Plant",
    industry: "Electronics",
    challenge: "Frequent unplanned equipment downtime",
    solution: "Deployed predictive maintenance system with IoT sensors",
    results: [
      "75% reduction in unplanned downtime",
      "30% decrease in maintenance costs",
      "Equipment lifespan extended by 40%"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801"
  },
  {
    title: "Food Processing Facility",
    industry: "Food & Beverage",
    challenge: "Inefficient production line scheduling",
    solution: "Implemented AI process optimization system",
    results: [
      "35% increase in throughput",
      "25% reduction in waste",
      "20% energy cost savings"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092584641-28f91f7aed43"
  }
];

export default function CaseStudies() {
  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Real results from our AI manufacturing solutions
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Card key={study.title} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={study.imageUrl}
                alt={study.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{study.industry}</Badge>
              </div>
              <CardTitle className="text-xl">{study.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Challenge:</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Solution:</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Results:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {study.results.map((result) => (
                      <li key={result}>• {result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}