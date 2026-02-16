"use client"

import { useState, useRef, useCallback, useEffect } from "react"

interface Song {
  title: string
  artist: string
  youtubeId: string
}

const playlist: Song[] = [
  { title: "Black Swan", artist: "BTS", youtubeId: "0lapF4DQPKQ" },
  { title: "People", artist: "Agust D", youtubeId: "PLSQhFxBsas" },
  { title: "Snooze", artist: "Agust D", youtubeId: "okfdIIUQOik" },
  { title: "Notes'n'Words", artist: "ONE OK ROCK", youtubeId: "6X8smR_pSXI" },
  { title: "Letting Go", artist: "ONE OK ROCK", youtubeId: "Lb3eBql5ABM" },
  { title: "Tiny Pieces", artist: "ONE OK ROCK", youtubeId: "q4kGS0NIKU4" },
]

interface MusicPlayerProps {
  autoStart?: boolean
}

export function MusicPlayer({ autoStart }: MusicPlayerProps) {
  const [currentSong, setCurrentSong] = useState(() =>
    Math.floor(Math.random() * playlist.length)
  )
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (autoStart && !isPlaying) {
      setIsPlaying(true)
    }
  }, [autoStart])
  const [isExpanded, setIsExpanded] = useState(false)
  const playerRef = useRef<HTMLIFrameElement>(null)

  const song = playlist[currentSong]

  const handlePlay = useCallback(() => {
    setIsPlaying(true)
  }, [])

  const handlePause = useCallback(() => {
    setIsPlaying(false)
  }, [])

  const handleSongSelect = useCallback((index: number) => {
    setCurrentSong(index)
    setIsPlaying(true)
  }, [])

  const handleNext = useCallback(() => {
    setCurrentSong((prev) => (prev + 1) % playlist.length)
    setIsPlaying(true)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length)
    setIsPlaying(true)
  }, [])

  return (
    <>
      {/* Hidden YouTube iframe for audio */}
      {isPlaying && (
        <iframe
          key={song.youtubeId}
          ref={playerRef}
          className="hidden"
          src={`https://www.youtube.com/embed/${song.youtubeId}?autoplay=1&loop=0&enablejsapi=1`}
          allow="autoplay; encrypted-media"
          title={`Playing ${song.title}`}
        />
      )}

      {/* Music player bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/15 bg-card/90 backdrop-blur-xl">
        {/* Expanded playlist */}
        {isExpanded && (
          <div className="border-b border-primary/10 px-4 py-3">
            <div className="mx-auto max-w-lg">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {"Rainie's Playlist"}
                </p>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Collapse playlist"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="6 15 12 9 18 15" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-0.5">
                {playlist.map((s, i) => (
                  <button
                    key={s.youtubeId}
                    onClick={() => handleSongSelect(i)}
                    type="button"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-all ${
                      i === currentSong
                        ? "bg-primary/15 text-primary"
                        : "text-foreground/70 hover:bg-secondary/80 hover:text-foreground"
                    }`}
                  >
                    <span className="w-6 text-center text-xs text-muted-foreground">{i + 1}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{s.title}</p>
                      <p className="truncate text-[11px] text-muted-foreground">{s.artist}</p>
                    </div>
                    {i === currentSong && isPlaying && (
                      <div className="flex h-3 items-end gap-0.5">
                        <span className="w-0.5 animate-pulse bg-primary" style={{ height: "60%", animationDelay: "0ms" }} />
                        <span className="w-0.5 animate-pulse bg-primary" style={{ height: "100%", animationDelay: "150ms" }} />
                        <span className="w-0.5 animate-pulse bg-primary" style={{ height: "40%", animationDelay: "300ms" }} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Controls bar */}
        <div className="mx-auto flex max-w-lg items-center gap-4 px-4 py-3">
          {/* Song info */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex min-w-0 flex-1 items-center gap-3 text-left"
            aria-label="Toggle playlist"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="hsl(320, 80%, 55%)" aria-hidden="true">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">{song.title}</p>
              <p className="truncate text-xs text-muted-foreground">{song.artist}</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="shrink-0 text-muted-foreground" aria-hidden="true">
              {isExpanded ? (
                <polyline points="6 15 12 9 18 15" />
              ) : (
                <polyline points="6 9 12 15 18 9" />
              )}
            </svg>
          </button>

          {/* Playback controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Previous song"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={isPlaying ? handlePause : handlePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Next song"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
