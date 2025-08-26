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
import { Upload, X, Play } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const aiAlexSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  videoUrl: z.string().url("Please enter a valid video URL"),
  duration: z.string().optional(),
  category: z.string().optional(),
  isPublished: z.boolean().default(true),
});

type AIAlexFormValues = z.infer<typeof aiAlexSchema>;

export default function AIAlexContentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  const form = useForm<AIAlexFormValues>({
    resolver: zodResolver(aiAlexSchema),
    defaultValues: {
      title: '',
      description: '',
      videoUrl: '',
      duration: '',
      category: '',
      isPublished: true,
    },
  });

  const uploadThumbnail = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `ai-alex/${fileName}`;

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

  const onSubmit = async (values: AIAlexFormValues) => {
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
          description: "You must be logged in to create AI Alex content.",
          variant: "destructive",
        });
        return;
      }

      // Save to database
      const { error } = await supabase
        .from('ai_alex_content')
        .insert({
          title: values.title,
          description: values.description,
          video_url: values.videoUrl,
          thumbnail_url: thumbnailUrl,
          duration: values.duration,
          category: values.category,
          is_published: values.isPublished,
          created_by: user.id,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "AI Alex content saved successfully!",
        description: "Your video content has been added to the AI Alex page.",
      });

      // Reset form
      form.reset();
      setThumbnailFile(null);

    } catch (error) {
      console.error('Error saving AI Alex content:', error);
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
          🤖 AI Alex Video Content
        </CardTitle>
        <CardDescription>
          Add video content to appear on the AI Alex page
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
                  <FormLabel>Video Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. AI Alex Explains Customer Journey Mapping" {...field} />
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
                  <FormLabel>Video Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Brief description of what this video covers..."
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                    Enter the Synthesia video link or any other video URL
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 2:30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                        <SelectItem value="tutorial">Tutorial</SelectItem>
                        <SelectItem value="demo">Demo</SelectItem>
                        <SelectItem value="explanation">Explanation</SelectItem>
                        <SelectItem value="case-study">Case Study</SelectItem>
                        <SelectItem value="methodology">Methodology</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <FormLabel className="text-base">Publish Video</FormLabel>
                    <FormDescription>
                      Make this video visible on the AI Alex page
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
                {isSubmitting ? 'Saving Video...' : 'Save AI Alex Video'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}