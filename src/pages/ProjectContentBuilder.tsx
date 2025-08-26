import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectContentForm from '@/components/project-builder/ProjectContentForm';
import AIAlexContentForm from '@/components/project-builder/AIAlexContentForm';
import NewsVideosContentForm from '@/components/project-builder/NewsVideosContentForm';

export default function ProjectContentBuilder() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">FlawlessCX Content Builder</h1>
          <p className="text-lg text-muted-foreground">
            Create and manage content across different sections of your website
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projects">Project Content</TabsTrigger>
            <TabsTrigger value="ai-alex">AI Alex</TabsTrigger>
            <TabsTrigger value="news-videos">News & Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <ProjectContentForm />
          </TabsContent>

          <TabsContent value="ai-alex">
            <AIAlexContentForm />
          </TabsContent>

          <TabsContent value="news-videos">
            <NewsVideosContentForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}