// data/projects.ts

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  image?: string;
  links?: ProjectLink[];
  // optional: buat atur posisi crop thumbnail kalau perlu
  thumbPos?: string; // contoh: "center 20%"
  fit?: "cover" | "contain";
};

export const projects: Project[] = [
  {
    id: "iot-water-consumption",
    title:
      "IoT-Based Water Consumption Monitoring System Using NodeMCU ESP8266 and YF-S201 Flow Sensor",
    description:
      "An IoT-based water consumption  monitoring system designed to measure and analyze household water usage in real time. The system utilizes a NodeMCU ESP8266 microcontroller and YF-S201 flow sensor to calculate water flow rate and total consumption. Sensor data is processed using Arduino-based firmware and can be transmitted wirelessly for monitoring and analysis.",
    tools: [
      "NodeMCU ESP8266",
      "Arduino IDE",
      "YF-S201 Flow Sensor",
      "IoT",
      "Embedded Systems",
    ],
    image: "/airr.png",
    thumbPos: "center 20%",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Hafidzlab/iot-water-consumption-monitoring",
      },
    ],
  },

  // ✅ FIXED (RFID): fokus thumbnail dinaikin biar gak “turun”
  {
    id: "rfid-parking-system",
    title:
      "Design of an RFID-Based Automatic Parking Prototype Using Node-RED for Vehicle Access Management",
    description:
      "An automation project focused on designing an RFID-based automatic parking system prototype for vehicle access management. The system utilizes RFID technology to identify vehicles, Node-RED for access control logic and data flow management, and microcontroller-based hardware for real-time operation. This project aims to improve parking efficiency, access security, and monitoring through an integrated IoT-based approach.",
    tools: [
      "RFID",
      "Node-RED",
      "Arduino",
      "IoT",
      "Automation Systems",
      "Embedded Systems",
    ],
    image: "/rfid.png",
    thumbPos: "50% 0%",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Hafidzlab/rfid-parking-system-node-red",
      },
    ],
  },

  {
    id: "batik-wastewater-filtration-sensor",
    title: "Sensor-Based Batik Waste Filtration Prototype (pH, Temperature, TDS)",
    description:
      "A sensor-based batik wastewater filtration prototype developed during a community service project. The system monitors wastewater quality in real time using pH, temperature, and TDS sensors. Data is processed by embedded firmware and can be used to evaluate filtration performance and support monitoring/analysis.",
    tools: [
      "Arduino IDE",
      "IoT",
      "Embedded Systems",
      "pH Sensor",
      "TDS Sensor",
      "Temperature Sensor",
    ],
    image: "/filtrasii.png",
    thumbPos: "center 35%",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Hafidzlab/batik-wastewater-filtration-sensor",
      },
    ],
  },

  // ✅ FIXED (Conveyor): fokus thumbnail dinaikin biar gak “turun”
  {
    id: "conveyor-fusion-360",
    title: "Conveyor System Design Using Fusion 360",
    description:
      "This project focuses on the mechanical design of an industrial conveyor system using Autodesk Fusion 360. The design process includes detailed 3D modeling of individual components, structural frame construction, roller and belt arrangement, and full assembly integration. The system is designed with consideration for functionality, structural stability, and ease of manufacturing.",
    tools: ["Fusion 360"],
    image: "/conveyor.png",
    thumbPos: "50% 0%",
    links: [
      {
        label: "View Demo (YouTube)",
        href: "https://youtu.be/CeOfNqbh99I?si=efo2YvW3P7ZcvTZC",
      },
    ],
  },

  // ✅ FIXED (Face Detection): jangan contain (bikin aneh/ketengah),
  // ganti cover + fokus dinaikin
  {
    id: "face-detection-opencv",
    title: "Face Detection Using OpenCV and Python",
    description:
      "This project demonstrates the implementation of a real-time face detection system using Python and OpenCV. The system utilizes pre-trained Haar Cascade classifiers to detect human faces from a live camera feed. The project focuses on core computer vision concepts such as image preprocessing, grayscale conversion, feature-based detection, and bounding box visualization. This implementation shows how OpenCV can be used for rapid prototyping of vision-based applications such as attendance systems, surveillance, and human–machine interaction.",
    tools: ["Python", "OpenCV", "Computer Vision"],
    image: "/facedetection.png",
    fit: "cover",
    thumbPos: "50% 0%",
    links: [
      {
        label: "View Demo (YouTube)",
        href: "https://youtu.be/pFdXHU29HaE?si=dVHQKkThGL0Fsf_Q",
      },
    ],
  },

  {
    id: "custom-object-detection-yolo",
    title: "Custom Object Detection Using YOLO and Roboflow",
    description:
      "This project implements a custom object detection system using the YOLO (You Only Look Once) deep learning algorithm integrated with Roboflow. The workflow includes dataset preparation, image labeling, data augmentation, and training a custom detection model. After training, the model is deployed to perform real-time object detection through a camera feed. This project highlights the complete pipeline of modern AI-based computer vision systems and their application in automation, smart monitoring, and industrial inspection.",
    tools: ["Python", "YOLO", "Roboflow", "Deep Learning", "Computer Vision"],
    image: "/customobject.png",
    links: [
      {
        label: "View Demo (YouTube)",
        href: "https://youtu.be/rrlxjUoKE04?si=NW3Eu3Uqr5T2AnJL",
      },
    ],
  },

  {
    id: "robot-rnv-3",
    title: "Robot RNV 3 – Industrial Automation Simulation",
    description:
      "This project demonstrates the testing and programming of the RNV 3 robot within an industrial automation simulation environment. The work focuses on robot motion programming, programmed trajectories, and task execution such as pick-and-place operations. The robot is configured to perform automated movements based on predefined logic, highlighting fundamental concepts of industrial robotics including coordinate systems, motion control, and task sequencing. This project provides practical insight into how industrial robots are programmed and tested before real-world deployment in manufacturing and automation systems.",
    tools: ["Industrial Robotics", "Automation", "Robot Programming"],
    image: "/rnv3.png",
    links: [
      {
        label: "View Demo (YouTube)",
        href: "https://youtu.be/5YXEMW2LxqU?si=PJCuLQNZuBPAHjfw",
      },
    ],
  },

  {
    id: "ai-meet-plc-schneider",
    title: "AI Meet PLC Schneider – Intelligent Industrial Control Experiment",
    description:
      "This project presents an experimental integration of Artificial Intelligence (AI) with a Schneider PLC in an industrial automation system. The implementation focuses on communication workflows between AI-based data processing and PLC control logic. AI-generated outputs are translated into PLC commands, allowing the PLC to respond dynamically to intelligent decision-making processes. This experiment highlights the potential application of AI in PLC-based industrial control systems, particularly for adaptive automation, smart monitoring, and future intelligent manufacturing environments.",
    tools: ["Artificial Intelligence", "PLC Schneider", "Industrial Automation"],
    image: "/aimeetplc.png",
    links: [
      {
        label: "View Demo (YouTube)",
        href: "https://youtu.be/KZ2bFbbF0MY?si=LJsDMrMDFOQky4k2",
      },
    ],
  },

  {
    id: "dobot-magician",
    title: "Dobot Magician – Basic Industrial Robotics Experiment",
    description:
      "This project explores the experimental use of the Dobot Magician robotic arm in basic automation scenarios. The focus of the project is on robot motion programming, including pick-and-place operations and simple industrial task simulations. Through this experiment, fundamental principles of industrial robotics are demonstrated, such as joint movement control, coordinate positioning, and task automation logic. The project serves as an introductory implementation for understanding robotic arm behavior and basic robot programming concepts in industrial automation applications.",
    tools: ["Dobot Magician", "Robotics", "Automation Systems"],
    image: "/dobot.png",
    links: [
      {
        label: "View Demo (YouTube)",
        href: "https://youtu.be/Y9RYUqlEapc?si=AwXLKaQ9TF-AVdu4",
      },
    ],
  },
];
