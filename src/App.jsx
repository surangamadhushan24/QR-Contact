import { useState } from 'react';
import { Mail, MessageCircle, Download, Sparkles, CheckCircle } from 'lucide-react';

function App() {
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [qrUrl, setQrUrl] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const generateQR = () => {
    if (!whatsapp && !email) {
      alert('Please enter at least WhatsApp number or email');
      return;
    }

    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
    
    if (email) {
      vcard += `EMAIL:${email}\n`;
    }
    
    if (whatsapp) {
      const cleanNumber = whatsapp.replace(/[^\d+]/g, '');
      vcard += `TEL;TYPE=CELL:${cleanNumber}\n`;
      vcard += `URL:https://wa.me/${cleanNumber}\n`;
    }
    
    vcard += 'END:VCARD';

    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(vcard)}`;
    
    setQrUrl(qrApiUrl);
    setShowPreview(true);
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = 'contact-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const testLinks = () => {
    const cleanNumber = whatsapp.replace(/[^\d+]/g, '');
    return {
      whatsapp: `https://wa.me/${cleanNumber}`,
      email: `mailto:${email}`
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 p-4 md:p-8">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Free QR Code Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Contact QR Code Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create a professional QR code with WhatsApp and email contact info in seconds
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-10 border border-white/20 animate-slide-up">
          <div className="space-y-6 mb-8">
            {/* WhatsApp Input */}
            <div className="group">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                WhatsApp Number
              </label>
              <input
                type="text"
                placeholder="+94771234567"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all duration-300 text-lg font-medium hover:border-gray-300"
              />
              <p className="text-xs text-gray-500 mt-2 ml-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Include country code (e.g., +94 for Sri Lanka)
              </p>
            </div>

            {/* Email Input */}
            <div className="group">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                Email Address
              </label>
              <input
                type="email"
                placeholder="contact@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 text-lg font-medium hover:border-gray-300"
              />
              <p className="text-xs text-gray-500 mt-2 ml-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Works with Gmail, Outlook, and all email services
              </p>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateQR}
            className="w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white font-bold py-5 rounded-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Generate QR Code
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* QR Code Preview */}
          {showPreview && (
            <div className="mt-10 animate-fade-in-up">
              {/* QR Code Display */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center shadow-inner border-2 border-gray-200">
                <div className="inline-block p-6 bg-white rounded-2xl shadow-xl">
                  <img
                    src={qrUrl}
                    alt="QR Code"
                    className="w-80 h-80 mx-auto"
                  />
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={downloadQR}
                className="mt-6 w-full md:w-auto mx-auto flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 hover:shadow-xl transition-all duration-300 font-semibold text-lg group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download QR Code
              </button>

              {/* Test Links Section */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100">
                <p className="font-bold text-gray-900 mb-4 text-center text-lg">Test Your Links</p>
                <div className="space-y-4">
                  {/* WhatsApp Button */}
                  {whatsapp && (
                    <a
                      href={testLinks().whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-4 rounded-xl hover:bg-green-700 hover:shadow-lg transition-all duration-300 font-semibold group w-full"
                    >
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Open WhatsApp
                    </a>
                  )}
                  
                  {/* Email Options */}
                  {email && (
                    <div className="space-y-3">
                      <a
                        href={testLinks().email}
                        className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-300 font-semibold group w-full"
                      >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Open Default Email App
                      </a>
                      
                      <div className="text-center text-sm text-gray-600">or compose directly in:</div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={`https://mail.google.com/mail/?view=cm&to=${email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all duration-300 font-medium text-sm"
                        >
                          <Mail className="w-4 h-4" />
                          Gmail
                        </a>
                        
                        <a
                          href={`https://outlook.live.com/mail/0/deeplink/compose?to=${email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 font-medium text-sm"
                        >
                          <Mail className="w-4 h-4" />
                          Outlook
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-100">
                <p className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  How to Use Your QR Code
                </p>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <p>Download and print the QR code or share it digitally</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <p>When scanned, users will see your contact information</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <p>They can save your contact and message via WhatsApp or email</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <p>Compatible with all modern smartphones (iOS & Android)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>✨ Free to use • No registration required • Download instantly</p>
        </div>
      </div>
    </div>
  );
}

export default App;