export interface QuizOption {
  id: string;
  text: string;
  level: number;
}

export interface QuizQuestion {
  id: string;
  section: number;
  text: string;
  options: QuizOption[];
  isBasicInfo?: boolean;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "business-type",
    section: 0,
    text: "What type of business do you run?",
    isBasicInfo: true,
    options: [
      { id: "product", text: "Product business (I sell physical items like food, clothes, skincare, gadgets, etc.)", level: 0 },
      { id: "service", text: "Service business (I provide services like coaching, makeup, photography, cleaning, consulting, etc.)", level: 0 },
      { id: "both", text: "Both product and service (I sell something and I also provide a service)", level: 0 },
      { id: "unsure", text: "I'm not sure / still figuring it out", level: 0 },
    ],
  },
  {
    id: "team-size",
    section: 0,
    text: "How many people are in your team?",
    isBasicInfo: true,
    options: [
      { id: "solo", text: "Just me", level: 0 },
      { id: "2-5", text: "2–5 people", level: 0 },
      { id: "6-10", text: "6–10 people", level: 0 },
      { id: "11+", text: "11+ people", level: 0 },
    ],
  },
  {
    id: "q1",
    section: 1,
    text: "How do you currently run your day-to-day business?",
    options: [
      { id: "a", text: "I just do things as they come. I figure it out daily.", level: 1 },
      { id: "b", text: "I try to plan using notes, reminders, or WhatsApp, but things still feel scattered.", level: 2 },
      { id: "c", text: "I use tools like Google Calendar, Notion, or Trello to plan my tasks, but I don't always follow them consistently.", level: 3 },
      { id: "d", text: "I follow a clear daily or weekly routine, and everything has a place or system I use consistently.", level: 4 },
    ],
  },
  {
    id: "q2",
    section: 2,
    text: "How do you track tasks, customers, money, or orders?",
    options: [
      { id: "a", text: "I mostly check WhatsApp, phone calls, or memory. Nothing is recorded properly.", level: 1 },
      { id: "b", text: "I write things down or use simple tools like Google Sheets or notes, but it's not complete or consistent.", level: 2 },
      { id: "c", text: "I use tools like Sheets, Notion, Trello, or Drive, but the information is still scattered or not updated regularly.", level: 3 },
      { id: "d", text: "I track everything in one organized system where all information is updated and easy to find.", level: 4 },
    ],
  },
  {
    id: "q3",
    section: 3,
    text: "How does your team communicate and get work done?",
    options: [
      { id: "a", text: "Mostly WhatsApp chats and voice notes. Everyone figures things out themselves.", level: 1 },
      { id: "b", text: "We try to use WhatsApp or a shared note, but instructions get lost and people still ask for updates.", level: 2 },
      { id: "c", text: "We use tools like Slack, Trello, or shared folders, but things are not consistent. Some people still rely on chats.", level: 3 },
      { id: "d", text: "We have one main tool for communication and tasks, and everyone follows it. Work moves smoothly.", level: 4 },
    ],
  },
  {
    id: "q4",
    section: 4,
    text: "How do you keep your customer information organized?",
    options: [
      { id: "a", text: "I search through chats, emails, or my phone when I need something.", level: 1 },
      { id: "b", text: "I save some things, but they're in different places (notes, chats, screenshots).", level: 2 },
      { id: "c", text: "I try to keep customer info in Google Sheets, Notion, or Drive, but it's not complete or well-arranged.", level: 3 },
      { id: "d", text: "All customer information is stored in one clear system, properly arranged, named, and easy to find.", level: 4 },
    ],
  },
  {
    id: "q5",
    section: 5,
    text: "What happens after a customer reaches out?",
    options: [
      { id: "a", text: "I reply manually each time and try to remember what to tell them.", level: 1 },
      { id: "b", text: "I use saved replies or copy-and-paste messages, but I still have to check many places.", level: 2 },
      { id: "c", text: "I have steps I try to follow (e.g., confirm details → send price → collect payment) but it's not always consistent.", level: 3 },
      { id: "d", text: "I have a clear process I follow every time (e.g., form → invoice → payment → delivery), and nothing gets missed.", level: 4 },
    ],
  },
  {
    id: "q6",
    section: 6,
    text: "How do you manage delivery or service fulfillment?",
    options: [
      { id: "a", text: "I do everything manually and handle things as they come.", level: 1 },
      { id: "b", text: "I write things down, but changes or mistakes still happen often.", level: 2 },
      { id: "c", text: "I use tools like Sheets, Drive, or a shared folder, but things sometimes get mixed up.", level: 3 },
      { id: "d", text: "I have a proper system where all requests, orders, deliverables, or service steps are clear, updated, and easy to monitor.", level: 4 },
    ],
  },
  {
    id: "q7",
    section: 7,
    text: "How do you keep records for your business (sales, expenses, customers)?",
    options: [
      { id: "a", text: "I don't have proper records. I check chats, memory, or bank alerts.", level: 1 },
      { id: "b", text: "I keep some records in random places (notebooks, notes app, screenshots).", level: 2 },
      { id: "c", text: "I use Sheets, Notion, or simple tools, but the records are not complete or organized.", level: 3 },
      { id: "d", text: "I have one organized place for all records, and everything is updated frequently.", level: 4 },
    ],
  },
  {
    id: "q8",
    section: 8,
    text: "Do you have documented processes or SOPs?",
    options: [
      { id: "a", text: "No. Everyone just does things their own way.", level: 1 },
      { id: "b", text: "Some things are written down, but they're not complete or easy to follow.", level: 2 },
      { id: "c", text: "I have processes written somewhere, but I don't use them consistently.", level: 3 },
      { id: "d", text: "I have clear step-by-step processes for major parts of my business, and the team follows them.", level: 4 },
    ],
  },
  {
    id: "q9",
    section: 9,
    text: "When mistakes happen, what usually causes them?",
    options: [
      { id: "a", text: "People are confused about what to do or what comes next.", level: 1 },
      { id: "b", text: "Instructions were shared, but the information wasn't clear or was scattered.", level: 2 },
      { id: "c", text: "The tools or steps exist, but people forget or skip them sometimes.", level: 3 },
      { id: "d", text: "Mistakes are rare because everyone knows the steps and where to find information.", level: 4 },
    ],
  },
  {
    id: "q10",
    section: 10,
    text: "How much automation do you use right now?",
    options: [
      { id: "a", text: "None. I do everything by hand.", level: 1 },
      { id: "b", text: "I use small things like saved replies or templates, but that's all.", level: 2 },
      { id: "c", text: "I use some simple automations (forms, auto-emails, scheduled posts), but not everywhere.", level: 3 },
      { id: "d", text: "I use automation in many parts of my business (forms, reminders, tracking, communication).", level: 4 },
    ],
  },
  {
    id: "q11",
    section: 11,
    text: "How consistent is your business overall?",
    options: [
      { id: "a", text: "Things change daily. I'm always reacting.", level: 1 },
      { id: "b", text: "I try to be consistent, but something always gets in the way.", level: 2 },
      { id: "c", text: "I follow some routines and tools, but not all the time.", level: 3 },
      { id: "d", text: "Things run the same way every week. It's predictable and organized.", level: 4 },
    ],
  },
  {
    id: "q12",
    section: 12,
    text: "If you got 3x more customers tomorrow, what would happen?",
    options: [
      { id: "a", text: "I would be overwhelmed. I can't handle it.", level: 1 },
      { id: "b", text: "I would try, but things might get messy or delayed.", level: 2 },
      { id: "c", text: "I can handle more, but I'll need better structure soon.", level: 3 },
      { id: "d", text: "I'm ready. My system can grow without stress.", level: 4 },
    ],
  },
];

export const levelDescriptions = {
  1: {
    title: "Level 1: Survival Mode",
    emoji: "🌱",
    description: "You're in reactive mode — handling things as they come with no clear systems in place. Everything depends on your memory and manual effort.",
    challenges: [
      "Overwhelmed by daily tasks",
      "Forgetting important details",
      "Hard to scale or delegate",
      "Inconsistent customer experience"
    ],
    nextSteps: [
      "Start documenting your most repeated tasks",
      "Create simple checklists for common processes",
      "Use basic tools like Google Sheets to track customers and orders",
      "Set up a simple file storage system (Google Drive or Dropbox)"
    ]
  },
  2: {
    title: "Level 2: Building Blocks",
    emoji: "🧱",
    description: "You're trying to get organized with basic tools and notes, but things still feel scattered. You know what needs to be done but struggle with consistency.",
    challenges: [
      "Information is scattered across multiple places",
      "Hard to find things when you need them",
      "Some processes exist but aren't followed consistently",
      "Team members still rely heavily on asking you questions"
    ],
    nextSteps: [
      "Consolidate your tools — pick one main system for tracking",
      "Create templates for common tasks (invoices, follow-ups, proposals)",
      "Document your core processes step-by-step",
      "Set up basic automations (saved replies, email templates, scheduled posts)"
    ]
  },
  3: {
    title: "Level 3: Structured Growth",
    emoji: "🏗️",
    description: "You have systems and tools in place, but they're not fully consistent. You're close to having a smooth operation — just need to tighten things up.",
    challenges: [
      "Systems exist but aren't always followed",
      "Some manual work that could be automated",
      "Occasional confusion or missed steps",
      "Ready to scale but need stronger infrastructure"
    ],
    nextSteps: [
      "Audit your current tools and remove what's not working",
      "Automate repetitive tasks (forms, reminders, follow-ups)",
      "Create a central knowledge base for your team",
      "Implement weekly reviews to maintain consistency"
    ]
  },
  4: {
    title: "Level 4: Optimized Operations",
    emoji: "🚀",
    description: "You have clear, documented, and consistent systems. Your business runs smoothly with minimal manual intervention. You're ready to scale confidently.",
    challenges: [
      "Maintaining systems as you grow",
      "Keeping documentation updated",
      "Ensuring new team members follow established processes",
      "Identifying new areas for optimization"
    ],
    nextSteps: [
      "Focus on advanced automation and integration",
      "Build scalable team onboarding processes",
      "Create dashboards for real-time business insights",
      "Mentor others in systems thinking and operations excellence"
    ]
  },
};
