# Project Purpose

A lightweight template for setting up the essentials when working with React in a Webpack and Typescript environment.

# Future Improvements

- Tooling like DependaBot/Renovate to keep packages up to date.
- Lockdown core branches so accidental pushes cannot be committed back to this repository.

# Installation Details

- Fork this project into a new repository
- Rename the project name and descriptiion within `package.json` to something more appropriate
    - It's also recommended you change/remove the license details as required
- Install all the packages using NPM or YARN
    - If YARN is not installed run the following commands
        - npm install -g yarn
        - yarn -v
            - Should return a version number
        - yarn
- Run the application from the new directory using NPM or YARN
    - yarn serve
    - npm run serve