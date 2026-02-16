"use client"

import { useState } from "react"
import Image from "next/image"
import { LetterContent } from "./letter-content"

interface EnvelopeCardProps {
  onOpen?: () => void
}

export function EnvelopeCard({ onOpen }: EnvelopeCardProps) {
  const [isOpened, setIsOpened] = useState(false)

  function handleOpen() {
    setIsOpened(true)
    onOpen?.()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      {/* Sealed envelope state */}
      {!isOpened && (
        <div className="flex flex-col items-center gap-8">
          {/* Title */}
          <div className="text-center">
            <p className="mb-2 text-sm tracking-[0.3em] text-muted-foreground">
              A LETTER FOR
            </p>
            <h1 className="font-serif text-5xl font-bold tracking-wider text-foreground sm:text-7xl">
              Rainie
            </h1>
            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-primary/40" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(320, 80%, 55%)" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <div className="h-px w-12 bg-primary/40" />
            </div>
          </div>

          {/* Envelope */}
          <button
            onClick={handleOpen}
            type="button"
            className="group relative cursor-pointer transition-transform duration-300 hover:scale-105"
            aria-label="Open the Valentine's letter"
          >
            {/* Envelope body */}
            <div className="relative h-56 w-80 overflow-hidden rounded-xl border border-primary/20 bg-secondary shadow-2xl shadow-primary/10 sm:h-64 sm:w-96">
              {/* Envelope flap (top triangle) */}
              <div
                className="absolute inset-x-0 top-0 z-10"
                style={{
                  height: "50%",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background: "hsl(270, 25%, 13%)",
                  borderBottom: "1px solid hsl(320, 80%, 55%, 0.15)",
                }}
              />

              {/* Envelope inner shadow line */}
              <div className="absolute inset-x-0 top-0 z-20" style={{
                height: "50%",
                clipPath: "polygon(0 0, 50% 100%, 100% 0, 98% 0, 50% 95%, 2% 0)",
                background: "hsl(320, 80%, 55%, 0.08)",
              }} />

              {/* Wax seal */}
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/40 shadow-lg shadow-primary/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/40 sm:h-24 sm:w-24">
                  <Image
                    src="/images/wax-seal.jpg"
                    alt="Wax seal"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom flaps */}
              <div className="absolute inset-x-0 bottom-0" style={{
                height: "55%",
                background: "hsl(270, 25%, 12%)",
              }} />
              <div className="absolute inset-x-0 bottom-0" style={{
                height: "55%",
                clipPath: "polygon(0 0, 0 100%, 50% 30%)",
                background: "hsl(270, 25%, 11%)",
              }} />
              <div className="absolute inset-x-0 bottom-0" style={{
                height: "55%",
                clipPath: "polygon(100% 0, 100% 100%, 50% 30%)",
                background: "hsl(270, 25%, 11%)",
              }} />
            </div>

            {/* Hover hint */}
            <p className="mt-6 text-center text-sm tracking-widest text-muted-foreground transition-all group-hover:text-primary">
              click to open
            </p>
          </button>
        </div>
      )}

      {/* Opened letter state */}
      {isOpened && (
        <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* Letter paper */}
          <div className="relative rounded-2xl border border-primary/15 bg-card/80 px-6 py-10 shadow-2xl shadow-primary/5 backdrop-blur-sm sm:px-12 sm:py-14">
            {/* Close button - top right */}
            <button
              type="button"
              onClick={() => setIsOpened(false)}
              className="group absolute right-5 top-5 z-10 flex items-center gap-1.5 rounded-full border border-primary/20 bg-secondary/60 px-3 py-1.5 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-secondary hover:text-primary"
              aria-label="Close the letter"
            >
              <span className="text-[11px] tracking-widest uppercase">Seal</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Decorative corner flourishes */}
            <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-primary/20" />
            <div className="absolute right-4 top-14 h-8 w-8 border-r border-t border-primary/20" />
            <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-primary/20" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-primary/20" />

            <LetterContent />
          </div>
        </div>
      )}
    </div>
  )
}
