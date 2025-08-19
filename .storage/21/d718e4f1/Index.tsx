import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code, Users, Award, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Comprehensive Curriculum",
      description: "From Java basics to advanced concepts with hands-on projects"
    },
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "Practical Coding",
      description: "Real-world examples and coding exercises in every lesson"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Beginner Friendly",
      description: "No prior programming experience required to start"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Industry Standards",
      description: "Learn best practices used in professional development"
    }
  ];

  const stats = [
    { number: "12+", label: "Comprehensive Modules" },
    { number: "50+", label: "Coding Exercises" },
    { number: "100%", label: "Hands-on Learning" },
    { number: "24/7", label: "Access Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Java Mastery</h1>
          </div>
          <Button onClick={() => navigate('/course')} className="bg-blue-600 hover:bg-blue-700">
            Start Learning
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="mb-4">
            <Star className="h-4 w-4 mr-1" />
            Complete Java Programming Course
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Master Java Programming
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Learn Java from scratch with our comprehensive course. Build real projects, 
            master object-oriented programming, and become a confident Java developer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              onClick={() => navigate('/course')} 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Start Course Now
            </Button>
            <Button 
              onClick={() => navigate('/dashboard')} 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-3"
            >
              Dashboard
            </Button>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              Self-paced learning
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Java Course?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed for students who want to build a strong foundation in Java programming
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Course Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600">
              Complete curriculum covering all essential Java concepts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Java Fundamentals & Syntax",
              "Object-Oriented Programming",
              "Data Structures & Collections",
              "Exception Handling",
              "File I/O Operations",
              "Multithreading & Concurrency",
              "Database Connectivity (JDBC)",
              "GUI Development with Swing",
              "Web Development Basics",
              "Design Patterns",
              "Testing with JUnit",
              "Real-world Projects"
            ].map((topic, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Java Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully learned Java programming with our course
          </p>
          <Button 
            onClick={() => navigate('/course')}
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-3"
          >
            Begin Learning Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Java Mastery</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Your gateway to mastering Java programming
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Java Mastery Course. Built with ❤️ for students.
          </p>
        </div>
      </footer>
    </div>
  );
}