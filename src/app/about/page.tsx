import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          About Us
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Welcome to PWAffiliatePro</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Discover the Latest Physics Wallah Coupon Codes and Exclusive
            Updates!
          </p>
          <p>
            At PWAffiliatePro, we are dedicated to bringing you the best deals
            and discounts for all Physics Wallah courses. Whether you’re
            preparing for NEE, JEE, UPSC, SSC, NDA, CSIR NET, IIT JAM, Teaching
            exams, GATE Foundation, PW SKILLS, or any other batch, we’ve got
            you covered with the latest coupon codes to ensure you get the
            maximum discount on your course enrollment.
          </p>
          <h3 className="text-xl font-semibold text-foreground pt-4">
            Exclusive Updates
          </h3>
          <p>
            Stay ahead of the curve with exclusive updates on Physics Wallah
            offers. We provide timely information on upcoming batches, special
            promotions, and discounts, so you never miss out on any opportunity
            to save while enhancing your learning experience.
          </p>
          <h3 className="text-xl font-semibold text-foreground pt-4">
            Latest Coupon Codes
          </h3>
          <p>
            Find the most up-to-date coupon codes for every Physics Wallah batch
            right here on PWAffiliatePro. Our team diligently updates the site
            with the latest codes, ensuring that you have access to the best
            discounts available.
          </p>
          <h3 className="text-xl font-semibold text-foreground pt-4">
            Why Choose PWAffiliatePro?
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Maximum Discounts:</strong> Our coupon codes ensure that
              you get the best possible discounts on Physics Wallah courses.
            </li>
            <li>
              <strong>Timely Updates:</strong> Stay informed about the latest
              offers and updates, so you never miss out on savings.
            </li>
            <li>
              <strong>Convenience:</strong> Easily find and apply coupon codes
              for your desired Physics Wallah batch, all in one place.
            </li>
          </ul>
          <p className="pt-4">
            Don’t miss out on the opportunity to save while pursuing your
            educational goals. Explore PWAffiliatePro today and unlock
            exclusive discounts with our latest coupon codes!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
