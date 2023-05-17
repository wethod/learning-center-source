import { defineConfig } from "tinacms";
import { defaultFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      publicFolder: "static",
      mediaRoot: "uploads",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Desk",
        name: "desk",
        path: "content/desk",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Payroll",
        name: "payroll",
        path: "content/payroll",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Marketing",
        name: "marketing",
        path: "content/marketing",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "External costs",
        name: "external_costs",
        path: "content/external-costs",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Profit loss",
        name: "profit_loss",
        path: "content/profit-loss",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "General admin",
        name: "general_admin",
        path: "content/general-admin",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Revenues",
        name: "revenues",
        path: "content/revenues",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Invoice plan",
        name: "invoice_plan",
        path: "content/invoice-plan",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Order plan",
        name: "order_plan",
        path: "content/order-plan",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Capex",
        name: "capex",
        path: "content/capex",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Group Setup",
        name: "group_setup",
        path: "content/group-setup",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Group Revenues",
        name: "group_revenues",
        path: "content/group-revenues",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Group Profit & Loss",
        name: "group_profit___loss",
        path: "content/group-profit-loss",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Alerts",
        name: "alerts",
        path: "content/alerts",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Budget",
        name: "budget",
        path: "content/budget",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Reports",
        name: "reports",
        path: "content/reports",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Settings",
        name: "settings",
        path: "content/settings",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Finance",
        name: "finance",
        path: "content/finance",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Faq",
        name: "faq",
        path: "content/faq",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Glossary",
        name: "glossary",
        path: "content/glossary",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Friday",
        name: "friday",
        path: "content/friday",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Getting started",
        name: "getting_started",
        path: "content/getting-started",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Planning",
        name: "planning",
        path: "content/planning",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Pipeline",
        name: "pipeline",
        path: "content/pipeline",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Dashboard",
        name: "dashboard",
        path: "content/dashboard",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
      {
        format: "md",
        label: "Gross Margin",
        name: "gross_margin",
        path: "content/gross-margin",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...defaultFields(),
        ],
      },
    ],
  },
});
