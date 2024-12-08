# 🌌 NASA Picture of the Day 🌠

Welcome to the **NASA Picture of the Day App**, where you can explore breathtaking images and learn fascinating facts about space, brought to you by NASA's APOD (Astronomy Picture of the Day) API. 🚀✨

[Live Site](https://full-stack-nasa-best-pic.vercel.app/)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#️-technologies-used)
- [Screenshots](#-screenshots)
- [API Reference](#️-api-reference)
- [Acknowledgments](#-acknowledgments)

---

## 🌍 Overview

This app allows users to view NASA's daily space image, along with detailed descriptions. Select any date and dive into the cosmos! 🌠

The app consists of:

1. **Frontend:** A React-based interface to interact with the API and display data beautifully.
2. **Backend:** An Express server acting as a proxy for the NASA APOD API.

---

## ✨ Features

- 🗓️ **Date Picker:** Choose any date to explore NASA's space picture for that day.
- 🔄 **Loading Indicator:** A sleek spinner ensures a seamless user experience.
- 🚨 **Error Handling:** Displays meaningful messages if something goes wrong.
- 🎨 **Responsive Design:** Optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Technologies Used

### Frontend 🌟

- **React**: Dynamic and interactive UI components.
- **Material-UI**: Sleek and modern UI library.
- **Day.js**: Date manipulation made easy.

### Backend 🌐

- **Express.js**: Lightweight and robust server framework.
- **Axios**: Simplified HTTP requests.
- **Dotenv**: Secure environment variable management.

---

## 📸 Screenshots

### Landing Page 🌌

![ScreenShot](./Demo/demo.png)

---

## 🛰️ API Reference

The backend proxies NASA's APOD API. Below is the structure:

### Endpoint: `/nasa`

#### Query Parameters:

- **`date`**: The date of the picture in `YYYY-MM-DD` format.

#### Example:

```bash
GET /nasa?date=2024-01-01
```

---

## 🌠 Acknowledgments

- **NASA API Team**: For providing access to such a wonderful resource. 🚀

---

Happy Exploring! 🚀✨  
Reach for the stars! 🌌