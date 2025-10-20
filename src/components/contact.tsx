'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'santosh.reddy@example.com',
      href: 'mailto:santosh.reddy@example.com',
      color: 'text-blue-600'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      value: 'Bangalore, India',
      href: '#',
      color: 'text-purple-600'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'santosh-reddy',
      href: 'https://linkedin.com/in/santosh-reddy',
      color: 'text-blue-700'
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'GitHub',
      value: 'santoshreddy',
      href: 'https://github.com/santoshreddy',
      color: 'text-gray-800'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          I'm always excited to connect with fellow DevOps engineers, discuss opportunities, or just chat about infrastructure and automation!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.map((contact, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gray-100 ${contact.color}`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base font-medium mb-3">
                {contact.value}
              </CardDescription>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => window.open(contact.href, '_blank')}
              >
                {contact.title === 'Location' ? 'View on Map' : `Open ${contact.title}`}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 pt-6">
        <div className="bg-accent rounded-lg p-6">
          <h3 className="font-semibold mb-2">What I'm Looking For</h3>
          <p className="text-sm text-muted-foreground">
            • DevOps Engineer positions • Infrastructure architect roles • Cloud engineering opportunities • 
            Technical leadership roles in DevOps teams • Open source contributions to DevOps tools
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Feel free to reach out for collaborations, job opportunities, or just to discuss the latest in DevOps! 
          I'm particularly interested in projects that involve infrastructure automation, cloud technologies, 
          and scalable system design.
        </p>
      </div>
    </div>
  );
}