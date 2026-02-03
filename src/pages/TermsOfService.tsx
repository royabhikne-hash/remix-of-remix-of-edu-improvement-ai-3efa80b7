import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Study Buddy AI</title>
        <meta name="description" content="Terms and Conditions for Study Buddy AI - Read our terms of service before using the application." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl mb-4">Terms and Conditions</h1>
              <p className="text-muted-foreground mb-8">Last updated: 03/02/2026</p>

              <div className="prose prose-lg max-w-none space-y-8">
                <p className="text-lg text-muted-foreground">
                  By using Study Buddy AI, you agree to the following Terms and Conditions.
                </p>

                <section>
                  <h2 className="font-heading text-2xl mb-4">1. Purpose of the App</h2>
                  <p className="text-muted-foreground">
                    Study Buddy AI is an AI-powered study companion designed to help school students learn according to their class, board, and syllabus.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">2. User Responsibilities</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Students must use the app only for educational purposes</li>
                    <li>Users must not misuse the AI or attempt to bypass syllabus restrictions</li>
                    <li>Parents and schools are responsible for supervising student usage</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">3. Educational Disclaimer</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Study Buddy AI is not a replacement for teachers or schools</li>
                    <li>The app provides learning assistance, not guaranteed academic results</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">4. AI Limitations</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>AI responses are generated based on programmed rules and data</li>
                    <li>While we strive for accuracy, errors may occur</li>
                    <li>Users should verify important academic decisions with teachers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">5. Account and Access</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Users are responsible for maintaining the confidentiality of their login details</li>
                    <li>We reserve the right to suspend accounts for misuse or policy violations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">6. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content, software, and branding related to Study Buddy AI belong to us. Users may not copy, distribute, or misuse any part of the app.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground mb-4">We are not liable for:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Academic outcomes</li>
                    <li>Misuse of the app</li>
                    <li>Technical interruptions or data loss</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">8. Termination</h2>
                  <p className="text-muted-foreground">
                    We may suspend or terminate access if these Terms are violated.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">9. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms are governed by the laws of India.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">10. Contact Information</h2>
                  <p className="text-muted-foreground">
                    For questions regarding these Terms, contact:{" "}
                    <a href="mailto:royabhikne@gmail.com" className="text-primary hover:underline">
                      royabhikne@gmail.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
