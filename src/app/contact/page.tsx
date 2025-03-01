export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-4">
       I am always open to new opportunities and collaborations. Feel free to reach out 
       to me through any of the following methods:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <ul className="space-y-2">
            <li>Email: your.email@example.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Location: City, Country</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Social Media</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/yourhandle" className="text-blue-500 hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}