import React from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { AboutEditorial } from './components/AboutEditorial';
import { HowIThink } from './components/HowIThink';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { AchievementsGrid } from './components/AchievementsGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="bg-[#080808] text-[#f5f5f5] min-h-screen selection:bg-indigo-500/30 selection:text-white relative">
      <Navigation />
      <main>
        <Hero />
        <MetricsStrip />
        <AboutEditorial />
        <HowIThink />
        <FeaturedProjects />
        <ExperienceTimeline />
        <SkillsMatrix />
        <AchievementsGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
