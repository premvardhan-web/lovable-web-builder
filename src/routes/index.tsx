import { createFileRoute } from "@tanstack/react-router";
import { useState, type CSSProperties, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: APMRoadmap,
  head: () => ({
    meta: [
      { title: "APM Career Execution Roadmap · India 2026" },
      {
        name: "description",
        content:
          "Brutally realistic 0–18 month roadmap from ECE to Associate Product Manager in India. Execution-first, no sugarcoat.",
      },
    ],
  }),
});

const data = {
  brutalhonesty: [
    "60% academics will close doors at top-tier MNCs and Big Tech — accept this and route around it via proof of work.",
    "India's APM market in 2026 is hyper-competitive. 500+ applicants per role. Portfolio + network > pedigree.",
    "You will not get a PM role straight out of college without internship experience or a killer portfolio. Business/Product Analyst first.",
    "Inconsistency is your #1 enemy. A mediocre person who executes daily beats a brilliant person who doesn't.",
    "Overthinking without shipping is career death in product. Build ugly, learn fast.",
    "DSA is NOT mandatory for PM roles. But SQL, basic Python, and data intuition are non-negotiable by 2026.",
    "MBA is optional — only consider it at 4–6 years experience if you want to switch to top-tier consulting or FAANG PM.",
    "Your first job will likely pay ₹4–8 LPA. That is the reality. Optimize for learning, not salary in year 1.",
  ],
  phases: [
    {
      id: 1,
      title: "Foundation Sprint",
      duration: "Month 1–3",
      color: "#FF6B35",
      goal: "Build core vocabulary, tools fluency, and first project",
      skills: [
        { name: "SQL (core)", type: "MANDATORY", time: "3–4 weeks", resources: ["Mode Analytics SQL Tutorial (free)", "SQLZoo (free)", "Khan Academy SQL (free)"], aiTool: "Ask Claude to quiz you daily on SQL concepts + generate practice datasets" },
        { name: "Excel / Google Sheets (advanced)", type: "MANDATORY", time: "2 weeks", resources: ["Chandoo.org (free)", "Coursera Google Data Analytics (paid, ₹2k/mo)"], aiTool: "Use Claude to generate messy datasets and practice cleaning + analysis" },
        { name: "Product Thinking Fundamentals", type: "MANDATORY", time: "4 weeks (parallel)", resources: ["Lenny's Newsletter (free)", "Shreyas Doshi on Twitter (free)", "'Inspired' by Marty Cagan (book)"], aiTool: "Claude: 'Critique this PRD I wrote about [product]'" },
        { name: "Basic Python (pandas, not DSA)", type: "MANDATORY", time: "3–4 weeks", resources: ["Kaggle Python Course (free)", "Automate the Boring Stuff (free online)"], aiTool: "GitHub Copilot / Claude for code generation + explanation" },
        { name: "Communication Writing", type: "MANDATORY", time: "Ongoing", resources: ["'On Writing Well' by Zinsser", "Hemingway App (free)"], aiTool: "Claude: 'Rewrite this in clearer, sharper language for a product audience'" },
      ],
      projects: [
        "Teardown: Pick any app (Swiggy/Zepto/Razorpay). Write a 1000-word product analysis — what's working, what isn't, 3 feature ideas with reasoning.",
        "SQL mini-project: Pull public dataset (Kaggle), run 10 analysis queries, write insights in plain English.",
        "Metrics exercise: Define 5 North Star metrics for a fintech startup. Explain why each one matters.",
      ],
      milestone: "Can write a coherent product teardown. Can query a database. Has GitHub with at least 1 project.",
    },
    {
      id: 2,
      title: "Skill Stack Build",
      duration: "Month 4–6",
      color: "#4ECDC4",
      goal: "Become 'dangerous' with data + product. Start networking.",
      skills: [
        { name: "Tableau / Looker Studio", type: "MANDATORY", time: "2–3 weeks", resources: ["Tableau Public tutorials (free)", "Looker Studio docs (free)"], aiTool: "Claude: Generate insights from your dashboard for a mock investor report" },
        { name: "A/B Testing + Experimentation basics", type: "MANDATORY", time: "2 weeks", resources: ["Evan Miller's AB Testing Guide (free)", "Netflix Tech Blog (free)"], aiTool: "Claude: 'Design an A/B test for this feature on Meesho'" },
        { name: "User Research basics", type: "MANDATORY", time: "2 weeks", resources: ["Nielsen Norman Group articles (free)", "Just Enough Research (book)"], aiTool: "Claude: Help me design 5 user interview questions for this persona" },
        { name: "Figma (low-fi wireframing only)", type: "OPTIONAL but valuable", time: "1 week", resources: ["Figma Community tutorials (free)"], aiTool: "Use Figma AI to generate initial layouts" },
        { name: "AI/ML Fundamentals for PMs", type: "MANDATORY by 2026", time: "3 weeks", resources: ["Google's 'Introduction to ML' (free)", "AI for Everyone — Andrew Ng, Coursera (₹2k)"], aiTool: "Claude: Explain this ML concept in PM language, not math" },
        { name: "Basic Statistics", type: "MANDATORY", time: "2 weeks", resources: ["StatQuest YouTube (free)", "Khan Academy Stats (free)"], aiTool: "Claude: Walk me through interpreting this p-value in a real product context" },
      ],
      projects: [
        "End-to-end case study: Pick a real Indian startup problem. Define the problem, user personas, metrics, a proposed solution, A/B test design, and a dashboard mockup. Publish on Medium.",
        "Data project: Analyze a public dataset (e.g., Zomato, Flipkart reviews on Kaggle). Build a Looker dashboard. Write a 500-word insight summary as if for a product team.",
        "AI product critique: Pick any AI product (ChatGPT, Perplexity, Google Gemini). Write a structured PM critique — trust issues, UX failures, monetization gaps.",
      ],
      milestone: "Portfolio has 3 published pieces. LinkedIn profile updated. 20+ PM/BA professionals followed + engaged with.",
    },
    {
      id: 3,
      title: "Market Entry",
      duration: "Month 7–12",
      color: "#A78BFA",
      goal: "Land first internship or freelance project. Build proof of work.",
      skills: [
        { name: "Advanced SQL + Python for analytics", type: "MANDATORY", time: "Ongoing refinement", resources: ["StrataScratch (paid, ~₹1500)", "LeetCode SQL section (free)"], aiTool: "Claude: Give me a hard SQL business problem to solve, then review my solution" },
        { name: "Growth frameworks (AARRR, RICE, ICE)", type: "MANDATORY", time: "1 week", resources: ["Reforge blog (free)", "GrowthHackers.com (free)"], aiTool: "Claude: Help me apply the RICE framework to prioritize these 5 features" },
        { name: "Go-To-Market basics", type: "OPTIONAL", time: "1 week", resources: ["a16z blog (free)", "First Round Review (free)"], aiTool: "Claude: Critique my GTM strategy for this B2C app" },
        { name: "Prompt Engineering", type: "MANDATORY for AI PM path", time: "1 week", resources: ["LearnPrompting.org (free)", "Anthropic's prompt engineering docs (free)"], aiTool: "Build a personal prompt library for product tasks" },
        { name: "Interview prep: product cases", type: "MANDATORY", time: "Month 10–12", resources: ["PM Exercises (free)", "Exponent (paid, ~₹3k)", "Decode and Conquer (book)"], aiTool: "Claude: Act as a PM interviewer. Give me a product design question and critique my answer." },
      ],
      projects: [
        "Full PRD: Write a complete Product Requirements Document for a feature you want to see in any Indian app. Include user story, success metrics, edge cases, rollout plan.",
        "Growth experiment: For any existing product or your own micro-project, run one real growth experiment (could be a WhatsApp group, Notion template, or newsletter). Document results.",
        "AI PM Portfolio piece: Design an AI-powered feature for any product. Explain the ML approach in plain English, the data requirements, the UX, the risks, and the success metrics.",
      ],
      milestone: "At least 1 internship or freelance project completed. 5 strong portfolio pieces. 50+ LinkedIn connections in target companies.",
    },
    {
      id: 4,
      title: "Consolidation & Job Hunt",
      duration: "Month 13–18",
      color: "#F59E0B",
      goal: "Convert to full-time offer. Target BA/PA/APM roles aggressively.",
      skills: [
        { name: "System design basics (for PM interviews)", type: "OPTIONAL but increasingly asked", time: "2 weeks", resources: ["'System Design Interview' by Alex Xu (book)", "Gaurav Sen YouTube (free)"], aiTool: "Claude: Explain this system design concept from a PM's perspective, not an engineer's" },
        { name: "Stakeholder communication", type: "MANDATORY", time: "Ongoing", resources: ["Lenny's Podcast (free)", "Shreyas Doshi essays (free)"], aiTool: "Claude: Help me write a weekly update email to stakeholders for this project" },
        { name: "Negotiation basics", type: "OPTIONAL", time: "3 days", resources: ["'Never Split the Difference' by Chris Voss (book)"], aiTool: "" },
      ],
      projects: [
        "Live portfolio site: Build a personal site (Notion, Webflow, or simple HTML) with all your case studies, projects, and a 'PM Thinking' blog.",
        "Capstone case study: A 20-page or well-structured document solving a real problem at a company you want to join. Cold-send it to PMs at that company.",
      ],
      milestone: "Actively interviewing. At least 2 offers evaluated. Full-time role secured or strong pipeline.",
    },
  ],
  sprint30: [
    { week: 1, focus: "SQL Fundamentals", tasks: ["Complete SQLZoo tutorials 1–6", "Set up GitHub profile", "Write first LinkedIn post about why you're entering product"] },
    { week: 2, focus: "SQL Applied + Product Basics", tasks: ["Download Kaggle dataset, run 5 SQL queries", "Read 3 Lenny's Newsletter issues", "Write your first product teardown (500 words, any app)"] },
    { week: 3, focus: "Data + Storytelling", tasks: ["Excel pivot tables + charts on your dataset", "Read chapters 1–4 of 'Inspired'", "Publish product teardown on Medium or LinkedIn"] },
    { week: 4, focus: "First Portfolio Piece", tasks: ["Finalize and publish your product teardown publicly", "Connect with 15 PMs/BAs on LinkedIn with a real note", "Start the Google Data Analytics Coursera course"] },
  ],
  sprint90: [
    { month: 1, focus: "SQL + Excel + Product Vocabulary", outcome: "1 published teardown, SQL basics solid, GitHub set up" },
    { month: 2, focus: "Python + Metrics + User Research", outcome: "1 data project published, metrics frameworks understood" },
    { month: 3, focus: "First Case Study + Networking active", outcome: "1 full case study on Medium, 30+ LinkedIn connections in product" },
  ],
  year1: [
    { quarter: "Q1 (Month 1–3)", theme: "Foundation", deliverable: "SQL, Excel, Python basics + 1 published case study" },
    { quarter: "Q2 (Month 4–6)", theme: "Skill Stack", deliverable: "Data viz, A/B testing, AI basics + 3 portfolio pieces, first internship applications" },
    { quarter: "Q3 (Month 7–9)", theme: "Market Entry", deliverable: "Internship secured or freelance, 5 portfolio pieces, active networking" },
    { quarter: "Q4 (Month 10–12)", theme: "Interview Ready", deliverable: "Product case interviews practiced, full PRD written, job applications live" },
  ],
  companies: {
    tier1: ["Razorpay", "CRED", "Zepto", "Meesho", "Groww", "PhonePe", "BrowserStack", "Postman"],
    tier2: ["Lenskart", "Unacademy", "upGrad", "Spinny", "OYO", "Nykaa", "Dunzo", "Ola"],
    tier3: ["Early-stage startups on AngelList India", "YC India portfolio companies", "ProductHunt launches"],
    note: "Start with Tier 3 for internships. They care about work > academics. Build proof there first.",
  },
  salary: [
    { role: "Business Analyst (Tier 3 startup)", range: "₹3–6 LPA", note: "Realistic for 60% grad with portfolio" },
    { role: "Product Analyst", range: "₹5–9 LPA", note: "After 6–12 months experience" },
    { role: "Associate PM (startup)", range: "₹8–15 LPA", note: "After strong 1–2 year track record" },
    { role: "APM (funded startup/unicorn)", range: "₹12–22 LPA", note: "2–3 years in, strong portfolio + referral" },
    { role: "Senior PM (5+ years)", range: "₹25–50 LPA", note: "Top performers with FAANG-adjacent experience" },
  ],
  mistakes: [
    "Tutorial hell: watching 10 courses, finishing 0 projects. Projects > courses.",
    "Waiting to be 'ready' before applying. Apply at 60% ready. Always.",
    "Applying to Google/Amazon in year 1. They need 3+ years experience. Waste of time.",
    "Ignoring LinkedIn. It's your most important career asset in India. Post weekly.",
    "Building a portfolio with no opinions. PMs need a POV. Say something specific.",
    "Skipping communication practice. Bad writing = bad PM. Period.",
    "Treating networking as transactional. Give value first: share articles, give feedback, celebrate others' work.",
    "Not documenting your learning publicly. Your process IS your portfolio in the early days.",
    "Obsessing over MBA. You don't need it at 21. Focus on execution.",
    "Switching focus every 3 weeks based on new advice. This roadmap. Commit to it.",
  ],
  aiTools: [
    { tool: "Claude / ChatGPT", use: "Daily product case practice, writing critique, PRD drafting, SQL explanations, interview prep" },
    { tool: "GitHub Copilot", use: "Python coding acceleration — don't write from scratch, learn by modifying AI output" },
    { tool: "Perplexity", use: "Research rabbit holes — market analysis, company deep dives, trend research" },
    { tool: "Notion AI", use: "Organize your learning, build your second brain, structure case studies" },
    { tool: "Gamma.app", use: "Beautiful presentations for case studies and portfolio pieces in minutes" },
    { tool: "Loom", use: "Record yourself doing product teardowns — builds communication + portfolio simultaneously" },
    { tool: "Otter.ai", use: "Transcribe podcast learnings, your own voice notes on product ideas" },
  ],
  coding: {
    required: ["SQL — non-negotiable. Every data/product role needs it.", "Python (pandas, basic scripting) — useful, increasingly expected.", "Basic API understanding — not coding, but knowing what an API is and does.", "Reading dashboards / data tools (Mixpanel, Amplitude, Looker)"],
    notRequired: ["DSA / LeetCode — only if targeting software engineer roles or FAANG PM.", "Full-stack development — useful but not required for APM/BA.", "System design deep dive — surface-level understanding is enough for APM interviews."],
    verdict: "Spend 80% of tech time on SQL + Python data analysis. Skip DSA. Focus on data intuition over code craft.",
  },
  backupPaths: [
    { path: "Business Analyst at consulting firm", note: "Strong fallback. Similar skills, pays ₹4–10 LPA. Bridge to PM." },
    { path: "Growth / Marketing Analyst", note: "High demand, AI-adjacent, overlaps significantly with PM skills." },
    { path: "Startup Founding Team (non-tech role)", note: "If you have the hustle, early-stage startups hire for mindset over credentials." },
    { path: "Product Marketing Manager", note: "If you love storytelling + strategy. Underrated path to PM." },
    { path: "Data Analyst → Product Analyst → PM", note: "The safest, most data-supported ladder. 3–4 year path." },
  ],
  networking: [
    "Post 1 product insight on LinkedIn every week. Tag 1–2 PMs you admire.",
    "Send 5 cold connection requests per week. Message must be specific: 'I read your post about X, I thought Y...'",
    "Comment thoughtfully (3+ sentences) on 3 posts per day from PMs in target companies.",
    "Join Slack communities: Product Folks India, GrowthX, Mind the Product community.",
    "Attend 1 online product meetup or webinar per month. Follow up with speakers on LinkedIn.",
    "Find 1 PM mentor via ADPList (free mentorship platform). Prepare specific questions before each call.",
    "Don't ask for referrals until you've given value for 3+ interactions. Build before you ask.",
  ],
  dailyRoutine: {
    morning: ["20 min: Read 1 product article (Lenny, First Round, a16z)", "10 min: Write 3 key insights from yesterday's learning in Notion"],
    work: ["60–90 min: Core skill (SQL / Python / case study)", "30 min: Portfolio project work"],
    evening: ["20 min: LinkedIn — 3 comments, 1 post draft or publish", "15 min: Claude-assisted interview practice or product case"],
    weekly: ["Sunday: Review weekly output, plan next week's 3 priorities", "1 networking message or call", "1 new portfolio piece started or finished"],
  },
};

const COLORS = {
  bg: "#0A0A0F",
  surface: "#12121A",
  card: "#1A1A26",
  border: "#2A2A3E",
  accent1: "#FF6B35",
  accent2: "#4ECDC4",
  accent3: "#A78BFA",
  accent4: "#F59E0B",
  text: "#E8E8F0",
  muted: "#8888AA",
};

const Tag = ({ children, color }: { children: ReactNode; color: string }) => (
  <span style={{
    background: color + "22",
    color: color,
    border: `1px solid ${color}44`,
    borderRadius: 4,
    padding: "2px 8px",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  }}>{children}</span>
);

const Section = ({ title, accent, children, id }: { title: string; accent: string; children: ReactNode; id?: string }) => (
  <section id={id} style={{ marginBottom: 48 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
      <div style={{ width: 4, height: 28, background: accent, borderRadius: 2, flexShrink: 0 }} />
      <h2 style={{ color: accent, fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>{title}</h2>
    </div>
    {children}
  </section>
);

const Card = ({ children, style = {}, className }: { children: ReactNode; style?: CSSProperties; className?: string }) => (
  <div className={className} style={{
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 12,
    padding: 20,
    ...style,
  }}>{children}</div>
);

function APMRoadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTab, setActiveTab] = useState("roadmap");

  const tabs = [
    { id: "roadmap", label: "Phase Roadmap" },
    { id: "sprints", label: "Sprints" },
    { id: "skills", label: "Skills & Tools" },
    { id: "market", label: "Market Reality" },
    { id: "execution", label: "Execution System" },
  ];

  const phase = data.phases[activePhase];

  return (
    <div style={{
      background: COLORS.bg,
      color: COLORS.text,
      minHeight: "100vh",
      fontFamily: "'DM Mono', 'Fira Code', 'Courier New', monospace",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Clash+Display:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #12121A; }
        ::-webkit-scrollbar-thumb { background: #2A2A3E; border-radius: 3px; }
        .tab-btn:hover { background: #2A2A3E !important; }
        .phase-btn:hover { opacity: 0.85; }
        .hover-card:hover { border-color: #A78BFA44 !important; transform: translateY(-1px); transition: all 0.2s; }
        li { line-height: 1.7; }
        a { color: #4ECDC4; }
        @media (max-width: 640px) {
          .responsive-pad { padding-left: 16px !important; padding-right: 16px !important; }
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Header */}
      <div className="responsive-pad" style={{
        background: "linear-gradient(135deg, #0A0A0F 0%, #12121A 50%, #0A0A0F 100%)",
        borderBottom: `1px solid ${COLORS.border}`,
        padding: "40px 32px 32px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse at 20% 50%, #FF6B3511 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #A78BFA11 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
            <Tag color={COLORS.accent1}>0–18 MONTHS</Tag>
            <Tag color={COLORS.accent2}>INDIA 2026</Tag>
            <Tag color={COLORS.accent3}>NO SUGARCOAT</Tag>
          </div>
          <h1 style={{
            fontSize: "clamp(24px, 4vw, 42px)",
            fontWeight: 800,
            margin: "12px 0 8px",
            fontFamily: "'Clash Display', sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#fff",
          }}>
            APM Career<br />
            <span style={{ color: COLORS.accent1 }}>Execution Roadmap</span>
          </h1>
          <p style={{ color: COLORS.muted, fontSize: 15, margin: 0, maxWidth: 500 }}>
            ECE → Business/Product/Growth Analyst → Associate PM. Brutally realistic. Execution-first.
          </p>
        </div>
      </div>

      {/* Brutal Truths Banner */}
      <div className="responsive-pad" style={{ background: "#FF6B3508", borderBottom: `1px solid #FF6B3522`, padding: "16px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: COLORS.accent1, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", margin: "0 0 10px", textTransform: "uppercase" }}>⚠ Brutal Truths You Must Accept First</p>
          <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 4 }}>
            {data.brutalhonesty.map((t, i) => (
              <div key={i} style={{
                background: "#FF6B3510",
                border: `1px solid #FF6B3525`,
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: 12,
                color: "#FFB89A",
                minWidth: 220,
                maxWidth: 260,
                flexShrink: 0,
                lineHeight: 1.6,
              }}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nav Tabs */}
      <div className="responsive-pad" style={{ borderBottom: `1px solid ${COLORS.border}`, padding: "0 32px", background: COLORS.surface, overflowX: "auto" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 4 }}>
          {tabs.map(tab => (
            <button key={tab.id} className="tab-btn" onClick={() => setActiveTab(tab.id)} style={{
              background: activeTab === tab.id ? COLORS.card : "transparent",
              color: activeTab === tab.id ? COLORS.text : COLORS.muted,
              border: "none",
              borderBottom: activeTab === tab.id ? `2px solid ${COLORS.accent3}` : "2px solid transparent",
              padding: "14px 16px",
              cursor: "pointer",
              fontSize: 13,
              fontFamily: "inherit",
              fontWeight: activeTab === tab.id ? 700 : 400,
              transition: "all 0.15s",
              whiteSpace: "nowrap",
            }}>{tab.label}</button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-pad" style={{ maxWidth: 900, margin: "0 auto", padding: "32px 32px 64px" }}>

        {activeTab === "roadmap" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
              {data.phases.map((p, i) => (
                <button key={i} className="phase-btn" onClick={() => setActivePhase(i)} style={{
                  background: activePhase === i ? p.color : COLORS.card,
                  color: activePhase === i ? "#000" : COLORS.muted,
                  border: `1px solid ${activePhase === i ? p.color : COLORS.border}`,
                  borderRadius: 8,
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: 13,
                  fontFamily: "inherit",
                  fontWeight: 700,
                  transition: "all 0.2s",
                }}>
                  Phase {p.id}: {p.duration}
                </button>
              ))}
            </div>

            <Card style={{ borderColor: phase.color + "44", marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                <div>
                  <div style={{ color: phase.color, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                    Phase {phase.id} · {phase.duration}
                  </div>
                  <h2 style={{ margin: 0, fontSize: 22, fontFamily: "'Clash Display', sans-serif", color: "#fff" }}>{phase.title}</h2>
                </div>
                <Tag color={phase.color}>{phase.goal}</Tag>
              </div>
              <div style={{
                background: phase.color + "11",
                border: `1px solid ${phase.color}33`,
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: 13,
                color: phase.color,
              }}>
                🎯 Milestone: {phase.milestone}
              </div>
            </Card>

            <Section title="Skills to Learn" accent={phase.color}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {phase.skills.map((s, i) => (
                  <Card key={i} className="hover-card" style={{ transition: "all 0.2s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{s.name}</span>
                        <Tag color={s.type.includes("MANDATORY") ? COLORS.accent1 : COLORS.accent4}>{s.type}</Tag>
                      </div>
                      <span style={{ color: COLORS.muted, fontSize: 12 }}>⏱ {s.time}</span>
                    </div>
                    <div style={{ marginBottom: 8 }}>
                      <span style={{ color: COLORS.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em" }}>Resources: </span>
                      <span style={{ color: COLORS.text, fontSize: 13 }}>{s.resources.join(" · ")}</span>
                    </div>
                    {s.aiTool && (
                      <div style={{ background: "#A78BFA11", border: "1px solid #A78BFA33", borderRadius: 6, padding: "8px 12px", fontSize: 12, color: "#C4B5FD" }}>
                        🤖 AI Leverage: {s.aiTool}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Projects to Build" accent={COLORS.accent2}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {phase.projects.map((p, i) => (
                  <div key={i} style={{
                    background: "#4ECDC411",
                    border: "1px solid #4ECDC433",
                    borderRadius: 8,
                    padding: "12px 16px",
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: COLORS.text,
                  }}>
                    <span style={{ color: COLORS.accent2, fontWeight: 700 }}>#{i + 1} </span>
                    {p}
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {activeTab === "sprints" && (
          <div>
            <Section title="30-Day Starter Sprint" accent={COLORS.accent1}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {data.sprint30.map((w, i) => (
                  <Card key={i} style={{ borderColor: COLORS.accent1 + "44" }}>
                    <div style={{ color: COLORS.accent1, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Week {w.week}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 12 }}>{w.focus}</div>
                    <ul style={{ margin: 0, paddingLeft: 16, color: COLORS.muted, fontSize: 12 }}>
                      {w.tasks.map((t, j) => <li key={j}>{t}</li>)}
                    </ul>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="90-Day Execution Plan" accent={COLORS.accent2}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {data.sprint90.map((m, i) => (
                  <Card key={i} style={{ borderColor: COLORS.accent2 + "44", display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
                    <div style={{
                      background: COLORS.accent2 + "22",
                      color: COLORS.accent2,
                      borderRadius: 8,
                      padding: "8px 14px",
                      fontSize: 13,
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}>Month {m.month}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: "#fff", marginBottom: 4 }}>{m.focus}</div>
                      <div style={{ color: COLORS.muted, fontSize: 13 }}>✅ Outcome: {m.outcome}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="1-Year Transformation Roadmap" accent={COLORS.accent3}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${COLORS.accent3}, ${COLORS.accent1})`, borderRadius: 2 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingLeft: 48 }}>
                  {data.year1.map((q, i) => (
                    <div key={i} style={{ position: "relative" }}>
                      <div style={{
                        position: "absolute",
                        left: -36,
                        top: 14,
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: [COLORS.accent3, COLORS.accent1, COLORS.accent2, COLORS.accent4][i],
                        border: `2px solid ${COLORS.bg}`,
                      }} />
                      <Card style={{ borderColor: COLORS.border }}>
                        <div style={{ color: [COLORS.accent3, COLORS.accent1, COLORS.accent2, COLORS.accent4][i], fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{q.quarter}</div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 6 }}>{q.theme}</div>
                        <div style={{ color: COLORS.muted, fontSize: 13 }}>{q.deliverable}</div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <Section title="AI Tools to Use Daily" accent={COLORS.accent3}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 12 }}>
                {data.aiTools.map((t, i) => (
                  <Card key={i} style={{ borderColor: COLORS.accent3 + "33" }}>
                    <div style={{ color: COLORS.accent3, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{t.tool}</div>
                    <div style={{ color: COLORS.muted, fontSize: 12, lineHeight: 1.6 }}>{t.use}</div>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Coding: What's Actually Required" accent={COLORS.accent2}>
              <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <Card style={{ borderColor: "#4ECDC444" }}>
                  <div style={{ color: COLORS.accent2, fontWeight: 700, fontSize: 13, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>✅ Required</div>
                  <ul style={{ margin: 0, paddingLeft: 16, color: COLORS.text, fontSize: 13 }}>
                    {data.coding.required.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </Card>
                <Card style={{ borderColor: "#FF6B3544" }}>
                  <div style={{ color: COLORS.accent1, fontWeight: 700, fontSize: 13, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>❌ Skip For Now</div>
                  <ul style={{ margin: 0, paddingLeft: 16, color: COLORS.text, fontSize: 13 }}>
                    {data.coding.notRequired.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </Card>
              </div>
              <Card style={{ background: "#4ECDC411", borderColor: "#4ECDC444" }}>
                <span style={{ color: COLORS.accent2, fontWeight: 700 }}>Verdict: </span>
                <span style={{ color: COLORS.text, fontSize: 13 }}>{data.coding.verdict}</span>
              </Card>
            </Section>

            <Section title="Mistakes to Avoid" accent={COLORS.accent1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {data.mistakes.map((m, i) => (
                  <div key={i} style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    background: "#FF6B3508",
                    border: "1px solid #FF6B3520",
                    borderRadius: 8,
                    padding: "10px 14px",
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}>
                    <span style={{ color: COLORS.accent1, fontWeight: 700, flexShrink: 0 }}>✗</span>
                    <span style={{ color: COLORS.text }}>{m}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {activeTab === "market" && (
          <div>
            <Section title="Salary Reality in India (2026)" accent={COLORS.accent4}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {data.salary.map((s, i) => (
                  <Card key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                    <div>
                      <div style={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>{s.role}</div>
                      <div style={{ color: COLORS.muted, fontSize: 12, marginTop: 2 }}>{s.note}</div>
                    </div>
                    <Tag color={COLORS.accent4}>{s.range}</Tag>
                  </Card>
                ))}
              </div>
              <div style={{ marginTop: 12, padding: "12px 16px", background: "#F59E0B11", border: "1px solid #F59E0B33", borderRadius: 8, fontSize: 13, color: "#FCD34D" }}>
                ⚠ Do NOT optimize for salary in year 1. Optimize for learning velocity and proof of work. The 3x salary jump comes at year 3–4, not year 1.
              </div>
            </Section>

            <Section title="Companies to Target" accent={COLORS.accent2}>
              {[
                { tier: "Tier 1 — Dream Targets (Year 2+)", list: data.companies.tier1, color: COLORS.accent3 },
                { tier: "Tier 2 — Primary Targets (Year 1)", list: data.companies.tier2, color: COLORS.accent2 },
                { tier: "Tier 3 — Start Here (Internships)", list: data.companies.tier3, color: COLORS.accent1 },
              ].map((t, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div style={{ color: t.color, fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>{t.tier}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {t.list.map((c, j) => (
                      <span key={j} style={{
                        background: t.color + "15",
                        color: t.color,
                        border: `1px solid ${t.color}33`,
                        borderRadius: 6,
                        padding: "4px 12px",
                        fontSize: 13,
                        fontWeight: 500,
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{ padding: "10px 14px", background: "#4ECDC411", border: "1px solid #4ECDC433", borderRadius: 8, fontSize: 13, color: "#81E6E0", marginTop: 4 }}>
                💡 {data.companies.note}
              </div>
            </Section>

            <Section title="Backup Paths If PM Fails" accent={COLORS.accent1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {data.backupPaths.map((b, i) => (
                  <Card key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{
                      background: COLORS.accent1 + "22",
                      color: COLORS.accent1,
                      borderRadius: 6,
                      padding: "4px 10px",
                      fontSize: 11,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}>PATH {i + 1}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: "#fff", marginBottom: 2 }}>{b.path}</div>
                      <div style={{ color: COLORS.muted, fontSize: 13 }}>{b.note}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </Section>
          </div>
        )}

        {activeTab === "execution" && (
          <div>
            <Section title="Daily & Weekly Routine" accent={COLORS.accent3}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  { time: "🌅 Morning", items: data.dailyRoutine.morning, color: COLORS.accent4 },
                  { time: "💻 Work Block", items: data.dailyRoutine.work, color: COLORS.accent2 },
                  { time: "🌆 Evening", items: data.dailyRoutine.evening, color: COLORS.accent3 },
                  { time: "📅 Weekly", items: data.dailyRoutine.weekly, color: COLORS.accent1 },
                ].map((block, i) => (
                  <Card key={i} style={{ borderColor: block.color + "44" }}>
                    <div style={{ color: block.color, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>{block.time}</div>
                    <ul style={{ margin: 0, paddingLeft: 16, color: COLORS.muted, fontSize: 12 }}>
                      {block.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Networking Strategy" accent={COLORS.accent2}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {data.networking.map((n, i) => (
                  <div key={i} style={{
                    display: "flex",
                    gap: 12,
                    background: COLORS.card,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 8,
                    padding: "10px 14px",
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}>
                    <span style={{ color: COLORS.accent2, fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                    <span style={{ color: COLORS.text }}>{n}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Compensating for 60% Academics" accent={COLORS.accent1}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                {[
                  { title: "Publish publicly", desc: "Medium, LinkedIn, Substack. Your writing IS your signal when grades aren't." },
                  { title: "Get 1 real result", desc: "One internship where something measurably improved is worth a 9 CGPA with no experience." },
                  { title: "Network into companies", desc: "60–70% of Indian startup hires happen via referrals. A warm intro bypasses the ATS filter entirely." },
                  { title: "Build a visible portfolio", desc: "A personal site with 5 strong case studies makes the recruiter forget to check grades." },
                  { title: "Certifications strategically", desc: "Google Data Analytics, AWS Cloud Practitioner, or Reforge certificates signal seriousness without a GPA." },
                  { title: "Apply to smaller companies first", desc: "10–50 person startups rarely care about CGPA. They care about: can you do the job?" },
                ].map((tip, i) => (
                  <Card key={i} style={{ borderColor: COLORS.accent1 + "33" }}>
                    <div style={{ color: COLORS.accent1, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{tip.title}</div>
                    <div style={{ color: COLORS.muted, fontSize: 12, lineHeight: 1.6 }}>{tip.desc}</div>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Interview Preparation System" accent={COLORS.accent4}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Month 1–6", focus: "Don't touch interview prep yet. Build skills + portfolio first. Premature prep = anxiety without foundation." },
                  { label: "Month 7–9", focus: "Start reading PM case frameworks. PM Exercises, Exponent, Decode and Conquer. 20 min/day." },
                  { label: "Month 10–12", focus: "Active mock interviews. Use Claude daily: 'Give me a product design question, critique my answer.' Record yourself on Loom." },
                  { label: "Month 13–15", focus: "Real applications. 5–10 per week. Track in Notion: company, role, stage, learnings. Every rejection is a data point." },
                  { label: "Interview types to prep", focus: "Product Design · Metrics/Analytics · Root Cause Analysis · Estimation (Fermi) · Behavioral (use STAR). For BA roles: SQL + Excel tests are common." },
                ].map((step, i) => (
                  <Card key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", flexWrap: "wrap" }}>
                    <Tag color={COLORS.accent4}>{step.label}</Tag>
                    <div style={{ color: COLORS.text, fontSize: 13, lineHeight: 1.6, flex: 1, minWidth: 200 }}>{step.focus}</div>
                  </Card>
                ))}
              </div>
            </Section>

            <div style={{
              background: "linear-gradient(135deg, #A78BFA11, #4ECDC411)",
              border: `1px solid ${COLORS.accent3}33`,
              borderRadius: 12,
              padding: 24,
              marginTop: 32,
            }}>
              <div style={{ color: COLORS.accent3, fontWeight: 700, fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>MBA Decision Framework</div>
              <p style={{ color: COLORS.text, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}>
                <strong style={{ color: "#fff" }}>Do NOT pursue an MBA now.</strong> At 21–22, an MBA is mostly debt and delay. The ROI is negative unless you're targeting IIM A/B/C + consulting or FAANG PM at age 27+.
              </p>
              <p style={{ color: COLORS.muted, fontSize: 13, lineHeight: 1.8, margin: 0 }}>
                Consider MBA only if: (a) you have 4–6 years experience, (b) you want to pivot to top-tier consulting or corporate strategy, (c) you get IIM A/B/C or a top international school. Otherwise, build real product experience. A PM with 5 years execution beats an MBA with 0 every time in a startup hiring context.
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="responsive-pad" style={{ borderTop: `1px solid ${COLORS.border}`, padding: "20px 32px", background: COLORS.surface }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <span style={{ color: COLORS.muted, fontSize: 12 }}>APM Career Roadmap · India 2026 · Optimized for execution, not inspiration</span>
          <span style={{ color: COLORS.accent1, fontSize: 12, fontWeight: 700 }}>Ship something today. Not tomorrow.</span>
        </div>
      </div>
    </div>
  );
}
