import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Clock, CheckCircle } from "lucide-react";

interface BookDiscoveryDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  pageContext?: string;
  sector?: string;
  selectedPackage?: string;
}

const BookDiscoveryDialog = ({ isOpen, onOpenChange, pageContext, sector, selectedPackage }: BookDiscoveryDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    package: selectedPackage || ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePackageChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      package: value
    }));
  };

  const discoveryPackages = [
    { value: "Clarity", label: "Clarity - From £12,500 (4 weeks)" },
    { value: "Impact", label: "Impact - From £19,500 (5-6 weeks)" },
    { value: "Vision", label: "Vision - From £29,500+ (6+ weeks)" },
    { value: "Not Sure", label: "Not sure - help me choose" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create contextual source information
      const sourceInfo = `discovery_booking${pageContext ? `_${pageContext}` : ''}${sector ? `_${sector}` : ''}${formData.package ? `_${formData.package}` : ''}`;
      
      // Create message with package info if selected
      const messageWithPackage = formData.package 
        ? `Package Interest: ${formData.package}\n\n${formData.message}`
        : formData.message;
      
      // Save to database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          full_name: formData.name,
          work_email: formData.email,
          business_name: formData.company,
          phone_number: formData.phone,
          message: messageWithPackage,
          source: sourceInfo
        });

      if (dbError) {
        throw dbError;
      }

      // Send email to Alex
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          business_name: formData.company,
          phone_number: formData.phone,
          form_type: 'DiscoveryStack® Consultation',
          source: `${pageContext || 'website'}${sector ? ` - ${sector}` : ''}${formData.package ? ` - ${formData.package}` : ''}`
        }
      });

      if (emailError) {
        console.error('Email error (non-critical):', emailError);
      }

      toast({
        title: "Discovery call requested!",
        description: "We'll contact you within 24 hours to schedule your consultation.",
      });

      // Reset form and close dialog
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        package: selectedPackage || ''
      });
      onOpenChange(false);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your DiscoveryStack® Consultation</DialogTitle>
          <DialogDescription className="text-base">
            {sector ? `Discover how FlawlessCX can transform ${sector} customer experience. ` : ''}
            Schedule a strategic conversation about your challenges and objectives.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6">
          {/* What to Expect */}
          <div className="bg-slate-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              What to expect
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                <span>30-minute strategic conversation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3" />
                <span>Free initial assessment of your challenges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3" />
                <span>Tailored DiscoveryStack® proposal if there's a fit</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                />
              </div>
            </div>

            {/* Package Selection - only show if from DiscoveryStack */}
            {pageContext === 'DiscoveryStack' && (
              <div>
                <Label htmlFor="package">Package Interest</Label>
                <Select value={formData.package} onValueChange={handlePackageChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a package or let us help you choose" />
                  </SelectTrigger>
                  <SelectContent>
                    {discoveryPackages.map((pkg) => (
                      <SelectItem key={pkg.value} value={pkg.value}>
                        {pkg.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label htmlFor="message">Your biggest CX challenge</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your customer experience challenges..."
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? "Submitting..." : "Book Discovery Call"}
              </Button>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
            </div>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            We'll review your details and suggest the best time for your consultation within 24 hours.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDiscoveryDialog;