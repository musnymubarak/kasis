import React, { useEffect } from 'react';
import { Shield, HelpCircle, FileText, AlertTriangle } from 'lucide-react';

const TermsPage = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Kasi's Chicken Carshalton";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the Terms & Conditions for Kasi\'s Chicken in Carshalton SM5. Details on ordering, payments, refunds, and food safety.');
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page page-with-nav-offset legal-page">
      <div className="legal-header bg-dark text-white">
        <div className="container">
          <div className="legal-header-content">
            <span className="legal-badge"><Shield size={16} /> UK Consumer Rights Compliant</span>
            <h1>Terms &amp; Conditions</h1>
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
                  <li><a href="#introduction">1. Introduction</a></li>
                  <li><a href="#contract-formation">2. Contract Formation</a></li>
                  <li><a href="#prices-payment">3. Prices, VAT &amp; Payment</a></li>
                  <li><a href="#allergens">4. Allergen Disclaimers</a></li>
                  <li><a href="#cancellations-refunds">5. Cancellations &amp; Refunds</a></li>
                  <li><a href="#delivery-collection">6. Collection &amp; Delivery</a></li>
                  <li><a href="#liability">7. Limitation of Liability</a></li>
                  <li><a href="#governing-law">8. Governing Law</a></li>
                </ul>
              </div>
            </div>

            <div className="legal-content-panel">
              <div className="legal-section-block" id="introduction">
                <h2>1. Introduction</h2>
                <p>
                  These Terms and Conditions govern the use of our website <strong>kasischicken.co.uk</strong> and any orders placed in-store, by telephone, or online for food and beverages from Kasi's Chicken (located at 364 Middleton Road, Carshalton, SM5 1HA).
                </p>
                <p>
                  By accessing our website or placing an order with us, you agree to be bound by these Terms and Conditions. Please read them carefully before ordering.
                </p>
              </div>

              <div className="legal-section-block" id="contract-formation">
                <h2>2. Contract Formation</h2>
                <p>
                  No contract for the supply of any food or drink exists between you and Kasi's Chicken until we have received and accepted your order. 
                </p>
                <p>
                  For telephone and collection orders, the contract is formed when we verbally confirm acceptance of your order over the phone or in person. For third-party platforms (such as Just Eat, Deliveroo, or Uber Eats), the contract is formed when the platform transmits our acceptance confirmation to you. We reserve the right to refuse service or reject orders at our discretion.
                </p>
              </div>

              <div className="legal-section-block" id="prices-payment">
                <h2>3. Prices, VAT &amp; Payment</h2>
                <p>
                  All menu prices listed on our website and in-store are in Pounds Sterling (£) and are inclusive of Value Added Tax (VAT) at the prevailing UK rate. 
                </p>
                <p>
                  Prices are subject to change without prior notice, but changes will not affect orders that we have already accepted. Payment must be made in full at the time of placing an order (if ordering via delivery platforms) or upon collection/delivery (if paying cash or card directly to us).
                </p>
              </div>

              <div className="legal-section-block" id="allergens">
                <h2>4. Allergen Disclaimers</h2>
                <div className="legal-nav-box" style={{ borderLeft: '4px solid var(--red)', marginBottom: '16px', background: '#fff5f5' }}>
                  <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: 'var(--red)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertTriangle size={16} /> Important Food Information Regulations Notice
                  </p>
                  <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#555', lineHeight: '1.4' }}>
                    In accordance with the UK Food Information Regulations, we display key allergen groupings. However, cross-contamination is always possible in a busy kitchen environment.
                  </p>
                </div>
                <p>
                  If you have a food allergy, intolerance, or specific dietary requirement, you <strong>must</strong> notify a member of our team by telephone at <strong>07909 045300</strong> before placing your order. Do not place an order containing allergens online without verbal verification from us. Kasi's Chicken cannot assume liability for adverse reactions if we have not been explicitly notified and consulted.
                </p>
              </div>

              <div className="legal-section-block" id="cancellations-refunds">
                <h2>5. Cancellations &amp; Refunds</h2>
                <p>
                  Under the **UK Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013**, consumers have a statutory right to cancel distance contracts within 14 days (the "cooling-off period").
                </p>
                <p style={{ fontWeight: '600', color: 'var(--red)' }}>
                  Please Note: This statutory right to cancel does NOT apply to contracts for the supply of food and beverages which are prepared to order or are liable to deteriorate rapidly.
                </p>
                <p>
                  Consequently, once your order has been accepted and preparation has commenced in our kitchen, you do not have a right to cancel or obtain a refund. If you need to modify or cancel an order, you must call us immediately. We will accommodate adjustments only if preparation has not yet started.
                </p>
              </div>

              <div className="legal-section-block" id="delivery-collection">
                <h2>6. Collection &amp; Delivery</h2>
                <p>
                  When placing an order for collection, we will provide an estimated time. While we strive to meet this target, prep times may vary during peak hours. You must collect your order within 20 minutes of the scheduled time to ensure food quality and safety.
                </p>
                <p>
                  For deliveries, you must provide a correct delivery address, postal code, and contact number. If our driver cannot gain entry or contact you upon arrival, the order will be returned to the shop, and you will remain liable for the full cost of the order.
                </p>
              </div>

              <div className="legal-section-block" id="liability">
                <h2>7. Limitation of Liability</h2>
                <p>
                  Nothing in these Terms and Conditions excludes or limits our liability for death or personal injury arising from our negligence, fraudulent misrepresentation, or any other liability that cannot be excluded under English law.
                </p>
                <p>
                  Subject to this, our total liability to you in respect of all other losses arising under or in connection with any order shall not exceed the total price paid for the specific order.
                </p>
              </div>

              <div className="legal-section-block" id="governing-law">
                <h2>8. Governing Law</h2>
                <p>
                  These Terms and Conditions, your orders, and any dispute or claim arising out of or in connection with them shall be governed by, and construed in accordance with, the laws of England and Wales. 
                </p>
                <p>
                  Any legal action or proceedings arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
