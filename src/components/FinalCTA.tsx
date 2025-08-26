
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Start Smarter. Fix Faster. Deliver Better.
        </h2>
        
        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
          Book a call and let's uncover what's holding your customer experience — and your results — back.
        </p>
        
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
          <Link to="/start-discovery">Book a Discovery Call</Link>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
