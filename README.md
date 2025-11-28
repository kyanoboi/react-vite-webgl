# React 3D Mapping Application

A modern 3D mapping application built with React, TypeScript, Vite, ArcGIS JS API, and Three.js.

## Features

- Built with Vite for fast development and production builds
- React 18 with TypeScript for type safety
- ArcGIS JS API 4.x for advanced 2D/3D mapping
- Three.js for 3D graphics and visualization
- Ant Design for UI components
- React Router for client-side routing
- Jest for testing
- ESLint for code quality

## Prerequisites

- Node.js 18+ (recommend LTS version)
- npm or pnpm (recommended)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-vite
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Or using pnpm (recommended)
   pnpm install
   ```

3. **Copy ArcGIS assets**

   ```bash
   npm run copy
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── assets/          # Static assets
├── pages/           # Page components
├── router/          # Application routes
├── style/           # Global styles
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## Running Tests

```bash
npm test
```

## Linting

```bash
# Lint code
npm run lint

# Auto-fix linting issues
npm run lint -- --fix
```

## Dependencies

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Vite](https://vitejs.dev/) - Build tool
- [ArcGIS JS API](https://developers.arcgis.com/javascript/) - Mapping and visualization
- [Three.js](https://threejs.org/) - 3D graphics
- [Ant Design](https://ant.design/) - UI components
- [React Router](https://reactrouter.com/) - Routing
- [Jest](https://jestjs.io/) - Testing framework

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
