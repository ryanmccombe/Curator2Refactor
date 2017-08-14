
# Storyline Editor Component Structure:
https://docs.google.com/drawings/d/1iOXHGuLlNUx7rpMIhFYFEw0kebfg-VLyHTaifIy8b9s/edit?usp=sharing

---

# BBC Rewind React Scaffold

This repo is a scaffolded development environment for React applications
#### Installation
Clone the repo and run `npm install`

#### Features
  - Server: Node / Express
  - Babel - ES2015, Stage-2, JSX Compilation
  - React
  - Redux
  - React Router 4
  - CSS Modules / Less
  - ESLint
  - Hot Module Replacement - Modules are replaced live as soon as files are saved, without page reloading (maintain application state)

#### Scripts
- `npm start` - Start the development server at http://localhost:3050 with all dev features
- `npm run build` - Compile the application in development mode into the /dist/ directory
- `npm run build:prod` - Compile the application in production mode into the /dist/ directory
- `npm run serve` - Serve the contents of /dist/ using an express static server at http://localhost:3050
- `npm run clean` - Delete /dist/

#### Adding Pages
- Create your new page container directory in client/containers
- Import and route to it in /client/router