import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Sebagai lulusan baru dari Teknik Informatika, saya memiliki antusiasme tinggi dalam bidang Full Stack Development. Dengan pengalaman menggunakan teknologi back end seperti Node.js, Laravel, dan Python, saya sedang memperdalam keterampilan di front end dengan mempelajari React.js dan Next.js. Saya juga terbiasa mengelola database seperti MySQL, PostgreSQL, dan Firebase, untuk menciptakan aplikasi yang optimal dan handal.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Freelance",
    description: `Membuat dan memelihara aplikasi android untuk Pemerintah Kabupaten Deiyai, Papua. Membuat Content Management System dan RESTful API dengan Laravel dan pembuatan aplikasi android menggunakan Flutter.`,
    technologies: ["PHP", "Laravel", "Flutter", "MySQL"],
  },
  {
    year: "2023 - 2024",
    role: "Back End Developer",
    company: "Freelance",
    description: `Memimpin tim dalam membuat dan memelihara aplikasi web Gurilap Cianjur menggunakan JavaScript, React.js, dan Node.js. Menerapkan RESTful API menggunakan Laravel dan terintegrasi dengan database PostgreSQL. Berkolaborasi dengan pemangku kepentingan untuk menentukan persyaratan dan jadwal proyek.`,
    technologies: ["React.js", "Next.js", "Laravel", "PostgreSQL"],
  },
  {
    year: "2023",
    role: "Cloud Computing Learning Path",
    company: "Bangkit Academy",
    description: `Berkontribusi pada capstone project di Bangkit dalam pembuatan aplikasi mobile. Mengimplementasikan RESTful API menggunakan teknologi Node.js dan Python untuk endpoint fitur AI/ML dan terintegrasi dengan database MySQL. Melakukan deployment ke Google Cloud Platform (GCP) menggunakan Cloud Run dan App Engine. `,
    technologies: ["Flask", "Node.js", "Google Cloud Platform", "MySQL"],
  },
  {
    year: "2019",
    role: "Full Stack Developer",
    company: "Giga IT",
    description: `Berkontribusi pada pengembangan aplikasi website untuk RSUD Hasanuddin Damrah Manna di Bengkulu Selatan menggunakan Laravel dan JQuery. Mengelola database dan mengimplementasikan solusi penyimpanan data menggunakan MySQL. Bekerja sama dengan projek manajer untuk penyempurnaan fitur.`,
    technologies: ["Bootstrap", "Laravel", "JQuery", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Pemkab Deiyai Mobile App",
    image: project1,
    description:
      "Projek pembangunan aplikasi Pemerintah Kabupaten Deiyai tentang informasi geografis dan statistik di wilayah Kabupaten Deiyai, Papua.",
    technologies: ["Flutter", "Laravel", "MySQL", "Bootstrap", "JQuery"],
  },
  {
    title: "Website Gurilap Cianjur",
    image: project2,
    description:
      "Projek pembangunan website pemerintah Kabupaten Cianjur tentang penamaan rupabumi di wilayah Cianjur dengan pemanfaatan teknologi geotagging dan bekerja sama dengan Badan Informasi Geospasial (BIG).",
    technologies: ["HTML", "CSS", "React", "PostgreSQL", "Laravel"],
  },
  {
    title: "Website Pengelolaan Gudang Material TB.Gujati",
    image: project3,
    description:
      "Projek pembangunan website di TB.Gujati. Monitoring stok barang, dan melakukan pencatatan transaksi barang masuk dari supplier dan barang keluar ke customer.",
    technologies: ["HTML", "CSS", "Laravel", "Bootstrap", "MySQL"],
  },
];

export const CONTACT = {
  address: "Cianjur, Jawa Barat ",
  phoneNo: "+62 896 6393 6695 ",
  email: "fajar.kdt03@gmail.com",
};
