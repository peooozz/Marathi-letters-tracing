## Project Summary
A single-page educational module for learning the Marathi alphabet (Varnamala). It features a playful, child-friendly theme cloned from medhavatikakg.vercel.app, with interactive alphabet tiles that play proper Marathi pronunciation when clicked.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Icons: Lucide React
- Audio: Web Speech API (SpeechSynthesis)

## Architecture
- `src/app/page.tsx`: Main entry point, integrates the module components.
- `src/components/sections/alphabet-grid.tsx`: Core module containing the Marathi alphabet logic and pronunciation.
- `src/components/layout/background-elements.tsx`: Decorative floating background elements for the theme.
- `src/app/globals.css`: Global styles and theme tokens.

## User Preferences
- Theme: Playful, K-12 educational aesthetic ("Sunny" yellow background).
- Language focus: Marathi.
- Interactivity: Click-to-pronounce characters.

## Project Guidelines
- Single-page layout for easy integration.
- Responsive grid for alphabet tiles.
- Use Web Speech API for pronunciation to avoid heavy audio assets.
- Maintain the visual consistency of the cloned theme.

## Common Patterns
- Component-based architecture.
- Client-side interactivity for audio feedback.
- Tailored color palette for educational content.
