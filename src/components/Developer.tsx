import { Card, CardContent } from "@/components/ui/card";
import { Award, Building2, Leaf } from "lucide-react";

const Developer = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Brought to You by Pioneers of Excellence
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-2xl font-serif text-primary">Infinity Group</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in-up">
              <Card className="overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co/23nFRxKm/developer-image.webp"
                  alt="Infinity Group - 25 Years of Excellence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With <span className="font-semibold text-primary">25 years of green building excellence</span>, Infinity Group has established itself as a trusted name in sustainable real estate development across North India.
              </p>

              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Industry Leadership</h4>
                      <p className="text-sm text-muted-foreground">
                        Pioneer in eco-conscious development with multiple award-winning projects
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <Building2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Proven Track Record</h4>
                      <p className="text-sm text-muted-foreground">
                        Successfully delivered Infinity Think Tank and Krishna Bhumi Township
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-600">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <Leaf className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Sustainability Focus</h4>
                      <p className="text-sm text-muted-foreground">
                        Committed to IGBC certifications and environmentally responsible construction
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg font-semibold text-secondary pt-4">
                Developed by <span className="text-primary">Snowwhite Infrastructure Pvt. Ltd.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
