# Implementation Plan: Project Showcase & Google Drive Video Integration

## Overview
This document outlines the step-by-step implementation for upgrading the **"Things I've Built"** section on the portfolio website (`index.html`).

The update replaces placeholder projects (`NexAlpha` and `BharatAlpha`) with three real-world projects from the resume:
1. **AutoML** — Agentic Model Training & Optimization Platform
2. **LeadFox** — Autonomous Recruiter Outreach System
3. **Omega** — Decision Intelligence & Analytics Platform

Additionally, each project card is upgraded with a dedicated **Google Drive Demo Video Display Pane** positioned directly beneath the project description.

---

## Google Drive Video Integration Design

### How Google Drive Video Embedding Works
Google Drive video URLs typically look like:
`https://drive.google.com/file/d/FILE_ID/view?usp=sharing`

To embed the video player directly into a webpage so visitors can view it seamlessly while scrolling, we convert the URL to Drive's embeddable preview endpoint:
`https://drive.google.com/file/d/FILE_ID/preview`

### Display Pane Architecture
- **Location**: Directly below `.pt-desc` and above `.pt-tags`.
- **Dimensions**: Responsive 16:9 aspect ratio (`aspect-ratio: 16 / 9`), matching the portfolio's modern dark glass aesthetic.
- **Components inside `.pt-video-wrap`**:
  1. **Embedded Player (`<iframe>`)**: Seamless Google Drive preview player with `allow="autoplay; fullscreen"`, rounded corners, and subtle neon border glow on hover.
  2. **Placeholder / Fallback State**: If a link is not yet set or during loading, a sleek glass placeholder displays an animated play icon and `[Paste Google Drive Link Here]`.
  3. **Direct Drive Action Bar**: A subtle overlay button ("Open in Drive ↗") allowing recruiters or visitors to open the full video in Google Drive with one click if preferred.
- **Pointer Events & 3D Tilt Harmony**:
  - CSS ensures that clicking the play button or video controls inside the player does not conflict with the 3D card tilt effect.

---

## Detailed Project Card Specifications

### 1. AutoML (Featured Project — 01)
- **Status Badge**: `LIVE` / `FEATURED`
- **Color Accent**: Indigo / Gold glow (`t-indigo`)
- **Icon**: `🤖`
- **Title**: `AutoML`
- **Subtitle**: `Agentic Model Training & Optimization Platform`
- **Description**: Architected a three-agent system on FastAPI, integrated via custom MCP servers and n8n workflows. Automates data profiling, statistical preprocessing plans, and synthesizes robust Scikit-learn training code with a Next.js execution monitoring dashboard.
- **Video Display**: Embedded Google Drive video pane for AutoML demo.
- **Key Tags**: `FastAPI` • `MCP` • `n8n` • `OpenAI` • `Docker` • `Next.js` • `Scikit-Learn`
- **Metrics**:
  - `< 3 min` — End-to-End Pipeline
  - `3 Agents` — MCP Architecture
  - `FastAPI` — Backend Sandbox
- **Action Link**: `Watch Demo / View Project ↗`

### 2. LeadFox (Project — 02)
- **Status Badge**: `LIVE`
- **Color Accent**: Teal / Emerald glow (`t-teal`)
- **Icon**: `🎯`
- **Title**: `LeadFox`
- **Subtitle**: `Autonomous Recruiter Outreach System`
- **Description**: Built a 3-agent CrewAI system layered atop n8n backend workflows exposed as MCP servers. Automates prospect research, verified email discovery, and personalized cold outreach drafting end-to-end, wrapped in a Streamlit app with human-in-the-loop approval gates.
- **Video Display**: Embedded Google Drive video pane for LeadFox demo.
- **Key Tags**: `CrewAI` • `n8n` • `MCP` • `Hunter.io` • `Firecrawl` • `Streamlit`
- **Metrics**:
  - `< 10 min` — From 60–90 min
  - `3 Agents` — CrewAI System
  - `100%` — Human-in-the-Loop
- **Action Link**: `Watch Demo / View Project ↗`

### 3. Omega (Project — 03)
- **Status Badge**: `LIVE`
- **Color Accent**: Violet / Rose glow (`t-violet`)
- **Icon**: `📈`
- **Title**: `Omega`
- **Subtitle**: `Decision Intelligence & Analytics Platform`
- **Description**: Architected an automated decision-intelligence platform using containerized, standardized data processing pipelines. Applied classical statistical regression to model future revenue trends directly from raw business data, accelerating baseline data preparation speed by 35%.
- **Video Display**: Embedded Google Drive video pane for Omega demo.
- **Key Tags**: `Python` • `OpenAI` • `SQL` • `Docker` • `Streamlit` • `Predictive Analytics`
- **Metrics**:
  - `+35%` — Data Prep Speed
  - `ML/Regr.` — Revenue Modeling
  - `Docker` — Containerized
- **Action Link**: `Watch Demo / View Project ↗`

---

## File Changes Summary

### `c:\Users\KIIT\Desktop\Portfolio\index.html`
1. **CSS Additions**:
   - Add `.pt-video-wrap`, `.pt-video-frame`, and `.pt-video-placeholder` styles.
   - Adjust card width from `340px` to `420px` (featured to `460px`) to provide an optimal 16:9 viewing dimension.
   - Add responsive media query rules for mobile/tablet screens.
2. **HTML Modifications**:
   - Replace lines 1208–1256 with the new 3-card structure (AutoML, LeadFox, Omega).
   - Place `.pt-video-wrap` in each card with Google Drive embed support and comments indicating where to swap in the exact Google Drive file IDs.
3. **JS Updates**:
   - Ensure the existing mousemove 3D tilt handler excludes `.pt-video-wrap` so video controls are fully interactive.

---

## Verification & Testing
1. **Visual Render Check**: Open `index.html` in browser; verify all 3 cards load cleanly in the horizontal scroll container.
2. **Video Responsiveness**: Test Google Drive iframe embed responsiveness and aspect-ratio scaling.
3. **Interactive Controls**: Verify that clicking video controls inside the video pane operates smoothly without unintentional card tilting or snapping.
