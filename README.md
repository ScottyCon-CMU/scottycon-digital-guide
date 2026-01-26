# ScottyCon Digital Guide

## Overview

This repo contains a website serving as a digital guidebook for ScottyCon. As such, the design of the website is meant to be mobile-first.

The website uses the following technologies you may want to familiarize yourselves with:

- Next.js
- TailwindCSS
- Motion


## Set Up & Work Flow

As a developer working on the website, you should do the following to set up your environment:

1. Install Node.js (through NVM)
    - **Node.js** is a _JavaScript runtime environment_, allowing you to run various JavaScript applications, such as this website.
    - I advise you to install "Node Version Manager", which allows you to easily switch to different versions of Node. You can install it for [Windows](https://github.com/coreybutler/nvm-windows), [MacOS](https://github.com/nvm-sh/nvm), or [Linux](https://github.com/nvm-sh/nvm). The latest version of Node should work.

2. Install the required libraries
    - Once you've pulled this repo onto your computer and opened it on your editor, install the required packages by running `npm install` in your terminal. 
    - You should be at the root of the project, with the `package.json` file in the same directory as the command line. 
    - This installs all the packages detailed in the `package.json` file, keeping all those packages in the `node_modules` folder.

Once you have done the above, you should follow this workflow when working on the website.

- Runing the website
    - Run `npm run dev` in the terminal to compile and display the website. React should tell you that you can view the website on `http://localhost:3000/`. This is not the live site, but your own local version of the website, based on the code in your folder.
    - Any changes you make to the code in the project folder will be live-updated and shown in the above link. Use it to see the results of your code as you work.

- Pushing Code
    - When working on a section or feature, make sure to create a new branch to push your commits to. Do not directly push to the main branch, as the live website will reflect the code on this branch.
    - Before pushing a new commit, make sure to run `npm run lint`, which will go over the whole repository to see if the code follows ESLint rules. This is important because Vercel, the web hosting server, follows ESLint rules and will not show your changes if it breaks those rules.
