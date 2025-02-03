import { Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="mt-16">
      {/* Header with social icons */}
      <header className="container max-w-7xl mx-auto px-4 py-4 flex justify-end gap-4">
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="YouTube"
        >
          <Youtube className="h-5 w-5" />
        </a>
      </header>

      {/* Legal content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="prose prose-sm prose-gray max-w-none">
          <p className="text-sm text-gray-600 leading-relaxed">
            Some services provided on and the disclosures services are offered
            by Composer Technologies LLC, a broker dealer registered with
            FINRA/SIPC. Composer Structured LLC d/b/a Composer Technologies Inc.
            are separate but affiliated companies. Accounts are carried and
            securities execution, clearance and settlement services are provided
            by Apex Clearing Corporation. SIPC membership includes the claims
            and interests of FINRA/SIPC. Apex Securities and the
            Composer-branded technology platform are separate but affiliated
            entities of Composer Technologies Inc. Composer Technologies Inc.
            and Apex Securities are not affiliated with Composer Structured LLC.
            Please read the Form CRS and Disclosure for more information.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mt-6">
            With any investment, your capital is at risk. The value of your
            portfolio with Composer can go down as well as up. Past performance
            is no guarantee of future results. By using the website, you accept
            our Terms of Service, Privacy Policy, and Payment Agreement.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mt-6">
            Keep in mind investing involves risk. Composer may be disrupted or
            impaired and any recommendations you follow to staff or as a
            modification of an idea by buy any means. Past performance is no
            guarantee of future results.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mt-6">
            Claims included here represent risk in investment strategy and past
            performance should likely result in similar results in the future
            and does not include trading costs or platform related costs and
            other factors. Any returns should be discounted from an individual
            risk tolerance to risk.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mt-6">
            Composer Securities does not provide tax advice. This material is
            for informational purposes only and is not intended to be
            substituted for consultation with a qualified tax professional
            before making any investment decisions.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mt-6">
            Composer Securities is a member of SIPC, which protects securities
            customers of its members up to $500,000 (including $250,000 for
            claims for cash). Explanatory brochure available upon request at
            www.sipc.org. SIPC does not protect against market losses.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mt-6">
            © 2025 All rights reserved
          </p>
        </div>
      </main>
    </div>
  );
}
