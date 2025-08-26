import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Upload, X, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const newsVideosSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  videoUrl: z.string().optional(),
  articleUrl: z.string().optional(),
  duration: z.string().optional(),
  contentType: z.enum(['video', 'article']),
  category: z.string().optional(),
  publishedDate: z.string().optional(),
  isPublished: z.boolean().default(true),
}).refine((data) => {
  // At least one URL must be provided
  return data.videoUrl || data.articleUrl;
}, {
  message: "Either video URL or article URL must be provided",
  path: ["videoUrl"],
});

type NewsVideosFormValues = z.infer<typeof newsVideosSchema>;

export default function NewsVideosContentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  const form = useForm<NewsVideosFormValues>({
    resolver: zodResolver(newsVideosSchema),
    defaultValues: {
      title: '',
      description: '',
      videoUrl: '',
      articleUrl: '',
      duration: '',
      contentType: 'video',
      category: '',
      publishedDate: new Date().toISOString().split('T')[0],
      isPublished: true,
    },
  });

  const watchContentType = form.watch('contentType');

  const uploadThumbnail = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `news-videos/${fileName}`;

    const { data, error } = await supabase.storage
      .from('project-photos')
      .upload(filePath, file);

    if (error) {
      throw error;
    }

    const { data: urlData } = supabase.storage
      .from('project-photos')
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  };

  const onSubmit = async (values: NewsVideosFormValues) => {
    setIsSubmitting(true);

    try {
      // Upload thumbnail if provided
      let thumbnailUrl = null;
      if (thumbnailFile) {
        thumbnailUrl = await uploadThumbnail(thumbnailFile);
      }

      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication required",
          description: "You must be logged in to create news & videos content.",
          variant: "destructive",
        });
        return;
      }

      // Save to database
      const { error } = await supabase
        .from('news_videos_content')
        .insert({
          title: values.title,
          description: values.description,
          video_url: values.videoUrl || null,
          article_url: values.articleUrl || null,
          thumbnail_url: thumbnailUrl,
          duration: values.duration,
          content_type: values.contentType,
          category: values.category,
          published_date: values.publishedDate ? new Date(values.publishedDate).toISOString() : new Date().toISOString(),
          is_published: values.isPublished,
          created_by: user.id,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "News & Videos content saved successfully!",
        description: "Your content has been added to the News & Videos page.",
      });

      // Reset form
      form.reset();
      setThumbnailFile(null);

    } catch (error) {
      console.error('Error saving News & Videos content:', error);
      toast({
        title: "Error saving content",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          📺 News & Videos Content
        </CardTitle>
        <CardDescription>
          Add video or article content to appear on the News & Videos page
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. How FlawlessCX Transformed Retail Experiences" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Brief description of the content..."
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background border border-border z-50">
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="article">Article</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {watchContentType === 'video' && (
              <FormField
                control={form.control}
                name="videoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video URL</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://share.synthesia.io/143b0754-1627-4dfe-9d0d-801c5eb16fd0"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the video link (Synthesia, YouTube, Vimeo, etc.)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {watchContentType === 'article' && (
              <FormField
                control={form.control}
                name="articleUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Article URL</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://example.com/article"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the link to the full article
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {watchContentType === 'video' && (
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 5:45" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background border border-border z-50">
                        <SelectItem value="industry-news">Industry News</SelectItem>
                        <SelectItem value="case-study">Case Study</SelectItem>
                        <SelectItem value="tutorial">Tutorial</SelectItem>
                        <SelectItem value="insight">Insight</SelectItem>
                        <SelectItem value="announcement">Announcement</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="publishedDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Published Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Thumbnail Upload */}
            <div className="space-y-3">
              <FormLabel>Thumbnail Image (Optional)</FormLabel>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                {thumbnailFile ? (
                  <div className="flex items-center justify-between bg-muted p-3 rounded">
                    <span>{thumbnailFile.name}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={() => setThumbnailFile(null)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Click to upload thumbnail image</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && setThumbnailFile(e.target.files[0])}
                    />
                  </label>
                )}
              </div>
            </div>

            <FormField
              control={form.control}
              name="isPublished"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Publish Content</FormLabel>
                    <FormDescription>
                      Make this content visible on the News & Videos page
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

            <div className="flex justify-end">
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="min-w-[200px]"
              >
                {isSubmitting ? 'Saving Content...' : 'Save News & Videos Content'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}