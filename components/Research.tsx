type Status = "Completed" | "Current" | "Future"

type Node = {
  id: string
  title: string
  status: Status
  year: string
  description: string
  details: string
  href?: string
  x: number // percent (0..100) within SVG/viewbox
  y: number // percent (0..100)
}

type Edge = {
  from: string
  to: string
  bend?: number // positive bends right/down, negative left/up
}

export default function Research() {
  const nodes: Node[] = [
    {
      id: "improver",
      title: "ImProver",
      status: "Completed",
      year: "2024",
      description: "Agentic proof optimization in Lean4",
      details: "",
      href: "https://arxiv.org/abs/2410.04753",
      x: 72,
      y: 2,
    },
    {
      id: "improver2",
      title: "ImProver 2",
      status: "Completed",
      year: "2025",
      description: "Self-improving proof optimization",
      details: "",
      href: "https://github.com/riyazahuja/improver",
      x: 72,
      y: 22,
    },
    {
      id: "agora_v01",
      title: "Agora v0.1",
      status: "Completed",
      year: "2025",
      description: "Core mathematics marketplace",
      details: "",
      href: "https://agora.stagiralabs.com/",
      x: 52,
      y: 40,
    },
    {
      id: "compass",
      title: "Compass",
      status: "Current",
      year: "2025",
      description: "Knowledge graphs for automated conjecturing",
      details: "",
      x: 20,
      y: 58,
    },
    {
      id: "metaprover",
      title: "MetaProver",
      status: "Current",
      year: "2025",
      description: "Infrastructure SDK for large-scale neural theorem proving",
      details: "",
      x: 84,
      y: 58,
    },
    {
      id: "agora_ml",
      title: "Agora‑ML",
      status: "Future",
      year: "2025",
      description: "Multi-agent RL for formal mathematical research",
      details: "",
      x: 52,
      y: 75,
    },
    {
      id: "agora",
      title: "Agora",
      status: "Future",
      year: "2026",
      description: "Full-scale automated mathematical research platform",
      details: "",
      x: 52,
      y: 94,
    },
  ]

  const edges: Edge[] = [
    // top vertical chain
    { from: "improver", to: "improver2", bend: 0 },
    { from: "improver2", to: "agora_v01", bend: 0 },
    // circular ring around center
    // { from: "compass", to: "metaprover", bend: 0 }, // upper arc
    // { from: "compass", to: "metaprover", bend: 0 }, // lower arc
    // small connectors from center to ring
    { from: "agora_v01", to: "compass", bend: -24 },
    { from: "agora_v01", to: "metaprover", bend: 24},
    // bottom chain
    { from: "compass", to: "agora_ml", bend: 24 },
    { from: "metaprover", to: "agora_ml", bend: 24 },
    { from: "agora_ml", to: "agora", bend: 0 },
  ]

  const getStatusBadge = (status: Status) => {
    switch (status) {
      case "Completed":
        return "bg-sage-green text-papyrus-white"
      case "Current":
        return "bg-aureate-gold text-stagira-indigo"
      case "Future":
      default:
        return "bg-graphite-gray text-papyrus-white"
    }
  }

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<string, Node>

  const curve = (a: Node, b: Node, bend = 0) => {
    const cx = (a.x + b.x) / 2 + bend
    const cy = (a.y + b.y) / 2 + bend * 0.4
    // Viewbox is 0..100 in both directions
    return `M ${a.x},${a.y} Q ${cx},${cy} ${b.x},${b.y}`
  }

  return (
    <section id="research">
      <h3 className="text-3xl font-normal mb-16 mt-5 min-h-40 pt-32">research.</h3>

      <p className="text-base mb-8 leading-relaxed">
        We’re a group of researchers and students exploring how multi-agent artificial intelligence can transform how mathematics research is done. Our research brings together game theory, reinforcement learning, and formal methods, to design environments where autonomous mathematicians can work alongside humans to build formal libraries of mathematical research.
</p>
<p>
At the heart of our mission is a belief that real-world mathematical research can be seen as a marketplace of ideas, where individuals barter and share their ideas for the growth of a central corpus of knowledge. <a href="https://www.agora.stagiralabs.com"><i>Agora</i></a> – Greek for marketplace – simply formalizes this belief.
</p>
<p>
Agora treats mathematical research as a living economy of ideas, where neural models trained to conjecture, prove, and reason about mathematics can interact within a shared mathematical universe. The goal isn’t just to automate proofs, but to create an ecosystem where discovery accelerates through interaction and economic rewards, similar to the real-world research community, but scaled and optimized by machines. In Agora, agents can trade, buy, and sell theorems and their proofs, aligning incentives through rewards and encouraging “coopetition”. As a result, the Agora library grows autonomously and collaboratively, becoming the reward signal for discovery. We aim to use this signal to create a scalable model of scientific progress, where contributions are automatically evaluated, rewarded, and propagated. 
</p>
<p>
Ultimately, our research seeks to reimagine how discovery happens. We believe that by treating mathematics as a market of interacting agents, we can accelerate not only proof automation but also the process of research itself, leading to a system where humans and AI work alongside each other for the sake of collective scientific discovery.
      </p>

    </section>
  )
}
import type { ReactNode } from "react"
