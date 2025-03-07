import Image from "next/image"
import { getDictionary } from "../get-dictionary"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Hello</h1>
      <p className="text-xl mb-8">{dict.home.welcome}</p>
      <Image
        src="/placeholder.svg?height=200&width=200"
        alt="Malgorzata Bilejszys"
        width={200}
        height={200}
        className="rounded-full mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border">
          <h2 className="text-2xl font-bold mb-2">{dict.home.bio.title}</h2>
          <ul className="list-disc list-inside">
            <li>
              <b>{dict.home.bio.who} </b>
              {dict.home.bio.whoDesc}
            </li>
            <li>
              <b>{dict.home.bio.what} </b>
              {dict.home.bio.whatDesc}
            </li>
            <li>
              <b>{dict.home.bio.mission} </b>
              {dict.home.bio.missionDesc}
            </li>
          </ul>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border">
          <h2 className="text-2xl font-bold mb-2">{dict.home.work?.title || "Work Experience"}</h2>
          <h3 className="text-xl mb-2">{dict.home.work?.subtitle || "My professional journey"}</h3>
          <p>Your work experience details will go here</p>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border">
          <h2 className="text-2xl font-bold mb-2">{dict.home.projects?.title || "Projects"}</h2>
          <h3 className="text-xl mb-2">{dict.home.projects?.subtitle || "Featured work"}</h3>
          <p>Brief description of your featured projects. Highlight key technologies used and your role.</p>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border">
          <h2 className="text-2xl font-bold mb-2">{dict.home.contact?.title || "Contact"}</h2>
          <h3 className="text-xl mb-2">{dict.home.contact?.subtitle || "Get in touch"}</h3>
          <p>Your contact information will go here</p>
        </div>
      </div>
    </div>
  )
}

