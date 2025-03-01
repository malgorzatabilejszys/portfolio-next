import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8">
        I'm Malgorzata Bilejszys, a web developer passionate about creating amazing web experiences.
      </p>
      <Image src="/placeholder.svg" alt="Malgorzata Bilejszys" width={200} height={200} className="rounded-full mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">My Skills</h2>
          <ul className="list-disc list-inside">
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Featured Project</h2>
          <h3 className="text-xl mb-2">Project Name</h3>
          <p>Brief description of your featured project. Highlight key technologies used and your role.</p>
        </div>
      </div>
    </div>
  )
}

