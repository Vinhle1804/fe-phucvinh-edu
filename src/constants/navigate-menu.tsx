export interface INavigateItem {
  id: string;
  label: string;
  path?: string;
  children?: INavigateItem[];
}

export const NAVIGATE_MENUS: INavigateItem[] = [
  {
    id: "1",
    label: "Gioi thiệu",
    path: "/gioi-thieu",

  },
  {
    id: "2",
    label: "Khoa học",
    path: "/khoa-hoc",
    children: [
      { id: "2.1", label: "English", path: "/course-lap-trinh" },
      { id: "2.2", label: "Lap trinh", path: "/course-lap-trinh" },
      { id: "2.3", label: "Khoa hoc cho 2k8", path: "/khuyen-mai" },
      { id: "2.4", label: "Chup anh", path: "/khuyen-mai" },
    ],
  },
  {
    id: "3",
    label: "Tu luyen",
path: "/tu-luyen",
  },
  {
    id: "4",
    label: "Tai lieu",
  path: "/tai-lieu",
  },
  {
    id: "5",
    label: "Blog",
    path: "/blog",
  },
];
