import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What is ChatKit?",
    prompt: "What is ChatKit?",
    icon: "circle-question",
  },
  // Add more prompts as needed
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "ISO19650-2 Q&A Agent";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  colorScheme: theme,
  radius: "sharp",
  density: "normal",
  color: {
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#4c6fb1",
      level: 1,
    },
    surface: {
      background: theme === "dark" ? "#1a1a1a" : "#F0F4F9",
      foreground: theme === "dark" ? "#2d2d2d" : "#ffffff",
    },
  },
  typography: {
    baseSize: 16,
    fontFamily: '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
    fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
    fontSources: [
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
        weight: 400,
        style: "normal",
        display: "swap",
      },
      // Add more font sources as needed
    ],
  },
});

// Composer configuration
export const COMPOSER_CONFIG = {
  attachments: {
    enabled: true,
    maxCount: 5,
    maxSize: 10485760, // 10MB
  },
  tools: [
    {
      id: "search_docs",
      label: "Search docs",
      shortLabel: "Docs",
      placeholderOverride: "Search documentation",
      icon: "book-open",
      pinned: false,
    },
    // Add more tools as needed
  ],
};
