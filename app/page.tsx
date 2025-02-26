
"use client";  // Add this at the top

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Short description of Project 1",
      fullDescription: "Full description of Project 1...",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Short description of Project 2",
      fullDescription: "Full description of Project 2...",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Short description of Project 3",
      fullDescription: "Full description of Project 3...",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Short description of Project 4",
      fullDescription: "Full description of Project 4...",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Hello</h1>
            <h2 className="text-2xl mb-4">Welcome to my portfolio</h2>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Browse my work</button>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto flex gap-8">
          <div className="w-1/3">
            <Image src="/placeholder.svg" alt="Your Name" width={300} height={300} className="rounded-lg" />
          </div>
          <div className="w-2/3">
            <p className="mb-4">
              Here's a brief introduction about myself. I'm a passionate designer with experience in various fields. I
              love creating user-friendly and visually appealing designs that solve real-world problems. My goal is to
              make a positive impact through my work and continue growing as a professional.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded">Go to my CV</button>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Work</h2>
          <div className="grid grid-cols-3 gap-8 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex items-start">
                <Image
                  src="/placeholder.svg"
                  alt={`Project ${item}`}
                  width={100}
                  height={100}
                  className="rounded mr-4"
                />
                <div>
                  <h3 className="font-bold mb-2">Project {item}</h3>
                  <p className="text-sm">Brief description of the project goes here.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded">See more from my portfolio</button>
          </div>
        </div>
      </section>

      {/* Projects I'm Involved In Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects I'm Involved In</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`p-4 border rounded cursor-pointer transition-all duration-300 ${
                  expandedProject === project.id ? "bg-white shadow-lg" : "bg-gray-200"
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <h3 className="font-bold">{project.title}</h3>
                <p>{expandedProject === project.id ? project.fullDescription : project.description}</p>
                {expandedProject === project.id && (
                  <button
                    className="mt-2 text-blue-500"
                    onClick={(e) => {
                      e.stopPropagation()
                      setExpandedProject(null)
                    }}
                  >
                    Close
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto flex gap-8">
          <div className="w-1/3">
            <Image src="/placeholder.svg" alt="Contact" width={300} height={300} className="rounded-lg" />
          </div>
          <div className="w-2/3">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-1">
                  Your Email
                </label>
                <input type="email" id="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold mb-2">Your Name</h3>
              <p>your.email@example.com</p>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm">&copy; 2023 Your Name. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-400">
                LinkedIn
              </Link>
              <Link href="#" className="text-white hover:text-blue-400">
                Twitter
              </Link>
              <Link href="#" className="text-white hover:text-blue-400">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

