import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <div id="iletisim" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bitcount text-4xl tracking-tight sm:text-5xl">BİZE ULAŞIN</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Her türlü soru, öneri ve geri bildiriminiz için buradayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* İletişim bilgileri */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">İletişim Bilgileri</h3>

            <div className="space-y-6 text-lg">
              <p className="flex items-start">
                <span className="text-amber-500 mt-1 mr-4">📍</span>
                <span className="text-gray-600">
                  <strong>Adres:</strong> Kordonboyu, Atatürk Cd., 35220 Konak/İzmir
                </span>
              </p>
              <p className="flex items-center">
                <span className="text-amber-500 mr-4">📞</span>
                <span className="text-gray-600">
                  <strong>Telefon:</strong> +90 000 00 00
                </span>
              </p>
              <p className="flex items-center">
                <span className="text-amber-500 mr-4">📧</span>
                <span className="text-gray-600">
                  <strong>E-posta:</strong> bilgi@cafee.com
                </span>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Hafta İçi:</strong> 08:00 - 23:00</p>
                <p><strong>Hafta Sonu:</strong> 09:00 - 00:00</p>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sosyal Medya</h3>
              <div className="flex space-x-6">
                <div className="flex space-x-6">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <FaFacebook size={28} />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <FaTwitter size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Harita */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.080724057703!2d27.20285217632587!3d38.37025397763497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b961f364ed1fc5%3A0x3a05acfdbae429ca!2sDokuz%20Eyl%C3%BCl%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1759487494398!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafee Harita"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
