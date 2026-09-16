import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import aiBot from "../../assets/AI Bot.png";

type Message = {
  id: number;
  from: "friday" | "user";
  text: string;
  suggestions?: string[];
};

const QUICK_ACTIONS = [
  "Tell me about Friday",
  "CRM Solutions",
  "Automation",
  "Communication",
  "Telephony Products",
  "AI Solutions",
  "Digital Transformation",
  "Talk to us",
];

type Response = {
  text: string;
  suggestions: string[];
};

const RESPONSES: Record<string, Response> = {
  friday: {
    text:
      "I'm Friday — the business technology assistant for Friday. We bring CRM, business automation, customer communication, AI and digital transformation together to help businesses work smarter, move faster and stay connected.",
    suggestions: ["What can Friday do?", "CRM Solutions", "Automation"],
  },

  crm: {
    text:
      "Our CRM solutions help businesses manage leads, contacts, customers, sales pipelines, follow-ups, activities, reporting and customer journeys in one connected system. We can help with CRM implementation, customization, workflow design, integrations and process optimization.",
    suggestions: ["CRM Implementation", "CRM Automation", "CRM + Communication"],
  },

  crmImplementation: {
    text:
      "CRM implementation covers process discovery, module and field design, pipeline configuration, user setup, workflows, dashboards, integrations, data migration where required, testing and rollout. The exact scope depends on your existing process and CRM platform.",
    suggestions: ["CRM Automation", "Integrations", "Talk to us"],
  },

  crmAutomation: {
    text:
      "CRM automation can handle lead assignment, task creation, follow-ups, notifications, approvals, stage-based actions, renewal reminders and other repetitive processes. The goal is to reduce manual work and improve process consistency.",
    suggestions: ["CRM Solutions", "Workflow Automation", "Talk to us"],
  },

  automation: {
    text:
      "Our Business Automation solutions connect repetitive business processes into structured workflows. Typical use cases include lead assignment, approvals, notifications, follow-ups, data movement, task creation and cross-system processes.",
    suggestions: ["Workflow Automation", "CRM Automation", "Integrations"],
  },

  workflow: {
    text:
      "Workflow automation can connect triggers, conditions, actions, approvals, notifications and system updates. We first understand the process, then design the workflow around the tools your business already uses.",
    suggestions: ["CRM Automation", "Integrations", "Talk to us"],
  },

  communication: {
    text:
      "Our Communication solutions help businesses connect customer conversations across business calling, messaging and communication workflows. Communication can also be connected with CRM and automation so teams can manage customer interactions more efficiently.",
    suggestions: ["Business Calling", "Communication + CRM", "Talk to us"],
  },

  calling: {
    text:
      "For business calling, we can help evaluate cloud telephony, business phone systems, IVR, call routing, call recording, WebRTC/browser calling, CRM-integrated calling and API-based calling requirements. The exact telecom features and availability depend on the deployment and applicable telecom requirements.",
    suggestions: ["CRM + Communication", "API Integration", "Talk to us"],
  },

  telephonyProducts: {
    text:
      "Our connected business telephony portfolio includes Business Phone System (BPS), Cloud PBX, Cloud Contact Center, WebRTC/browser calling, Hybrid PSTN calling, Mobile Series, Virtual Landline Series, Transactional 1400/1600 Series, Toll Free 1800 Series, international DID services, API-based telephony through PIOPIY, AI Agent connectivity, Truecaller Verified Business Caller ID and Post Call Analytics. The right product depends on your calling model, users/channels, geography and integration requirements.",
    suggestions: ["Business Phone System", "Cloud Contact Center", "PIOPIY API"],
  },

  bps: {
    text:
      "Business Phone System (BPS) is designed for business calling with capabilities such as inbound, outbound and blended calling, IVR, call routing, call recording, CRM integration and WebRTC/browser calling. Available configurations can include Enterprise, Hybrid Telephony, Mobile Series, Virtual Landline, Transactional 1400/1600 and Toll Free 1800 requirements.",
    suggestions: ["Cloud PBX", "WebRTC Calling", "Talk to us"],
  },

  cloudPbx: {
    text:
      "Cloud PBX provides a cloud-based business phone system for teams. Plans can be structured around different user bundles, with features such as business calling, IVR, call routing and connected telephony workflows. The exact bundle and commercials depend on users, billing frequency and requirements.",
    suggestions: ["BPS", "Cloud Contact Center", "Talk to us"],
  },

  contactCenter: {
    text:
      "Cloud Contact Center (CCC) supports customer communication workflows and can include Hybrid Telephony and Auto Dialer capabilities. It is suitable for teams handling structured inbound, outbound or blended customer interactions.",
    suggestions: ["BPS", "Auto Dialer", "CRM + Communication"],
  },

  webRtc: {
    text:
      "WebRTC enables browser-based calling without relying only on a traditional desk-phone experience. It can be used with CRM and web applications and can support business calling workflows. Hybrid PSTN options can be evaluated when browser and telecom-network calling need to work together.",
    suggestions: ["BPS", "Cloud PBX", "PIOPIY API"],
  },

  pioPiy: {
    text:
      "PIOPIY is the developer telephony layer for connecting calling capabilities with applications. It can be used for Phone Call API use cases and AI Agent connectivity. Exact API capabilities and implementation depend on the application and use case.",
    suggestions: ["API Integration", "AI Solutions", "Talk to us"],
  },

  globalCalling: {
    text:
      "International calling can be evaluated using international DID services and outbound calling options for supported countries and destinations. Availability, numbering, KYC, telecom approval and tariffs depend on the country, number type and destination.",
    suggestions: ["International DID", "Business Calling", "Talk to us"],
  },

  ai: {
    text:
      "Our AI Solutions focus on practical business use cases such as AI assistants, conversational experiences, intelligent automation, AI-enabled workflows and connecting AI with business systems. We can help identify where AI can create measurable business value.",
    suggestions: ["AI Automation", "AI Assistant", "Talk to us"],
  },

  aiAutomation: {
    text:
      "AI automation combines AI decision-making or content generation with business workflows. Examples can include handling routine queries, classifying information, assisting teams, triggering workflows and connecting AI experiences with business systems.",
    suggestions: ["AI Solutions", "Workflow Automation", "Integrations"],
  },

  transformation: {
    text:
      "Digital Transformation is about connecting people, processes and technology into a more scalable operating model. Friday can combine CRM, automation, communication, AI and digital services around your business goals.",
    suggestions: ["CRM Solutions", "Automation", "AI Solutions"],
  },

  digitalMarketing: {
    text:
      "Our digital marketing services include Branding, Website Development and SEO. We can help businesses strengthen their digital presence, build modern websites and improve search visibility.",
    suggestions: ["Branding", "Website Development", "SEO"],
  },

  branding: {
    text:
      "Branding helps establish a consistent business identity across your digital presence. Scope can include brand direction, visual identity and supporting digital brand assets based on your requirements.",
    suggestions: ["Website Development", "Digital Marketing", "Talk to us"],
  },

  website: {
    text:
      "Website Development focuses on creating modern, responsive and business-oriented websites. The scope can cover structure, UI, responsive behavior, content presentation, integrations and deployment requirements.",
    suggestions: ["Branding", "SEO", "Talk to us"],
  },

  seo: {
    text:
      "SEO focuses on improving your website's search visibility through technical, content and on-page optimization. The exact strategy depends on your website, target audience, market and search objectives.",
    suggestions: ["Website Development", "Digital Marketing", "Talk to us"],
  },

  integration: {
    text:
      "We can evaluate integrations between CRM, communication, automation, AI and other business systems. Depending on the platform, integration may use native connectors, REST APIs, webhooks or SDK-based approaches.",
    suggestions: ["CRM Solutions", "Communication", "API Integration"],
  },

  api: {
    text:
      "API-based integration can connect your business applications and automate data exchange between systems. The available API methods depend on the products and platforms involved, so our team can review your exact requirement before confirming feasibility.",
    suggestions: ["Integrations", "Automation", "Talk to us"],
  },

  industries: {
    text:
      "Friday's solutions can be adapted for industries including Healthcare, Education, Financial Services, Real Estate, Technology and Professional Services. The implementation is designed around the industry's process, customer journey and operational requirements.",
    suggestions: ["Healthcare", "Financial Services", "Talk to us"],
  },

  healthcare: {
    text:
      "For Healthcare businesses, Friday can help explore CRM, communication, workflow automation, digital presence and AI use cases around customer or patient journeys. The exact solution depends on the organization's process and compliance requirements.",
    suggestions: ["CRM Solutions", "Automation", "Communication"],
  },

  financial: {
    text:
      "For Financial Services businesses, Friday can help explore CRM, customer communication, workflow automation, integrations and AI-enabled processes. Any regulated or compliance-sensitive implementation needs to be assessed for the specific use case.",
    suggestions: ["CRM Solutions", "Automation", "AI Solutions"],
  },

  pricing: {
    text:
      "Pricing depends on the product, scope, number of users or channels, integrations, implementation requirements and other project-specific factors. I don't want to give you an incorrect price. Share your requirement and our team will review it and get back to you.",
    suggestions: ["Tell me about Friday", "What do you need?", "Talk to us"],
  },

  demo: {
    text:
      "Yes, our team can discuss a demo based on your requirement. Tell us which solution you are evaluating and what you want to achieve, and we can route the request to the appropriate team.",
    suggestions: ["CRM Solutions", "AI Solutions", "Talk to us"],
  },

  contact: {
    text:
      "Absolutely! 👋 Tell me what you're looking to build, improve or automate. I'll help identify the closest Friday solution. If your question needs a product-specific, commercial or technical answer that I don't have, our team will reach out shortly.",
    suggestions: ["I need CRM", "I need Automation", "I want to talk to the team"],
  },

  fallback: {
    text:
      "I don't have a reliable answer for that question yet. I don't want to guess and give you incorrect information. Please share your requirement, and our team will reach out shortly.",
    suggestions: ["Tell me about Friday", "CRM Solutions", "Talk to us"],
  },
};

function getResponse(input: string): Response {
  const value = input.toLowerCase().trim();

  if (
    value.includes("tell me about friday") ||
    value.includes("what is friday") ||
    value.includes("who are you") ||
    value.includes("what can friday do") ||
    value.includes("about friday")
  ) {
    return RESPONSES.friday;
  }

  if (
    value.includes("pricing") ||
    value.includes("price") ||
    value.includes("cost") ||
    value.includes("quote")
  ) {
    return RESPONSES.pricing;
  }

  if (
    value.includes("demo") ||
    value.includes("demonstration")
  ) {
    return RESPONSES.demo;
  }

  if (
    value.includes("healthcare") ||
    value.includes("hospital") ||
    value.includes("clinic")
  ) {
    return RESPONSES.healthcare;
  }

  if (
    value.includes("financial") ||
    value.includes("banking") ||
    value.includes("finance")
  ) {
    return RESPONSES.financial;
  }

  if (
    value.includes("industry") ||
    value.includes("industries") ||
    value.includes("education") ||
    value.includes("real estate") ||
    value.includes("professional services") ||
    value.includes("technology industry")
  ) {
    return RESPONSES.industries;
  }

  if (
    value.includes("branding") ||
    value.includes("brand identity") ||
    value.includes("brand")
  ) {
    return RESPONSES.branding;
  }

  if (
    value.includes("website") ||
    value.includes("web development") ||
    value.includes("web development")
  ) {
    return RESPONSES.website;
  }

  if (
    value.includes("seo") ||
    value.includes("search engine") ||
    value.includes("search visibility")
  ) {
    return RESPONSES.seo;
  }

  if (
    value.includes("digital marketing") ||
    value.includes("digital marketing services")
  ) {
    return RESPONSES.digitalMarketing;
  }

  if (
    value.includes("api") ||
    value.includes("webhook") ||
    value.includes("sdk") ||
    value.includes("rest api")
  ) {
    return RESPONSES.api;
  }

  if (
    value.includes("integration") ||
    value.includes("integrate") ||
    value.includes("connected systems") ||
    value.includes("connect systems")
  ) {
    return RESPONSES.integration;
  }

  if (
    value.includes("ai automation") ||
    value.includes("ai agent") ||
    value.includes("ai assistant") ||
    value.includes("intelligent automation")
  ) {
    return RESPONSES.aiAutomation;
  }

  if (
    value === "ai" ||
    value.includes(" ai ") ||
    value.includes("artificial intelligence") ||
    value.includes("ai solution") ||
    value.includes("ai solutions")
  ) {
    return RESPONSES.ai;
  }

  if (
    value.includes("telephony products") ||
    value.includes("all products") ||
    value.includes("product list") ||
    value.includes("telephony portfolio")
  ) {
    return RESPONSES.telephonyProducts;
  }

  if (
    value.includes("business phone system") ||
    value.includes("bps") ||
    value.includes("mobile series") ||
    value.includes("virtual landline") ||
    value.includes("toll free") ||
    value.includes("1400") ||
    value.includes("1600") ||
    value.includes("1800 series")
  ) {
    return RESPONSES.bps;
  }

  if (
    value.includes("cloud pbx") ||
    value.includes("pbx")
  ) {
    return RESPONSES.cloudPbx;
  }

  if (
    value.includes("cloud contact center") ||
    value.includes("contact centre") ||
    value.includes("auto dialer") ||
    value.includes("autodialer")
  ) {
    return RESPONSES.contactCenter;
  }

  if (
    value.includes("webrtc") ||
    value.includes("browser calling") ||
    value.includes("hybrid pstn")
  ) {
    return RESPONSES.webRtc;
  }

  if (
    value.includes("piopiy") ||
    value.includes("phone call api") ||
    value.includes("developer telephony")
  ) {
    return RESPONSES.pioPiy;
  }

  if (
    value.includes("international did") ||
    value.includes("international calling") ||
    value.includes("global calling") ||
    value.includes("usa did") ||
    value.includes("uk did") ||
    value.includes("uae did")
  ) {
    return RESPONSES.globalCalling;
  }

  if (
    value.includes("calling") ||
    value.includes("call center") ||
    value.includes("contact center") ||
    value.includes("phone") ||
    value.includes("ivr") ||
    value.includes("webrtc") ||
    value.includes("cloud pbx") ||
    value.includes("telephony")
  ) {
    return RESPONSES.calling;
  }

  if (
    value.includes("communication") ||
    value.includes("messaging") ||
    value.includes("whatsapp") ||
    value.includes("customer conversation")
  ) {
    return RESPONSES.communication;
  }

  if (
    value.includes("crm automation") ||
    value.includes("lead assignment") ||
    value.includes("follow-up") ||
    value.includes("follow up")
  ) {
    return RESPONSES.crmAutomation;
  }

  if (
    value.includes("crm implementation") ||
    value.includes("implement crm") ||
    value.includes("crm setup")
  ) {
    return RESPONSES.crmImplementation;
  }

  if (
    value.includes("workflow") ||
    value.includes("approval") ||
    value.includes("repetitive work") ||
    value.includes("business automation") ||
    value.includes("automate")
  ) {
    return RESPONSES.workflow;
  }

  if (
    value.includes("crm") ||
    value.includes("customer relationship") ||
    value.includes("customer management") ||
    value.includes("lead management") ||
    value.includes("sales pipeline") ||
    value.includes("sales crm")
  ) {
    return RESPONSES.crm;
  }

  if (
    value.includes("digital transformation") ||
    value.includes("transformation") ||
    value.includes("modernize") ||
    value.includes("modernise")
  ) {
    return RESPONSES.transformation;
  }

  if (
    value.includes("talk to us") ||
    value.includes("contact") ||
    value.includes("sales team") ||
    value.includes("team") ||
    value.includes("i want to talk")
  ) {
    return RESPONSES.contact;
  }

  return RESPONSES.fallback;
}

export default function FridayChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "friday",
      text: "Hi, I'm Friday! 👋",
      suggestions: [
        "Tell me about Friday",
        "CRM Solutions",
        "Telephony Products",
        "Automation",
      ],
    },
    {
      id: 2,
      from: "friday",
      text: "How can I help you today?",
      suggestions: [
        "Communication",
        "AI Solutions",
        "Talk to us",
      ],
    },
  ]);

  // Allow the large Friday Bot in the Hero section to open this same chat.
  useEffect(() => {
    const openFridayChat = () => {
      setOpen(true);
    };

    window.addEventListener("friday:open-chat", openFridayChat);

    return () => {
      window.removeEventListener("friday:open-chat", openFridayChat);
    };
  }, []);

  const sendMessage = (text: string) => {
    const value = text.trim();
    if (!value) return;

    const userMessage: Message = {
      id: Date.now(),
      from: "user",
      text: value,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const response = getResponse(value);

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          from: "friday",
          text: response.text,
          suggestions: response.suggestions,
        },
      ]);
      setIsTyping(false);
    }, 450);
  };

  useEffect(() => {
    if (!open) return;

    const frame = window.requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [messages, isTyping, open]);

  const resetConversation = () => {
    setIsTyping(false);
    setMessages([
      {
        id: Date.now(),
        from: "friday",
        text: "Hi, I'm Friday! 👋",
        suggestions: [
          "Tell me about Friday",
          "CRM Solutions",
          "Telephony Products",
          "Automation",
        ],
      },
      {
        id: Date.now() + 1,
        from: "friday",
        text: "How can I help you today?",
        suggestions: [
          "Communication",
          "AI Solutions",
          "Talk to us",
        ],
      },
    ]);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-[82px] right-3 z-[100] flex h-[min(620px,calc(100vh-98px))] w-[min(360px,calc(100vw-24px))] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-[22px] border border-ink/[0.08] bg-white shadow-[0_24px_70px_-20px_rgba(11,28,51,0.35)] sm:right-5 sm:bottom-[88px] sm:w-[360px] sm:max-w-[calc(100vw-32px)]"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 bg-gradient-to-r from-[#0A3D91] via-[#126FD1] to-[#078bd3] px-4 py-3.5 text-white">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                <img
                  src={aiBot}
                  alt="Friday AI"
                  className="h-9 w-9 object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-[14px] font-semibold">Friday AI</div>
                <div className="flex items-center gap-1.5 text-[11px] text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#79e6b0]" />
                  Online • Ready to help
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close Friday chat"
                className="flex h-8 w-8 items-center justify-center rounded-full text-xl text-white/80 transition-all hover:bg-white/15 hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain bg-[#f8fbfe] px-3.5 py-4 sm:px-4">
              <div className="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.12em] text-ink/35">
                Friday AI Assistant
              </div>

              <div className="space-y-3">
                {messages.map((message) => (
                  <div key={message.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.from === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[82%] rounded-[18px] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                          message.from === "user"
                            ? "rounded-br-md bg-[#0A3D91] text-white"
                            : "rounded-bl-md border border-ink/[0.06] bg-white text-ink shadow-sm"
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>

                    {/* Context-aware follow-up suggestions */}
                    {message.from === "friday" &&
                      message.suggestions &&
                      message.suggestions.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.12 }}
                          className="mt-2 flex flex-wrap gap-1.5"
                        >
                          {message.suggestions.map((suggestion) => (
                            <button
                              key={`${message.id}-${suggestion}`}
                              type="button"
                              onClick={() => sendMessage(suggestion)}
                              className="rounded-full border border-[#078bd3]/20 bg-white px-2.5 py-1.5 text-[10.5px] font-medium text-[#0A3D91] shadow-sm transition-all hover:scale-[1.02] hover:border-[#078bd3]/40 hover:bg-[#078bd3]/[0.06]"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </motion.div>
                      )}
                  </div>
                ))}
              </div>

              {/* Scroll anchor: always keep the newest message in view */}
              <div ref={messagesEndRef} aria-hidden="true" className="h-px w-full" />
            </div>

            {/* Quick actions */}
            <div className="border-t border-ink/[0.06] bg-white px-3.5 py-3">
              <div className="mb-2 flex items-center justify-between">
                <div className="text-[10px] font-medium uppercase tracking-[0.08em] text-ink/40">
                  Quick help
                </div>

                <button
                  type="button"
                  onClick={resetConversation}
                  className="text-[10px] font-medium text-[#078bd3] transition-colors hover:text-[#0A3D91]"
                >
                  New chat
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5 overflow-visible">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action}
                    type="button"
                    onClick={() => sendMessage(action)}
                    className="shrink-0 rounded-full border border-[#078bd3]/20 bg-[#078bd3]/[0.06] px-2.5 py-1.5 text-[10.5px] font-medium text-[#0A3D91] transition-all hover:scale-[1.03] hover:border-[#078bd3]/40 hover:bg-[#078bd3]/10"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
              className="flex shrink-0 items-center gap-2 border-t border-ink/[0.06] bg-white p-3"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Friday anything..."
                className="min-w-0 flex-1 rounded-full bg-[#f4f7fa] px-4 py-2.5 text-[12px] text-ink outline-none placeholder:text-ink/35 focus:ring-2 focus:ring-[#078bd3]/15"
              />

              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A3D91] text-white transition-all hover:scale-105 hover:bg-[#126FD1]"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2 11 13" />
                  <path d="m22 2-7 20-4-9-9-4Z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close Friday AI chat" : "Open Friday AI chat"}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-3 z-[101] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0A3D91] via-[#126FD1] to-[#078bd3] shadow-[0_12px_35px_-10px_rgba(10,61,145,0.65)] ring-4 ring-white/80 sm:bottom-5 sm:right-5"
      >
        {open ? (
          <span className="text-2xl leading-none text-white">×</span>
        ) : (
          <>
            <img
              src={aiBot}
              alt=""
              className="h-10 w-10 object-contain"
            />
            <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#45d39b]" />
          </>
        )}
      </motion.button>

      {/* Small greeting teaser when chat is closed */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 0.8, duration: 0.25 }}
            className="pointer-events-none fixed bottom-[25px] right-[80px] z-[99] hidden rounded-full border border-ink/[0.07] bg-white px-3.5 py-2 text-[11px] font-medium text-ink shadow-[0_8px_25px_-10px_rgba(11,28,51,0.3)] sm:block"
          >
            Hi, I'm Friday! 👋
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
