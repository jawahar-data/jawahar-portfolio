import { ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  organization: string;
  period: string;
  shortDescription: string;
  description: string[];
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "flow-matrix",
    title: "FlowMatrix: End-to-End E-Commerce ELT Pipeline",
    organization: "Open Source",
    period: "Jun 2026 – Jul 2026",
    shortDescription:
      "FlowMatrix is a production-grade, end-to-end data engineering platform built around a real e-commerce use case. It streams live events through Apache Kafka, processes them at scale with PySpark, and orchestrates the entire workflow via Apache Airflow. Raw data lands in an AWS S3 Data Lake structured across Bronze, Silver, and Gold layers, all queryable on-the-fly via Amazon Athena. dbt handles transformation logic and enforces data quality with schema tests, persisting results in PostgreSQL. Infrastructure is provisioned with Terraform, deployments automated via GitHub Actions, and business insights surfaced through a live Streamlit dashboard — making FlowMatrix a full analytics product from ingestion to insight.",
    description: [
      "Designed and implemented a complete ELT pipeline modeled on e-commerce order workflows, covering stream ingestion, distributed transformation, analytics engineering, orchestration, and data quality validation.",
      "Built a Kafka stream ingestion layer with consumer groups; wrote PySpark jobs to clean, deduplicate, and schema-validate raw event records before loading.",
      "Orchestrated a 6-task Apache Airflow DAG and structured 7 dbt models to produce analytics-ready tables in a Neon serverless PostgreSQL warehouse.",
      "Enforced 34 automated Great Expectations data-quality tests (100% pass rate); processed 1,247 streaming events (500 orders + 747 payments) in a verified full-pipeline test run with end-to-end runtime under 2 minutes.",
      "Streamlit dashboard and Neon PostgreSQL are live and publicly accessible; Kafka, PySpark, and Airflow run locally via Docker during development and demo.",
      "Extended the pipeline into an AWS data lake over 99,441 Olist orders: S3 bucket provisioned with Terraform (private, versioned, encrypted) with Bronze (raw CSV), Silver (typed Parquet), and Gold (pre-aggregated) layers built by idempotent Athena SQL; order counts reconcile across Bronze and Silver, and GitHub Actions validates on every push.",
      "Cut data scanned for a revenue-by-state query from ~17.6 MB on raw CSVs to under 1 KB on a Gold table; pointed the live Streamlit dashboard at the Gold layer through a least-privilege, read-only IAM identity.",
    ],
    techStack: [
      "Python",
      "Apache Kafka",
      "PySpark",
      "Apache Airflow",
      "dbt",
      "PostgreSQL (Neon)",
      "Great Expectations",
      "Streamlit",
      "Docker",
      "GitHub Actions",
      "SQL",
      "Git",
    ],
    repoUrl: "https://github.com/jawahar-data/flowmatrix-pipeline",
    liveUrl: "https://flowmarics.streamlit.app/",
    badge: "Featured",
  },
  {
    id: "weather-etl",
    title: "Weather ETL Dashboard (Live City Pulse)",
    organization: "Open Source",
    period: "Feb 2026 – Mar 2026",
    shortDescription:
      "Automated ETL pipeline capturing and visualising live weather and AQI metrics across 5 global cities.",
    description: [
      "Built a scheduled Python pipeline to extract live weather and air quality data from the OpenWeatherMap API on a recurring cadence.",
      "Applied data cleaning and normalisation transforms to standardise metrics across cities before storage.",
      "Loaded processed records into a lightweight SQL store and connected it to a responsive public dashboard.",
      "Deployed the frontend to GitHub Pages for continuous, zero-downtime public access.",
    ],
    techStack: ["Python", "SQL", "ETL", "OpenWeatherMap API"],
    repoUrl: "https://github.com/jawahar-data/weather-etl-dashboard",
    liveUrl: "https://jawahar-data.github.io/weather-etl-dashboard/",
  },
  {
    id: "kisan-sahayak",
    title: "Kishan Sahayak: AI-Powered Agricultural Assistant",
    organization: "Hackathon Project",
    period: "Dec 2025 – Jan 2026",
    shortDescription:
      "Multilingual AI assistant for crop disease diagnostics and real-time market price queries, built for rural farmers.",
    description: [
      "Developed a Python NLP application for the AI For Bharat Hackathon 2026, targeting low-connectivity agricultural communities.",
      "Built a query-translation layer that maps farmer inputs in Tamil, Hindi, and English to structured API requests.",
      "Delivered real-time crop disease diagnostics and local market pricing, removing the language barrier between farmers and data.",
    ],
    techStack: ["Python", "SQL", "NLP", "Data Analysis"],
    repoUrl: "https://github.com/jawahar-data/Kisan-Sahayak",
  },
];

