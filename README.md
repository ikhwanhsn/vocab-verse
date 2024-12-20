# English Learning Website (Vocab Verse)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **English Learning Website** is an interactive platform designed to help users improve their English skills. It offers engaging lessons, quizzes, and learning resources to make language acquisition fun and efficient. This project serves as part of my coding portfolio, showcasing modern web development practices and a user-centric design.

## Features

- **Interactive Lessons:** Learn grammar, vocabulary, and pronunciation with step-by-step guides.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.
- **Dark Mode:** Toggle between light and dark themes for comfortable viewing. (Cooming soon)
- **Quizzes:** Test your knowledge with multiple-choice questions and instant feedback. (Cooming soon)
- **Progress Tracking:** Monitor your learning journey with visual progress indicators. (Cooming soon)

## Technologies Used

- **Frontend:** Next.js, React.js, Tailwind CSS
- **Backend:** Node.js
- **Database:** MongoDB (for user progress and data management)
- **Authentication:** Google Authentication
- **Deployment:** Vercel

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ikhwanhsn/vocab-verse.git
   cd vocab-verse
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_MONGODB_URI=your_mongodb_uri
   NEXT_PUBLIC_API_URL=http://localhost:3000

   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXT_PUBLIC_NEXTAUTH_URL=http://localhost:3000
   NEXT_PUBLIC_NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. Sign up for a new account or log in if you already have one.
2. Explore the lessons and complete the interactive exercises.
3. Take quizzes to test your understanding.
4. Track your progress through the dashboard.

## Project Structure

```
vocab-verse/
├── public/              # Static assets
├── src/
|   ├── app/             # Main folder
│   ├── components/      # Reusable UI components
│   ├── libs/            # Library
│   └── services/        # API calls and Firebase config
├── .env.local           # Environment variables
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request to the main branch of this repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this project as per the license terms.

---

Thank you for exploring this project. If you have any questions or feedback, feel free to reach out or open an issue on GitHub!
