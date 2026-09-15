export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  driveVideoId?: string;
  driveViewUrl?: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    drive?: string;
  };
  featured?: boolean;
  statusBadge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  bullets: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  icon: string;
  tag?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  accent: 'indigo' | 'teal' | 'gold' | 'violet' | 'rose';
  skills: string[];
}
