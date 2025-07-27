import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/layout/Header";
import Card from "@/components/common/Card";  // Using absolute import with @/

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} min-h-screen bg-gray-50`}>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to ALX Project
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Frontend Development"
            content="Learn modern frontend technologies including React, Next.js, and Tailwind CSS. Build responsive and interactive user interfaces."
          />
          
          <Card
            title="Backend Development"
            content="Master server-side development with Node.js, Express, and database management. Create robust APIs and web services."
          />
          
          <Card
            title="Full Stack Projects"
            content="Combine frontend and backend skills to build complete web applications. Deploy and maintain production-ready solutions."
          />
          
          <Card
            title="DevOps & Deployment"
            content="Learn deployment strategies, CI/CD pipelines, and cloud services. Ensure your applications are scalable and reliable."
          />
          
          <Card
            title="Best Practices"
            content="Follow industry standards for code quality, testing, documentation, and version control using Git and GitHub."
          />
          
          <Card
            title="Career Growth"
            content="Develop professional skills, build a portfolio, and prepare for technical interviews in the software development industry."
          />
        </div>
      </main>
    </div>
  );
}