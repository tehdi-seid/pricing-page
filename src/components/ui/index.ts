export interface card {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  features: string[];
  buttonText: string;
  colors: {
    background: string;
    border: string;
    title: string;
    subtitle: string;
    price: string;
    period: string;
    description: string;
    features: string;
    button: string;
    badgeColor?: string;
  };
  featured: boolean;
}

export const cards: card[] = [
  {
    id: 1,
    title: "Basic",
    subtitle: "For individuals getting started",
    price: "$9",
    period: "/month",
    description: "Everything you need to get started.",

    features: [
      "5 projects",
      "Basic analytics",
      "Email support",
      "1 team member",
    ],

    buttonText: "Get Started",

    colors: {
      background: "bg-white",
      border: "border-gray-200",
      title: "text-gray-900",
      subtitle: "text-gray-500",
      price: "text-gray-900",
      period: "text-gray-500",
      description: "text-gray-600",
      features: "text-gray-700",
      button: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    },

    featured: false,
  },

  {
    id: 2,
    title: "Professional",
    subtitle: "For growing businesses",
    price: "$19",
    period: "/month",
    description: "More power for your growing team.",

    badge: "Popular",

    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10 team members",
      "Custom integrations",
    ],

    buttonText: "Choose Plan",

    colors: {
      background: "bg-indigo-600",
      border: "border-indigo-600",
      title: "text-white",
      subtitle: "text-indigo-100",
      price: "text-white",
      period: "text-indigo-200",
      description: "text-indigo-100",
      features: "text-white",
      button: "bg-white text-indigo-600 hover:bg-indigo-50",
      badgeColor: "bg-indigo-500 text-white",
    },

    featured: true,
  },

  {
    id: 3,
    title: "Enterprise",
    subtitle: "For large organizations",
    price: "$49",
    period: "/month",
    description: "Advanced features for your entire organization.",

    features: [
      "Unlimited projects",
      "Detailed analytics",
      "Dedicated support",
      "Unlimited team members",
      "Advanced security",
    ],

    buttonText: "Contact Sales",

    colors: {
      background: "bg-slate-950",
      border: "border-slate-800",
      title: "text-white",
      subtitle: "text-slate-400",
      price: "text-white",
      period: "text-slate-400",
      description: "text-slate-300",
      features: "text-slate-200",
      button: "bg-white text-slate-950 hover:bg-slate-200",
    },

    featured: false,
  },
];
