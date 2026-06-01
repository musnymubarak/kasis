import React, { useEffect } from 'react';
import { Shield, Clock, Eye, Trash2 } from 'lucide-react';

const CookiePolicyPage = () => {
  useEffect(() => {
    document.title = "Cookie Policy | Kasi's Chicken Carshalton";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the Cookie Policy for Kasi\'s Chicken in Carshalton SM5. Learn how we use cookies to provide a secure and customized browsing experience.');
    }
    window.scrollTo(0, 0);
  }, []);

  const openSettings = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-cookie-settings'));
  };

  return (
    <div className="page page-with-nav-offset legal-page">
      <div className="legal-header bg-dark text-white">
        <div className="container">
          <div className="legal-header-content">
            <span className="legal-badge"><Shield size={16} /> UK Policy Compliant</span>
            <h1>Cookie Policy</h1>
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
                  <li><a href="#what-are-cookies">1. What Are Cookies?</a></li>
                  <li><a href="#how-we-use">2. How We Use Cookies</a></li>
                  <li><a href="#types-we-use">3. Types of Cookies We Use</a></li>
                  <li><a href="#managing-consent">4. Managing Your Consent</a></li>
                  <li><a href="#browser-control">5. Browser Controls & Deletion</a></li>
                  <li><a href="#contact-us">6. Contact Information</a></li>
                </ul>
                <div className="legal-nav-box">
                  <h4>Manage Consent</h4>
                  <p>Would you like to change your cookie settings right now?</p>
                  <button onClick={openSettings} className="btn btn-primary btn-small w-full justify-center">
                    Change Preferences
                  </button>
                </div>
              </div>
            </div>

            <div className="legal-content-panel">
              <div className="legal-section-block" id="what-are-cookies">
                <h2>1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your computer, tablet, or smartphone when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information to the owners of the site.
                </p>
                <p>
                  A cookie contains a unique identifier that helps websites recognize your browser when you return or navigate between pages. Cookies can be "session cookies" (which are deleted when you close your browser) or "persistent cookies" (which remain on your device for a pre-set duration).
                </p>
              </div>

              <div className="legal-section-block" id="how-we-use">
                <h2>2. How We Use Cookies</h2>
                <p>
                  At Kasi's Chicken, we value your trust and privacy. We use cookies on <strong>kasischicken.co.uk</strong> to provide essential functionalities, evaluate site performance, and display promotions.
                </p>
                <p>
                  In compliance with UK regulations (UK GDPR and PECR), we do not set any non-essential cookies (such as analytics or marketing cookies) unless you have actively given us your opt-in consent through our cookie banner or preferences panel.
                </p>
              </div>

              <div className="legal-section-block" id="types-we-use">
                <h2>3. Types of Cookies We Use</h2>
                <p>
                  Below is a detailed list of the categories of cookies we use on our website:
                </p>

                <div className="legal-cookie-table-container">
                  <table className="legal-cookie-table">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Purpose</th>
                        <th>Duration</th>
                        <th>Default Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-semibold">Strictly Necessary</td>
                        <td>
                          Required for security, user preferences, and page load. For example, remembering your cookie consent selections.
                        </td>
                        <td>Persistent (1 year)</td>
                        <td><span className="badge-status success">Active</span></td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Performance & Analytics</td>
                        <td>
                          Collect anonymous data about how visitors interact with our website, helping us find out which meals and pages are the most popular.
                        </td>
                        <td>Varies (up to 2 years)</td>
                        <td><span className="badge-status warning">Opt-in Required</span></td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Targeting & Marketing</td>
                        <td>
                          Used to track ad conversions and present you with targeted advertisements or special deals based on your browsing patterns.
                        </td>
                        <td>Varies (up to 1 year)</td>
                        <td><span className="badge-status warning">Opt-in Required</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="legal-section-block" id="managing-consent">
                <h2>4. Managing Your Consent</h2>
                <p>
                  When you first visit our website, a cookie banner is displayed requesting your consent. You have the right to accept all, reject all, or customize your selection.
                </p>
                <p>
                  You can change or withdraw your consent at any time by clicking the <a href="#" onClick={openSettings}>Cookie Settings</a> link in our footer, or by using the button on the left menu. Withdrawing consent will prevent us from setting new analytical or marketing cookies, though it will not delete cookies already set (which must be cleared via your browser).
                </p>
              </div>

              <div className="legal-section-block" id="browser-control">
                <h2>5. Browser Controls & Deletion</h2>
                <p>
                  In addition to our custom preferences panel, most web browsers allow you to control cookies through their settings. You can configure your browser to block all cookies or to delete existing ones.
                </p>
                <div className="legal-browser-guides">
                  <div className="browser-guide-item">
                    <h4>Chrome / Edge</h4>
                    <p>Go to Settings &gt; Privacy and Security &gt; Cookies and other site data.</p>
                  </div>
                  <div className="browser-guide-item">
                    <h4>Safari (iOS & macOS)</h4>
                    <p>Go to Settings &gt; Safari &gt; Privacy &amp; Security &gt; Block All Cookies.</p>
                  </div>
                  <div className="browser-guide-item">
                    <h4>Firefox</h4>
                    <p>Go to Options &gt; Privacy &amp; Security &gt; Cookies and Site Data.</p>
                  </div>
                </div>
              </div>

              <div className="legal-section-block" id="contact-us">
                <h2>6. Contact Information</h2>
                <p>
                  If you have any questions about our Cookie Policy or how we handle data on our website, please feel free to reach out to us:
                </p>
                <ul className="legal-contact-details">
                  <li><strong>Address:</strong> Kasi's Chicken, 364 Middleton Road, Carshalton, SM5 1HA</li>
                  <li><strong>Phone:</strong> 07909 045300 / 020 8058 6656</li>
                  <li><strong>Email:</strong> privacy@kasischicken.co.uk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
