import React, { useEffect } from 'react';
import { Shield, Eye, Lock, Camera, AlertCircle } from 'lucide-react';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Kasi's Chicken Carshalton";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the Privacy Policy for Kasi\'s Chicken in Carshalton SM5. Learn how we collect, store, and protect customer data for orders, CCTV, and dietary needs.');
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page page-with-nav-offset legal-page">
      <div className="legal-header bg-dark text-white">
        <div className="container">
          <div className="legal-header-content">
            <span className="legal-badge"><Shield size={16} /> UK Restaurant Privacy Standards</span>
            <h1>Privacy Policy</h1>
            <p className="legal-updated">Last updated: June 1, 2026</p>
          </div>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="legal-grid">
            <div className="legal-nav-panel">
              <div className="legal-nav-sticky">
                <h3>Table of Contents</h3>
                <ul>
                  <li><a href="#controller">1. Data Controller</a></li>
                  <li><a href="#information-collect">2. Information We Collect</a></li>
                  <li><a href="#allergen-info">3. Special Category Data (Allergens)</a></li>
                  <li><a href="#cctv">4. CCTV Security Operations</a></li>
                  <li><a href="#how-we-use">5. How We Use Your Data</a></li>
                  <li><a href="#retention">6. Data Retention Periods</a></li>
                  <li><a href="#sharing">7. Data Sharing & Third Parties</a></li>
                  <li><a href="#your-rights">8. Your Rights & ICO Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="legal-content-panel">
              <div className="legal-section-block" id="controller">
                <h2>1. Data Controller</h2>
                <p>
                  Kasi's Chicken, located at <strong>364 Middleton Road, Carshalton, SM5 1HA</strong>, is the "Data Controller" of your personal information. This means we are responsible for deciding how we hold and use personal data about you. We are committed to protecting the privacy of our restaurant customers and online visitors in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
              </div>

              <div className="legal-section-block" id="information-collect">
                <h2>2. Information We Collect</h2>
                <p>
                  We collect personal data to provide our food products, process payments, and ensure physical safety at our premises. This includes:
                </p>
                <ul>
                  <li><strong>Order & Contact Details:</strong> Your name, phone numbers, delivery address, and food order contents when you place an order by phone, in-person, or via third-party delivery applications (e.g., Just Eat, Uber Eats, Deliveroo).</li>
                  <li><strong>Payment Transactions:</strong> We process credit/debit card payments securely at our premises. All card transactions conform strictly to PCI-DSS standards. We do not store full card numbers or security codes on our local systems.</li>
                  <li><strong>Technical Usage:</strong> Your IP address, browser type, device information, and site browsing statistics (collected anonymously or with your explicit consent via analytics cookies).</li>
                </ul>
              </div>

              <div className="legal-section-block" id="allergen-info">
                <h2>3. Special Category Data (Allergens)</h2>
                <div className="legal-nav-box" style={{ borderLeft: '4px solid var(--red)', marginBottom: '16px', background: '#fff5f5' }}>
                  <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: 'var(--red)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertCircle size={16} /> Important Food Safety Disclosure
                  </p>
                  <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#555', lineHeight: '1.4' }}>
                    Allergen information is classified as health data (Special Category Data) under UK GDPR. We handle this data with strict confidentiality and process it solely to prevent food safety incidents.
                  </p>
                </div>
                <p>
                  When you place an order, you may choose to inform us of specific food allergies, intolerances, or religious dietary requirements to ensure your meal is prepared safely.
                </p>
                <p>
                  We process this health data under <strong>Article 9(2)(g) of the UK GDPR</strong> (reasons of substantial public interest in relation to food safety regulations) or with your explicit consent. This data is only communicated to kitchen staff preparing your specific order and is discarded immediately after the order has been completed. It is not stored in a persistent database.
                </p>
              </div>

              <div className="legal-section-block" id="cctv">
                <h2>4. CCTV Security Operations</h2>
                <p>
                  We operate a Closed-Circuit Television (CCTV) system at our restaurant premises at 364 Middleton Road, Carshalton.
                </p>
                <p>
                  <strong>Purpose of CCTV:</strong> We use CCTV cameras to maintain safety, protect the security of our staff, visitors, and property, and prevent and detect crime. We process this visual data under the lawful basis of our <strong>Legitimate Interests</strong> (Article 6(1)(f) UK GDPR).
                </p>
                <p>
                  CCTV cameras are positioned clearly with warning signage. Footage is recorded continuously, and visual access is limited strictly to restaurant management.
                </p>
              </div>

              <div className="legal-section-block" id="how-we-use">
                <h2>5. How We Use Your Data</h2>
                <p>
                  We process customer data for the following lawful bases and purposes:
                </p>
                <ul>
                  <li><strong>Contractual Performance:</strong> To fulfill food preparation and delivery agreements (Article 6(1)(b) UK GDPR).</li>
                  <li><strong>Legal Obligation:</strong> To maintain transaction ledgers for HMRC tax compliance (Article 6(1)(c) UK GDPR).</li>
                  <li><strong>Legitimate Interests:</strong> To secure our premises via CCTV, handle customer service issues, and improve our website performance (Article 6(1)(f) UK GDPR).</li>
                </ul>
              </div>

              <div className="legal-section-block" id="retention">
                <h2>6. Data Retention Periods</h2>
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes we collected it for:
                </p>
                <ul>
                  <li><strong>Financial & Transaction Records:</strong> In compliance with UK tax laws (HMRC regulations), we retain transaction invoices and order histories for a period of <strong>6 years</strong> plus the current financial year.</li>
                  <li><strong>CCTV Footage:</strong> Security recordings are stored securely and automatically overwritten/purged after a maximum of <strong>30 days</strong>, unless required for an active police investigation or insurance claim.</li>
                  <li><strong>Customer Contact Details (Inquiries):</strong> Deleted or anonymized within <strong>6 months</strong> after resolving the inquiry.</li>
                  <li><strong>Allergen Records:</strong> Discarded immediately after order fulfillment.</li>
                </ul>
              </div>

              <div className="legal-section-block" id="sharing">
                <h2>7. Data Sharing & Third Parties</h2>
                <p>
                  We do not sell or lease customer information. We only share personal data with trusted partners to facilitate order operations:
                </p>
                <ul>
                  <li><strong>Delivery Staff:</strong> Direct delivery drivers who require your name, phone number, and address to drop off your order.</li>
                  <li><strong>Integrated Platforms:</strong> Third-party food aggregators (like Just Eat) who process the initial order placement.</li>
                  <li><strong>Public Authorities:</strong> We will share CCTV footage or order documentation with the Police, Environmental Health officers, or other UK regulatory bodies only when legally required.</li>
                </ul>
              </div>

              <div className="legal-section-block" id="your-rights">
                <h2>8. Your Rights & ICO Contact</h2>
                <p>
                  Under the UK GDPR, you have rights regarding your personal data, including the right to access (Subject Access Request), correct, or request deletion of data we hold.
                </p>
                <p>
                  To exercise any of your rights or ask questions, please contact us at <a href="mailto:privacy@kasischicken.co.uk">privacy@kasischicken.co.uk</a>.
                </p>
                <p>
                  You also have the right to lodge a complaint at any time with the UK supervisory authority for data protection:
                </p>
                <p style={{ paddingLeft: '16px', borderLeft: '3px solid #ccc' }}>
                  <strong>Information Commissioner's Office (ICO)</strong><br />
                  Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF<br />
                  Helpline: 0303 123 1113 | Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">https://ico.org.uk</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
