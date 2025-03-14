import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { RequestAccess } from "@/components/RequestAccess"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <RequestAccess />
      <Features />
    </main>
  )
}