export type TechCategory = {
  title: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    title: "Electronics & Hardware",
    items: [
      "Power Supply Design (LM317)",
      "PCB Design (Single-Sided)",
      "Soldering & Hardware Assembly",
      "Sensor Integration",
    ],
  },
  {
    title: "Robotics & Industrial Automation",
    items: [
      "Industrial Robotics",
      "Robot Programming",
      "Pick & Place System",
      "Dobot Magician",
      "RNV-3 Robot",
      "Motor Control ",
      "Inverter ",
    ],
  },
  {
    title: "Control Systems & Simulation",
    items: [
      "CADe_SIMU",
      "Control System Analysis",
      "Forward-Reverse Motor Control",
      "Star-Delta Motor Control",
    ],
  },
  {
    title: "IoT & Embedded Systems",
    items: [
      "ESP32",
      "IoT Monitoring System",
      "RFID System",
      "Node-RED",
      "Real-time Monitoring",
    ],
  },
  {
    title: "Computer Vision",
    items: [
      "Python",
      "OpenCV",
      "Face Detection",
      "Custom Object Detection",
      "YOLOv8",
      "Roboflow",
    ],
  },
  {
    title: "CAD & Engineering Tools",
    items: [
      "Fusion 360",
      "Proteus",
      "EasyEDA",
      "Auto CAD", 
      "Eagle",
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      "Visual Studio Code",
      "GitHub",
      "Vercel",
    ],
  },
];
