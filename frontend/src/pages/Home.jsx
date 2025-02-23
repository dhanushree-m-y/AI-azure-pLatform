import React, { useState } from 'react';
import { 
  BookOpen, 
  Brain, 
  Languages, 
  Volume2, 
  Users, 
  ChevronRight, 
  Mail,
  MessageCircle,
  ImageIcon 
} from 'lucide-react';

// Quiz Component
const Quiz = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [hint, setHint] = useState('');
  const [translation, setTranslation] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const subjects = [
    { id: 1, name: "Food Science", icon: <BookOpen className="w-6 h-6" /> },
    { id: 2, name: "Mathematics", icon: <MessageCircle className="w-6 h-6" /> },
    { id: 3, name: "Social Studies", icon: <Volume2 className="w-6 h-6" /> }
  ];

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setCurrentQuestion({
      question: "What are the main sources of our food?",
      hints: ["One source grows from the ground, providing essential nutrients."]
    });
  };

  const handleSubmit = (action) => {
    switch (action) {
      case 'answer':
        setUserInput('');
        setFeedback('The answer is: Plants and Animals');
        break;
      case 'hint':
        setHint(currentQuestion?.hints[attempts]);
        setAttempts(prev => prev + 1);
        break;
      case 'translate':
        setTranslation("ಒಂದು ಮೂಲವು ನೆಲದಿಂದ ಬೆಳೆಯುತ್ತದೆ, ಅಗತ್ಯ ಪೋಷಕಾಂಶಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.");
        break;
      case 'image':
        setShowImageUpload(true);
        break;
      default:
        setFeedback('Checking your answer...');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {!selectedSubject ? (
        <div>
          <h3 className="text-2xl text-center mb-8">Select a Subject</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => handleSubjectSelect(subject)}
                className="flex items-center justify-center space-x-3 bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition"
              >
                {subject.icon}
                <span>{subject.name}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-gray-700 rounded-lg p-8">
          <div className="mb-8">
            <h3 className="text-2xl mb-4">{currentQuestion?.question}</h3>
            {hint && (
              <div className="bg-gray-600 p-4 rounded-lg mb-4">
                <p className="text-blue-300">Hint: {hint}</p>
              </div>
            )}
            {translation && (
              <div className="bg-gray-600 p-4 rounded-lg mb-4">
                <p className="text-green-300">ಕನ್ನಡ: {translation}</p>
              </div>
            )}
            {feedback && (
              <div className="bg-gray-600 p-4 rounded-lg mb-4">
                <p className="text-yellow-300">{feedback}</p>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full p-3 bg-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button
                onClick={() => handleSubmit('submit')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Submit
              </button>
              <button
                onClick={() => handleSubmit('hint')}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Hint
              </button>
              <button
                onClick={() => handleSubmit('translate')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Translate
              </button>
              <button
                onClick={() => handleSubmit('answer')}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Show Answer
              </button>
            </div>

            <button
              onClick={() => handleSubmit('image')}
              className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition flex items-center justify-center space-x-2"
            >
              <ImageIcon className="w-5 h-5" />
              <span>Upload Image for OCR</span>
            </button>

            {showImageUpload && (
              <div className="mt-4 p-4 bg-gray-600 rounded-lg">
                <input
                  type="file"
                  accept="image/*"
                  className="w-full text-gray-300"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-700 p-6 rounded-lg transform transition hover:scale-105">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const DemoCard = ({ title, description, buttonText }) => (
  <div className="bg-gray-700 p-6 rounded-lg text-center">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-300 mb-6">{description}</p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition">
      {buttonText}
    </button>
  </div>
);

const TeamMember = ({ icon, name, role }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-300">{role}</p>
  </div>
);

// Main Component
const Home = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const getStepDescription = (step) => {
    const steps = {
      1: "Select a subject (Math, Science, Social Studies)",
      2: "AI generates questions from stored textbooks",
      3: "Answer questions or request hints",
      4: "Translate content into Kannada if needed",
      5: "Listen to questions & answers via text-to-speech",
      6: "Upload an image to extract text and get AI-generated answers"
    };
    return steps[step];
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-800 shadow-lg z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">AI Learning</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
              <a href="#features" className="hover:text-blue-400 transition">Features</a>
              <a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a>
              <a href="#demo" className="hover:text-blue-400 transition">Demo</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {showQuiz ? (
        <div className="pt-24">
          <Quiz />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section id="home" className="pt-24 pb-20 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Bridging Education Gaps with AI-Powered Learning
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Personalized, Interactive, and Accessible Learning for Every Student
              </p>
              <button 
                onClick={() => setShowQuiz(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Brain className="w-12 h-12 text-blue-400" />}
                  title="AI-Generated Quizzes"
                  description="Auto-generates questions & answers from textbooks using OpenAI"
                />
                <FeatureCard
                  icon={<BookOpen className="w-12 h-12 text-blue-400" />}
                  title="Hints-Based Learning"
                  description="AI provides hints instead of direct answers to encourage critical thinking"
                />
                <FeatureCard
                  icon={<Languages className="w-12 h-12 text-blue-400" />}
                  title="Kannada Translation"
                  description="Powered by Azure Translator API for learning in local languages"
                />
                <FeatureCard
                  icon={<Volume2 className="w-12 h-12 text-blue-400" />}
                  title="Text-to-Speech Learning"
                  description="Azure Speech Services read out questions & answers in Kannada & English"
                />
                <FeatureCard
                  icon={<ImageIcon className="w-12 h-12 text-blue-400" />}
                  title="Image-Based Learning"
                  description="Azure OCR extracts text from images to generate explanations"
                />
                <FeatureCard
                  icon={<ChevronRight className="w-12 h-12 text-blue-400" />}
                  title="React.js Frontend"
                  description="A simple, mobile-friendly interface for seamless learning"
                />
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <div key={step} className="bg-gray-800 p-6 rounded-lg">
                    <div className="text-blue-400 text-xl font-bold mb-4">Step {step}</div>
                    <p className="text-gray-300">
                      {getStepDescription(step)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Other sections remain unchanged */}
        </>
      )}
    </div>
  );
};

export default Home;
