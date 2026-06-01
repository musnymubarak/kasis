import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Shield, Settings, X, Check, ArrowRight } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent has already been given
    const storedConsent = localStorage.getItem('kasis_cookie_consent');
    if (storedConsent) {
      try {
        const parsed = JSON.parse(storedConsent);
        setPreferences(parsed);
        applyCookieConsent(parsed);
      } catch (e) {
        // Fallback if parsing fails
        setShowBanner(true);
      }
    } else {
      // Delay showing the banner slightly for a better UX transition
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Listen for custom event to reopen settings
    const handleOpenSettings = () => {
      const storedConsent = localStorage.getItem('kasis_cookie_consent');
      if (storedConsent) {
        try {
          setPreferences(JSON.parse(storedConsent));
        } catch (e) {}
      }
      setShowModal(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => {
      window.removeEventListener('open-cookie-settings', handleOpenSettings);
    };
  }, []);

  const applyCookieConsent = (consent) => {
    // Save consent decisions
    localStorage.setItem('kasis_cookie_consent', JSON.stringify(consent));
    
    // Set custom global flag or trigger integrations if necessary
    window.kasisCookieConsent = consent;

    // TODO(security): Trigger analytical or marketing script tags loading based on consent
    if (consent.analytics) {
      console.log('Analytics cookies enabled by user consent.');
      // Initialize analytics libraries (e.g. Google Analytics) here
    } else {
      console.log('Analytics cookies disabled.');
    }

    if (consent.marketing) {
      console.log('Marketing cookies enabled by user consent.');
      // Initialize marketing tracking pixels (e.g. Facebook Pixel) here
    } else {
      console.log('Marketing cookies disabled.');
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    applyCookieConsent(allAccepted);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    const allRejected = { necessary: true, analytics: false, marketing: false };
    setPreferences(allRejected);
    applyCookieConsent(allRejected);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    applyCookieConsent(preferences);
    setShowBanner(false);
    setShowModal(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return; // Cannot toggle necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && !showModal && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="cookie-banner"
          >
            <div className="cookie-banner-container">
              <div className="cookie-banner-icon">
                <Shield size={24} className="accent-color" />
              </div>
              <div className="cookie-banner-text">
                <h3>We Value Your Privacy</h3>
                <p>
                  We use cookies to improve your experience on our website, analyze our traffic, and serve delicious offers. 
                  By clicking "Accept All", you consent to our use of all cookies. You can manage your preferences or 
                  reject non-essential cookies at any time. Read our <Link to="/cookie-policy">Cookie Policy</Link> to learn more.
                </p>
              </div>
              <div className="cookie-banner-actions">
                <button onClick={handleRejectAll} className="btn-cookie btn-cookie-outline" id="btn-cookie-reject">
                  Reject All
                </button>
                <button onClick={() => setShowModal(true)} className="btn-cookie btn-cookie-text" id="btn-cookie-manage">
                  <Settings size={16} /> Customize
                </button>
                <button onClick={handleAcceptAll} className="btn-cookie btn-cookie-primary" id="btn-cookie-accept">
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <div className="cookie-modal-overlay">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="cookie-modal"
            >
              <div className="cookie-modal-header">
                <div className="cookie-modal-title">
                  <Shield size={24} className="accent-color" />
                  <h2>Cookie Preferences</h2>
                </div>
                <button onClick={() => setShowModal(false)} className="cookie-modal-close" aria-label="Close settings">
                  <X size={20} />
                </button>
              </div>

              <div className="cookie-modal-body">
                <p className="cookie-modal-intro">
                  Under UK regulations, you have control over which non-essential cookies we set. Please choose your preferences below. Necessary cookies are required for basic site operations.
                </p>

                <div className="cookie-preference-item">
                  <div className="cookie-preference-info">
                    <div className="cookie-preference-header">
                      <h4>Strictly Necessary Cookies</h4>
                      <span className="cookie-badge cookie-badge-required">Always Active</span>
                    </div>
                    <p>
                      These cookies are essential for the website to function securely and cannot be disabled in our systems. They are typically set in response to actions made by you, such as setting your privacy preferences or logging in.
                    </p>
                  </div>
                  <div className="cookie-toggle-container">
                    <label className="cookie-toggle-switch disabled">
                      <input type="checkbox" checked disabled readOnly />
                      <span className="cookie-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="cookie-preference-item">
                  <div className="cookie-preference-info">
                    <div className="cookie-preference-header">
                      <h4>Performance & Analytics Cookies</h4>
                      <span className="cookie-badge">Opt-In Required</span>
                    </div>
                    <p>
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most popular and see how visitors move around the site.
                    </p>
                  </div>
                  <div className="cookie-toggle-container">
                    <label className="cookie-toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={preferences.analytics} 
                        onChange={() => togglePreference('analytics')}
                      />
                      <span className="cookie-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="cookie-preference-item">
                  <div className="cookie-preference-info">
                    <div className="cookie-preference-header">
                      <h4>Targeting & Marketing Cookies</h4>
                      <span className="cookie-badge">Opt-In Required</span>
                    </div>
                    <p>
                      These cookies may be set through our site to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but are based on uniquely identifying your browser and device.
                    </p>
                  </div>
                  <div className="cookie-toggle-container">
                    <label className="cookie-toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={preferences.marketing} 
                        onChange={() => togglePreference('marketing')}
                      />
                      <span className="cookie-slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="cookie-modal-footer">
                <button onClick={handleRejectAll} className="btn-cookie btn-cookie-outline" id="btn-modal-reject">
                  Reject All
                </button>
                <div className="cookie-modal-footer-right">
                  <button onClick={handleSavePreferences} className="btn-cookie btn-cookie-primary" id="btn-modal-save">
                    <Check size={16} /> Save Choices
                  </button>
                  <button onClick={handleAcceptAll} className="btn-cookie btn-cookie-gold" id="btn-modal-accept-all">
                    Accept All
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
