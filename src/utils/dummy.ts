// Tipe data untuk satu produk
export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

// Daftar produk
export const productList: Product[] = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/1200x/ce/de/67/cede675d9318d2e56e7ce8a7fde44829.jpg",
    name: "Baju Hitam",
    price: 220000,
    description:
      "Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a dictionary of over 200 Latin words and a random sentence structure. ",
  },
  {
    id: 2,
    image: "https://i.imgur.com/VD09afj.jpeg",
    name: "Baju Merah",
    price: 420000,
    description:
      "Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a dictionary of over 200 Latin words and a random sentence structure. ",
  },
  {
    id: 3,
    image: "https://i.imgur.com/AIxMk4n.jpeg",
    name: "Baju Kuning",
    price: 620000,
    description:
      "Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a dictionary of over 200 Latin words and a random sentence structure. ",
  },
  {
    id: 4,
    image: "https://i1.sndcdn.com/avatars-rOzbuxev3m2sJdqy-oU0YyA-t240x240.jpg",
    name: "Baju Putih",
    price: 460000,
    description:
      "Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a dictionary of over 200 Latin words and a random sentence structure. ",
  },
  {
    id: 5,
    image:
      "https://laboiteameme.fr/_data/i/upload/2024/03/20/20240320170127-03054f87-me.jpg",
    name: "Baju Hijau",
    price: 320000,
    description:
      "Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a dictionary of over 200 Latin words and a random sentence structure. ",
  },
];
