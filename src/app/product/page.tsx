export default function ProductPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Product Page</h1>
      <p className="mb-4">
        Here you can showcase a specific product or service you offer. 
        Describe its features, benefits, and why it's unique.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Featured Product</h2>
        <p className="mb-4">
          Detailed description of your product. Highlight its key features, 
          how it solves problems, and why customers should be interested.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  )
}