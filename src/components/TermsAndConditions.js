import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, Lock, Heart, CheckCircle, AlertTriangle, Gavel, FileText } from 'lucide-react';

const TermsAndConditions = () => {
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
                <FileText className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Please read these terms carefully before using Gupshup
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              <span>Last updated: September 28, 2025</span>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            
            {/* Section 1 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Acceptance of Terms</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  By accessing and using Gupshup ("the App"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service apply to all users of the application, including without limitation users who are browsers, customers, merchants, vendors, and contributors of content.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">User Conduct & Random Video Calls</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Gupshup connects you with random people from across India through video calls. By using this service, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Treat all users with respect and kindness during random video calls</li>
                  <li>Not engage in harassment, bullying, or inappropriate behavior</li>
                  <li>Not share personal information that could compromise your safety</li>
                  <li>Report any abusive or inappropriate behavior immediately</li>
                  <li>Comply with all applicable laws during your interactions</li>
                  <li>Not record, screenshot, or share content from video calls without consent</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Shield className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Privacy & Anonymous Calls</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Gupshup ensures 100% anonymous video calls with random people. We are committed to protecting your privacy:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All calls are anonymous - personal information is not shared with other users</li>
                  <li>No call recordings are stored on our servers</li>
                  <li>User faces and conversations remain private during random matching</li>
                  <li>We use advanced encryption to protect all communications</li>
                  <li>Your identity remains confidential throughout all interactions</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Prohibited Activities</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  The following activities are strictly prohibited on Gupshup:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nudity, sexual content, or inappropriate behavior during video calls</li>
                  <li>Harassment, abuse, or threatening behavior towards other users</li>
                  <li>Sharing illegal content or engaging in illegal activities</li>
                  <li>Attempting to bypass our safety and matching systems</li>
                  <li>Commercial solicitation or advertising during personal calls</li>
                  <li>Impersonating others or creating fake profiles</li>
                  <li>Attempting to collect personal information from other users</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Lock className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Account Security</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  While Gupshup provides anonymous video calling, account security remains important:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keep your login credentials secure and confidential</li>
                  <li>Do not share your account with others</li>
                  <li>Report any suspicious activity immediately</li>
                  <li>Use strong, unique passwords for your account</li>
                  <li>Enable two-factor authentication when available</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Gavel className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Limitation of Liability</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Gupshup provides a platform for connecting with random people through video calls. We strive to maintain a safe environment, but:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We cannot guarantee the behavior of other users during random calls</li>
                  <li>Users interact at their own risk and discretion</li>
                  <li>We are not responsible for the content of user conversations</li>
                  <li>We provide tools for reporting and blocking inappropriate users</li>
                  <li>Users should exercise caution when interacting with strangers</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <h2 className="text-2xl font-bold text-pink-400">Termination</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  We reserve the right to terminate or suspend accounts that violate these terms:
                </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
  <li>Accounts may be suspended for inappropriate behavior during video calls</li>
  <li>Repeated violations will result in permanent account termination</li>
  <li>We may terminate service at any time with or without notice</li>
  <li>Users may delete their accounts at any time</li>
  <li>No refunds will be provided under any circumstances, whether the issue arises from Technical team or the client’s side</li>
</ul>

              </div>
            </div>

          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 text-center">
            <Heart className="text-pink-400 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms & Conditions, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:admin@gupshup.in"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Contact Support
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

export default TermsAndConditions;
