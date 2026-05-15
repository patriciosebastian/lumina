<div align="center">
  <img src="web/public/brand/lumina-horizontal.svg" alt="Lumina" width="200" />
</div>

---

Lumina is a RAG-powered, Bible-based AI chat application for working through faith questions, sitting with scripture, and thinking more carefully about what the Bible says. It responds like a wise, unhurried friend who knows the Bible deeply. Not a generic AI wrapper.

The whole thesis is that sensitive questions regarding the Bible should not be given to an LLM that has to remember the data it was trained on with the possiblity of some kind of mistake or hallucination.

---

## What it does

- **AI Chat:**
Conversations informed by the scriptures.
Provides accuracy: RAG enables real-time retrieval of the Bible text.

---

## Stack

**Core:**
Laravel (PHP), PostgreSQL, Laravel Cashier + Stripe

**RAG Pipeline:**
OpenAI API: `text-embedding-3-large`, `gpt-5.4`
Pinecone: Vector database for Semantic search. I chunked the Bible using a multi-granular approach.

**Frontend:** React, TypeScript, Inertia.js, Tailwind CSS, Vite

**Hosting:** Railway

---

## Features

**Guest sessions.** Unauthenticated users can chat without creating an account, up to a daily limit (10 messages). This required careful handling across rate limiting, session-based storage, and chat migration logic for when guest users register an account.

**Vector search.** Lumina uses OpenAI embeddings + Pinecone to retrieve semantically relevant scripture and context. The vector database holds 3 types of chunks: individual verses, sections mapped by subheadings, and chapters. This shapes responses with a strong level of context and semantic results.

**Subscriptions.** Free and Pro tiers, managed through Stripe Checkout.

**Design system.** The UI has a deliberate visual identity. This took many iterations using Claude Design. It's documented fully in [`DESIGN.md`](web/DESIGN.md). The goal was something that feels like a well-designed book on renaissance paintings or a kind of seminary environment, not a typical AI SaaS product.
