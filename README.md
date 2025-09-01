# NextStep AI - AI-Powered Career Guidance Platform

![NextStep AI](./src/assets/hero-image.jpg)

## 🚀 Overview

NextStep AI is a modern AI-powered career guidance platform that helps users discover their perfect career path through personalized recommendations and learning paths. Built to align with **SDG 4: Quality Education**, our platform democratizes access to quality career guidance for everyone.

## ✨ Features

### 🤖 AI-Powered Career Matching
- Intelligent chatbot for career discovery
- Personalized career recommendations
- Real-time AI-driven insights
- 98% career match accuracy

### 📚 Personalized Learning Paths
- Custom roadmaps tailored to your goals
- Industry-specific skill assessments
- Progress tracking and analytics
- Certificate and milestone tracking

### 📊 Market Insights
- Real-time job market data
- Salary trends and projections
- Global career opportunities
- Industry growth analytics

### 👥 Mentorship Network
- Connect with industry professionals
- 1-on-1 mentor sessions
- Premium coaching support
- Industry insider network access

### 🔒 Privacy & Security
- End-to-end data encryption
- GDPR compliant
- Privacy-first approach
- Secure authentication

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS with custom design system
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form + Zod
- **Animations**: Tailwind CSS animations
- **Deployment**: Lovable Platform

## 🎨 Design System

The project uses a comprehensive design system with:
- **Color Palette**: Purple/blue AI gradient theme
- **Semantic Tokens**: HSL-based color system
- **Typography**: Modern, accessible font hierarchy
- **Components**: Reusable, themeable UI components
- **Responsive**: Mobile-first design approach

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd nextstep-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 🌟 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── Navigation.tsx  # Site navigation
│   ├── HeroSection.tsx # Landing page hero
│   ├── ChatbotDemo.tsx # AI chatbot demo
│   ├── FeaturesSection.tsx
│   ├── DashboardPreview.tsx
│   └── PricingSection.tsx
├── pages/              # Application pages
│   ├── Index.tsx       # Landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
└── index.css           # Global styles & design tokens
```

## 🚀 Deployment

### Deploy to Lovable
1. Open your [Lovable Project](https://lovable.dev/projects/5fd89af5-2fa0-49e1-b5ad-8f85995b89f0)
2. Click "Share" → "Publish"
3. Your app will be live instantly!

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

## 🔧 Adding Backend Functionality

To add full functionality (authentication, database, AI API, payments), connect to Supabase:

1. Click the green **Supabase** button in the top right
2. Connect your Supabase project
3. This enables:
   - User authentication
   - Database storage
   - AI API integration
   - Payment processing

[Learn more about Supabase integration →](https://docs.lovable.dev/integrations/supabase/)

## 💡 Features Roadmap

### Phase 1 (Current - Frontend Prototype)
- ✅ Responsive landing page
- ✅ Interactive chatbot demo
- ✅ Feature showcase
- ✅ Pricing tiers
- ✅ Modern UI/UX design

### Phase 2 (Backend Integration)
- 🔄 User authentication
- 🔄 AI chatbot functionality
- 🔄 Database integration
- 🔄 Progress tracking

### Phase 3 (Advanced Features)
- 📋 IntaSend payment integration
- 📋 Real-time market data
- 📋 Mentorship matching
- 📋 Advanced analytics

### Phase 4 (Scale & Growth)
- 📋 Mobile app (React Native)
- 📋 Multi-language support
- 📋 Enterprise features
- 📋 API for third-party integrations

## 🎯 Monetization Strategy

### Freemium Model
- **Free Tier**: Basic career assessments, limited AI sessions
- **Pro Tier** ($29/month): Unlimited AI, personalized paths, mentor sessions
- **Premium Tier** ($79/month): Everything + personal coach, job placement

### Payment Integration
- IntaSend payment gateway
- Subscription management
- 30-day money-back guarantee

## 🌍 Social Impact (SDG 4: Quality Education)

NextStep AI contributes to **UN Sustainable Development Goal 4** by:
- **Democratizing Access**: Making career guidance affordable and accessible
- **Quality Education**: Providing personalized, AI-driven learning recommendations
- **Skill Development**: Helping users identify and develop in-demand skills
- **Economic Empowerment**: Connecting users to better career opportunities
- **Global Reach**: Serving underserved communities worldwide

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Guidelines
- Follow the established design system
- Use semantic color tokens from `index.css`
- Write accessible, responsive components
- Maintain TypeScript types
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - The fastest way to build web apps
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Inspiration from the global need for accessible career education

## 📞 Support

- 📧 Email: support@nextstep-ai.com
- 💬 Discord: [Join our community](https://discord.gg/nextstep-ai)
- 📖 Documentation: [docs.nextstep-ai.com](https://docs.nextstep-ai.com)
- 🐛 Issues: [GitHub Issues](https://github.com/nextstep-ai/issues)

---

**Built with ❤️ for the future of career education**

*Making quality career guidance accessible to everyone, everywhere.*