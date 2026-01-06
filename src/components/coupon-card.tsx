'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ambassador } from '@/lib/data';
import { Copy } from 'lucide-react';

export function CouponCard() {
  const { toast } = useToast();

  const copyCode = () => {
    navigator.clipboard.writeText(ambassador.couponCode);
    toast({
      title: 'Copied!',
      description: `Coupon code ${ambassador.couponCode} copied to clipboard.`,
    });
  };

  return (
    <Card className="w-full bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="text-2xl sm:text-3xl font-black tracking-widest text-primary whitespace-nowrap">
            {ambassador.couponCode}
          </div>
          <Button
            size="lg"
            onClick={copyCode}
            variant="default"
            className="w-full sm:w-auto shadow-md flex-shrink-0 px-4"
          >
            <Copy className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Copy Code
          </Button>
        </div>
        <p className="text-center font-semibold text-muted-foreground text-sm sm:text-base mt-4">
          Apply this code at checkout on the PW App/Website for maximum
          discount.
        </p>
      </CardContent>
    </Card>
  );
}
