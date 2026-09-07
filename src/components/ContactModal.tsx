import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const WEB3FORMS_ACCESS_KEY = "d428552a-7049-4cca-bce5-0788637aef58";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultTopic }) => {
  const [topic, setTopic] = useState(defaultTopic || 'Brand Application');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formState, setFormState] = useState({
    name: '',
    brandName: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          brand_or_organization: formState.brandName || 'N/A',
          inquiry_type: topic,
          subject: `New Bazarna Inquiry [${topic}] - ${formState.name} (${formState.brandName || 'Personal'})`,
          message: formState.message,
          from_name: 'Bazarna Website Inquiries'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121316]/75 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-[#FBF9F5] text-[#121316] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#121316]/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-[#121316] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#1CA778]/15 text-[#1CA778] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-heading text-3xl font-extrabold text-[#121316] mb-2">
              Message Received
            </h3>

            <p className="text-sm text-[#5C5E66] max-w-md mb-8 leading-relaxed">
              Thank you for connecting with Bazarna. Our curation and partnerships team will review your inquiry and reach out shortly.
            </p>

            <button
              onClick={handleClose}
              className="px-8 py-3.5 rounded-full bg-[#121316] text-[#FBF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#C85A32] transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#C85A32]" />
              <span className="tracker-tag text-[#C85A32]">GET IN TOUCH</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#121316] mb-2">
              Connect with Bazarna
            </h3>

            <p className="text-xs sm:text-sm text-[#5C5E66] mb-6">
              Accelerate your brand, explore commercial partnerships, or join our community network.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Inquiry Type Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-2">
                  Inquiry Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Brand Application', 'Retail Placement', 'Strategic Partnership', 'Volunteer Program', 'Press & Media', 'General'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        topic === t
                          ? 'bg-[#121316] text-white border-[#121316]'
                          : 'bg-white text-[#5C5E66] border-[#121316]/10 hover:border-[#C85A32]/40'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Yasmine Ali"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#121316]/15 text-xs text-[#121316] focus:outline-none focus:border-[#C85A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-1">
                    Brand / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maison Cairo"
                    value={formState.brandName}
                    onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#121316]/15 text-xs text-[#121316] focus:outline-none focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="founder@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#121316]/15 text-xs text-[#121316] focus:outline-none focus:border-[#C85A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+20 100 000 0000"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#121316]/15 text-xs text-[#121316] focus:outline-none focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your brand, concept, or collaboration idea..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#121316]/15 text-xs text-[#121316] focus:outline-none focus:border-[#C85A32] resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full bg-[#121316] text-[#FBF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#C85A32] disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
