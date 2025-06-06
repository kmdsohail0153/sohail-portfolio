import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const glowRef = useRef(null);

  const navItems = [
    { key: "hero", label: "Home" },
    { key: "about", label: "About" },
    { key: "education", label: "Education" },
    { key: "skills", label: "Skills" },
    { key: "projects", label: "Projects" },
    { key: "experience", label: "Experience" },
    { key: "achievements", label: "Achievements" },
    { key: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          break;
        }
      }
    }, { threshold: 0.6 });

    navItems.forEach(({ key }) => {
      const el = document.getElementById(key);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const glow = glowRef.current;
    if (glow) {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans flex relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Glow Cursor */}
      <div
        ref={glowRef}
        className="fixed w-60 h-60 bg-green-400 opacity-10 rounded-full pointer-events-none blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        style={{ transition: "left 0.1s ease, top 0.1s ease", zIndex: 50 }}
      />

      {/* Sidebar */}
      <aside className="w-48 md:w-60 h-screen fixed top-0 left-0 bg-[#0f172a] px-6 py-8 flex flex-col justify-start gap-6">
        <div className="text-green-400 text-2xl font-mono mb-6">Sohail</div>
        <nav className="flex flex-col gap-4 text-base font-mono">
          {navItems.map(({ key, label }) => (
            <a
              key={key}
              href={`#${key}`}
              className={`transition ${
                activeSection === key ? "text-white font-semibold" : "text-slate-400"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-48 md:ml-60 w-full relative z-10 scroll-smooth">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full text-lg leading-relaxed">
            <p className="text-green-400 text-base font-mono mb-2">Hi, my name is</p>
            <h1 className="text-4xl font-bold text-slate-100 leading-tight">Kurnool MD Sohail.</h1>
            <h2 className="text-2xl text-slate-400 font-semibold mt-2">Tech Enthusiast | Developer | Problem Solver</h2>
            <p className="text-slate-400 mt-6 max-w-xl">
              Based in Kurnool, Andhra Pradesh — Adaptable and motivated individual with a strong foundation in technical, communication, and problem-solving skills, seeking a 
              challenging role to contribute effectively to organizational goals. Committed to continuous learning and delivering impactful results, 
              while fostering growth and collaboration in a dynamic environment. Motivated to learn and grow within a dynamic tech 
              environment. And led a startup team, managing sales, operations, and customer interactions.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">About Me</h2>
            <p className="text-slate-400">
              Motivated and adaptable tech enthusiast with strong foundations in software development and team leadership. Passionate about solving real-world problems and delivering intelligent solutions with an innovative mindset and a growth-driven attitude.
            </p>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Education</h2>
            <ul className="text-slate-400 space-y-4">
              <li><strong className="text-slate-100">B.Tech – CSE (AI & ML)</strong><br />Sree Vidyanikethan Engineering College – CGPA: 9.19</li>
              <li><strong className="text-slate-100">12th Grade (MPC)</strong><br />Narayana Junior College – 96.5%</li>
              <li><strong className="text-slate-100">10th Grade</strong><br />Narayana e-Techno Schools – GPA: 10.0</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400">
              <div><h3 className="font-semibold text-slate-100">Programming</h3><p>Java, Python, C++, C, SQL</p></div>
              <div><h3 className="font-semibold text-slate-100">Web Development</h3><p>HTML, CSS, JavaScript, PHP</p></div>
              <div><h3 className="font-semibold text-slate-100">Tools</h3><p>Salesforce, Excel, MS Office</p></div>
              <div><h3 className="font-semibold text-slate-100">Soft Skills</h3><p>Communication, Problem Solving, Time Management</p></div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Projects</h2>
            <ul className="space-y-6 text-slate-400">
              <li><strong className="text-slate-100 text-lg">Early Detection of Diabetic Retinopathy</strong><br />Used Xception, VGG16, ResNet101 for binary classification, and Swin ViT for severity grading of diabetic retinopathy.</li>
              <li><strong className="text-slate-100 text-lg">Library Management System</strong><br />Full-stack app with login, book search, and real-time updates. Built with HTML, CSS, JS, and PHP.</li>
              <li><strong className="text-slate-100 text-lg">Cosmetics Store CRM</strong><br />Salesforce-based CRM for managing customer data, products, and leads.</li>
              <li><strong className="text-slate-100 text-lg">Toll Plaza Data Analysis Dashboard</strong><br />Developed an interactive Power BI dashboard analyzing data and performing data cleaning
 using Python to ensure accuracy and consistency, visualized key metrics, enable stakeholders to gain insights into toll plaza
 distribution and management across different regions.
</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Internship Experience</h2>
            <ul className="text-slate-400 space-y-4">
              <li><strong className="text-slate-100">Salesforce Developer</strong> | May–July 2023<br />Built custom Salesforce apps and integrated APIs using Apex.</li>
              <li><strong className="text-slate-100">Salesforce Admin</strong> | May–July 2024<br />Configured dashboards, managed users, and handled data integrity.</li>
            </ul>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Achievements</h2>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>Coordinator for Mohana Mantra Tech Fest (SVEC)</li>
              <li>Participated in ISTE technical and non-tech events</li>
              <li>Solved 100+ problems on LeetCode (65.9% success rate)</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Contact</h2>
            <p className="text-slate-400 mb-2">
              <Mail className="inline mr-2 text-green-400" size={16} />
              kmdsohail0153@gmail.com
            </p>
            <p className="text-slate-400">
              <Phone className="inline mr-2 text-green-400" size={16} />
              +91 9398882631
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
