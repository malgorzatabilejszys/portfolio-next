export default function CVPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Curriculum Vitae</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Professional Summary</h2>
        <p>
          Experienced web developer with a strong background in front-end technologies 
          and a passion for creating responsive, user-friendly websites.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Web Developer - Company Name</h3>
          <p className="italic">January 2020 - Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed and maintained multiple client websites</li>
            <li>Collaborated with design team to implement responsive layouts</li>
            <li>Optimized website performance and improved load times</li>
          </ul>
        </div>
        {/* Add more work experiences as needed */}
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
          <p>University Name, Graduation Year</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>HTML5, CSS3, JavaScript</li>
          <li>React.js, Next.js</li>
          <li>Node.js, Express.js</li>
          <li>Git, GitHub</li>
          <li>Responsive Web Design</li>
        </ul>
      </section>
    </div>
  )
}