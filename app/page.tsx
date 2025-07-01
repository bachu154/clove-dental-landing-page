import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function CloveDentalLanding() {
  return (
    <div className="min-h-screen bg-[#FFF7F1]">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="relative">
          <Image
            src="/images/navbar-design.png"
            alt="Clove Dental - Book Appointment 985-6589-510"
            width={1200}
            height={80}
            className="w-full h-auto"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-0 bg-white">
        <div className="relative">
          <Image
            src="/images/hero-doctor-clinic.png"
            alt="Painless Root Canal Treatment in Delhi - Expert RCT. Zero Pain. Right Here in Delhi."
            width={1200}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Image
              src="/images/stats-bar.png"
              alt="600+ Clinics | 1300+ Dentists | 30 L+ Happy Patients | 35K+ Ortho Cases | 55K+ Implants Placed"
              width={1200}
              height={80}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Types of Root Canal Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Root Canal Treatments</h2>
            <p className="text-gray-600">
              In a root canal, the dentist removes infected pulp, cleans the tooth and fills it with special material.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Root Canal Treatment */}
            <Card className="bg-white shadow-lg border-0 rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Image
                    src="/images/root-canal-treatment.png"
                    alt="Root Canal Treatment Illustration"
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Root Canal Treatment</h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4">Types of RCT</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Split RCT</li>
                    <li>• Split RCT with rubber dam</li>
                    <li>• Split RCT with laser</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-gray-900">₹ 19,999</span>
                </div>
                <Button className="w-full bg-[#f58634] hover:bg-[#e67429] text-white rounded-full">
                  Get Free Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Re-Root Canal Treatment */}
            <Card className="bg-white shadow-lg border-0 rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Image
                    src="/images/re-root-canal-treatment.png"
                    alt="Re-Root Canal Treatment Illustration"
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Re-Root Canal Treatment</h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4">Types of RCT</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Re-RCT laser</li>
                    <li>• Re-RCT rubber dam</li>
                    <li>• Re-RCT with removal of old RCT filling</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-gray-900">₹ 19,999</span>
                </div>
                <Button className="w-full bg-[#f58634] hover:bg-[#e67429] text-white rounded-full">
                  Get Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Smiles, Real Transformations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Smiles, Real Transformations</h2>
            <p className="text-gray-600">See the life-changing results our dental implant patients enjoy</p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/patient-transformations.png"
              alt="Patient Before and After Transformations"
              width={1200}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Clove Dental */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Clove Dental</h2>
              <p className="text-gray-600 mb-8">
                Clove Dental is India's leading dental care brand with 600+ clinic nationwide.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#f58634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">DORI - AI enabled Dental Chair</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#f58634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">10x Safety and 4 steps sterilization process</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#f58634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Experienced and Certified Implantologist</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#f58634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Updated with world class equipment</h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#f58634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Regular audits for safety protocols</h3>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/dental-professionals.png"
                alt="Dental professionals"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[#FFF7F1]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Image
              src="/images/consultation-form.png"
              alt="Get Expert Dental Guidance in Delhi - Book your free consultation"
              width={600}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What Our Patients Say */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-gray-600">
              Real stories and reviews from our patients about their CLOVE Dental experience!
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/patient-testimonials.png"
              alt="Patient Testimonials - Shubham (Aligners), Shubpreet (RCT), Anita (Laser Treatment), Aarti (Dentures), Aditya (Implant), Nikita"
              width={1200}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Image
              src="/images/google-reviews.png"
              alt="Google Reviews - 4.9 rating from 1.6 Lakh+ Verified Google Ratings"
              width={1200}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Safety, Precision, and Innovation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Image
              src="/images/safety-innovation.png"
              alt="Safety, Precision, and Innovation - Uncompromised Safety, Assuring Cleanliness, Experience AIPS"
              width={1200}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Find Us Across India */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Image
              src="/images/find-us-india.png"
              alt="Find Us Across India - Delhi/NCR 190 Clinics, Bangalore 110 Clinics, Mumbai 40 Clinics, Chennai 59 Clinics, Hyderabad 76 Clinics, Punjab 27 Clinics, Pune 76 Clinics, Ahemdabad 27 Clinics"
              width={1200}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer with Offer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Expert Guidance Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Guidance for Healthy Smiles</h3>
              <p className="text-gray-600 mb-6">Get personalized dental care recommendations</p>
              <form className="space-y-4">
                <Input placeholder="Enter your name" className="h-12" />
                <Input placeholder="Enter mobile number" className="h-12" />
                <Button className="w-full bg-[#f58634] hover:bg-[#e67429] text-white h-12">Get Expert Guidance</Button>
              </form>
            </div>

            {/* Anniversary Offer */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-r from-[#f58634] to-[#e67429] text-white shadow-lg border-0 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Clove Dental Turns 14</h3>
                      <p className="text-lg mb-4">
                        <span className="text-3xl font-bold">₹399/-</span>
                        <span className="text-lg line-through ml-2 opacity-75">₹5,000/-</span>
                      </p>
                      <p className="text-sm mb-6">Complete Dental Checkup & Consultation</p>
                      <Button className="bg-white text-[#f58634] hover:bg-gray-100 font-bold">Claim Offer Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Accessibility
                </a>
              </div>
              <div className="text-gray-600">© 2024 Clove Dental. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
