'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Github, 
  Youtube, 
  Download, 
  Leaf, 
  DollarSign, 
  Users, 
  MapPin,
  ShoppingCart,
  Bell,
  Star,
  ArrowRight,
  Check,
  ChevronDown,
  Smartphone,
  Globe,
  Timer,
  TrendingDown,
  Heart,
  Store
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = [
    { label: "Reduce Waste", value: "Save Food", icon: Leaf },
    { label: "Save Money", value: "Get Discounts", icon: DollarSign },
    { label: "Community", value: "Join Us", icon: Users },
    { label: "Local Stores", value: "Participate", icon: Store }
  ]

  const features = [
    {
      icon: MapPin,
      title: "Real-Time Map",
      description: "Find nearby stores with surplus food instantly using our interactive map"
    },
    {
      icon: ShoppingCart,
      title: "Easy Shopping",
      description: "Browse discounted items, add to cart, and order with just a few taps"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get alerts when your favorite stores have new deals available"
    },
    {
      icon: TrendingDown,
      title: "Track Your Impact",
      description: "See how much food, money, and CO2 you've saved over time"
    },
    {
      icon: Timer,
      title: "Time-Limited Deals",
      description: "Access exclusive discounts on items nearing expiration"
    },
    {
      icon: Heart,
      title: "Eco Rewards",
      description: "Earn points for every purchase and unlock special rewards"
    }
  ]

  const screenshots = [
    { title: "Home Screen", description: "Browse nearby stores and deals" },
    { title: "Interactive Map", description: "Find stores in your area" },
    { title: "Product Details", description: "View items and discounts" },
    { title: "Shopping Cart", description: "Manage your orders easily" },
    { title: "User Profile", description: "Track your eco impact" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-eco-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-eco-600" />
              <span className="text-2xl font-bold text-eco-800">EcoPlate</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-eco-600 transition-colors">Features</Link>
              <Link href="#screenshots" className="text-gray-700 hover:text-eco-600 transition-colors">Screenshots</Link>
              <Link href="#impact" className="text-gray-700 hover:text-eco-600 transition-colors">Impact</Link>
              <Link href="#download" className="text-gray-700 hover:text-eco-600 transition-colors">Resources</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-eco-100 rounded-full text-eco-700 text-sm font-medium mb-6">
              <Leaf className="h-4 w-4 mr-2" />
              CMPT-362 Final Project
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Save Food. Save Money.
              <span className="block text-eco-600 mt-2">Save the Planet.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A concept app designed to connect consumers with local stores offering surplus food at discounted prices. 
              Built as a university project to demonstrate how technology can help reduce food waste.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
              <Link href="https://github.com/EcoPlate/ecoplate" target="_blank">
                <Button size="lg" className="w-full bg-eco-600 hover:bg-eco-700 text-white">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Android App
                </Button>
              </Link>
              <Link href="https://github.com/EcoPlate/ecoplate-backend" target="_blank">
                <Button size="lg" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  <Github className="mr-2 h-5 w-5" />
                  Backend API
                </Button>
              </Link>
              <Link href="/EcoPlate.apk" download>
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="mr-2 h-5 w-5" />
                  Download APK
                </Button>
              </Link>
              <Link href="https://www.youtube.com/watch?v=hlsRrl_adMY" target="_blank">
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Youtube className="mr-2 h-5 w-5" />
                  Demo 1
                </Button>
              </Link>
              <Link href="https://www.youtube.com/watch?v=hlsRrl_adMY" target="_blank">
                <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Youtube className="mr-2 h-5 w-5" />
                  Demo 2
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image/Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-eco-400 to-eco-600 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-400/20 to-eco-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative grid md:grid-cols-3 gap-6">
                {/* Phone mockups */}
                <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform">
                  <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-16 w-16 text-eco-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Home Screen</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform md:-mt-8">
                  <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-eco-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Store Map</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform">
                  <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
                    <div className="text-center">
                      <ShoppingCart className="h-16 w-16 text-eco-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Shopping Cart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EcoPlate connects conscious consumers with local businesses to reduce food waste and save money
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <stat.icon className="h-12 w-12 text-eco-600 mx-auto mb-4" />
                    <CardTitle className="text-xl font-bold text-eco-700">{stat.value}</CardTitle>
                    <CardDescription className="text-gray-600">{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-eco-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Features that Make a Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to start saving food and money today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-14 h-14 bg-eco-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-eco-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See EcoPlate in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A beautiful and intuitive interface designed for everyone
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-eco-100 to-eco-200 rounded-xl p-4 hover:shadow-2xl transition-all">
                  <div className="bg-white rounded-lg h-64 flex items-center justify-center mb-3">
                    <Smartphone className="h-20 w-20 text-eco-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{screenshot.title}</h3>
                  <p className="text-sm text-gray-600">{screenshot.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gradient-to-br from-eco-600 to-eco-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Make an Impact
            </h2>
            <p className="text-xl mb-12 text-eco-100">
              Join EcoPlate to help reduce food waste and contribute to a sustainable future
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <Leaf className="h-12 w-12 mx-auto mb-4 text-eco-300" />
                <h3 className="text-2xl font-bold mb-2">Reduce Waste</h3>
                <p className="text-eco-100">
                  Save perfectly good food from ending up in landfills
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <Globe className="h-12 w-12 mx-auto mb-4 text-eco-300" />
                <h3 className="text-2xl font-bold mb-2">Lower Emissions</h3>
                <p className="text-eco-100">
                  Reduce greenhouse gas emissions from food waste
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-eco-300" />
                <h3 className="text-2xl font-bold mb-2">Build Community</h3>
                <p className="text-eco-100">
                  Connect with local businesses and eco-conscious neighbors
                </p>
              </div>
            </div>

            <Button size="lg" className="bg-white text-eco-700 hover:bg-eco-50">
              View Project Details
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Project Resources Section */}
      <section id="download" className="py-20 bg-gradient-to-b from-white to-eco-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Project Features
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            
              {/* Features List */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-left">
                  <div className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-eco-600 mr-2 flex-shrink-0" />
                    Full Android source code (Kotlin)
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-eco-600 mr-2 flex-shrink-0" />
                    NestJS backend with TypeScript
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-eco-600 mr-2 flex-shrink-0" />
                    PostgreSQL database schema
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-eco-600 mr-2 flex-shrink-0" />
                    Google Maps integration
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-eco-600 mr-2 flex-shrink-0" />
                    Authentication system (JWT)
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-eco-600 mr-2 flex-shrink-0" />
                    Complete documentation
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600">
              This is a university project for educational purposes. Feel free to use and modify the code for your own learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-eco-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-8 w-8 text-eco-400" />
              <span className="text-2xl font-bold">EcoPlate</span>
            </div>
            <div className="text-eco-300">
              <Link href="#download" className="hover:text-eco-400 transition-colors">
                View all project resources ↑
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-eco-800 text-center">
            <p className="text-eco-300">
              © 2024 EcoPlate - A CMPT-362 Final Project
            </p>
            <p className="text-eco-400 mt-2">
              University concept app demonstrating food waste reduction solutions
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-eco-600 text-white p-3 rounded-full shadow-lg hover:bg-eco-700 transition-colors"
      >
        <ChevronDown className="h-6 w-6 transform rotate-180" />
      </motion.button>
    </div>
  )
}
