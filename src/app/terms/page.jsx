import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Leulseged',
  description: 'Terms governing the use of this portfolio website.',
};

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing this portfolio website, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Intellectual Property</h2>
            <p>
              All content, including projects, designs, and text, are my intellectual property unless otherwise noted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. User Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc pl-6">
              <li>Use content for commercial purposes without permission</li>
              <li>Attempt to hack or disrupt service</li>
              <li>Misrepresent your identity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
            <p>
              I shall not be liable for any damages resulting from the use or inability to use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Governing Law</h2>
            <p>
              These terms shall be governed by the laws of [Your Country/State].
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
