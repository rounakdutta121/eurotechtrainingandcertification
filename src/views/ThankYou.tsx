'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Seo } from '../components/Seo'
import { CONTACT } from '../data/services'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  color: string
  size: number
  decay: number
}

type Firework = {
  x: number
  y: number
  tx: number
  ty: number
  vx: number
  vy: number
  color: string
  exploded: boolean
}

const COLORS = ['#ff661d', '#ff8a4d', '#d4af37', '#ffffff', '#5a3f94', '#ffd166']

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function ThankYou() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let width = 0
    let height = 0
    let raf = 0
    let running = true
    const fireworks: Firework[] = []
    const particles: Particle[] = []

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    }

    const launch = () => {
      const x = random(width * 0.15, width * 0.85)
      const tx = x + random(-80, 80)
      const ty = random(height * 0.12, height * 0.42)
      fireworks.push({
        x,
        y: height + 10,
        tx,
        ty,
        vx: (tx - x) / 40,
        vy: (ty - (height + 10)) / 40,
        color: COLORS[Math.floor(random(0, COLORS.length))],
        exploded: false,
      })
    }

    const explode = (fw: Firework) => {
      const count = Math.floor(random(36, 58))
      for (let i = 0; i < count; i += 1) {
        const angle = (Math.PI * 2 * i) / count + random(-0.2, 0.2)
        const speed = random(1.4, 5.2)
        particles.push({
          x: fw.x,
          y: fw.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: Math.random() > 0.35 ? fw.color : COLORS[Math.floor(random(0, COLORS.length))],
          size: random(1.4, 3.2),
          decay: random(0.012, 0.024),
        })
      }
    }

    const tick = () => {
      if (!running) return
      ctx.clearRect(0, 0, width, height)

      if (Math.random() < 0.06) launch()

      for (let i = fireworks.length - 1; i >= 0; i -= 1) {
        const fw = fireworks[i]
        fw.x += fw.vx
        fw.y += fw.vy
        ctx.beginPath()
        ctx.fillStyle = fw.color
        ctx.arc(fw.x, fw.y, 2.4, 0, Math.PI * 2)
        ctx.fill()

        if (fw.y <= fw.ty || Math.abs(fw.x - fw.tx) < 4) {
          explode(fw)
          fireworks.splice(i, 1)
        }
      }

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i]
        p.vy += 0.035
        p.vx *= 0.986
        p.vy *= 0.986
        p.x += p.vx
        p.y += p.vy
        p.alpha -= p.decay

        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.globalAlpha = Math.max(p.alpha, 0)
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }

      raf = window.requestAnimationFrame(tick)
    }

    resize()
    for (let i = 0; i < 4; i += 1) launch()
    raf = window.requestAnimationFrame(tick)
    window.addEventListener('resize', resize)

    return () => {
      running = false
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="thanks-page">
      <Seo
        title="Thank You | Eurotech Training & Certification"
        description="Thank you for contacting Eurotech. Our team will get back to you shortly."
      />

      <canvas ref={canvasRef} className="thanks-fireworks" aria-hidden="true" />

      <div className="thanks-confetti" aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} style={{ ['--i' as string]: String(index) }} />
        ))}
      </div>

      <section className="thanks-stage">
        <div className="thanks-card">
          <p className="thanks-kicker">Enquiry received</p>
          <div className="thanks-badge" aria-hidden="true">
            ✓
          </div>
          <h1>Thank You!</h1>
          <p className="thanks-lead">
            Your enquiry has been submitted successfully.
          </p>
          <p>
            Our team will review your details and contact you shortly. You can
            also reach us anytime on{' '}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> or{' '}
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            .
          </p>
          <div className="thanks-actions">
            <Link className="btn btn-primary" href="/">
              Back to Home
            </Link>
            <Link className="btn btn-outline" href="/#services">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
