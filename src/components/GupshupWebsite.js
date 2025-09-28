import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Users, Clock, Star, Shield, Phone, Video, Globe, DollarSign, Lock, Headphones, Smartphone, Download, Mail, MapPin, Heart, Sparkles, CheckCircle } from 'lucide-react';
import playstore from '../play.png'

const GupshupWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const [randomFaces, setRandomFaces] = useState([]);
  const [callActive, setCallActive] = useState(false);

  // Separate name arrays for each gender
  const maleNames = ['Rahul', 'Amit', 'Vikram', 'Rohan', 'Arjun', 'Karan', 'Dev', 'Aditya', 'Harsh', 'Varun', 'Raj', 'Akash', 'Nitin', 'Sanjay', 'Ravi'];
  const femaleNames = ['Priya', 'Sneha', 'Ananya', 'Kavya', 'Meera', 'Ishita', 'Riya', 'Pooja', 'Nisha', 'Tanya', 'Neha', 'Sita', 'Radha', 'Anjali', 'Deepika'];

  // FIXED Scroll function that actually works
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Random face generation function with proper gender matching
  const generateRandomFace = (forceGender = null) => {
    const gender = forceGender || (Math.random() > 0.5 ? 'men' : 'women');
    const faceId = Math.floor(Math.random() * 99) + 1;
    const nameArray = gender === 'men' ? maleNames : femaleNames;
    const name = nameArray[Math.floor(Math.random() * nameArray.length)];
    
    return {
      gender,
      name,
      image: `https://randomuser.me/api/portraits/${gender}/${faceId}.jpg`,
      fallbackImage: `https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=128`
    };
  };

  // Generate random faces for video call simulation
  const generateRandomFaces = () => {
    const faces = [];
    for (let i = 0; i < 8; i++) {
      const faceData = generateRandomFace();
      faces.push({
        id: i,
        ...faceData,
        isOnline: Math.random() > 0.3,
        location: generateRandomLocation(),
        age: Math.floor(Math.random() * 30) + 18,
        interests: generateRandomInterests()
      });
    }
    return faces;
  };

  // Generate random locations
  const generateRandomLocation = () => {
    const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Kochi', 'Gurgaon', 'Noida', 'Indore', 'Lucknow', 'Nagpur'];
    return cities[Math.floor(Math.random() * cities.length)];
  };

  // Generate random interests
  const generateRandomInterests = () => {
    const allInterests = ['Music', 'Movies', 'Books', 'Travel', 'Food', 'Sports', 'Art', 'Technology', 'Dancing', 'Photography', 'Gaming', 'Fitness', 'Cooking', 'Reading'];
    const numInterests = Math.floor(Math.random() * 3) + 2;
    const shuffled = allInterests.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numInterests);
  };

  // Generate specific listeners with proper gender matching
  const generateListeners = () => {
    return [
      {
        ...generateRandomFace('women'),
        specialties: ['Friendship', 'Relationship'],
        online: true
      },
      {
        ...generateRandomFace('women'), 
        specialties: ['Dating Tips'],
        online: true
      },
      {
        ...generateRandomFace('women'),
        specialties: ['Relationship Tips'],
        online: true
      },
      {
        ...generateRandomFace('women'),
        specialties: ['Relationship'],
        online: true
      }
    ];
  };

  const [listeners, setListeners] = useState([]);

  // Initialize random faces and listeners on component mount
  useEffect(() => {
    setRandomFaces(generateRandomFaces());
    setListeners(generateListeners());
    
    // Refresh faces every 45 seconds
    const interval = setInterval(() => {
      setRandomFaces(generateRandomFaces());
      setListeners(generateListeners());
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Simulate video call with random user
  const startRandomCall = () => {
    setCallActive(true);
    setRandomFaces(generateRandomFaces());
    
    setTimeout(() => {
      setCallActive(false);
      setRandomFaces(generateRandomFaces());
    }, 12000);
  };

  // FIXED - Enhanced image component with proper error handling and null checks
  const RandomUserImage = ({ face, size = "w-16 h-16 sm:w-20 sm:h-20", className = "" }) => {
    // Create a default face object if face is null/undefined
    const defaultFace = React.useMemo(() => generateRandomFace(), []);
    const safeFace = face || defaultFace;
    
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
      setImageError(true);
    };

    // Ensure we have a valid image URL
    const imageUrl = imageError || !safeFace?.image ? safeFace?.fallbackImage : safeFace?.image;
    
    return (
      <div className={`${size} rounded-full overflow-hidden ${className}`}>
        <img 
          src={imageUrl || `https://ui-avatars.com/api/?name=User&background=random&color=fff&size=128`}
          alt={safeFace?.name || 'User'}
          className="w-full h-full object-cover"
          onError={handleImageError}
          loading="lazy"
        />
      </div>
    );
  };

  // FIXED - Video Call Component with Random Faces - Made Responsive
  const VideoCallInterface = ({ face, isActive }) => {
    // Create a safe face object with defaults
    const defaultFace = React.useMemo(() => generateRandomFace(), []);
    const safeFace = face || defaultFace;

    return (
      <div className={`w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 sm:p-4 shadow-2xl mx-auto ${isActive ? 'ring-4 ring-pink-500 ring-opacity-50' : ''}`}>
        <div className="w-full h-full bg-gradient-to-b from-purple-100 to-white rounded-2xl p-2 sm:p-4 relative overflow-hidden">
          {/* Online status indicator */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
            {safeFace?.isOnline ? (
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full animate-pulse border-2 border-white"></div>
            ) : (
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          
          {/* Random user face */}
          <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-pink-200">
              <RandomUserImage 
                face={safeFace} 
                size="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
              />
            </div>
          </div>
          
          {/* User info */}
          <div className="absolute bottom-12 sm:bottom-20 left-1/2 transform -translate-x-1/2 text-center">
            <h3 className="font-bold text-gray-800 mb-1 text-xs sm:text-sm">{safeFace?.name || 'User'}</h3>
            <p className="text-xs sm:text-sm text-gray-600">{safeFace?.age || 25} • {safeFace?.location || 'India'}</p>
            <div className="flex flex-wrap justify-center gap-1 mt-1 sm:mt-2">
              {(safeFace?.interests || ['Music', 'Movies']).slice(0, 2).map((interest, idx) => (
                <span key={idx} className="text-xs bg-pink-200 text-pink-800 px-1 sm:px-2 py-1 rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          {/* Call controls */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
              <span className="text-white text-sm sm:text-xl">×</span>
            </div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-colors">
              <Phone className="text-white" size={12} />
            </div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
              <Video className="text-white" size={12} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // FIXED - Random Users Grid Component - Made Fully Responsive
  const RandomUsersGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
      {randomFaces && randomFaces.length > 0 ? randomFaces.slice(0, 8).map((face, index) => {
        // Create safe face object with fallback
        const defaultFace = generateRandomFace();
        const safeFace = face || defaultFace;
        
        return (
          <div key={`${safeFace?.id || index}-${index}`} className="bg-gray-800/50 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-2xl border border-gray-700/50 text-center transform hover:scale-105 transition-all duration-300">
            
            {/* Profile Image */}
            <div className="relative mb-3 sm:mb-4">
              <div className="mx-auto relative">
                <RandomUserImage 
                  face={safeFace} 
                  size="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" 
                  className="border-2 border-pink-400 shadow-xl mx-auto"
                />
                {safeFace?.isOnline && (
                  <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 border-white animate-pulse"></div>
                )}
              </div>
            </div>
            
            {/* User Info */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="font-bold text-sm sm:text-lg md:text-xl text-white">
                {safeFace?.name || 'User'}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                <span className="font-semibold">{safeFace?.age || 25}</span> • {safeFace?.location || 'India'}
              </p>
              
              {/* Interests */}
              <div className="flex flex-wrap gap-1 justify-center min-h-[1.5rem] sm:min-h-[2rem]">
                {(safeFace?.interests || ['Music', 'Movies']).slice(0, 2).map((interest, i) => (
                  <span key={i} className="bg-pink-500/20 text-pink-400 text-xs px-2 py-1 rounded-full">
                    {interest}
                  </span>
                ))}
              </div>
              
              {/* Call Button */}
              <button 
                onClick={startRandomCall}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transform hover:scale-105 transition-all duration-300"
              >
                {safeFace?.isOnline ? 'Call Now' : 'Leave Message'}
              </button>
            </div>
          </div>
        );
      }) : (
        // Loading placeholder when no faces are available
        Array.from({length: 4}, (_, index) => (
          <div key={`loading-${index}`} className="bg-gray-800/50 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-2xl border border-gray-700/50 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-700 rounded-full mx-auto mb-3 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded mb-2 animate-pulse"></div>
            <div className="h-3 bg-gray-700 rounded mb-3 animate-pulse"></div>
            <div className="h-8 bg-gray-700 rounded animate-pulse"></div>
          </div>
        ))
      )}
    </div>
  );

  const languages = [
    { text: "स्वतंत्र रूप से बोलें, कहीं भी, कभी भी", desc: "हमारा ऐप आपकी भाषा बोलता है—बिना किसी सीमा या बाधा के जुड़ें" },
    { text: "தடையின்றி பேசுங்கள், எங்கும், எப்போதும்", desc: "எங்கள் பயன்பாடு உங்கள் மொழியை பேசுகிறது—எந்த வரம்பு அல்லது தடையுமின்றி இணையுங்கள்" },
    { text: "મુક્તપણે બોલો, ક્યાંય પણ, કોઈ પણ સમયે", desc: "અમારી એપ્લિકેશન તમારી ભાષા બોલે છે—કોઈપણ મર્યાદા અથવા અવરોધ વિના જોડાઓ" },
  ];

  const reviews = [
    {
      date: "03/09/2025",
      rating: 5,
      text: "Gupshup gave me a safe space to share my thoughts without being judged. Talking to a listener anonymously helped me clear my mind and improve my relationship with my partner."
    },
    {
      date: "03/09/2025", 
      rating: 5,
      text: "After a difficult breakup, I felt lost and hopeless. A listener on Gupshup supported me with warmth and understanding. Today, I feel more confident, positive, and ready to move forward."
    },
    {
      date: "03/09/2025",
      rating: 5,
      text: "Being a Listener on Gupshup is an incredible experience. Every conversation reminds me how meaningful it is to support others. The joy of helping someone feel better is truly priceless 😊"
    },
    {
      date: "03/09/2025",
      rating: 5, 
      text: "I often struggled with anxiety and had no one to talk to. On Gupshup, I found compassionate listeners who understood me without judgment. It has become my go-to space for emotional relief."
    }
  ];

  const faqs = [
    { question: "What is Gupshup App?", answer: "Gupshup is a secure, user-friendly app for Android and iOS, designed for effortless voice and video communication." },
    { question: "When do people use Gupshup App?", answer: "People use Gupshup when they need someone to talk to, share their feelings, or seek emotional support during difficult times." },
    { question: "Who is a Listener?", answer: "A Listener is a compassionate person who provides emotional support and a safe space for others to share their thoughts and feelings." },
    { question: "Are Listeners on Gupshup App verified?", answer: "Yes, all Listeners go through a verification process to ensure they meet our standards for providing quality emotional support." },
    { question: "Is Gupshup App really Anonymous?", answer: "Yes, Gupshup ensures 100% anonymous calls where your identity remains completely confidential." },
    { question: "If Gupshup App is anonymous then why am I required to signup using my mobile number and OTP?", answer: "Mobile verification helps us maintain security and prevent spam while keeping your conversations completely anonymous." }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % languages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + languages.length) % languages.length);
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Header - Made Responsive with WORKING navigation */}
      <header className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">G</span>
            </div>
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Gupshup
            </span>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
          </button>
          
          {/* FIXED Desktop Menu with working navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-pink-400 transition-colors duration-300 text-sm lg:text-base bg-transparent border-0 cursor-pointer text-white"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-pink-400 transition-colors duration-300 text-sm lg:text-base bg-transparent border-0 cursor-pointer text-white"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="hover:text-pink-400 transition-colors duration-300 text-sm lg:text-base bg-transparent border-0 cursor-pointer text-white"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('listeners')} 
              className="hover:text-pink-400 transition-colors duration-300 text-sm lg:text-base bg-transparent border-0 cursor-pointer text-white"
            >
              Listeners
            </button>
            <button 
              onClick={() => scrollToSection('blogs')} 
              className="hover:text-pink-400 transition-colors duration-300 text-sm lg:text-base bg-transparent border-0 cursor-pointer text-white"
            >
              Blogs
            </button>
            <button 
              onClick={() => scrollToSection('faqs')} 
              className="hover:text-pink-400 transition-colors duration-300 text-sm lg:text-base bg-transparent border-0 cursor-pointer text-white"
            >
              FAQs
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Made Responsive */}
      <section id="home" className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1" data-animate id="hero-text">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-1000 ${isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Gupshup: Connecting
              <br />
              Bharat Through
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Genuine
                <br />
                Conversations
              </span>
            </h1>
            
            <p className={`text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Experience the essence of true connections with Gupshup, an intuitive voice and video calling app. Engage in heartfelt conversations with <span className="text-pink-400 font-semibold">random people</span>, share your everyday moments, and forge meaningful relationships.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-500 ${isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={startRandomCall}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-2xl text-sm sm:text-base"
              >
                <Video size={16} />
                <span>Start Random Call</span>
              </button>
              <button className="border-2 border-gray-600 hover:border-pink-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                <Headphones size={16} />
                <span>Become Listener</span>
              </button>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-700 order-1 lg:order-2 ${isVisible['hero-text'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Active Video Call Display */}
              {callActive && randomFaces.length > 0 ? (
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full mx-auto animate-pulse"></div>
                    <p className="text-pink-400 text-xs sm:text-sm mt-2">Connecting to random user...</p>
                  </div>
                  <VideoCallInterface face={randomFaces[0]} isActive={true} />
                </div>
              ) : (
                <div className="relative flex justify-center">
                  {/* Main phone mockup */}
                  <VideoCallInterface face={randomFaces.length > 0 ? randomFaces[0] : null} isActive={false} />
                  
                  {/* Secondary phones - Hidden on mobile */}
                  {randomFaces.length > 1 && (
                    <div className="hidden md:block absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-32 h-48 sm:w-40 sm:h-60 lg:w-48 lg:h-72 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                      <VideoCallInterface face={randomFaces[1]} isActive={false} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Random Users Section - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 px-4" data-animate id="random-users">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['random-users'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Connect with Random People
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-300 text-center mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible['random-users'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Meet new people from across India. Each refresh shows different faces!
          </p>
          
          <div className={`transition-all duration-1000 delay-500 ${isVisible['random-users'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <RandomUsersGrid />
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => {
                setRandomFaces(generateRandomFaces());
                setListeners(generateListeners());
              }}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base flex items-center justify-center space-x-2 mx-auto"
            >
              <Users className="inline" size={16} />
              <span>Refresh Random Users</span>
            </button>
          </div>
        </div>
      </section>

      {/* Feature Cards - Made Responsive */}
      <section className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gradient-to-r from-pink-600 to-pink-700 p-4 sm:p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
              <Phone className="mx-auto mb-2" size={24} />
              <div className="font-bold text-sm sm:text-base">Voice Calls</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 sm:p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
              <Video className="mx-auto mb-2" size={24} />
              <div className="font-bold text-sm sm:text-base">Random Video</div>
            </div>
            <div className="bg-gray-700 p-4 sm:p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:bg-gray-600">
              <Globe className="mx-auto mb-2" size={24} />
              <div className="font-bold text-sm sm:text-base">15+ Languages</div>
            </div>
            <div className="bg-gradient-to-r from-pink-600 to-pink-700 p-4 sm:p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
              <Star className="mx-auto mb-2" size={24} />
              <div className="font-bold text-sm sm:text-base">4.5+ Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Never Alone Section - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 px-4" data-animate id="never-alone">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['never-alone'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            You Are Never Alone
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-300 mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${isVisible['never-alone'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Together we rise, together we heal, together we conquer
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className={`bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50 transform transition-all duration-1000 delay-500 ${isVisible['never-alone'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="text-pink-400 text-base sm:text-lg mb-2">1 out of every 4 souls</div>
              <div className="text-gray-400 mb-4">has weathered the storm of</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4">Heartbreak</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Every ending is a new beginning waiting to unfold. Your heart's resilience is your greatest superpower.
              </p>
              <button 
                onClick={startRandomCall}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                Start healing with someone new!
              </button>
            </div>
            
            <div className={`bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50 transform transition-all duration-1000 delay-700 ${isVisible['never-alone'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="text-pink-400 text-base sm:text-lg mb-2">1 out of every 3 hearts</div>
              <div className="text-gray-400 mb-4">is navigating through</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4">Turbulence</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Love isn't perfect, and that's perfectly okay. Every challenge is an opportunity to build something stronger and more beautiful.
              </p>
              <button 
                onClick={startRandomCall}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                Find support from strangers!
              </button>
            </div>
            
            <div className={`bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50 transform transition-all duration-1000 delay-900 ${isVisible['never-alone'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="text-pink-400 text-base sm:text-lg mb-2">1 out of every 2 people</div>
              <div className="text-gray-400 mb-4">has experienced the weight of</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4">Solitude</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                In solitude, we discover our inner strength. Your loneliness is temporary, but your courage is eternal.
              </p>
              <button 
                onClick={startRandomCall}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                Connect with random souls!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED - Listeners Section - REMOVED DUPLICATE ID */}
      <section id="listeners" className="py-12 sm:py-16 md:py-20 px-4" data-animate>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['listeners'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Compassionate Listeners Ready to Help
          </h2>
          
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${isVisible['listeners'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {listeners && listeners.length > 0 ? listeners.map((listener, index) => {
              // Create safe listener object with fallback
              const defaultListener = generateRandomFace('women');
              const safeListener = listener || defaultListener;
              
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-700/50 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="relative mb-3 sm:mb-4">
                    <RandomUserImage 
                      face={safeListener} 
                      size="w-16 h-16 sm:w-20 sm:h-20"
                      className="mx-auto"
                    />
                    {safeListener?.online && (
                      <div className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                        Online
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-sm sm:text-lg mb-2">{safeListener?.name || 'Listener'}</h3>
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    {(safeListener?.specialties || ['Support']).map((specialty, i) => (
                      <span key={i} className="bg-pink-500/20 text-pink-400 text-xs sm:text-sm px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">Always here to listen and guide.</p>
                </div>
              );
            }) : (
              // Loading placeholder for listeners
              Array.from({length: 4}, (_, index) => (
                <div key={`listener-loading-${index}`} className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-700/50 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded-full mx-auto mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-700 rounded mb-3 animate-pulse"></div>
                  <div className="h-3 bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))
            )}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              View More Listeners
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 px-4" data-animate id="reviews">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['reviews'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Reviews
          </h2>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 delay-300 ${isVisible['reviews'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-xs sm:text-sm">{review.date}</span>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={14} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 px-4" data-animate id="languages">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['languages'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Express Yourself in 15+ Indian Languages
          </h2>
          
          <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible['languages'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-800/50 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">{languages[currentSlide].text}</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">{languages[currentSlide].desc}</p>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
            
            <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
              {languages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-pink-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 px-4" data-animate id="stats">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 ${isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50 text-center transform hover:scale-105 transition-all duration-300">
              <Users className="text-pink-400 mx-auto mb-4" size={40} />
              <div className="text-2xl sm:text-4xl font-bold text-pink-400 mb-2">20,000+</div>
              <div className="text-gray-300 text-sm sm:text-base">Happy Users</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50 text-center transform hover:scale-105 transition-all duration-300">
              <Clock className="text-pink-400 mx-auto mb-4" size={40} />
              <div className="text-2xl sm:text-4xl font-bold text-pink-400 mb-2">2,00,000+</div>
              <div className="text-gray-300 text-sm sm:text-base">Minutes of Calls</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50 text-center transform hover:scale-105 transition-all duration-300">
              <Star className="text-pink-400 mx-auto mb-4" size={40} />
              <div className="text-2xl sm:text-4xl font-bold text-pink-400 mb-2">4.5+</div>
              <div className="text-gray-300 text-sm sm:text-base">Star Rating</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className={`bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/50 transition-all duration-1000 delay-300 ${isVisible['stats'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Heart className="text-pink-500 mb-4" size={32} />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Connect <span className="text-pink-400">Instantly</span></h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                <span className="text-pink-400 font-bold">89%</span> of users feel less alone during tough times with the support of random conversations on Gupshup App.
              </p>
              {randomFaces.length > 4 && (
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                  <RandomUserImage face={randomFaces[4]} size="w-24 h-24 sm:w-32 sm:h-32" />
                </div>
              )}
            </div>
            
            <div className={`grid grid-cols-1 gap-6 sm:gap-8 transition-all duration-1000 delay-500 ${isVisible['stats'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-700/50">
                <div className="flex items-center space-x-4">
                  <Users className="text-pink-400 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Random <span className="text-pink-400">Connections</span></h4>
                    <p className="text-gray-300 text-xs sm:text-sm"><span className="text-pink-400 font-bold">93%</span> of users love meeting random people and building meaningful connections through video calls.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-700/50">
                <div className="flex items-center space-x-4">
                  <Video className="text-pink-400 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Face-to-Face <span className="text-pink-400">Conversations</span></h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Users report feeling more connected when they can see random faces during video calls.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 px-4" data-animate id="privacy">
        <div className="max-w-7xl mx-auto">
          <div className={`bg-gray-800/50 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-gray-700/50 text-center transition-all duration-1000 ${isVisible['privacy'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center space-x-4 mb-6 sm:mb-8">
              <Shield className="text-pink-400" size={40} />
              <Lock className="text-pink-400" size={28} />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">100% Private & <span className="text-pink-400">Anonymous</span> Calls</h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 sm:mb-4">Your identity remains completely confidential while meeting random people.</p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">Every call is fully anonymous and secure, even with video enabled.</p>
            
            <div className="flex justify-center space-x-6 sm:space-x-8">
              {randomFaces.length > 5 && (
                <>
                  <RandomUserImage face={randomFaces[5]} size="w-16 h-16 sm:w-20 sm:h-20" />
                  <RandomUserImage face={randomFaces[6]} size="w-16 h-16 sm:w-20 sm:h-20" />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FIXED - Features Section - REMOVED DUPLICATE ID */}
      <section id="features" className="py-12 sm:py-16 md:py-20 px-4" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="text-pink-400" size={20} />
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Gupshup Features
              </h2>
              <Sparkles className="text-pink-400" size={20} />
            </div>
            <p className={`text-base sm:text-lg md:text-xl text-gray-300 transition-all duration-1000 delay-300 ${isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              At Gupshup, we are committed to providing a seamless and secure communication experience with <span className="text-pink-400">random people</span>. Our standout features ensure that every interaction is <span className="text-pink-400">meaningful</span>, <span className="text-purple-400">enjoyable</span>, and <span className="text-pink-400">worry-free</span>.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 transition-all duration-1000 delay-500 ${isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-700/50 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-sm sm:text-lg mb-3">Privacy First</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Your conversations with random people are safeguarded with end-to-end encryption, ensuring complete privacy and confidentiality.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-700/50 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-sm sm:text-lg mb-3">Random Video Calls</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Connect with random people through high-quality video calls with crystal-clear face-to-face communication.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-700/50 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-sm sm:text-lg mb-3">New Faces Every Time</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Meet different people with each call - our algorithm ensures you always connect with someone new and interesting.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-700/50 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-sm sm:text-lg mb-3">Safe Random Matching</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Our secure matching system ensures safe connections with verified users while maintaining complete anonymity.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-700/50 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-sm sm:text-lg mb-3">Quality Connections</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Experience meaningful conversations with people who share similar interests and values through our smart matching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED - About Section - REMOVED DUPLICATE ID */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4" data-animate>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-3 sm:p-4 shadow-2xl mx-auto">
              <div className="w-full h-full bg-gradient-to-b from-pink-100 to-white rounded-2xl p-3 sm:p-4 relative overflow-hidden">
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base">G</span>
                  </div>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <Heart className="text-pink-500" size={20} />
                </div>
                <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-3 sm:border-4 border-pink-200">
                    {randomFaces.length > 0 && (
                      <RandomUserImage face={randomFaces[0]} size="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" />
                    )}
                  </div>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm sm:text-xl">×</span>
                  </div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={14} />
                  </div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Video className="text-white" size={14} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements - Hidden on mobile */}
            {randomFaces.length > 1 && (
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                  <RandomUserImage face={randomFaces[1]} size="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
              </div>
            )}
            
            {randomFaces.length > 2 && (
              <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                  <RandomUserImage face={randomFaces[2]} size="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
              </div>
            )}
            
            {/* Floating hearts */}
            <div className="absolute top-1/4 left-0 animate-bounce">
              <Heart className="text-pink-400" size={16} />
            </div>
            <div className="absolute bottom-1/4 right-0 animate-bounce delay-500">
              <Heart className="text-purple-400" size={14} />
            </div>
          </div>

          <div className={`space-y-4 sm:space-y-6 order-1 lg:order-2 transition-all duration-1000 ${isVisible['about'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="text-pink-400" size={20} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">About Us</h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Welcome to <span className="text-pink-400 font-semibold">Gupshup</span>, a platform where conversations with <span className="text-purple-400 font-semibold">random people</span> create meaningful connections. With voice and video calls, meet new faces, share special moments, and find someone to share your journey with.
            </p>

            <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              At Gupshup, we prioritize privacy, quality, and affordability while connecting you with <span className="text-pink-400 font-semibold">random people from all over India</span>. Our calls are <span className="text-pink-400 font-semibold">end-to-end encrypted</span>, ensuring your chats with strangers stay private and secure. With <span className="text-purple-400 font-semibold">high-definition video</span>, seeing new faces feels effortless, no matter where you are.
            </p>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm sm:text-base">Connect with random people and build real relationships through video calls.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm sm:text-base">See new faces every time you call - never the same person twice.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm sm:text-base">Safe, anonymous, and meaningful communication with complete strangers.</span>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Whether you're here to share your stories with random people, make friends through video calls, or find a meaningful connection with someone new, Gupshup provides a safe and welcoming space to create lasting memories with strangers who might become friends.
            </p>
          </div>
        </div>
      </section>

      {/* FIXED - Blogs Section - REMOVED DUPLICATE ID */}
      <section id="blogs" className="py-12 sm:py-16 md:py-20 px-4" data-animate>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['blogs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Blog & Updates
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-300 mb-8 transition-all duration-1000 delay-300 ${isVisible['blogs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Stay updated with the latest news, tips, and stories from the Gupshup community
          </p>
          <div className={`bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 transition-all duration-1000 delay-500 ${isVisible['blogs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-300">Blog section coming soon! Stay tuned for exciting content about connecting with random people.</p>
          </div>
        </div>
      </section>

      {/* FIXED - FAQ Section - REMOVED DUPLICATE ID */}
      <section id="faqs" className="py-12 sm:py-16 md:py-20 px-4" data-animate>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-white text-lg sm:text-2xl">?</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['faqs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-base sm:text-lg md:text-xl text-gray-300 transition-all duration-1000 delay-300 ${isVisible['faqs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Find answers to common questions about Gupshup App and get the support you need
            </p>
          </div>

          <div className={`space-y-3 sm:space-y-4 transition-all duration-1000 delay-500 ${isVisible['faqs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-300"
                >
                  <span className="font-semibold text-sm sm:text-lg pr-4">{faq.question}</span>
                  <ChevronRight 
                    className={`transform transition-transform duration-300 flex-shrink-0 ${
                      activeQuestion === index ? 'rotate-90' : ''
                    }`} 
                    size={20} 
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeQuestion === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-4 sm:p-6 pt-0 text-gray-300 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Made Responsive */}
      <section className="py-12 sm:py-16 md:py-20 px-4" data-animate id="newsletter">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 transition-all duration-1000 ${isVisible['newsletter'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Stay Connected
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${isVisible['newsletter'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get the latest updates on new features and exciting announcements
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto transition-all duration-1000 delay-500 ${isVisible['newsletter'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors duration-300 text-sm sm:text-base"
            />
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer - WORKING navigation */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">G</span>
                </div>
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Gupshup
                </span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Bringing People Closer Through Random Video Calls.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Experience seamless communication with crystal-clear video calls, meet random people, and create meaningful connections worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
                <button className="bg-purple-600 hover:bg-purple-700 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transform hover:scale-105 transition-all duration-300">
                  Download on the App Store
                </button>
                <button className="bg-green-600 hover:bg-green-700 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transform hover:scale-105 transition-all duration-300">
                  Get it on Google Play
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-pink-400">Platform</h3>
              <div className="space-y-2 sm:space-y-3">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer w-full text-left bg-transparent border-0">Home</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer w-full text-left bg-transparent border-0">About Us</button>
                <button onClick={() => scrollToSection('features')} className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer w-full text-left bg-transparent border-0">Features</button>
                <button onClick={() => scrollToSection('listeners')} className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer w-full text-left bg-transparent border-0">Listeners</button>
                <button onClick={() => scrollToSection('blogs')} className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer w-full text-left bg-transparent border-0">Blogs</button>
                <button onClick={() => scrollToSection('faqs')} className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer w-full text-left bg-transparent border-0">FAQs</button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-pink-400">Contact & Support</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin size={14} className="flex-shrink-0 mt-1" />
                  <div className="text-xs sm:text-sm">
                    <div>Greater Noida West,</div>
                    <div>Uttar Pradesh, India</div>
                    <div>201305</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail size={14} className="flex-shrink-0" />
                  <span className="text-xs sm:text-sm">admin@Gupshup.in</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone size={14} className="flex-shrink-0" />
                  <span className="text-xs sm:text-sm">+91 7678238003</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-2 sm:space-y-3">
                <a href="/terms-and-conditions" className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base">Terms & Conditions</a>
                <a href="/privacy-policy" className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base">Privacy Policy</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">Copyright © 2025 Gupshup. All Rights Reserved.</p>
            <p className="text-gray-400 text-xs sm:text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="text-pink-500" size={14} />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GupshupWebsite;
