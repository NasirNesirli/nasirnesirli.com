---
title: "Building in Public: Starting Quanta From Zero"
date: 2025-11-09
tags: ["Quanta Updates", "Open Source"]
description: "I'm building Quanta, a clinical laboratory ERP, and I'm going to document the entire journey publicly. Here's why and what comes next."
---

I'm building Quanta, a clinical laboratory ERP, and I'm going to document the entire journey publicly.

This isn't because I think my specific project is uniquely interesting—though I hope it will be useful—but because building in public has become one of the most powerful ways to create something people actually want while building genuine connections with the community you're trying to serve.

## Why Build in Public?

The traditional approach to building software, especially for specialized markets like clinical laboratories, is to work in stealth mode for months or years, perfect your product in isolation, then launch with a big reveal. This approach has obvious appeal: you control the narrative, avoid premature criticism, and can pivot without public scrutiny.

But it also has serious downsides, especially when building for a market as specialized as clinical laboratory operations. How do you know you're building the right features if you're not constantly validating assumptions with people who actually work in labs? How do you build trust in a conservative industry if potential users first encounter your product as a polished marketing website with no history?

Building in public flips this model. Instead of hiding the process, you make it part of the value proposition. The community gets to see how decisions are made, what trade-offs are considered, and how feedback gets incorporated. In return, you get constant reality checks, early adopters who feel invested in the success of the project, and the kind of credibility that only comes from sustained, transparent effort.

## The Clinical Lab Context

This approach feels particularly important for Quanta because clinical laboratories are inherently conservative environments—and for good reason. When your work directly impacts patient diagnosis and treatment, you can't afford to experiment with unreliable tools.

But this conservatism also means that lab professionals have been burned by vendors who promised to understand their workflows but clearly didn't. They're rightly skeptical of new solutions, especially from small companies or individual developers.

Building in public helps address this skepticism by providing transparency into both the technical development process and the domain expertise behind it. When I write about specific laboratory challenges, lab professionals can evaluate whether I actually understand their world. When I make technical decisions about database design or API architecture, developers can assess the quality of the implementation.

This transparency builds trust gradually, which is exactly how trust should be built in healthcare-adjacent markets.

## What "Building in Public" Looks Like

For Quanta, building in public means several things:

**Regular Updates**: Not just major milestones, but the day-to-day progress, challenges, and decisions. What features are getting prioritized and why? What technical problems are proving harder than expected? How are conversations with potential users influencing the roadmap?

**Open Source Core**: The fundamental laboratory operations modules will always be open source. Anyone can examine the code, contribute improvements, or fork the project if they disagree with the direction.

**Public Roadmap**: Development priorities will be visible and influenced by community feedback. This doesn't mean building by committee, but it does mean explaining decisions and being responsive to input from people who actually work in labs.

**Honest Assessment**: Both successes and failures get documented. When features don't work as planned, when user feedback reveals fundamental misunderstandings, when technical debt starts causing problems—all of this gets shared honestly.

**Community Involvement**: As the user base grows, involving lab professionals in feature design, beta testing, and roadmap planning. The goal is to build a product that feels like it was created by the community, not imposed on it.

## Current State: Just Getting Started

Right now, Quanta exists primarily as an idea, some early architectural decisions, and this website. The Frappe framework has been chosen as the foundation because of its strength in building business applications with complex workflows, but actual development is just beginning.

The immediate priorities are:

1. **Core Infrastructure**: Setting up the basic Frappe application structure, database design, and development environment
2. **Inventory Management**: The first major module, focusing on reagent tracking, expiration monitoring, and automated reorder points
3. **Quality Control Framework**: Basic QC tracking and trending capabilities
4. **User Interface Design**: Making sure the interface feels natural to laboratory professionals, not generic business software

Each of these will be developed incrementally, with regular updates on progress, challenges, and decisions.

## What's Different This Time

Building enterprise software in public isn't new, but it's still relatively uncommon in specialized markets like clinical laboratories. Most lab software is built by large, established companies with significant R&D budgets and years-long development cycles.

Quanta takes a different approach: start with deep domain expertise, build the minimum viable product quickly, and iterate rapidly based on real user feedback. The open source model reduces barriers to adoption while the public development process builds trust and community involvement.

The bet is that this approach can produce better software faster than traditional closed development, especially in markets where user feedback is critical and trust is earned slowly.

## Getting Involved

If you work in clinical laboratory operations and this approach interests you, there are several ways to get involved:

- **Share Your Challenges**: What problems do you face with current lab software? What features would make your daily work easier?
- **Follow the Journey**: Subscribe to updates to see how development progresses and provide feedback on decisions
- **Technical Contributions**: As the codebase develops, contributions from developers with laboratory or healthcare experience will be especially valuable
- **Beta Testing**: When early versions become available, hands-on testing from lab professionals will be crucial

Building in public only works if there's actually a public interested in being involved. The laboratory community's feedback, criticism, and encouragement will ultimately determine whether Quanta becomes something useful or just another abandoned project.

## Next Steps

The next major update will focus on the technical foundation: framework setup, database design decisions, and the first working prototype of inventory management. This will probably reveal all sorts of assumptions that need revisiting and problems that weren't apparent in the planning phase.

That's exactly why building in public makes sense. Better to discover and fix these issues early, with community input, than to perfect them in isolation only to find they don't solve real problems.

The goal is to move from "interesting idea" to "useful software" as quickly as possible, with transparency and community involvement at every step.

---

*Want to follow Quanta's development? [Subscribe to updates](/index.xml) or [get in touch](/contact/) to share your thoughts on building laboratory software in public.*