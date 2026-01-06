import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          We value your feedback, inquiries, and suggestions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Whether you have questions about our services, need assistance
              with a coupon code, or want to provide feedback, we’re here to
              help.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
             <p>For any queries, please explore the official PW website.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" placeholder="John Doe" disabled />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Your email</Label>
              <Input id="email" type="email" placeholder="m@example.com" disabled/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Coupon Code Inquiry" disabled/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Your message (optional)</Label>
              <Textarea id="message" placeholder="Type your message here." disabled/>
            </div>
            <Button className="w-full" disabled>Submit</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
