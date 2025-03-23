# PopX Mobile App

A responsive React.js implementation of the PopX mobile app interface with clean, pixel-perfect UI and seamless navigation.

## Features

- Complete user pages (welcome, login, signup)
- Account settings and profile management
- Responsive mobile-first design
- Form validation
- Clean, modular component architecture

## Demo

[Live Demo](https://educase-three.vercel.app/)

## Tech Stack

- React.js
- React Router for navigation
- TailwindCSS for styling
- Modern JavaScript (ES6+)

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Button.js       # Primary/secondary/disabled button variants
│   ├── FormInput.js    # Form input fields with labels
│   └── RadioButton.js  # Custom radio button implementation
├── pages/              # Application pages
│   ├── Welcome.js      # Landing page
│   ├── Login.js        # Sign in page
│   ├── CreateAccount.js # Registration page
│   └── AccountSettings.js # User profile page
├── App.js              # Main app component with routing
└── index.js            # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/abhishekbansal2312/Educase
   cd popx-app
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build files will be created in the `build` directory, ready to be deployed.

## Deployment

### Netlify Deployment

1. Create a production build

   ```bash
   npm run build
   ```

2. Deploy using Netlify CLI

   ```bash
   netlify deploy --prod
   ```

   Or set up continuous deployment with GitHub through the Netlify dashboard.

## Design Implementation Notes

- Pixel-perfect implementation of the provided design mockups
- Mobile-first responsive design
- Form validation matching the requirements
- Transitions and animations for better user experience

## Author

Abhishek Bansal
