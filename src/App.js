import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import profileImg from "./basheer_profile.jpg"; // Replace with actual image if needed

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-purple-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20 px-6 text-center animate-fade-in">
        <img
          src={profileImg}
          alt="Majety Naga Venkata Rohit"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wide animate-slide-up">Majety Naga Venkata Rohit</h1>
        <p className="text-xl font-medium animate-slide-up">DevOps Engineer | AWS | Terraform | Kubernetes | Jenkins</p>
        <a
          href="/Rohit_Resume.pdf"
          download
          className="inline-block mt-6 bg-white text-purple-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-purple-200 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </section>

      {/* Summary */}
      <section className="p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4 text-purple-900 border-b-4 border-purple-300 pb-2">🧾 Professional Summary</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          DevOps Engineer with 2+ years of experience in automating, managing, and optimizing software delivery processes. Hands-on with Docker, Kubernetes, Terraform, Jenkins, and CI/CD automation. Skilled in cloud provisioning (AWS), configuration management (Ansible), and monitoring tools (Prometheus, Grafana). Strong in Git workflows, security scanning tools, and cloud cost optimization.
        </p>
      </section>

      {/* Education */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-300 pb-2">🎓 Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Bachelor of Technology – Computer Science and Engineering",
              college: "JNTUK - PSCMR College of Engineering and Technology, Vijayawada",
              score: "2018 - 2022"
            },
            {
              title: "Intermediate – MPC",
              college: "Sarada Educational Institutions, Vijayawada",
              score: "2016 - 2018"
            },
            {
              title: "S.S.C",
              college: "Nalanda Vidya Niketan, Vijayawada",
              score: "2015 - 2016"
            }
          ].map((edu, index) => (
            <div key={index} className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-black mb-2">{edu.title}</h3>
              <p className="text-gray-800 font-medium">{edu.college}</p>
              <p className="text-purple-900 font-bold mt-2">{edu.score}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-300 pb-2">🧠 Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Cloud Platforms", items: ["AWS (EC2, S3, VPC, IAM, SNS, ASG, ELB, RDS)"] },
            { title: "IaC", items: ["Terraform"] },
            { title: "CI/CD Tools", items: ["Jenkins", "AWS CodePipeline"] },
            { title: "Build Tools", items: ["Maven"] },
            { title: "SCM & Version Control", items: ["Git", "GitHub", "Bitbucket"] },
            { title: "Containerization & Orchestration", items: ["Docker", "Kubernetes"] },
            { title: "Config Management", items: ["Ansible"] },
            { title: "Monitoring", items: ["Prometheus", "Grafana", "Datadog", "CloudWatch"] },
            { title: "Security & Audit", items: ["SonarQube", "Trivy", "OWASP"] },
            { title: "Scripting", items: ["Bash"] },
            { title: "Operating Systems", items: ["Linux", "Windows"] },
            { title: "Methodologies", items: ["SDLC", "Agile/Scrum", "Waterfall"] }
          ].map((skill, idx) => (
            <div key={idx} className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-3">{skill.title}</h3>
              <ul className="list-disc pl-6 text-gray-800 text-lg space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="bg-indigo-50 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-400 pb-2">💼 Work Experience</h2>

        <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105 mb-6">
          <h3 className="text-xl font-semibold text-black mb-2">
            DevOps Engineer – Wiselink Global Services Pvt Ltd <span className="text-sm text-gray-600">(Nov 2024 – Present)</span>
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-md">
            <li>Implemented CI/CD using Jenkins integrated with Git and Maven.</li>
            <li>Designed scalable AWS infrastructure with Terraform.</li>
            <li>Deployed Docker containers to Kubernetes clusters with high availability.</li>
            <li>Created Prometheus-Grafana dashboards for proactive monitoring.</li>
            <li>Established Git strategies for efficient code collaboration.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold text-black mb-2">
            DevOps Engineer – Wipro Limited <span className="text-sm text-gray-600">(May 2022 – Aug 2024)</span>
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-md">
            <li>Automated AWS infrastructure provisioning with Terraform.</li>
            <li>Developed Ansible playbooks for application deployment and config.</li>
            <li>Streamlined CI/CD pipelines in Jenkins with Maven and Git.</li>
            <li>Configured Jenkins security with RBAC and build farm setup.</li>
            <li>Dockerized applications and managed images via Docker Hub.</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-300 pb-2">📜 Certifications</h2>
        <div className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105">
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg">
            <li>Amazon Web Services Certified Cloud Practitioner</li>
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>Microsoft Certified: Azure Data Fundamentals</li>
            <li>TCS iON Career Edge – Knockdown the Lockdown</li>
            <li>GitHub Foundations</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-purple-900 text-white p-8 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">📬 Get in Touch</h2>
        <p className="mb-2">📧 nagavenkatarohitmajety@gmail.com</p>
        <p>📞 +91 6302905032</p>
        <p>📍 Vijayawada, Andhra Pradesh, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/rohit23106/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/majety-naga-venkata-rohit-a88baa190/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:nagavenkatarohitmajety@gmail.com" className="hover:text-indigo-200 transition">
            <MdEmail size={30} />
          </a>
          <a href="tel:6302905032" className="hover:text-indigo-200 transition">
            <MdPhone size={30} />
          </a>
        </div>
      </section>
    </main>
  );
}
