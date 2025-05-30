import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Leulseged',
  description: 'Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, and usage data when you:
            </p>
            <ul className="list-disc pl-6">
              <li>Submit forms on our website</li>
              <li>Contact us through provided channels</li>
              <li>Use interactive features of the portfolio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p>
              The information we collect may be used to:
            </p>
            <ul className="list-disc pl-6">
              <li>Respond to your inquiries</li>
              <li>Improve our services</li>
              <li>Analyze website usage</li>
              <li>Send periodic emails (if you opt-in)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Data Protection</h2>
            <p>
              We implement security measures to maintain the safety of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
            <p>
              We use Google Analytics to analyze traffic. You can opt-out through Google's Ads Settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Your Consent</h2>
            <p>
              By using our site, you consent to our privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Changes to This Policy</h2>
            <p>
              Updates will be posted on this page. Policy last modified on {new Date().toLocaleDateString()}.
            </p>
          </section>

          <div className="pt-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
