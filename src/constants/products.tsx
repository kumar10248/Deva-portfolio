import cloakshare from "public/images/cloakshare.png";

import reviewai from "public/images/reviewai.png";

import trunkller from "public/images/trunkller.png";

import attendance from "public/images/attendance.png";

import cloakshare2 from "public/images/cloakshare-2.png"

import  question from "public/images/ques.png";

import plotbot from "public/images/plotbot.png";
import cuisineExplorer from "public/images/mealpic.png"
import calculator from "public/images/calculator.png"
import jsApp from "public/images/js.png"
import kataSweet from "public/images/kata-sweet.png"
import sweet1 from "public/images/kata-sweet-1.png"
import sweet2 from "public/images/kata-sweet-2.png"
import collabboard from "public/images/collabboard.png"
import linux from "public/images/self_healing.png"

export const products = [

  {
    href: "https://collabboard.devashish.top",
    title: "CollabBoard",
    description:
      "A real-time collaborative whiteboard application for brainstorming, diagramming, and visual collaboration.",
    thumbnail:collabboard,
    images: [collabboard, collabboard],
    stack: ["React.js", "Socket.io", "Canvas API", "Node.js"],
    slug: "collabboard",
    content: (
      <div>
        <p>
        CollabBoard is a real-time collaborative whiteboard application designed to facilitate brainstorming, diagramming, and visual collaboration among teams. The platform allows multiple users to interact simultaneously on a shared canvas, making it ideal for remote teams, educators, and creative professionals. With features like freehand drawing, shape creation, text annotations,  CollabBoard provides a versatile space for visual communication. The application uses Socket.io for real-time updates, ensuring that all participants see changes instantly. Whether you're conducting a virtual meeting, teaching a class, or working on a creative project, CollabBoard offers an intuitive and interactive environment to bring ideas to life collaboratively.
        </p>
        <p>
        Key features include a variety of drawing tools, the ability to create and manipulate shapes, and support for text annotations. Users can also upload images to the canvas, making it easy to incorporate visual elements into their brainstorming sessions. The platform's responsive design ensures that it works seamlessly across different devices, allowing users to collaborate from anywhere. With its focus on real-time interaction and ease of use, CollabBoard is an essential tool for teams looking to enhance their collaborative efforts and foster creativity. AI diagram generation is also in the works, which will allow users to create diagrams from text prompts, further enhancing the collaborative experience.
        </p>{" "}
      </div>
    ),
        
  },

  {
    href: "https://reviewai.devashish.top",
    title: "ReviewAI",
    description:
      "A GitHub-style code review platform with real-time AI-powered reviews, inline comments, severity ratings, and fix suggestions.",
    thumbnail: reviewai,
    images: [reviewai, reviewai],
    stack: ["Next.js", "Monaco Editor", "OpenAI/Gemini API", "Socket.io", "JWT Auth"],
    slug: "reviewai",
    content: (
      <div>
        <p>
        ReviewAI is an intelligent code review platform that brings GitHub-style collaboration to AI-powered code analysis. Users can paste or upload code and receive real-time, token-by-token AI reviews with inline comments, severity ratings, and actionable fix suggestions. The platform combines the power of modern AI models (OpenAI/Gemini) with the user experience developers expect from collaborative tools.{" "}
        </p>
        <p>
        Key features include an inline annotation system for line-level AI comments (similar to GitHub PR reviews), automatic multi-language detection with language-specific rulesets, and a comprehensive review history with diff viewer to track before/after refactors. Users can share reviews via public URLs with customizable expiry times, making it perfect for code sharing and collaboration. Built with Next.js App Router, Monaco Editor for syntax highlighting, Socket.io for real-time streaming, and JWT authentication for secure access, ReviewAI provides a seamless and powerful code review experience that helps developers write better code faster.
        </p>{" "}
      </div>
    ),
  },
    {
    href:"https://github.com/kumar10248/Self-Healing-Web-Infrastructure",
    title: "Self-Healing Infrastructure Platform for Linux Systems",
    description:
      "A self-healing infrastructure platform for Linux systems that automatically detects and resolves issues to maintain optimal performance and uptime.",
    thumbnail: linux,
    images: [linux, linux],
    stack: ["Agent", "Linux System Administration", "Bash Scripting", "Monitoring Tools"],
    slug: "self-healing-infrastructure",
    content: (
      <div>
        <p>
        The Self-Healing Infrastructure Platform for Linux Systems is an innovative solution designed to enhance the reliability and performance of Linux-based environments. By leveraging advanced monitoring tools and intelligent automation, this platform continuously monitors system health, detects anomalies, and automatically initiates corrective actions to resolve issues without human intervention. The platform's self-healing capabilities ensure that critical services remain operational, minimizing downtime and improving overall system resilience.{" "}
        </p>
        <p>
        Key features include real-time monitoring of system metrics, automated issue detection using predefined rules and machine learning algorithms, and a robust set of self-healing actions such as restarting services, clearing caches, or reallocating resources. The platform also provides comprehensive logging and reporting functionalities, allowing administrators to track system performance and analyze trends over time. With its focus on automation and proactive maintenance, the Self-Healing Infrastructure Platform empowers organizations to maintain optimal performance and uptime in their Linux environments, ultimately enhancing user experience and operational efficiency.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://cloakshare.devashish.top",
    title: "cloakshare",
    description:
      "A secure and temporary clipboard for anonymous text and file sharing with auto-deletion.",
    thumbnail: cloakshare2,
    images: [cloakshare2,cloakshare],
    stack: ["React.js", "Tailwind CSS", "Node.js"," MongoDB"],
    slug: "cloakshare",
    content: (
      <div>
        <p>
        CloakShare is a secure and temporary clipboard application designed for quick and anonymous text or file sharing. Users can save text or upload files, generating a unique code that allows them to retrieve their data before automatic deletion. The platform prioritizes privacy by ensuring no personal information or registration is required.{" "}
        </p>
        <p>
        With its auto-deletion feature, CloakShare is ideal for users who need to share sensitive information without long-term storage. It provides a seamless way to transfer data between devices while maintaining security and convenience.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://trunkller.com",
    title: "Trunkller",
    description:
      "An AI-powered platform to optimize UI/UX design with real-time intelligent suggestions and automation.",
    thumbnail: trunkller,
    images: [trunkller, trunkller],
    stack: ["TypeScript", "Tailwind CSS", "AI/ML APIs"],
    slug: "trunkller",
    content: (
      <div>
        <p>
        Trunkller is an AI-powered platform designed to streamline and enhance the UI/UX design process. By integrating artificial intelligence, it provides real-time design suggestions, layout optimizations, and automated workflows, making it easier for designers and developers to create visually appealing and user-friendly interfaces. The platform helps eliminate repetitive tasks and enhances efficiency by offering intelligent recommendations based on industry best practices. Whether you're a beginner or an experienced designer, Trunkller provides tools that adapt to your workflow, ensuring a smooth and creative design experience.{" "}
        </p>
        <p>
        With a focus on usability and accessibility, Trunkller enables teams to collaborate effectively while maintaining consistency across different projects. The AI-powered design assistant simplifies prototyping, wireframing, and component structuring, reducing the time required for revisions. The platform also integrates seamlessly with various design and development tools, allowing users to export their work effortlessly. Trunkller’s goal is to bridge the gap between creativity and technology, empowering designers to bring their ideas to life with greater precision and speed.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://cse.devashish.top",
    title: "Attendance System",
    description:
      " A digital attendance tracking solution for educational institutions and workplaces with real-time record management.",
    thumbnail: attendance,
    images: [attendance, attendance],
    stack: ["React.js", "Node.js", "Express.js"," MongoDB"],
    slug: "attendance",
    content: (
      <div>
        <p>
        The Attendance System is a web-based application designed to modernize and automate attendance tracking in educational institutions and workplaces. By providing a digital solution, it eliminates the need for traditional manual record-keeping and ensures accuracy in tracking student or employee attendance. The system allows teachers or administrators to add student details, mark attendance as present or absent, and manage records in real time. With a secure authentication mechanism, only authorized personnel can access and update attendance data, enhancing security and reliability.{" "}
        </p>
        <p>
        This system is built with a simple and intuitive user interface, making it easy to navigate for educators and administrators. It generates organized attendance reports, helping institutions analyze attendance trends and improve accountability. By integrating technologies such as HTML, CSS, JavaScript, and backend support, the Attendance System provides an efficient and scalable solution for managing attendance data. Its automation reduces administrative workload, minimizes errors, and improves the overall efficiency of attendance tracking.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://plotbot.devashish.top",
    title: "Plotbot",
    description:
      "An AI-driven scriptwriting assistant that generates movie scripts, plot ideas, and character dialogues effortlessly.",
    thumbnail: plotbot,
    images: [plotbot, plotbot],
    stack: ["React.js", "Javascript","GEMINI API"],
    slug: "plotbot",
    content: (
      <div>
        <p>
        Plotbot is an AI-powered tool that generates movie scripts, plot ideas, and character dialogues using natural language processing (NLP) and machine learning. It assists writers by providing structured scene suggestions, helping them brainstorm ideas and develop engaging storylines.{" "}
        </p>
        <p>
        With genre customization and character development assistance, Plotbot caters to filmmakers, screenwriters, and content creators. It accelerates scriptwriting by offering detailed backstories, motivations, and dialogues, making it an invaluable tool for creative professionals looking to bring their stories to life.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://cuisine.devashish.top",
    title: "Cuisine",
    description:
      "A comprehensive recipe discovery platform that helps users find and create delicious meals based on available ingredients or dietary preferences.",
    thumbnail: cuisineExplorer,
    images: [cuisineExplorer, cuisineExplorer],
    stack: ["React.js", "Tailwind CSS", "Recipe API", "MongoDB"],
    slug: "cuisine-explorer",
    content: (
      <div>
        <p>
        Cuisine Explorer is an intelligent recipe discovery platform designed to simplify meal planning and cooking. The application allows users to search for recipes based on ingredients they already have, dietary restrictions, or specific cuisines. With an extensive database of dishes from around the world, it helps users expand their culinary horizons while making the most of available ingredients. The platform features detailed cooking instructions, nutritional information, and estimated preparation times to enhance the cooking experience.{" "}
        </p>
        <p>
        The user-friendly interface includes features like recipe saving, meal planning calendars, and shopping list generation to streamline the cooking process. Users can filter results by preparation time, difficulty level, or nutritional content, making it easier to find recipes that match their specific needs. Cuisine Explorer also offers a community section where food enthusiasts can share their own recipes, modifications, and cooking tips. Whether you're a beginner looking for simple meals or an experienced chef seeking inspiration, Cuisine Explorer provides a valuable resource for discovering and creating delicious dishes.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://nptel.devashish.top",
    title: "NPTEl Question Practice",
    description:
      "A collaborative platform for asking and answering questions, fostering knowledge sharing and community engagement.",
    thumbnail: question,
    images: [question, question],
    stack: ["React.js", "Tailwind CSS", "Node.js"," MongoDB"],
    slug: "nptel",
    content: (
      <div>
        <p>
        Ques is a collaborative platform designed to facilitate knowledge sharing and community engagement through a question-and-answer format. Users can post questions on various topics, and the community can provide answers, insights, and resources. The platform encourages interaction by allowing users to upvote or downvote responses, ensuring that the most relevant and helpful answers rise to the top.{" "}
        </p>
        <p>
        With features like user profiles, reputation systems, and comment sections, Ques fosters a sense of community among users. It also includes search functionality to help users find previously answered questions quickly. Whether you're seeking expert advice or looking to share your knowledge, Ques provides a dynamic space for learning and collaboration.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://sigma.devashish.top",
    title: "Sigma Calculator",
    description:
      "A powerful scientific calculator with advanced mathematical functions, history tracking, and multiple calculation modes.",
    thumbnail: calculator,
    images: [calculator, calculator],
    stack: ["HTML", "JavaScript", "CSS3"],
    slug: "sigma-calculator",
    content: (
      <div>
        <p>
        Sigma Calculator is a comprehensive scientific calculator designed to handle complex mathematical operations with ease and precision. Built with a modern web interface, it provides students, engineers, and professionals with a powerful computational tool directly in their browser. The calculator supports a wide range of functions including trigonometric operations (sin, cos, tan), logarithmic calculations, exponential functions, factorial computations, and advanced mathematical operations like square roots, power functions, and modular arithmetic.{" "}
        </p>
        <p>
        One of the key features of Sigma Calculator is its calculation history tracking, allowing users to review and reference previous computations without losing their work. The interface includes multiple modes such as DEG (degrees) and RAD (radians) for trigonometric functions, ensuring accuracy across different mathematical contexts. Memory functions (MC, MR, MS, M+, M-) enable users to store and recall values for complex multi-step calculations. The calculator also features a clean, intuitive design with responsive buttons and a clear display, making it accessible across desktop and mobile devices. Whether performing basic arithmetic or advanced scientific calculations, Sigma Calculator provides a reliable and efficient solution for mathematical problem-solving.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://js.devashish.top",
    title: "JavaScript Mastery",
    description:
      "An interactive JavaScript learning platform with guided readings, practice quizzes, and progress tracking.",
    thumbnail: jsApp,
    images: [jsApp, jsApp],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    slug: "javascript-mastery",
    content: (
      <div>
        <p>
          JavaScript Mastery (js.devashish.top) is an interactive learning hub that combines concise reading materials, hands-on code examples, and practice quizzes to help learners build real-world JavaScript skills.
        </p>
        <p>
          The platform provides multiple learning paths, instant quiz feedback, and progress tracking. Built with Next.js and TypeScript, it focuses on performance and a responsive experience across devices.
        </p>
      </div>
    ),
  },
  {
    href: "https://kata-sweet.devashish.top",
    title: "Sweet Shop",
    description:
      "A comprehensive sweet shop inventory management system with real-time stock tracking, pricing management, and purchase operations.",
    thumbnail: kataSweet,
    images: [sweet1, sweet2],
    stack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    slug: "kata-sweet",
    content: (
      <div>
        <p>
        Sweet Shop is a full-stack inventory management application designed specifically for sweet shops and confectionery businesses. The platform provides an intuitive dashboard that displays key metrics including total sweets in inventory, current stock levels, and total inventory value. Business owners can efficiently manage their sweet collection with features for tracking prices, stock quantities, and product categories like traditional Indian sweets, bakery items, and other confectioneries.{" "}
        </p>
        <p>
        The application features a clean, modern interface with a search functionality to quickly find specific sweets by name, and advanced filtering options to organize products by category, stock status, or price range. Each product card displays essential information including the sweet's name, category, price, and current stock level, with visual indicators showing whether items are in stock. The admin panel allows authorized users to add new products, update pricing, manage stock levels, and process purchases. With real-time inventory updates and automated stock tracking, Sweet Shop helps businesses maintain accurate records, prevent stockouts, and make informed purchasing decisions. The responsive design ensures the system works seamlessly across desktop and mobile devices, making it perfect for both behind-the-counter operations and on-the-go inventory checks.
        </p>{" "}
      </div>
    ),
  },
];
