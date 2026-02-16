"use client"

import Image from "next/image"
import { useState } from "react"
import { EnvelopeCard } from "@/components/envelope-card"
import { FloatingParticles } from "@/components/floating-particles"
import { MusicPlayer } from "@/components/music-player"

export default function Page() {
  const [musicStarted, setMusicStarted] = useState(false)

  function handleFirstInteraction() {
    if (!musicStarted) {
      setMusicStarted(true)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden" onClick={handleFirstInteraction}>
      {/* Background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/card-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div className="relative z-20">
        <EnvelopeCard onOpen={handleFirstInteraction} />
      </div>

      {/* Music player */}
      <MusicPlayer autoStart={musicStarted} />
    </main>
  )
}
