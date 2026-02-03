import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Study Buddy AI</title>
        <meta name="description" content="Privacy Policy for Study Buddy AI - Learn how we collect, use, and protect your information." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: 03/02/2026</p>

              <div className="prose prose-lg max-w-none space-y-8">
                <p className="text-lg text-muted-foreground">
                  Study Buddy AI ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect information when students, parents, teachers, or schools use our application.
                </p>

                <section>
                  <h2 className="font-heading text-2xl mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">We may collect the following information:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Student profile data:</strong> class, board, subject, and selected chapters</li>
                    <li><strong>Usage data:</strong> questions asked, time spent, progress, and performance metrics</li>
                    <li><strong>Device data:</strong> basic technical information such as device type and browser</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We do not collect sensitive personal data such as Aadhaar number, precise location, or financial details from students.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">2. How We Use Information</h2>
                  <p className="text-muted-foreground mb-4">Collected information is used to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Personalize learning based on class, board, and syllabus</li>
                    <li>Track academic progress and generate reports</li>
                    <li>Improve the quality and accuracy of our AI system</li>
                    <li>Support schools and parents with learning insights</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 font-medium">
                    Student data is never used to train public AI models.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">3. Data Sharing</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>We do not sell student data to third parties</li>
                    <li>Data may be shared only with authorized school administrators or parents for academic purposes</li>
                    <li>Data may be shared if required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground">
                    We use reasonable technical and organizational measures to protect data from unauthorized access, loss, or misuse. However, no online system is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">5. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Study Buddy AI is designed for school students. Schools or parents must provide consent before student use. We comply with applicable child data protection regulations.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground mb-4">Parents and schools may request:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access to student data</li>
                    <li>Correction of inaccurate data</li>
                    <li>Deletion of student data upon request</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">7. Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. Continued use of the app means acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl mb-4">8. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, contact us at:{" "}
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

export default PrivacyPolicy;
