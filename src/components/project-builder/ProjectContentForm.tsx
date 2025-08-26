import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Upload, X, Plus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const projectFormSchema = z.object({
  projectTitle: z.string().min(1, "Project title is required"),
  clientName: z.string().min(1, "Client name is required"),
  yearsActive: z.string().min(1, "Years active is required"),
  headlineSummary: z.string().min(1, "Headline summary is required"),
  fullProjectSummary: z.string().min(1, "Full project summary is required"),
  businessImpact: z.string(),
  tags: z.string(),
  clientTestimonial: z.string().optional(),
  internalNotes: z.string().optional(),
  isPublished: z.boolean().default(false),
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

export default function ProjectContentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [businessImpactItems, setBusinessImpactItems] = useState<string[]>([]);
  const [tagItems, setTagItems] = useState<string[]>([]);
  const [currentImpact, setCurrentImpact] = useState('');
  const [currentTag, setCurrentTag] = useState('');
  
  // File upload states
  const [clientLogo, setClientLogo] = useState<File | null>(null);
  const [projectPhotos, setProjectPhotos] = useState<File[]>([]);
  const [horizontalVideo, setHorizontalVideo] = useState<File | null>(null);
  const [verticalVideo, setVerticalVideo] = useState<File | null>(null);

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      projectTitle: '',
      clientName: '',
      yearsActive: '',
      headlineSummary: '',
      fullProjectSummary: '',
      businessImpact: '',
      tags: '',
      clientTestimonial: '',
      internalNotes: '',
      isPublished: false,
    },
  });

  const addBusinessImpact = () => {
    if (currentImpact.trim() && !businessImpactItems.includes(currentImpact.trim())) {
      setBusinessImpactItems([...businessImpactItems, currentImpact.trim()]);
      setCurrentImpact('');
    }
  };

  const removeBusinessImpact = (item: string) => {
    setBusinessImpactItems(businessImpactItems.filter(i => i !== item));
  };

  const addTag = () => {
    if (currentTag.trim() && !tagItems.includes(currentTag.trim())) {
      setTagItems([...tagItems, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (item: string) => {
    setTagItems(tagItems.filter(i => i !== item));
  };

  const uploadFile = async (file: File, bucket: string, folder: string = '') => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) {
      throw error;
    }

    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  };

  const onSubmit = async (values: ProjectFormValues) => {
    setIsSubmitting(true);

    try {
      // Upload files
      let clientLogoUrl = null;
      let projectPhotoUrls: string[] = [];
      let horizontalVideoUrl = null;
      let verticalVideoUrl = null;

      if (clientLogo) {
        clientLogoUrl = await uploadFile(clientLogo, 'project-logos');
      }

      if (projectPhotos.length > 0) {
        const uploadPromises = projectPhotos.map(photo => 
          uploadFile(photo, 'project-photos')
        );
        projectPhotoUrls = await Promise.all(uploadPromises);
      }

      if (horizontalVideo) {
        horizontalVideoUrl = await uploadFile(horizontalVideo, 'project-videos', 'horizontal');
      }

      if (verticalVideo) {
        verticalVideoUrl = await uploadFile(verticalVideo, 'project-videos', 'vertical');
      }

      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication required",
          description: "You must be logged in to create projects.",
          variant: "destructive",
        });
        return;
      }

      // Save to database
      const { error } = await supabase
        .from('projects')
        .insert({
          project_title: values.projectTitle,
          client_name: values.clientName,
          years_active: values.yearsActive,
          headline_summary: values.headlineSummary,
          full_project_summary: values.fullProjectSummary,
          business_impact: businessImpactItems,
          tags: tagItems,
          client_logo_url: clientLogoUrl,
          project_photos: projectPhotoUrls,
          horizontal_video_url: horizontalVideoUrl,
          vertical_video_url: verticalVideoUrl,
          client_testimonial: values.clientTestimonial,
          internal_notes: values.internalNotes,
          is_published: values.isPublished,
          created_by: user.id,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Project saved successfully!",
        description: "Your project has been saved and can be used to generate content.",
      });

      // Reset form
      form.reset();
      setBusinessImpactItems([]);
      setTagItems([]);
      setClientLogo(null);
      setProjectPhotos([]);
      setHorizontalVideo(null);
      setVerticalVideo(null);

    } catch (error) {
      console.error('Error saving project:', error);
      toast({
        title: "Error saving project",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (file: File, type: 'logo' | 'photos' | 'horizontal' | 'vertical') => {
    switch (type) {
      case 'logo':
        setClientLogo(file);
        break;
      case 'photos':
        setProjectPhotos([...projectPhotos, file]);
        break;
      case 'horizontal':
        setHorizontalVideo(file);
        break;
      case 'vertical':
        setVerticalVideo(file);
        break;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Project Information Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🧾 Project Information Section
            </CardTitle>
            <CardDescription>
              Basic details about the project and its business impact
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="projectTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Fixing Friction Across £5bn in Online Sales" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="clientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. John Lewis, Virgin Media" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearsActive"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years Active</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 2015–2016" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="headlineSummary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Headline / Summary Sentence</FormLabel>
                  <FormControl>
                    <Input placeholder="One-liner that captures the business impact" {...field} />
                  </FormControl>
                  <FormDescription>
                    A concise statement that captures the business impact of the project
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fullProjectSummary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Project Summary</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Brief narrative explaining the challenge, what FlawlessCX did, and the outcome..."
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <FormLabel>Business Impact</FormLabel>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g. ↑ Conversion, ↓ Churn, ↑ NPS"
                  value={currentImpact}
                  onChange={(e) => setCurrentImpact(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addBusinessImpact())}
                />
                <Button type="button" onClick={addBusinessImpact} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {businessImpactItems.map((item, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {item}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => removeBusinessImpact(item)} />
                  </Badge>
                ))}
              </div>
              <FormDescription>
                Add individual impact metrics (press Enter or click + to add)
              </FormDescription>
            </div>

            <div className="space-y-3">
              <FormLabel>Tags / Sectors / Themes</FormLabel>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g. Retail, Subscription, Government, AI, Service Design"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tagItems.map((item, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1">
                    {item}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => removeTag(item)} />
                  </Badge>
                ))}
              </div>
              <FormDescription>
                Add relevant tags and categories (press Enter or click + to add)
              </FormDescription>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Media Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📸 Media Upload Section
            </CardTitle>
            <CardDescription>
              Upload logos, photos, and videos for the project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Client Logo */}
            <div className="space-y-3">
              <FormLabel>Client Logo (PNG preferred)</FormLabel>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                {clientLogo ? (
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>{clientLogo.name}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={() => setClientLogo(null)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Click to upload client logo</p>
                    <input
                      type="file"
                      accept="image/png,image/jpg,image/jpeg"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'logo')}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Project Photos */}
            <div className="space-y-3">
              <FormLabel>Project Photos / Screenshots (Multiple images)</FormLabel>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <label className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Click to upload project photos</p>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) {
                        Array.from(e.target.files).forEach(file => handleFileUpload(file, 'photos'));
                      }
                    }}
                  />
                </label>
              </div>
              {projectPhotos.length > 0 && (
                <div className="space-y-2">
                  {projectPhotos.map((photo, index) => (
                    <div key={index} className="flex items-center justify-between bg-muted p-3 rounded">
                      <span>{photo.name}</span>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setProjectPhotos(projectPhotos.filter((_, i) => i !== index))}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Horizontal Video */}
            <div className="space-y-3">
              <FormLabel>Video Walkthrough of Work (Horizontal)</FormLabel>
              <FormDescription>Optional: A short horizontal-form video showing the work in action</FormDescription>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                {horizontalVideo ? (
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>{horizontalVideo.name}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={() => setHorizontalVideo(null)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Click to upload horizontal video (MP4)</p>
                    <input
                      type="file"
                      accept="video/mp4"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'horizontal')}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Vertical Video */}
            <div className="space-y-3">
              <FormLabel>Vertical Video – Alex Describing the Project</FormLabel>
              <FormDescription>30–60 second clip of Alex explaining the problem and impact (TikTok/Instagram Ready)</FormDescription>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                {verticalVideo ? (
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>{verticalVideo.name}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={() => setVerticalVideo(null)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Click to upload vertical video (MP4)</p>
                    <input
                      type="file"
                      accept="video/mp4"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'vertical')}
                    />
                  </label>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Optional Extras */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💬 Optional Extras
            </CardTitle>
            <CardDescription>
              Additional content for enhanced project documentation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="clientTestimonial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quote or Testimonial from Client</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter client testimonial or quote..."
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="internalNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Internal Notes / Strategy Highlights</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="For CRM/internal use only – key decisions, challenges overcome..."
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    This information will only be used internally and not displayed publicly
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isPublished"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Publish Project</FormLabel>
                    <FormDescription>
                      Make this project visible on the public website
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className="min-w-[200px]"
          >
            {isSubmitting ? 'Saving Project...' : 'Save Project'}
          </Button>
        </div>
      </form>
    </Form>
  );
}