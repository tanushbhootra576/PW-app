import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Terms and Conditions
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Please read the terms and conditions carefully.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Terms of Use</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            These Terms and Conditions govern your use of the PWAffiliatePro
            website and any services offered through the site. By accessing or
            using our website, you agree to comply with these terms. If you do
            not agree with any part of these terms, please do not use our
            website.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              1. Use of Website
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                You must be at least 10 years old to use our website and
                services. By using our website, you represent that you are at
                least 10 years old.
              </li>
              <li>
                You agree to use our website for lawful purposes only and not
                to engage in any activity that violates any local, state,
                national, or international laws or regulations.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              2. Intellectual Property
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                All content on this website, including text, graphics, logos,
                images, and software, is the property of PWAffiliatePro or its
                licensors and is protected by copyright, trademark, and other
                intellectual property laws.
              </li>
              <li>
                You may not reproduce, distribute, modify, transmit, or
                otherwise use any content from this website without the prior
                written consent of PWAffiliatePro.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              3. User Accounts
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Some features of our website may require you to create a user
                account. You are responsible for maintaining the
                confidentiality of your account credentials and for any
                activities that occur under your account.
              </li>
              <li>
                You agree to provide accurate and complete information when
                creating your account and to update your information promptly
                if it changes.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              4. Privacy
            </h3>
            <p className="mt-2">
              Your use of our website is subject to our Privacy Policy, which
              outlines how we collect, use, disclose, and safeguard your
              personal information. By using our website, you consent to the
              terms of our Privacy Policy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              5. Third-Party Links
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                Our website may contain links to third-party websites or services
                that are not owned or controlled by PWAffiliatePro. We are not
                responsible for the content, privacy policies, or practices of
                any third-party websites or services.
                </li>
                <li>
                You acknowledge and agree that PWAffiliatePro shall not be
                responsible or liable, directly or indirectly, for any damage or
                loss caused or alleged to be caused by or in connection with the
                use of or reliance on any such content, goods, or services
                available on or through any such third-party websites or services.
                </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              6. Disclaimer of Warranties
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                Our website and services are provided on an “as is” and “as
                available” basis without any warranties of any kind, either
                express or implied. We do not warrant that our website will be
                uninterrupted or error-free, or that any defects will be
                corrected.
                </li>
                <li>
                We make no representations or warranties about the accuracy,
                reliability, completeness, or timeliness of the content on our
                website or the results that may be obtained from using our
                website.
                </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              7. Limitation of Liability
            </h3>
            <p className="mt-2">
              In no event shall PWAffiliatePro, its affiliates, or their
              respective directors, officers, employees, or agents be liable to
              you or any third party for any indirect, incidental,
              consequential, special, or punitive damages, including lost
              profits, arising from your use of our website or services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              8. Governing Law
            </h3>
            <p className="mt-2">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of Patna Jurisdiction, without regard to
              its conflict of law principles.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              9. Changes to Terms
            </h3>
            <p className="mt-2">
              We reserve the right to modify or revise these Terms and
              Conditions at any time without prior notice. Any changes will be
              effective immediately upon posting on this page. Your continued
              use of our website after any such changes constitutes your
              acceptance of the new Terms and Conditions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              10. Contact Us
            </h3>
            <p className="mt-2">
              If you have any questions or concerns about these Terms and
              Conditions, please refer to the official Physics Wallah website.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
