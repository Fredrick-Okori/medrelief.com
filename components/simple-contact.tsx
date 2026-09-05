"use client"

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function SimpleContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [bookingRef, setBookingRef] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentProof, setPaymentProof] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v as string));

    try {
      const result = await fetch('/api/contact-book', {
        method: 'POST',
        body: fd,
      });
      const data = await result.json();

      if (data.success && data.reference) {
        setBookingRef(data.reference);
        setStep('payment');
      } else {
        setError(data.message || 'Booking failed');
      }
    } catch (err) {
      setError('Network error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentProof) {
      setError('Please select payment proof');
      return;
    }

    const fd = new FormData();
    fd.append('paymentReference', bookingRef);
    fd.append('paymentProof', paymentProof);

    setLoading(true);
    setError('');

    try {
      const result = await fetch('/api/payment-upload', {
        method: 'POST',
        body: fd,
      });
      const data = await result.json();

      if (data.success) {
        setStep('success');
      } else {
        setError(data.message || 'Upload failed');
      }
    } catch (err) {
      setError('Network error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'success') {
    return (
      <section className="w-full py-20 md:py-32 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Payment proof received. Reference: <strong className="font-mono text-emerald-700">{bookingRef}</strong>
          </p>
          <Link href="/admin/patients">
            <Button size="lg" className="w-full max-w-md mx-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              View Status
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3">
              <motion.p
                className="text-sm font-semibold text-blue-600 uppercase tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Get In Touch
              </motion.p>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {step === 'details' ? 'Ready to Start Your Health Journey?' : 'Complete Your Booking'}
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {step === 'details' ? 'Contact us today and let us know how we can support your healthcare needs.' : 'Upload payment proof to finalize.'}
              </motion.p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Phone', content: '+256 784 040 350', href: 'tel:+256784040350' },
                { icon: MessageCircle, title: 'WhatsApp', content: '+256 784 040 350', href: 'https://wa.me/256784040350' },
                { icon: Mail, title: 'Email', content: 'medrelief325@gmail.com', href: 'mailto:medrelief325@gmail.com' },
                { icon: MapPin, title: 'Available', content: 'Serving nationwide • 24/7 Support' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('https://wa.me') ? '_blank' : undefined}
                        rel={item.href.startsWith('https://wa.me') ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 space-y-6 shadow-xl"
          >
            {error && (
              <motion.div
                className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {error}
              </motion.div>
            )}

            {/* Step 1: Booking Details */}
            {step === 'details' && (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900 block mb-1">First Name *</label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 block mb-1">Last Name *</label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900 block mb-1">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 block mb-1">Phone *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+256 700 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-1">Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select service</option>
                    <option value="pedicare">Pedicare for Complex Children</option>
                    <option value="gericare">GeriCare - Elderly Home Care</option>
                    <option value="travelshield">TravelShield Medicare</option>
                    <option value="teleconsult">General Teleconsultation</option>
                    <option value="chronocare">ChronoCare Navigation</option>
                    <option value="physiotherapy">Home Physiotherapy</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                    placeholder="Tell us about your needs..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Creating Booking...
                    </>
                  ) : (
                    'Continue to Payment'
                  )}
                </Button>
              </form>
            )}

            {/* Step 2: Payment */}
            {step === 'payment' && (
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-400">
                  <h3 className="font-bold text-lg text-emerald-800 mb-2">Booking Reference</h3>
                  <p className="font-mono text-2xl font-bold text-emerald-700 tracking-wider">{bookingRef}</p>
                  <p className="text-sm text-emerald-600 mt-1">Use this reference for payment</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 block mb-1">Payment Proof * (JPG/PNG/PDF)</label>
                  <Input
                    id="paymentProof"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentProof(e.target.files?.[0] || null)}
                    required
                  />
                  <p className="text-xs text-gray-500">Make sure reference is visible in screenshot</p>
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep('details')} className="flex-1">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>
                  <Button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 px-6 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
