import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Heart, Database, UserCheck, AlertCircle, Globe, Camera } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">G</span>
            </div>
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Gupshup
            </span>
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Shield className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Your privacy is our priority. Learn how we protect your data during random video calls.
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full px-4 py-2 text-sm">
              <Eye className="w-4 h-4 mr-2 text-green-400" />
              <span>Last updated: September 28, 2025</span>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            
            {/* Section 1 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Heart className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Our Privacy Commitment</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  At Gupshup, we believe that connecting with random people through video calls should be completely private and secure. This Privacy Policy explains how we collect, use, and protect your information when you use our anonymous video calling service.
                </p>
                <p>
                  We are committed to ensuring that your conversations with random people remain confidential and that your personal information is protected at all times.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Database className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Information We Collect</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  To provide you with safe and anonymous video calls with random people, we collect minimal information:
                </p>
                
                <div className="bg-gray-700/30 p-4 rounded-xl">
                  <h4 className="font-bold text-pink-400 mb-2">Account Information</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Phone number (for verification only)</li>
                    <li>Device information (for compatibility)</li>
                    <li>App usage statistics (anonymous)</li>
                  </ul>
                </div>

                <div className="bg-gray-700/30 p-4 rounded-xl">
                  <h4 className="font-bold text-pink-400 mb-2">What We DON'T Collect</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Your real name or personal details</li>
                    <li>Video call recordings or screenshots</li>
                    <li>Audio recordings from your conversations</li>
                    <li>Personal messages or chat history</li>
                    <li>Location data beyond country/region</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Camera className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Anonymous Video Calls</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Our random video calling feature is designed with privacy as the top priority:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-pink-400">100% Anonymous:</strong> Other users never see your personal information</li>
                  <li><strong className="text-pink-400">No Recordings:</strong> We do not record, store, or monitor your video calls</li>
                  <li><strong className="text-pink-400">Random Matching:</strong> Our algorithm ensures you meet different people each time</li>
                  <li><strong className="text-pink-400">Secure Connection:</strong> All video calls are encrypted end-to-end</li>
                  <li><strong className="text-pink-400">Instant Disconnect:</strong> You can end any call immediately if uncomfortable</li>
                  <li><strong className="text-pink-400">No Face Recognition:</strong> We do not use facial recognition or store facial data</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Lock className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">How We Protect Your Data</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  We implement multiple layers of security to protect your privacy during random video calls:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-700/30 p-4 rounded-xl">
                    <h4 className="font-bold text-green-400 mb-2">Technical Security</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>End-to-end encryption</li>
                      <li>Secure server infrastructure</li>
                      <li>Regular security audits</li>
                      <li>Advanced firewall protection</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-700/30 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-400 mb-2">Privacy Controls</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Anonymous user matching</li>
                      <li>No data retention policy</li>
                      <li>Instant call termination</li>
                      <li>Report and block features</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <UserCheck className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Your Rights & Controls</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  You have complete control over your privacy and experience on Gupshup:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-pink-400">Right to Delete:</strong> Delete your account and all data at any time</li>
                  <li><strong className="text-pink-400">Data Access:</strong> Request information about data we store (minimal)</li>
                  <li><strong className="text-pink-400">Call Control:</strong> Accept, reject, or end calls instantly</li>
                  <li><strong className="text-pink-400">Reporting:</strong> Report inappropriate behavior immediately</li>
                  <li><strong className="text-pink-400">Blocking:</strong> Block users to prevent future matches</li>
                  <li><strong className="text-pink-400">Opt-out:</strong> Disable specific features or notifications</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Globe className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Data Sharing & Third Parties</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  We are committed to keeping your information private and secure:
                </p>
                
                <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-xl">
                  <h4 className="font-bold text-red-400 mb-2">We NEVER Share:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Your personal information with other users</li>
                    <li>Video call content with anyone</li>
                    <li>Your data with advertisers</li>
                    <li>User behavior data with third parties</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-xl">
                  <h4 className="font-bold text-green-400 mb-2">Limited Sharing Only For:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Legal compliance (when required by law)</li>
                    <li>Safety investigations (serious violations only)</li>
                    <li>Technical service providers (encrypted data only)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <AlertCircle className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Safety & Moderation</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  While maintaining anonymity, we still ensure user safety during random video calls:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI-powered content moderation (no human review of calls)</li>
                  <li>Automated detection of inappropriate behavior</li>
                  <li>Instant reporting and blocking mechanisms</li>
                  <li>24/7 safety monitoring systems</li>
                  <li>Quick response to safety violations</li>
                  <li>Community guidelines enforcement</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">U</span>
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Updates to Privacy Policy</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  We may update this Privacy Policy to reflect changes in our practices or for legal reasons:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Users will be notified of significant changes</li>
                  <li>Updated policies will be posted on our website</li>
                  <li>Continued use implies acceptance of updated terms</li>
                  <li>Major changes will require explicit consent</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 text-center">
            <Shield className="text-pink-400 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-4">Privacy Questions or Concerns?</h3>
            <p className="text-gray-300 mb-6">
              If you have any questions about our Privacy Policy or how we handle your data during random video calls, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@gupshup.in"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Contact Privacy Team
              </a>
              <Link 
                to="/"
                className="border-2 border-gray-600 hover:border-pink-400 px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
