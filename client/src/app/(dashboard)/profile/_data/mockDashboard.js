// TODO: replace with API — everything in this file is sample data.
// The backend has no views / visitors / analytics / trend endpoints yet.
// Components receive these values as props, so swapping means changing page.jsx only.

const spark = (values) => values.map((v) => ({ v }));

// % trend + sparkline series for each stat card, plus the total views value
export const statsMock = {
  posts: { trend: 12, series: spark([3, 4, 3, 5, 4, 6, 5, 7, 8]) },
  views: {
    value: 124000,
    trend: 18,
    series: spark([12, 14, 13, 16, 15, 17, 19, 18, 22]),
  },
  users: { trend: 24, series: spark([5, 7, 6, 8, 7, 9, 8, 10, 11]) },
  comments: { trend: 8, series: spark([20, 22, 21, 24, 23, 22, 25, 26, 28]) },
};

// Blog Analytics chart: one series per range pill
export const analyticsMock = {
  "7D": [
    { label: "شنبه", views: 22000 },
    { label: "یکشنبه", views: 46000 },
    { label: "دوشنبه", views: 38000 },
    { label: "سه‌شنبه", views: 64000 },
    { label: "چهارشنبه", views: 72000 },
    { label: "پنجشنبه", views: 58000 },
    { label: "جمعه", views: 81000 },
  ],
  "30D": [
    { label: "هفته ۱", views: 210000 },
    { label: "هفته ۲", views: 265000 },
    { label: "هفته ۳", views: 238000 },
    { label: "هفته ۴", views: 312000 },
  ],
  "90D": [
    { label: "مهر", views: 820000 },
    { label: "آبان", views: 945000 },
    { label: "آذر", views: 1080000 },
  ],
  "1Y": [
    { label: "فروردین", views: 610000 },
    { label: "اردیبهشت", views: 680000 },
    { label: "خرداد", views: 640000 },
    { label: "تیر", views: 720000 },
    { label: "مرداد", views: 790000 },
    { label: "شهریور", views: 760000 },
    { label: "مهر", views: 820000 },
    { label: "آبان", views: 945000 },
    { label: "آذر", views: 1080000 },
    { label: "دی", views: 990000 },
    { label: "بهمن", views: 1120000 },
    { label: "اسفند", views: 1210000 },
  ],
};

// View count per row of Latest Posts, by position
export const postViewsMock = [24500, 18700, 32100, 9800, 15400];
