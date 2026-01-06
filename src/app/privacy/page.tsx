import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Privacy Policy
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Our Commitment to Your Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            At PWAffiliatePro, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you visit our website or interact with our services.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Information Collection and Use
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Personal Information:</strong> We may collect personal
                information, such as your name, email address, phone number,
                and postal address, when you voluntarily submit it to us
                through our website or communication channels.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect certain
                information about your device and how you interact with our
                website, such as your IP address, browser type, pages visited,
                and timestamps.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Use of Information
            </h3>
            <p className="mt-2">
              We may use the information we collect to provide, maintain, and
              improve our services, respond to your inquiries, process
              transactions, and communicate with you about promotions, offers,
              and updates. We may also use cookies and similar technologies to
              personalize your experience, analyze trends, and gather
              demographic information about our user base.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Data Sharing and Disclosure
            </h3>
            <p className="mt-2">
              We do not sell, trade, or rent your personal information to third
              parties without your consent. However, we may share your
              information with trusted service providers who assist us in
              operating our website, conducting our business, or servicing you.
              We may also disclose your information in response to legal
              requirements, enforce our policies, protect our rights or safety,
              or as otherwise required by law.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Data Security
            </h3>
            <p className="mt-2">
              We take reasonable measures to protect your personal information
              from unauthorized access, use, alteration, or disclosure.
              However, please be aware that no method of transmission over the
              internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Your Choices
            </h3>
            <p className="mt-2">
              You have the right to access, update, or delete your personal
              information at any time. You may also opt-out of receiving
              promotional communications from us by following the instructions
              provided in such communications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Changes to This Policy
            </h3>
            <p className="mt-2">
              We reserve the right to update or revise this Privacy Policy at
              any time. Any changes will be posted on this page, and the
              effective date will be updated accordingly. We encourage you to
              review this Privacy Policy periodically for any updates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Contact Us
            </h3>
            <p className="mt-2">
              If you have any questions or concerns about our Privacy Policy or
              the handling of your personal information, please refer to the official Physics Wallah website.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
