export type InfoCourse = {
  lessonsCount: number;   // Số bài giảng
  hoursCount: number;     // Số giờ học
  studentsCount: number;  // Số học viên
  exercisesCount: number; // Số bài tập
};

export interface IProduct {
  id: string;                  // ID duy nhất
  name: string;                // Tên sản phẩm / khoá học
  price: number;               // Giá gốc
  discountPercent: number;     // % giảm giá
  finalPrice: number;          // Giá sau giảm
  imageUrl: string;            // Ảnh khoá học
  shortDescription: string;    // Mô tả ngắn
  longDescription: string;     // Mô tả dài
  infoCourse: InfoCourse;      // Nhóm thông tin bài giảng
  isFavorite: boolean;         // Đánh dấu yêu thích
  tags?: string[];             // Các tag (tùy chọn)
} 

export const products: IProduct[] = [
  {
    id: "1",
    name: "React Masterclass",
    price: 1000000,
    discountPercent: 20,
    finalPrice: 800000,
    imageUrl: "/images/react.jpg",
    shortDescription: "Học React từ cơ bản đến nâng cao",
    longDescription: "Khóa học React đầy đủ: JSX, Hooks, Context, Router, Redux...",
    infoCourse: {
      lessonsCount: 50,
      hoursCount: 40,
      studentsCount: 1200,
      exercisesCount: 20,
    },
    isFavorite: false,
    tags: ["React", "Frontend", "JavaScript"],
  },
  {
    id: "2",
    name: "Vue 3 Essentials",
    price: 900000,
    discountPercent: 15,
    finalPrice: 765000,
    imageUrl: "/images/vue.jpg",
    shortDescription: "Học Vue 3 Composition API dễ hiểu",
    longDescription: "Nắm vững Vue 3, Composition API, Vue Router, Vuex, Pinia...",
    infoCourse: {
      lessonsCount: 45,
      hoursCount: 35,
      studentsCount: 900,
      exercisesCount: 15,
    },
    isFavorite: false,
    tags: ["Vue", "Frontend"],
  },
  {
    id: "3",
    name: "Next.js & TailwindCSS",
    price: 1200000,
    discountPercent: 25,
    finalPrice: 900000,
    imageUrl: "/images/next-tailwind.jpg",
    shortDescription: "Xây web hiện đại với Next.js & TailwindCSS",
    longDescription: "Tạo web tối ưu SEO, SSR, API routes, thiết kế Tailwind đẹp mắt.",
    infoCourse: {
      lessonsCount: 60,
      hoursCount: 45,
      studentsCount: 1500,
      exercisesCount: 25,
    },
    isFavorite: false,
    tags: ["Next.js", "TailwindCSS", "React"],
  },
  {
    id: "4",
    name: "Node.js Backend",
    price: 950000,
    discountPercent: 10,
    finalPrice: 855000,
    imageUrl: "/images/node.jpg",
    shortDescription: "Học Node.js + Express chuyên nghiệp",
    longDescription: "Xây REST API, JWT Auth, CRUD, kết nối MongoDB, triển khai Heroku.",
    infoCourse: {
      lessonsCount: 40,
      hoursCount: 30,
      studentsCount: 800,
      exercisesCount: 18,
    },
    isFavorite: false,
    tags: ["Node.js", "Backend", "API"],
  },
  {
    id: "5",
    name: "Fullstack MERN",
    price: 1500000,
    discountPercent: 30,
    finalPrice: 1050000,
    imageUrl: "/images/mern.jpg",
    shortDescription: "React, Node.js, Express & MongoDB",
    longDescription: "Học cách build ứng dụng MERN Fullstack: CRUD, Auth, Deploy.",
    infoCourse: {
      lessonsCount: 70,
      hoursCount: 50,
      studentsCount: 2000,
      exercisesCount: 30,
    },
    isFavorite: false,
    tags: ["MERN", "Fullstack", "React"],
  },
  {
    id: "6",
    name: "Java Spring Boot",
    price: 1100000,
    discountPercent: 20,
    finalPrice: 880000,
    imageUrl: "/images/spring.jpg",
    shortDescription: "Xây dựng RESTful API với Spring Boot",
    longDescription: "Spring Boot, Hibernate, MySQL, JWT, Security, Deployment.",
    infoCourse: {
      lessonsCount: 55,
      hoursCount: 42,
      studentsCount: 1300,
      exercisesCount: 22,
    },
    isFavorite: false,
    tags: ["Java", "Spring Boot", "Backend"],
  },
  {
    id: "7",
    name: "Python Django",
    price: 1000000,
    discountPercent: 15,
    finalPrice: 850000,
    imageUrl: "/images/django.jpg",
    shortDescription: "Tạo web với Python Django Framework",
    longDescription: "Django Models, Views, Templates, REST API, Auth, Admin Panel.",
    infoCourse: {
      lessonsCount: 50,
      hoursCount: 38,
      studentsCount: 1100,
      exercisesCount: 20,
    },
    isFavorite: false,
    tags: ["Python", "Django", "Backend"],
  },
  {
    id: "8",
    name: "SQL & Database Design",
    price: 700000,
    discountPercent: 10,
    finalPrice: 630000,
    imageUrl: "/images/sql.jpg",
    shortDescription: "Thiết kế CSDL & SQL thực chiến",
    longDescription: "T-SQL, PostgreSQL, MySQL, thiết kế schema, index, join, tối ưu truy vấn.",
    infoCourse: {
      lessonsCount: 40,
      hoursCount: 30,
      studentsCount: 600,
      exercisesCount: 15,
    },
    isFavorite: false,
    tags: ["SQL", "Database"],
  },
  {
    id: "9",
    name: "DevOps & CI/CD",
    price: 1300000,
    discountPercent: 20,
    finalPrice: 1040000,
    imageUrl: "/images/devops.jpg",
    shortDescription: "Học triển khai DevOps, Docker, CI/CD",
    longDescription: "Docker, Kubernetes basics, GitHub Actions, Jenkins pipeline.",
    infoCourse: {
      lessonsCount: 55,
      hoursCount: 45,
      studentsCount: 700,
      exercisesCount: 18,
    },
    isFavorite: false,
    tags: ["DevOps", "CI/CD", "Docker"],
  },
  {
    id: "10",
    name: "UI/UX Design",
    price: 800000,
    discountPercent: 15,
    finalPrice: 680000,
    imageUrl: "/images/uiux.jpg",
    shortDescription: "Thiết kế UI/UX từ A-Z",
    longDescription: "Figma, wireframe, prototype, design system, user research.",
    infoCourse: {
      lessonsCount: 35,
      hoursCount: 25,
      studentsCount: 500,
      exercisesCount: 10,
    },
    isFavorite: false,
    tags: ["Design", "UI/UX", "Figma"],
  },
];