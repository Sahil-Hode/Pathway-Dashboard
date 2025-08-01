import React, { useState } from 'react';
import { Search, MessageCircle, Bell, User, Clock, Users, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [expandedPathway, setExpandedPathway] = useState(null);

  const pathways = [
    {
      id: 1,
      title: "Pathway 1",
      subtitle: "Oracle Advanced Coding",
      duration: "10 hours",
      color: "bg-gradient-to-r from-cyan-400 to-blue-500",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      companies: [
        {
          name: "Graphic Design",
          type: "Tech Company",
          location: "Mumbai",
          followers: "1 lakh",
          logo: "bg-purple-600"
        },
        {
          name: "Company Name",
          type: "Tech Company", 
          location: "Mumbai",
          followers: "1 lakh",
          logo: "bg-gray-800"
        },
        {
          name: "Company Name",
          type: "Tech Company",
          location: "Mumbai", 
          followers: "1 lakh",
          logo: "bg-blue-600"
        }
      ]
    },
    {
      id: 2,
      title: "Pathway 2",
      subtitle: "Advanced Coding Pathway",
      duration: "15 hours",
      color: "bg-gradient-to-r from-orange-400 to-red-500",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 3,
      title: "Pathway 3", 
      subtitle: "Advanced Coding Pathway",
      duration: "20 hours",
      color: "bg-gradient-to-r from-purple-400 to-indigo-500",
      image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const togglePathway = (pathwayId) => {
    setExpandedPathway(expandedPathway === pathwayId ? null : pathwayId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-semibold text-gray-900">
              Your Logo
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                Feed
              </button>
              <button className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200">
                Jobs  
              </button>
              <button className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200">
                AI Prediction
              </button>
              <button className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200">
                Search
              </button>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" />
              <MessageCircle className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" />
              <Bell className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" />
              <User className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Your personalised pathways</h1>
            
            <div className="space-y-4">
              {pathways.map((pathway) => (
                <div key={pathway.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  {/* Pathway Header */}
                  <div 
                    className={`${pathway.color} p-4 cursor-pointer transition-all duration-200 hover:opacity-90`}
                    onClick={() => togglePathway(pathway.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={pathway.image} 
                          alt={pathway.title}
                          className="w-12 h-12 rounded-lg object-cover shadow-sm"
                        />
                        <div>
                          <h3 className="text-white font-semibold text-lg">{pathway.title}</h3>
                          <p className="text-white/90 text-sm">{pathway.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 text-white bg-white/20 px-2 py-1 rounded-full">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">{pathway.duration}</span>
                        </div>
                        {pathway.id === 1 && (
                          <div className="bg-white/20 p-1 rounded-full">
                            {expandedPathway === pathway.id ? 
                              <ChevronUp className="h-5 w-5 text-white" /> :
                              <ChevronDown className="h-5 w-5 text-white" />
                            }
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content for Pathway 1 */}
                  {expandedPathway === pathway.id && pathway.companies && (
                    <div className="p-4 space-y-3 bg-gray-50/50">
                      {pathway.companies.map((company, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${company.logo} rounded-lg flex items-center justify-center shadow-sm`}>
                              <span className="text-white text-sm font-bold">
                                {company.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{company.name}</h4>
                              <p className="text-sm text-gray-600">{company.type}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 text-gray-600 text-sm mb-1">
                              <MapPin className="h-3 w-3" />
                              <span>{company.location}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-600 text-sm">
                              <Users className="h-3 w-3" />
                              <span>{company.followers}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="mt-8 text-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Profile background"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <div className="absolute -bottom-6 left-4">
                  <img 
                    src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                    alt="Aman Gupta" 
                    className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-lg"
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Aman Gupta</h3>
                <p className="text-gray-600 text-sm">@amanGupta101</p>
                <p className="text-gray-900 font-medium mt-1">Visual Designer</p>
                
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Hi, I am Aman working as a designer from 3 years. 
                  My skills include Adobe Photoshop...
                </p>
                
                <div className="flex space-x-6 mt-4">
                  <div className="text-center">
                    <p className="font-bold text-blue-600 text-lg">2,000</p>
                    <p className="text-gray-600 text-sm">followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-blue-600 text-lg">1,021</p>
                    <p className="text-gray-600 text-sm">following</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;