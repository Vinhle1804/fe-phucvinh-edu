export interface IProduct {
  id: string;                  
  name: string;                
  price: number;               
  discountPercent: number;     
  finalPrice: number;         
  imageUrl: string;            
  shortDescription: string;   
  longDescription: string;    
  lessonsCount: number;      
  hoursCount: number;          
  studentsCount: number;       
  exercisesCount: number;      
  isFavorite: boolean;         
  tags?: string[];            
}


export const products: IProduct[] = [
  {
    id: "1",
    name: "Khóa học Lập trình C cơ bản",
    price: 2750000,
    discountPercent: 64,
    finalPrice: 999000,
    imageUrl: "/assets/c-course.png",
    shortDescription: "170 bài giảng, 350 bài tập, update 2024.",
    longDescription: "Khóa học C cơ bản từ A-Z, phù hợp cho người mới bắt đầu, hỗ trợ trọn đời.",
    lessonsCount: 170,
    hoursCount: 150,
    studentsCount: 2060,
    exercisesCount: 350,
    isFavorite: false,
    tags: ["C", "Beginner", "Online"]
  },
  {
    id: "2",
    name: "Khóa học Lập trình Python",
    price: 3200000,
    discountPercent: 50,
    finalPrice: 1600000,
    imageUrl: "/assets/python-course.png",
    shortDescription: "120 bài giảng Python từ cơ bản đến nâng cao.",
    longDescription: "Python toàn diện: syntax, OOP, project thực tế, automation, data.",
    lessonsCount: 120,
    hoursCount: 100,
    studentsCount: 3400,
    exercisesCount: 200,
    isFavorite: true,
    tags: ["Python", "Beginner", "Data"]
  },
  {
    id: "3",
    name: "Khóa học ReactJS từ cơ bản",
    price: 3500000,
    discountPercent: 40,
    finalPrice: 2100000,
    imageUrl: "/assets/react-course.png",
    shortDescription: "ReactJS từ cơ bản tới Redux, Hooks, NextJS.",
    longDescription: "Học ReactJS step-by-step: JSX, state, props, router, project thực tế.",
    lessonsCount: 80,
    hoursCount: 60,
    studentsCount: 4100,
    exercisesCount: 120,
    isFavorite: false,
    tags: ["ReactJS", "Frontend", "Web"]
  },
  {
    id: "4",
    name: "Khóa học NodeJS & Express",
    price: 3000000,
    discountPercent: 35,
    finalPrice: 1950000,
    imageUrl: "/assets/node-course.png",
    shortDescription: "Từ API RESTful tới MongoDB, project backend.",
    longDescription: "NodeJS + Express: tạo API, auth, CRUD, deploy Heroku.",
    lessonsCount: 70,
    hoursCount: 50,
    studentsCount: 2500,
    exercisesCount: 80,
    isFavorite: false,
    tags: ["NodeJS", "Backend", "API"]
  },
  {
    id: "5",
    name: "Khóa học HTML CSS Pro",
    price: 1500000,
    discountPercent: 20,
    finalPrice: 1200000,
    imageUrl: "/assets/html-css.png",
    shortDescription: "HTML5, CSS3, responsive, Flexbox, Grid.",
    longDescription: "Học từ cơ bản tới layout nâng cao, animation, responsive web.",
    lessonsCount: 60,
    hoursCount: 40,
    studentsCount: 3000,
    exercisesCount: 100,
    isFavorite: false,
    tags: ["HTML", "CSS", "Frontend"]
  },
  {
    id: "6",
    name: "Khóa học Java Spring Boot",
    price: 4200000,
    discountPercent: 50,
    finalPrice: 2100000,
    imageUrl: "/assets/spring-boot.png",
    shortDescription: "Java Core + Spring Boot + REST API + JWT.",
    longDescription: "Spring Boot từ zero, kết nối database, bảo mật, deploy.",
    lessonsCount: 100,
    hoursCount: 80,
    studentsCount: 1900,
    exercisesCount: 150,
    isFavorite: true,
    tags: ["Java", "Spring Boot", "Backend"]
  },
  {
    id: "7",
    name: "Khóa học SQL & Database",
    price: 2000000,
    discountPercent: 30,
    finalPrice: 1400000,
    imageUrl: "/assets/sql-course.png",
    shortDescription: "MySQL, PostgreSQL, query, index, performance.",
    longDescription: "Tạo bảng, query join, view, stored procedure, tối ưu DB.",
    lessonsCount: 50,
    hoursCount: 40,
    studentsCount: 2300,
    exercisesCount: 90,
    isFavorite: false,
    tags: ["SQL", "Database", "Data"]
  },
  {
    id: "8",
    name: "Khóa học Data Structures",
    price: 2500000,
    discountPercent: 50,
    finalPrice: 1250000,
    imageUrl: "/assets/data-structures.png",
    shortDescription: "Stack, Queue, Linked List, Tree, Graph.",
    longDescription: "Giải thuật cơ bản, visual code, bài tập coding practice.",
    lessonsCount: 80,
    hoursCount: 60,
    studentsCount: 1200,
    exercisesCount: 110,
    isFavorite: false,
    tags: ["Algorithm", "DSA", "Coding"]
  },
  {
    id: "9",
    name: "Khóa học Git & Github",
    price: 800000,
    discountPercent: 10,
    finalPrice: 720000,
    imageUrl: "/assets/git-course.png",
    shortDescription: "Git basics, branch, merge, pull request, CI/CD.",
    longDescription: "Version control, teamwork, workflow chuẩn, deploy project.",
    lessonsCount: 30,
    hoursCount: 20,
    studentsCount: 3100,
    exercisesCount: 50,
    isFavorite: true,
    tags: ["Git", "Tools", "DevOps"]
  },
  {
    id: "10",
    name: "Khóa học UI/UX Design",
    price: 2800000,
    discountPercent: 30,
    finalPrice: 1960000,
    imageUrl: "/assets/ui-ux.png",
    shortDescription: "Figma, wireframe, prototype, design system.",
    longDescription: "Thiết kế giao diện web/app, UX writing, research, testing.",
    lessonsCount: 50,
    hoursCount: 40,
    studentsCount: 1700,
    exercisesCount: 70,
    isFavorite: false,
    tags: ["UI", "UX", "Design"]
  }
];
