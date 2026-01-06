import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ambassador } from '@/lib/data';

export function Footer() {
  const shareMessage = `Unlock your potential with Physics Wallah! Use my exclusive coupon code ${ambassador.couponCode} to get the best discount on any course—from JEE and NEET to UPSC and PW Skills. Grab this deal and start your success journey today!`;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;

  return (
    <footer className="w-full py-8 bg-muted">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-2">PWAffiliatePro</h3>
          <p className="text-muted-foreground">
            Your one-stop destination for the latest Physics Wallah offers and
            coupon codes. Valid till {ambassador.validity}.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
             <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </li>
             <li>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <a
                href="https://pw.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                PW.live Official Site
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg mb-2">Share & Contact</h3>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className='w-full md:w-auto'
          >
            <Button className='w-full'>
              <MessageCircle className="mr-2 h-5 w-5" />
              Share on WhatsApp
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            If the code is not working, try using the PW Android App.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center mt-8 border-t pt-6">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} PWAffiliatePro. This is an unofficial
          affiliate website.
        </p>
      </div>
    </footer>
  );
}
