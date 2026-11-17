export interface SkillGroup {
  category: string;
  icon: string;
  badge?: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Data Engineering",
    icon: "database",
    badge: "Core Focus",
    skills: [
      "Apache Kafka",
      "Apache Spark (PySpark)",
      "Apache Airflow",
      "dbt",
      "Medallion Architecture",
      "ETL / ELT Pipelines",
      "Real-Time Stream Processing",
      "Great Expectations",
      "Data Ingestion",
      "Data Modeling",
    ],
  },
  {
    category: "Cloud & Warehousing",
    icon: "cloud",
    badge: "Cloud Data",
    skills: [
      "AWS S3",
      "Amazon Athena",
      "Google BigQuery",
      "Google Cloud Platform",
      "PostgreSQL (Neon)",
      "SQL Analytics",
      "Terraform",
      "Render.com",
    ],
  },
  {
    category: "Languages & Backend",
    icon: "code",
    skills: [
      "Python",
      "SQL",
      "FastAPI",
      "REST API Design",
      "Uvicorn",
      "JavaScript",
      "HTML & CSS",
    ],
  },
  {
    category: "AI & Applied ML",
    icon: "cpu",
    skills: [
      "Natural Language Processing",
      "Computer Vision",
      "Supervised Learning",
      "Model Evaluation",
      "Generative AI",
      "Data Analysis",
    ],
  },
  {
    category: "DevOps & Developer Tools",
    icon: "tool",
    skills: [
      "Docker",
      "GitHub Actions",
      "Git",
      "GitHub",
      "VS Code",
      "Excel",
      "Google Sheets",
    ],
  },
  {
    category: "Currently Exploring",
    icon: "book",
    badge: "Actively Learning",
    skills: [
      "Databricks",
      "AWS Glue / Redshift",
      "Distributed Lakehouses",
      "Advanced Query Optimization",
      "Japanese (JLPT N5)",
    ],
  },
];
