import Image from 'next/image'

export default function PortfolioPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/placeholder.svg"
            alt="Project 1"
            width={300}
            height={200}
            className="mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-2">Project 1</h2>
          <p className="mb-4">
            Description of Project 1. Highlight the key features, technologies used, 
            and your role in the project.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/placeholder.svg"
            alt="Project 2"
            width={300}
            height={200}
            className="mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-2">Project 2</h2>
          <p className="mb-4">
            Description of Project 2. Explain the challenges you faced and how you 
            overcame them.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/placeholder.svg"
            alt="Project 3"
            width={300}
            height={200}
            className="mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-2">Project 3</h2>
          <p className="mb-4">
            Description of Project 3. Mention the impact of the project and any 
            positive outcomes.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
      </div>
    </div>
  )
}