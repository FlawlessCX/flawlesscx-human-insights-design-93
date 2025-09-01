import { Brain, Users, Shield, Zap } from "lucide-react";

const AIAgenticApproach = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI & Agentic AI — <span className="text-primary">How We Use It</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Human-centred, AI-accelerated. We use AI to move faster and embed it in solutions where it drives value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Inside Our Process</h3>
              <p className="text-muted-foreground mb-6">
                Discovery → Design → Delivery — enhanced with AI:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-sm">Automate repetitive tasks (transcription, pattern clustering, prototype checks)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-sm">Speed synthesis; maintain human judgement</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-sm">Produce clearer artefacts faster (maps, blueprints, hypotheses, test plans)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">In Client Solutions</h3>
              <p className="text-muted-foreground mb-6">
                When value is clear and safe to operate:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-sm">Intelligent self-serve and guided workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-sm">Internal agents for triage, prep, monitoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-sm">Post-purchase agents for retention and service recovery</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-sm">Back-office automation to reduce rework and failure demand</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Readiness</h3>
              <p className="text-muted-foreground text-sm">
                Across tech stack, processes, governance, and safety (privacy, bias, traceability).
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pragmatic Decisioning</h3>
              <p className="text-muted-foreground text-sm">
                Where agents should assist, act, or advise — based on value and risk.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Future-Proofing</h3>
              <p className="text-muted-foreground text-sm">
                Every engagement builds AI readiness with governance and safety built in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgenticApproach;