type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};

type Products = Product[];

export const feauredProduct: Products = [
  {
    id: 1,
    title: "پیتزا مارگاریتا",
    desc: "پیتزای کلاسیک با پنیر موزارلا و سس گوجه تازه.",
    img: "/feature.jpg",
    price: 29.5,
    options: [
      { title: "سایز کوچک", additionalPrice: 0 },
      { title: "سایز متوسط", additionalPrice: 5 },
      { title: "سایز بزرگ", additionalPrice: 10 },
    ],
  },
  {
    id: 2,
    title: "برگر مخصوص",
    desc: "برگر آبدار با پنیر چدار، کاهو و سس مخصوص.",
    img: "/feature.jpg",
    price: 35,
    options: [
      { title: "سیب‌زمینی کوچک", additionalPrice: 5 },
      { title: "سیب‌زمینی متوسط", additionalPrice: 8 },
      { title: "سیب‌زمینی بزرگ", additionalPrice: 12 },
    ],
  },
  {
    id: 3,
    title: "کباب کوبیده",
    desc: "دو سیخ کباب کوبیده با برنج ایرانی و گوجه کبابی.",
    img: "/feature.jpg",
    price: 55,
    options: [
      { title: "ماست موسیر", additionalPrice: 8 },
      { title: "دوغ محلی", additionalPrice: 10 },
      { title: "سالاد شیرازی", additionalPrice: 12 },
    ],
  },
  {
    id: 4,
    title: "سالاد سزار",
    desc: "سالاد سزار با مرغ گریل و سس مخصوص سزار.",
    img: "/feature.jpg",
    price: 32,
    options: [
      { title: "بدون مرغ", additionalPrice: -5 },
      { title: "اضافه پنیر", additionalPrice: 7 },
      { title: "نان تست اضافه", additionalPrice: 5 },
    ],
  },
  {
    id: 5,
    title: "سوپ جو",
    desc: "سوپ جو خوشمزه و سبک به همراه سبزیجات تازه.",
    img: "/feature.jpg",
    price: 20,
    options: [
      { title: "نان بربری", additionalPrice: 5 },
      { title: "نان سنگک", additionalPrice: 7 },
      { title: "نان تست", additionalPrice: 3 },
    ],
  },
  {
    id: 6,
    title: "چلو مرغ",
    desc: "ران مرغ با زعفران و برنج ایرانی.",
    img: "/feature.jpg",
    price: 48,
    options: [
      { title: "ران مرغ", additionalPrice: 0 },
      { title: "سینه مرغ", additionalPrice: 5 },
      { title: "خورشت ماست", additionalPrice: 10 },
    ],
  },
  {
    id: 7,
    title: "لازانیا",
    desc: "لازانیای خانگی با سس بشامل و گوشت چرخ‌کرده.",
    img: "/feature.jpg",
    price: 45,
    options: [
      { title: "سس بیشتر", additionalPrice: 5 },
      { title: "پنیر اضافه", additionalPrice: 8 },
      { title: "سالاد سبز", additionalPrice: 10 },
    ],
  },
  {
    id: 8,
    title: "فلافل",
    desc: "ساندویچ فلافل با نان داغ و ترشی تازه.",
    img: "/feature.jpg",
    price: 18,
    options: [
      { title: "سس تند", additionalPrice: 2 },
      { title: "سس سیر", additionalPrice: 2 },
      { title: "سیب‌زمینی سرخ‌کرده", additionalPrice: 10 },
    ],
  },
  {
    id: 9,
    title: "جوجه کباب",
    desc: "سیخ جوجه کباب زعفرانی با برنج ایرانی.",
    img: "/feature.jpg",
    price: 52,
    options: [
      { title: "سالاد فصل", additionalPrice: 8 },
      { title: "دوغ محلی", additionalPrice: 10 },
      { title: "زیتون پرورده", additionalPrice: 12 },
    ],
  },
  {
    id: 10,
    title: "دسر تیرامیسو",
    desc: "دسر ایتالیایی خوشمزه با قهوه و خامه.",
    img: "/feature.jpg",
    price: 25,
    options: [
      { title: "پودر کاکائو بیشتر", additionalPrice: 2 },
      { title: "بیسکویت اضافه", additionalPrice: 3 },
      { title: "یک اسکوپ بستنی", additionalPrice: 10 },
    ],
  },
];

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menue: Menu = [
  {
    id: 1,
    slug: "pizza",
    title: "پیتزا",
    desc: "انواع پیتزاهای خوشمزه با مواد تازه و خمیر دست‌ساز.",
    img: "/pizza.jpg",
    color: "bg-red-500",
  },
  {
    id: 2,
    slug: "kebab",
    title: "کباب",
    desc: "کباب‌های اصیل ایرانی با برنج زعفرانی و مخلفات.",
    img: "/kebab.jpg",
    color: "bg-yellow-600",
  },
  {
    id: 3,
    slug: "drinks",
    title: "نوشیدنی",
    desc: "انواع نوشیدنی‌های سرد و گرم برای تکمیل لذت غذا.",
    img: "/drinks.jpg",
    color: "bg-blue-500",
  },
];
