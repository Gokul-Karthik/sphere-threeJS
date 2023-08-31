# Interactive Sphere with Three.js and Vue.js

![Interactive Sphere Preview](demo.gif)

This is an interactive 3D sphere application built using Three.js and Vue.js. It allows you to explore and interact with a rotating sphere in a web browser.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)

## Features

- 3D Sphere Visualization
- Interactive Rotation
- Zoom and Pan Controls
- Customizable Sphere Properties

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/interactive-sphere.git
   cd interactive-sphere
   
2.**Install Dependencies**

Ensure you have Node.js and npm installed. If not, download and install them from nodejs.org.

```
npm install
```
3.Start the Development Server

```bash
npm run serve
```
The application will be available at http://localhost:8080 in your web browser.

##Usage

Click and drag on the sphere to rotate it.
Use your mouse scroll wheel or touchpad gestures to zoom in and out.
Right-click and drag to pan the view.

##Customization
You can customize the sphere's appearance and behavior by editing the src/components/Sphere.vue file. Modify the code to change the sphere's texture, add animations, or adjust its size and position.

##Deployment
To deploy this application to a live website, follow these general steps:

1.Build the Production Version

```bash
Copy code
npm run build

```
2.Deploy to Hosting
You can deploy the contents of the dist directory to your preferred hosting platform. Options include GitHub Pages, Netlify, Vercel, or traditional web hosting services.
