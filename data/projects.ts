export interface Project {
  id: string;
  title: string;
  tagline: string;
  organization: string;
  period: string;
  shortDescription: string;
  description: string[];
  disclaimer?: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  youtubeId?: string;
  videoTitle?: string;
  architectureImage?: string;
  badge?: string;
  statusBadge?: string;
}

export const projects: Project[] = [
  {
    id: "flow-matrix",
    title: "FlowMatrix: End-to-End E-Commerce ELT Pipeline",
    tagline: "Stream Ingestion, PySpark Batch Processing, S3 Lakehouse & Live Analytics",
    organization: "Open Source",
    period: "Jun 2026 – Jul 2026",
    badge: "Featured System",
    statusBadge: "Live Production Pipeline",
    shortDescription:
      "Production-grade, end-to-end data engineering platform streaming live orders through Apache Kafka, processing with PySpark, orchestrating with Airflow, and querying an AWS S3 medallion data lake via Amazon Athena.",
    description: [
      "Designed and implemented a complete ELT pipeline modeled on e-commerce order workflows, covering stream ingestion, distributed transformation, analytics engineering, orchestration, and data quality validation.",
      "Built a Kafka stream ingestion layer with consumer groups; wrote PySpark jobs to clean, deduplicate, and schema-validate raw event records before loading.",
      "Orchestrated a 6-task Apache Airflow DAG and structured 7 dbt models to produce analytics-ready tables in a Neon serverless PostgreSQL warehouse.",
      "Enforced 34 automated Great Expectations data-quality tests (100% pass rate); processed 1,247 streaming events in a verified full-pipeline test run with end-to-end runtime under 2 minutes.",
      "Extended the pipeline into an AWS data lake over 99,441 Olist orders: S3 bucket provisioned with Terraform (private, versioned, encrypted) with Bronze (raw CSV), Silver (typed Parquet), and Gold (pre-aggregated) layers built by idempotent Athena SQL.",
      "Cut data scanned for a revenue-by-state query from ~17.6 MB on raw CSVs to under 1 KB on a Gold table; pointed the live Streamlit dashboard at the Gold layer through a least-privilege, read-only IAM identity.",
    ],
    techStack: [
      "Python",
      "Apache Kafka",
      "PySpark",
      "Apache Airflow",
      "dbt",
      "AWS S3",
      "Amazon Athena",
      "Terraform",
      "PostgreSQL (Neon)",
      "Great Expectations",
      "Streamlit",
      "Docker",
    ],
    repoUrl: "https://github.com/jawahar-data/flowmatrix-pipeline",
    liveUrl: "https://flowmarics.streamlit.app/",
    youtubeId: "VEHgTUgKvwA",
    videoTitle: "FlowMatrix Pipeline & Architecture Walkthrough",
    architectureImage: "/images/flowmatrix-architecture.png",
  },
  {
    id: "celestial-x",
    title: "CELESTIAL X: Satellite Fire-Event Association",
    tagline: "NASA Space Apps Challenge 2026, Virudhunagar local event, team of 3",
    organization: "NASA Space Apps Challenge 2026",
    period: "NASA Space Apps Challenge 2026, Virudhunagar local event, team of 3",
    badge: "NASA Space Apps 2026",
    statusBadge: "Live Streamlit App",
    shortDescription:
      "NASA Space Apps Challenge 2026, Virudhunagar local event, team of 3",
    description: [
      "A satellite can detect the same ongoing fire on many days, so counting every detection as a new fire overstates fire activity. CELESTIAL X treats this as an entity-resolution problem.",
      "FIRE-FUSE, a spatiotemporal method, groups NASA FIRMS MODIS and VIIRS hotspot detections into persistent fire events using H3 spatial indexing to find nearby candidates, Haversine distance to compare them, and day-to-day temporal matching to link them.",
      "The Streamlit app has an interactive satellite map and a fire-event view.",
    ],
    disclaimer:
      "Satellite detections are not confirmed ground-level fires; event grouping is an analytical estimate.",
    techStack: ["Python", "Streamlit", "SQLite", "H3", "PyDeck", "NASA FIRMS"],
    repoUrl: "https://github.com/jawahar-data/celestial-x-nasa",
    liveUrl: "https://celestial-x-nasa.streamlit.app",
    youtubeId: "GCleRHL-QSU",
    videoTitle: "CELESTIAL X Interactive Demo & Fire-Event Resolution Walkthrough",
  },
  {
    id: "weather-etl",
    title: "Weather ETL Dashboard (Live City Pulse)",
    tagline: "Automated ETL pipeline capturing and visualising live weather and AQI metrics across 5 global cities",
    organization: "Open Source",
    period: "Feb 2026 – Mar 2026",
    badge: "Open Source",
    statusBadge: "Live Dashboard",
    shortDescription:
      "Automated ETL pipeline capturing and visualising live weather and AQI metrics across 5 global cities.",
    description: [
      "Built a scheduled Python pipeline to extract live weather and air quality data from the OpenWeatherMap API on a recurring cadence.",
      "Applied data cleaning and normalisation transforms to standardise metrics across cities before storage.",
      "Loaded processed records into a lightweight SQL store and connected it to a responsive public dashboard.",
      "Deployed the frontend to GitHub Pages for continuous, zero-downtime public access.",
    ],
    techStack: ["Python", "SQL", "ETL", "OpenWeatherMap API", "GitHub Pages"],
    repoUrl: "https://github.com/jawahar-data/weather-etl-dashboard",
    liveUrl: "https://jawahar-data.github.io/weather-etl-dashboard/",
  },
  {
    id: "kisan-sahayak",
    title: "Kishan Sahayak: AI-Powered Agricultural Assistant",
    tagline: "Multilingual AI assistant for crop disease diagnostics and real-time market price queries, built for rural farmers",
    organization: "Hackathon Project",
    period: "Dec 2025 – Jan 2026",
    badge: "AI For Bharat Hackathon",
    statusBadge: "NLP System",
    shortDescription:
      "Multilingual AI assistant for crop disease diagnostics and real-time market price queries, built for rural farmers.",
    description: [
      "Developed a Python NLP application for the AI For Bharat Hackathon 2026, targeting low-connectivity agricultural communities.",
      "Built a query-translation layer that maps farmer inputs in Tamil, Hindi, and English to structured API requests.",
      "Delivered real-time crop disease diagnostics and local market pricing, removing the language barrier between farmers and data.",
    ],
    techStack: ["Python", "SQL", "NLP", "FastAPI", "Data Analysis"],
    repoUrl: "https://github.com/jawahar-data/Kisan-Sahayak",
  },
];
