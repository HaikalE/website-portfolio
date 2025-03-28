export const projects = [
  {
    id: 1,
    title: "Decodream",
    date: "Mar 2025",
    description: "An IC-blockchain-based platform for transforming dreams into digital art using AI technology.",
    features: [
      "Implemented AI-driven dream interpretation, semantic analysis, and personalized insights.",
      "Integrated AI-generated artwork with NFT minting capabilities, enabling users to create and trade dream-inspired digital assets.",
    ],
    technologies: ["Motoko", "JavaScript", "SCSS", "AI APIs", "Stable Diffusion", "Internet Computer Protocol"],
    imageUrl: "/assets/images/projects/decodream.jpg",
    projectUrls: [
      { label: "GitHub", url: "https://github.com/sngbd/decodream" }
    ],
    category: ["AI", "Blockchain"],
    featured: true,
  },
  {
    id: 2,
    title: "Ethereal Lens",
    date: "Jan 2024",
    description: "An application that allows users to discreetly capture videos, optimized for Android 14.",
    features: [
      "Integrated Background Recording, Overlay Support, and Stealth Mode features to ensure seamless and unobtrusive media capture.",
      "Achieved compatibility with Android 14, ensuring top performance and stability during background operations.",
    ],
    technologies: ["Kotlin", "Android Studio", "Material Design", "Git"],
    imageUrl: "/assets/images/projects/ethereal-lens.jpg",
    projectUrls: [
      { label: "GitHub", url: "https://github.com/HaikalE/Ethereal-Lens/tree/main" }
    ],
    category: ["Mobile", "Android"],
    featured: true,
  },
  {
    id: 3,
    title: "BMKG Weather Scraping Telegram Bot",
    date: "Mar 2024",
    description: "This Telegram bot provides weather information by scraping the BMKG (Badan Meteorologi, Klimatologi, dan Geofisika) website. Users can interact with the bot to retrieve weather forecasts for various dates and cities across Indonesia.",
    features: [
      "Successfully implemented weather forecast retrieval for over 50 cities in Indonesia, achieving real-time accuracy of data scraping.",
    ],
    technologies: ["Python", "BeautifulSoup", "Telegram Bot API", "Requests"],
    imageUrl: "/assets/images/projects/weather-bot.jpg",
    projectUrls: [
      { label: "Blog Post", url: "https://haikal332.wordpress.com/2024/03/10/membuat-bot-telegram-untuk-mendapatkan-informasi-cuaca-dengan-web-scraping/" }
    ],
    category: ["Bot", "Web Scraping", "Python"],
    featured: false,
  },
  {
    id: 4,
    title: "GPA Calculator",
    date: "Jul 2023",
    description: "An app enables users to input courses and grades for GPA calculation while providing visual graphs to track academic progress.",
    features: [],
    technologies: ["Java", "Android Studio", "SQLite"],
    imageUrl: "/assets/images/projects/gpa-calc.jpg",
    projectUrls: [
      { label: "GitHub", url: "https://github.com/HaikalE/CGPA-CALCULATOR_APP/tree/master" }
    ],
    category: ["Mobile", "Android"],
    featured: false,
  },
  {
    id: 5,
    title: "The Education Game: \"My Arabic Journey\"",
    date: "Jun 2023",
    description: "Aiming to teach Arabic vocabulary through interactive lessons. It incorporates pronunciation guidance for each word and includes quizzes to reinforce learning.",
    features: [],
    technologies: ["Bootstrap", "HTML", "JavaScript", "Node.js"],
    imageUrl: "/assets/images/projects/arabic-journey.jpg",
    projectUrls: [
      { label: "GitHub", url: "https://github.com/HaikalE/My-Arabic-Journey" }
    ],
    category: ["Web", "Education"],
    featured: false,
  },
  {
    id: 6,
    title: "Image Security Application Using Somsuk-RSA Algorithm",
    date: "Feb 2025",
    description: "Developed a computer program application for securing images using the Somsuk-RSA algorithm, providing robust encryption and data protection.",
    features: [
      "Officially registered under Indonesian Copyright Law (EC00202510303).",
    ],
    technologies: ["Python", "RSA Encryption", "Image Processing"],
    imageUrl: "/assets/images/projects/image-security.jpg",
    projectUrls: [
      { label: "Documentation", url: "https://drive.google.com/file/d/1cy5s2aKCHhhTMotw4Dsou3oWeN22fVTu/view?usp=sharing" }
    ],
    category: ["Security", "Python"],
    featured: true,
  },
  {
    id: 7,
    title: "Network Quality Support Ticketing Bot",
    date: "May 2024",
    description: "Designed for ticket reporting in support of quality network operations to the SQA (Security Quality Assurance) division.",
    features: [
      "Includes features for data visualization to enhance data comprehension and facilitate better decision-making.",
    ],
    technologies: ["Python", "Power BI", "Telegram Bot API", "Requests"],
    imageUrl: "/assets/images/projects/ticketing-bot.jpg",
    projectUrls: [],
    category: ["Bot", "Data Visualization"],
    featured: false,
  },
  {
    id: 8,
    title: "Kanban Board Web Application",
    date: "Jul 2024",
    description: "Built using React for the frontend, Node.js for the backend, and PostgreSQL for the database.",
    features: [
      "Allows teams to organize tasks, track project progress, and manage workflows efficiently.",
      "Features real-time synchronization for seamless collaboration.",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "WebSockets", "Git"],
    imageUrl: "/assets/images/projects/kanban.jpg",
    projectUrls: [
      { label: "Frontend Code", url: "https://github.com/HaikalE/Kanban-Board-Frontend" },
      { label: "Backend Code", url: "https://github.com/HaikalE/Kanban-Board-Backend" }
    ],
    category: ["Web", "Full Stack"],
    featured: true,
  },
  {
    id: 9,
    title: "Instant Messaging Security Using AES-256 and RSA CRT Algorithm",
    date: "Oct 2024",
    description: "Secured instant messaging by integrating AES-256 for message encryption and RSA CRT for efficient key exchange.",
    features: [
      "Built with a NoSQL database and Node.js backend, delivering a secure real-time communication experience.",
    ],
    technologies: ["Kotlin", "AES-256", "RSA CRT", "NoSQL", "Node.js"],
    imageUrl: "/assets/images/projects/messaging-security.jpg",
    projectUrls: [
      { label: "Frontend Code", url: "https://github.com/HaikalE/RSA-AES-CHAT-APPLICATION-ANDROID" },
      { label: "Backend Code", url: "https://github.com/HaikalE/RSA-AES-CHAT-APPLICATION-BACKEND" }
    ],
    category: ["Security", "Mobile"],
    featured: true,
  },
  {
    id: 10,
    title: "Implementation of Xception Architecture on CNN for Classification of Indonesian Spices",
    date: "Mar 2024",
    description: "Implemented the Xception Architecture in a Convolutional Neural Network (CNN) to classify Indonesian spices using Kaggle data.",
    features: [
      "The model achieved a training and validation accuracy of 87%, highlighting its effectiveness in identifying diverse culinary ingredients.",
    ],
    technologies: ["Python", "Streamlit", "Xception CNN", "Image Classification"],
    imageUrl: "/assets/images/projects/spice-classifier.jpg",
    projectUrls: [
      { label: "Project Files", url: "https://drive.google.com/drive/folders/1Vv8OrE0q2oxn9DeZKng7ip0b77jYGPeb" }
    ],
    category: ["AI", "Machine Learning"],
    featured: false,
  },
  {
    id: 11,
    title: "Community Service Project: Ma'had Tahfidz Al-Qur'an Kita Bina",
    date: "Nov 2023",
    description: "Developed two web applications for article management and student/staff management.",
    features: [
      "Included features for news article publication, attendance tracking, memorization progress monitoring, and user location calibration.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: "/assets/images/projects/community-service.jpg",
    projectUrls: [
      { label: "Management System", url: "https://github.com/HaikalE/system-management-ma-had-tahfidz-kitabina" },
      { label: "Web Portal", url: "https://github.com/HaikalE/Portal-Web-Ma-had-Tahfidz-Kitabina" },
      { label: "Video Demo", url: "https://www.youtube.com/watch?v=y2jxdKhFdI0&t=43s" }
    ],
    category: ["Web", "Full Stack"],
    featured: false,
  },
  // YouTube Data Engineering Project
{
  id: 12,
  title: "YouTube Trending Videos Data Engineering Project",
  date: "Mar 2025",
  description: "A comprehensive data engineering solution for extracting, processing, analyzing, and visualizing YouTube trending videos data with automated workflows and insightful analytics.",
  features: [
    "End-to-End ETL Pipeline: Extract data from YouTube API, transform it to derive useful metrics, and load it into PostgreSQL and Amazon S3",
    "Fully Automated Workflow: Apache Airflow DAGs for scheduled data collection and processing",
    "Advanced Video Analytics: Identify trends, patterns, and engagement metrics across categories",
    "Interactive Dashboard: Visualize data with Plotly Dash with filtering and exploration capabilities",
  ],
  technologies: ["Python", "Airflow", "Dash", "PostgreSQL", "Amazon S3", "Power BI"],
  imageUrl: "/assets/images/projects/youtube-data-engineering.jpg",
  projectUrls: [
    { label: "GitHub", url: "https://github.com/HaikalE/youtube-data-engineering" }
  ],
  category: ["Data Engineering", "Python", "Analytics"],
  featured: true,
},

// Chess Analyzer Project
{
  id: 13,
  title: "ChessAnalyzer",
  date: "Mar 2025",
  description: "Advanced chess game analysis platform powered by Stockfish engine for professional-level evaluation and improvement suggestions.",
  features: [
    "Interactive Chess Board: Visual arrows showing engine recommendations, move navigation and board flip options",
    "Deep Engine Analysis: Stockfish integration with multiple evaluation lines, customizable analysis depth (14-20 ply)",
    "Smart Move Classification: AI-powered move quality ratings: Brilliant, Great, Best, Excellent, Good, Inaccuracy, Mistake, Blunder",
    "Comprehensive Statistics: Accuracy percentage for both players, game flow visualization with evaluation graph, summary of move classifications",
  ],
  technologies: ["React", "Chess.js", "TailwindCSS", "Stockfish", "Canvas API", "Web Workers"],
  imageUrl: "/assets/images/projects/chess-analyzer.jpg",
  projectUrls: [
    { label: "GitHub", url: "https://github.com/HaikalE/React-Chess-Analyze" }
  ],
  category: ["Web", "AI", "Game Analysis"],
  featured: true,
}
];
