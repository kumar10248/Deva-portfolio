import cloakshare from "public/images/cloakshare.png";

import trunkller from "public/images/trunkller.png";

import attendance from "public/images/attendance.png";

import plotbot from "public/images/plotbot.png";
export const products = [
  {
    href: "https://cloakshare.devashish.top",
    title: "cloakshare",
    description:
      "A secure and temporary clipboard for anonymous text and file sharing with auto-deletion.",
    thumbnail: cloakshare,
    images: [cloakshare,cloakshare],
    stack: ["React.js", "Tailwind CSS", "Node.js"," MongoDB"],
    slug: "aceternity",
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
    slug: "algochurn",
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
    slug: "moonbeam",
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
    slug: "tailwindmasterkit",
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
];
