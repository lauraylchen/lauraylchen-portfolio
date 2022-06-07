import React from "react"
import Header from "./header"
import About from "./about"
import Projects from "./projects"
import Technology from "./technology"
import Contact from "./contact"

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Technology />
      <Contact />
    </main>
  )
}
