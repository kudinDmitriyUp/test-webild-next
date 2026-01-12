"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MediaSplitTabsAbout from '@/components/sections/about/MediaSplitTabsAbout';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles } from "lucide-react";
import { useState } from 'react';

export default function LandingPage() {
const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="radialGradient"
      cardStyle="elevated-accent-light"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Premier Properties"
          navItems={[
            { name: "Properties", id: "properties" },
            { name: "Why Us", id: "about" },
            { name: "How It Works", id: "feature" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "View Properties", href: "properties" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Modern Living in Prime Locations"
          description="Discover premium real estate opportunities with verified documentation and expert guidance."
          tag="LIMITED LISTINGS"
          tagIcon={Sparkles}
          mediaItems={[
            { imageSrc: "https://img.b2bpic.net/free-photo/attractive-woman-reading-magazine-near-panoramic-window_7502-9287.jpg", imageAlt: "Luxury penthouse with city views" },
            { imageSrc: "https://img.b2bpic.net/free-photo/attractive-woman-standing-with-coffee-near-window_7502-9288.jpg", imageAlt: "Contemporary villa with gardens" },
            { imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg", imageAlt: "Premium apartment interior" },
            { imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg", imageAlt: "Luxury bedroom with skyline view" },
            { imageSrc: "https://img.b2bpic.net/free-photo/cute-young-woman-reading-book-sofa_7502-7285.jpg", imageAlt: "Beachfront luxury property" }
          ]}
          buttons={[
            { text: "View Properties", href: "properties" },
            { text: "Book a Viewing", href: "contact" }
          ]}
        />
      </div>

      <div id="properties" data-section="properties">
        <ProductCardThree
          title="Featured Properties Available Now"
          description="Browse our curated selection of premium properties. Each listing is verified and ready for immediate inquiry."
          products={[
            {
              id: "1",              name: "Skyline Penthouse - Downtown Core",              price: "€1,250,000",              imageSrc: "https://img.b2bpic.net/free-photo/young-happy-smiling-caucasian-woman-traveller-fitting-dress-sunglasses-high-floor-bangkok_343596-1438.jpg",              imageAlt: "Downtown luxury penthouse",              initialQuantity: 1
            },
            {
              id: "2",              name: "Suburban Villa with Pool - Green Valley",              price: "€875,000",              imageSrc: "https://img.b2bpic.net/free-photo/empire-state-building-seen-from-apartment_23-2150897507.jpg",              imageAlt: "Suburban family villa",              initialQuantity: 1
            },
            {
              id: "3",              name: "Commercial Office Space - Business District",              price: "€650,000",              imageSrc: "https://img.b2bpic.net/free-photo/relax-sofa-window_1150-12924.jpg",              imageAlt: "Premium commercial space",              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="Why Invest With Us"
          description="Our proven process ensures transparency, security, and optimal returns on every transaction."
          tabs={[
            {
              id: "verified",              label: "Verified Listings Only",              description: "Every property undergoes rigorous verification. Complete legal documentation, clear titles, and no hidden liabilities. Your confidence is our priority."
            },
            {
              id: "legal",              label: "Full Legal Support",              description: "Dedicated legal team handles all documentation and compliance. We navigate complex regulations so you can focus on your investment decision."
            },
            {
              id: "transaction",              label: "End-to-End Transaction Handling",              description: "From initial inquiry to closing, we manage every step. Expert negotiation, timely execution, and post-sale support included."
            },
            {
              id: "expertise",              label: "Market Expertise",              description: "1,500+ successful transactions across prime locations. Our team's deep market knowledge identifies the best opportunities for your portfolio."
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/medium-shot-colleagues-being-inclusive_23-2149759010.jpg"
          imageAlt="Real estate team collaborating"
          imagePosition="right"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="Available Opportunities"
          description="ROI potential: +12% average annual return · Fast-track verified listings · Priority access to premium properties"
          metrics={[
            {
              id: "1",              title: "Downtown Luxury Penthouse",              subtitle: "Central District · 5 Bed, 4 Bath · 320 sqm · ROI potential: +15%",              category: "Buy",              value: "€1,250,000",              buttons: [{ text: "Request Details", href: "contact" }]
            },
            {
              id: "2",              title: "Modern Villa with Garden",              subtitle: "Green Valley · 4 Bed, 3 Bath · 450 sqm · ROI potential: +11%",              category: "Buy",              value: "€875,000",              buttons: [{ text: "Schedule Viewing", href: "contact" }]
            },
            {
              id: "3",              title: "Premium Office Suite",              subtitle: "Business District · 2 Levels · 280 sqm · ROI potential: +14%",              category: "Commercial",              value: "€650,000",              buttons: [{ text: "Inquire Now", href: "contact" }]
            },
            {
              id: "4",              title: "Beachfront Apartment",              subtitle: "Coastal Area · 3 Bed, 2 Bath · 200 sqm · ROI potential: +9%",              category: "Rent",              value: "€4,500/month",              buttons: [{ text: "Book Showing", href: "contact" }]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Trusted by 1,500+ Successful Investors"
          description="Real feedback from buyers and investors who found their perfect property with us."
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              handle: "Investor, Silicon Valley",              testimonial: "Closed the penthouse purchase in just 14 days. The team's professionalism and market insight made all the difference. Exceptional ROI already showing.",              imageSrc: "https://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg",              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",              name: "Michael Chen",              handle: "Property Developer",              testimonial: "Seamless transaction process with transparent pricing. No hidden fees, no surprises. This is how real estate should work.",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",              imageAlt: "Michael Chen"
            },
            {
              id: "3",              name: "Emma & James Wilson",              handle: "Family Relocating",              testimonial: "Found our dream home with their expert guidance. Patient, knowledgeable, and genuinely concerned with finding the right fit for our family.",              imageSrc: "https://img.b2bpic.net/free-photo/confident-middle-aged-businesswoman-looking-camera_74855-4120.jpg",              imageAlt: "Emma and James Wilson"
            },
            {
              id: "4",              name: "Lisa Anderson",              handle: "Corporate Investor",              testimonial: "Portfolio expansion made easy. Their market analysis helped us identify undervalued properties with strong growth potential.",              imageSrc: "https://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg",              imageAlt: "Lisa Anderson"
            },
            {
              id: "5",              name: "David Rodriguez",              handle: "First-Time Buyer",              testimonial: "Educated me throughout the entire process. Never felt pressured, always informed. Highly recommend for anyone entering real estate.",              imageSrc: "https://img.b2bpic.net/free-photo/business-lady-looking-copyspace-with-interest_1262-2957.jpg",              imageAlt: "David Rodriguez"
            },
            {
              id: "6",              name: "Patricia Moore",              handle: "International Buyer",              testimonial: "Navigating cross-border purchases was complex, but their team handled everything beautifully. Best investment decision we made.",              imageSrc: "https://img.b2bpic.net/free-photo/business-woman-banner-concept-with-copy-space_23-2149601533.jpg",              imageAlt: "Patricia Moore"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="invertCard"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="How Real Estate Investment Works"
          description="Everything you need to know about purchasing or renting through our platform."
          faqs={[
            {
              id: "1",              title: "How long does the verification process take?",              content: "Our legal team completes full property verification within 5-7 business days. This includes title search, compliance check, and documentation review. You'll receive a detailed verification report before proceeding."
            },
            {
              id: "2",              title: "What documentation do I need to provide?",              content: "For investors: proof of funds, identification, and banking details. For mortgaged purchases: employment verification and credit authorization. Our team provides a complete checklist tailored to your transaction type."
            },
            {
              id: "3",              title: "Are there hidden fees?",              content: "No. We believe in complete transparency. All costs—including legal fees, transfer taxes, and commissions—are disclosed upfront in writing before you commit."
            },
            {
              id: "4",              title: "What if I need to back out of a deal?",              content: "We outline all terms clearly in the purchase agreement. Cancellation policies vary by property and stage. Our legal team will review specific terms with you."
            },
            {
              id: "5",              title: "How do I get an ROI estimate?",              content: "Submit the inquiry form with your property interest, and our investment analysis team will provide a customized ROI projection based on market comparables and rental yield data."
            },
            {
              id: "6",              title: "Do you assist with rental properties?",              content: "Yes. We manage everything from tenant screening to lease negotiation. Our property management services include maintenance coordination and financial reporting."
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-happy-smile-roof-top-restaurant-around-city-view_74190-11653.jpg"
          imageAlt="Luxury property interior"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to find your next investment? Schedule a private consultation with our expert advisors today. Let's discuss your property goals and identify the perfect opportunity."
          animationType="reveal-blur"
          buttons={[
            { text: "Schedule Consultation", href: "#inquiry-form" },
            { text: "View All Properties", href: "properties" }
          ]}
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://img.b2bpic.net/free-photo/smiling-beautiful-woman-resting-home_7502-9290.jpg"
          imageAlt="Aerial view of luxury properties"
          logoText="Premier Properties"
          copyrightText="© 2025 Premier Properties. All rights reserved."
          columns={[
            {
              title: "Properties",              items: [
                { label: "Featured Listings", href: "properties" },
                { label: "For Sale", href: "properties" },
                { label: "For Rent", href: "properties" },
                { label: "New Developments", href: "properties" }
              ]
            },
            {
              title: "About",              items: [
                { label: "Our Team", href: "about" },
                { label: "How It Works", href: "feature" },
                { label: "Investment Guide", href: "faq" },
                { label: "Market Insights", href: "blog" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Schedule Viewing", href: "contact" },
                { label: "Get ROI Analysis", href: "contact" },
                { label: "Inquiry Form", href: "contact" },
                { label: "Phone Support", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    <button style={{ position: 'fixed', bottom: '20px', right: '20px' }}>View Cart</button>
    <button style={{ position: 'fixed', bottom: '20px', right: '20px' }}>View Cart</button>
    <button style={{ position: 'fixed', bottom: '20px', right: '20px' }} onClick={() => setIsModalOpen(true)}>View Cart</button>
    <button style={{ position: 'fixed', bottom: '20px', right: '20px' }} onClick={() => setIsModalOpen(true)}>View Cart</button>
    </ThemeProvider>
  );
}