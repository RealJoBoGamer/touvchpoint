export interface Portfolio {
  brandName: string;
  logo: string;
  link: string;
  category?: string;
}

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    backgroundImage: string;
  };
  about: {
    title: string;
    description: string;
    image: string;
  };
  services: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  portfolio: Portfolio[];
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
  };
}

export const siteConfig: SiteConfig = {
  company: {
    name: "TouchPoint Media",
    tagline: "Crafting Stories, Creating Experiences"
  },
  hero: {
    title: "We Bring Your Vision to Life",
    subtitle: "We Make Cool Projects.",
    ctaText: "Start Your Project",
    backgroundImage: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920"
  },
  about: {
    title: "About TouchPoint Media",
    description: "We Make cool projects shows and productions and want to share it with the world.",
    image: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  services: {
    title: "Our Services",
    items: [
      {
        icon: "video",
        title: "Commercial Production",
        description: "High-impact commercials that drive results and resonate with your target audience."
      },
      {
        icon: "film",
        title: "Branded Content",
        description: "Authentic storytelling that builds meaningful connections between brands and consumers."
      },
      {
        icon: "camera",
        title: "Photography",
        description: "Stunning imagery that captures the essence of your brand and tells your story."
      },
      {
        icon: "monitor",
        title: "Digital Content",
        description: "Engaging social media and digital content optimized for every platform."
      }
    ]
  },
  portfolio: [
    {
      brandName: "Prism Records",
      logo: "https://prismmusic.xyz/wp-content/uploads/2025/05/New-Project-10-51BC3FB.png",
      link: "https://prsm.click",
      category: "Music"
    },
    {
      brandName: "UKGlimpse",
      logo: "https://i0.wp.com/ukglimpse.co.uk/wp-content/uploads/2024/05/InShot_20240531_202539525.jpg?resize=990%2C440&ssl=1",
      link: "https://ukglimpse.co.uk",
      category: "Television"
    }
  ],
  contact: {
    title: "Let's Create Something Amazing",
    subtitle: "Ready to bring your vision to life? Get in touch with our team.",
    email: "hello@touchpoint.jobogamer.xyz"
  }
};
