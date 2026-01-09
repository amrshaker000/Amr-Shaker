export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    links: ProjectLink[];
}

export interface ProjectLink {
    url: string;
    icon: React.ReactNode;
    label: string;
    variant?: "default" | "outline";
}

export interface Certification {
    title: string;
    description: string;
    href: string;
    image: string;
}

export interface Skill {
    category: string;
    icon: React.ReactNode;
    skills: string[];
    href?: string;
    title?: string;
    description?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
    ariaLabel: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface StoredMessage extends ContactFormData {
    id: string;
    timestamp: string;
}
