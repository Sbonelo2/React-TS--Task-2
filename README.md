# React TypeScript Task 2 - Advanced Links Vault 🔗

A professional-grade bookmark management system built with React, TypeScript, and Vite. Features advanced filtering, sorting, dark mode, statistics, and import/export capabilities.

## 🚀 Core Features

- **React 19.1.1** - Latest React version with improved performance
- **TypeScript** - Full type safety and better developer experience
- **Vite** - Lightning-fast build tool and development server
- **React Icons** - Comprehensive icon library (FaSortAmountDown, FaMoon, FaSun, etc.)
- **ESLint** - Code linting and formatting
- **Hot Module Replacement** - Instant updates during development

## ✨ Advanced Features

### 📂 Category Management
- 6 pre-defined categories (Work, Personal, Learning, Entertainment, Social, Other)
- Color-coded category tags for visual organization
- One-click category filtering
- Category-based statistics

### 🔍 Smart Search & Filtering
- Real-time search across all fields
- Multi-field sorting (Title, Tag, Category, Date)
- Ascending/descending sort with visual indicators
- Combined search + category filtering
- Live result count display

### 💾 Import/Export
- Export to JSON format
- Export to CSV for Excel/Sheets
- Import from JSON backup
- Automatic date-stamped filenames

### 🎨 Dark Mode
- Toggle between light and dark themes
- Persistent preference storage
- Smooth theme transitions
- Optimized colors for readability

### 📊 Statistics Dashboard
- Total links counter
- Recently added (last 7 days)
- Category breakdown with color coding
- Toggleable stats panel

### 🔗 Link Enhancement
- URL validation before saving
- Automatic favicon fetching
- External link safety (opens in new tab)
- Created date tracking

### 💡 User Experience
- Form validation with required fields
- Edit mode with cancel option
- Confirmation dialogs for deletions
- Empty state messages
- Responsive design for all devices

## 📦 Project Structure

```
react-ts--task-2/
├── src/
│   ├── Components/
│   │   ├── Windows.tsx
│   │   └── Table.tsx
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-ts--task-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🚦 Available Scripts

- **Development server**
  ```bash
  npm run dev
  ```
  Starts the development server with hot reloading at `http://localhost:5173`

- **Build for production**
  ```bash
  npm run build
  ```
  Builds the app for production to the `dist` folder

- **Preview production build**
  ```bash
  npm run preview
  ```
  Preview the production build locally

- **Lint code**
  ```bash
  npm run lint
  ```
  Run ESLint to check for code quality issues

## 🧰 Technologies Used

### Core Dependencies
- **React** (^19.1.1) - UI library
- **React DOM** (^19.1.1) - DOM rendering
- **React Icons** (^5.5.0) - Icon components

### Development Dependencies
- **Vite** (^7.1.2) - Build tool and dev server
- **TypeScript** (~5.8.3) - Type checking
- **ESLint** - Code linting with React-specific rules
- **@vitejs/plugin-react** - Vite React plugin

## 🏗️ Architecture

The application consists of two main components:

- **Windows Component** - Handles window-related functionality
- **Table Component** - Manages tabular data display (currently commented out in App.tsx)

## 🎯 Getting Started

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

3. Begin developing by editing files in the `src/` directory

## 📝 Development Guidelines

- Follow TypeScript best practices for type safety
- Use ESLint rules for consistent code formatting
- Leverage React Icons for consistent iconography
- Utilize Vite's fast HMR for efficient development

## 🔧 Configuration

- **Vite Config**: Configure build settings in `vite.config.ts`
- **TypeScript**: Type checking configuration in `tsconfig.json`
- **ESLint**: Linting rules in `eslint.config.js`

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vite.dev/guide/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and not licensed for public use.

---

Built with ⚡ Vite + ⚛️ React + 📘 TypeScript


<img src="https://socialify.git.ci/Sbonelo2/React-TS--Task-2/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="React-TS--Task-2" width="640" height="320" />
