import React from 'react';
import { 
  Download, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="https://i.ibb.co/fYrp86x5/Launch-Screen-Center-3x-withline.png
https://i.ibb.co/h177KTBs/Launch-Screen-Center-3x-withline-grounds.png" alt="TerraTime Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-gray-900">TerraTime</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
              <a href="#industries" className="text-gray-600 hover:text-green-600 transition-colors">Industries</a>
              <a href="#benefits" className="text-gray-600 hover:text-green-600 transition-colors">Benefits</a>
              <a href="#download" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">Download App</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-gray-600">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors" onClick={toggleMobileMenu}>Features</a>
              <a href="#industries" className="block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors" onClick={toggleMobileMenu}>Industries</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors" onClick={toggleMobileMenu}>Benefits</a>
              <a href="#download" className="block px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors" onClick={toggleMobileMenu}>Download App</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Track work hours</span>
                  <span className="block text-green-600">with precision</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  TerraTime helps field workers track their tasks with geolocation, photos, and voice memos. Supervisors get real-time data to analyze productivity and create detailed reports.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#download" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                      Download Now
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1593526492327-b071f3d5333e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Field worker using mobile app" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to track field work
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              TerraTime provides a comprehensive solution for tracking and managing field work activities.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <img src="https://i.ibb.co/cKWGhj92/Clock-Timer.png" alt="Time Tracking" className="h-12 w-12" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Time Tracking</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Start, pause, and stop tasks with precise time tracking to the second.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <img src="https://i.ibb.co/v66sB1Lt/Location-icon.png" alt="Geolocation" className="h-12 w-12" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Geolocation</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Track worker locations in real-time with accurate GPS data.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <img src="https://i.ibb.co/vxWDNFPR/Photo-Taker.png" alt="Photo Documentation" className="h-12 w-12" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Photo Documentation</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Capture photos of work completed for visual documentation.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <img src="https://i.ibb.co/23GmwBHk/Microphone.png" alt="Voice Memo" className="h-12 w-12" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Voice Memos</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Record voice notes for detailed explanations and context.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <img src="https://i.ibb.co/W48BDNdC/TaskList.png" alt="Task Management" className="h-12 w-12" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Task Management</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Create, assign, and track tasks with detailed descriptions.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <img src="https://i.ibb.co/xSHHprkQ/Analytics.png" alt="Analytics" className="h-12 w-12" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Analytics</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Generate reports and analyze productivity with powerful insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Industries</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Perfect for field service businesses
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              TerraTime is designed for various industries that require field work tracking.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img src="https://i.ibb.co/hx17jsBZ/Landscaping-icon.png" alt="Landscaping" className="h-10 w-10" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Landscaping</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Track mowing, leaf blowing, and trimming tasks with photo documentation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img src="https://i.ibb.co/xSkXpDsh/Safety-Construction.png" alt="Construction" className="h-10 w-10" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Construction</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Monitor safety inspections and construction progress with detailed reporting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img src="https://i.ibb.co/ZCSyQYC/wastemgmt.png" alt="Waste Management" className="h-10 w-10" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Waste Management</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Track trash collection routes and document completion with geolocation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img src="https://i.ibb.co/wFp38b4S/Maintenance-icon.png" alt="Maintenance" className="h-10 w-10" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Maintenance</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Document maintenance tasks with before and after photos and voice explanations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why choose TerraTime?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our app provides numerous advantages for both field workers and supervisors.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <img src="https://i.ibb.co/zV01yD1S/Check-List.png" alt="Checklist" className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Increased Accountability</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Real-time tracking ensures workers are at the right location at the right time.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <img src="https://i.ibb.co/zV01yD1S/Check-List.png" alt="Checklist" className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Improved Productivity</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Analytics help identify bottlenecks and optimize workflows for better efficiency.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <img src="https://i.ibb.co/zV01yD1S/Check-List.png" alt="Checklist" className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Better Communication</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Voice memos and photos enhance communication between field workers and supervisors.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <img src="https://i.ibb.co/zV01yD1S/Check-List.png" alt="Checklist" className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Accurate Reporting</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Generate detailed reports with precise time tracking and documentation for clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </p>
            <p className="mt-4 text-xl text-gray-500">
              Interested in transforming your field work management? Let's discuss how TerraTime can help your business.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            {formSubmitted ? (
              <div className="text-center py-8">
                <p className="text-green-600 text-xl font-semibold">Thank you for your interest!</p>
                <p className="text-gray-600 mt-2">We'll be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                    Type of Business *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  >
                    <option value="">Select a business type</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="construction">Construction</option>
                    <option value="waste-management">Waste Management</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Comments or Questions *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  ></textarea>
                </div>

                <div className="text-sm text-gray-500">
                  <p className="mb-4">
                    * Required fields
                  </p>
                  <p className="mb-2">
                    By submitting this form, you acknowledge and agree that:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The information provided will be used to contact you about our services</li>
                    <li>We will protect your personal information in accordance with our Privacy Policy</li>
                    <li>We will not share your information with third parties without your explicit consent</li>
                    <li>You can request the deletion of your information at any time</li>
                  </ul>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="download" className="py-12 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to transform your field work management?
            </h2>
            <p className="mt-4 text-xl text-green-100">
              Download TerraTime today and start tracking your field work with precision.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50">
                  <Download className="h-5 w-5 mr-2" />
                  Download for iOS
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50">
                  <Download className="h-5 w-5 mr-2" />
                  Download for Android
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What our users say
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic">"TerraTime has revolutionized how we track our landscaping crews. The photo documentation feature has reduced client disputes by 90%."</p>
                <div className="mt-4 flex items-center">
                  <div className="text-sm font-medium text-gray-900">John D.</div>
                  <div className="ml-2 text-sm text-gray-500">Landscaping Company Owner</div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic">"As a supervisor, I can now see exactly where my team is and what they're working on. The analytics have helped us improve efficiency by 30%."</p>
                <div className="mt-4 flex items-center">
                  <div className="text-sm font-medium text-gray-900">Sarah M.</div>
                  <div className="ml-2 text-sm text-gray-500">Construction Supervisor</div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic">"The voice memo feature is a game-changer. My workers can explain complex situations without having to type lengthy messages."</p>
                <div className="mt-4 flex items-center">
                  <div className="text-sm font-medium text-gray-900">Michael T.</div>
                  <div className="ml-2 text-sm text-gray-500">Maintenance Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to get started?</span>
                  <span className="block">Download TerraTime today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-green-200">
                  Join thousands of businesses that are already improving their field work management with TerraTime.
                </p>
                <a href="#" className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-green-600 hover:bg-green-50">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              
              </div>
            </div>
            <div className="relative flex items-center justify-center p-8">
              <img
                className="rounded-md max-w-full max-h-80 object-contain"
                src="https://i.ibb.co/CpD3bsgQ/Gears-for-website-flatten.png"
                alt="TerraTime gears"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="mt-8 flex justify-center space-x-6">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} TerraTime-app.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;