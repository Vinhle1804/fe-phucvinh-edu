export interface INavigateItem {
  id: string;
  label: string;
  path?: string;
  children?: INavigateItem[];
}

export const NAVIGATE_MENUS: INavigateItem[] = [
  {
    id: "1",
    label: "Giới thiệu",
    path: "/gioi-thieu",
  },
  {
    id: "2",
    label: "Khóa học",
    path: "/course",
    children: [
      { id: "2.1", label: "English", path: "/course" },
      { id: "2.2", label: "Lập trình", path: "/course" },
      { id: "2.3", label: "Khóa học cho 2k8", path: "/course" },
      { id: "2.4", label: "Chụp ảnh", path: "/course" },
    ],
  },
  {
    id: "3",
    label: "Tự luyện",
    path: "/tu-luyen",
  },
  {
    id: "4",
    label: "Tài liệu",
    path: "/tai-lieu",
  },
  {
    id: "5",
    label: "Blog",
    path: "/blog",
  },
];
