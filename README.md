# Metis ![Metis testing](https://github.com/equinor/gathering-metis/workflows/Metis%20testing/badge.svg) ![Lint](https://github.com/equinor/gathering-metis/workflows/Lint/badge.svg) [![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)

Metis is a [graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) of people that can be navigated with a web browser. It lets you navigate through a structure of people, how they are organized, what they work with, their interests, and so on.

Consider a structure where there are departments, teams, teams members and applications:

![SampleDataStructure](docs/images/DataStructure-conceptual.png)

Metis provides a way to visualize and navigate through this graph. From the start, the user interface will look something like this:

![SampleUI](docs/images/UI-sketch.png)
Highlights:
* One selected node in focus (to the left)
* Other nodes associated with this node are shown to the right (grouped by type).
* Clicking on any of the nodes to the right will select that node, i.e. putting that node in focus (and showing the nodes that are associated with it).
* It should also be possible to visualize the compete graph, but maybe not as part of the MVP.

## Product vision/goal

This product actually has a potential for exposing the (maybe informal and ever-changing) structure of teams, people and projects. It should acquire data where available, and have a decentralized way for data updates.

There are many types of nodes that can be added to such a graph. Some ideas are:
* Persons can be linked to location, interests, ...
* Projects can be linked to backlog, task board, GitHub repo, ...

## MVP
* Hard-coded data structure (JSON?), no database.
* No connection to other systems (AD, ...)
* UI as outlined above

## How we work
To know more about how we work you can read [here](how_we_work.md).

# SI Gathering Challenge: Template

To run the project locally, you need docker:

```
docker build -t <name> .
docker run -p 8000:8000 <name>
```

# Onboarding Frontend

## Install
cd ./client
npm install
npm start

## Code practicies

### VSCode plugins for better code

We use several extensions that helps keeping the code clean. Visual studio Code will give suggestions on which plugins should be installed with this project.

We have enabled strict eslint rules, which will give errors/warnings if the code doesn't follow our standard guidlines. All these must be fixed before merge to dev.

Must have plugins:
* Code Spell Checker: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
* ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* Prettier - Code formatter: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* SonarLint: https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode

Other usefull plugins:
* GitHub Pull Requests and Issues: https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github
* Import Cost: https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost
* Azure App Service https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice
* Docker: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker

### Names
* Use PascalCase for type names.
* Do __not use "I"__ as a prefix for interface names.
* Use PascalCase for enum values.
* Use camelCase for function names.
* Use camelCase for property names and local variables.
* Do not use "_" as a prefix for private properties.
* Use whole words in names when possible.

### null and undefined
Use __undefined__. Do not use null.

### General Assumptions
Consider objects like Nodes, Symbols, etc. as immutable outside the component that created them. Do not change them.
Consider arrays as immutable by default after creation.

### Classes
For consistency, do not use classes in the core compiler pipeline. Use function closures instead.

### General Constructs
For a variety of reasons, we avoid certain constructs, and use some of our own. Among them:

Do not use for..in statements; instead, use ts.forEach, ts.forEachKey and ts.forEachValue. Be aware of their slightly different semantics.
Try to __use ts.forEach, ts.map, and ts.filter instead of loops__ when it is not strongly inconvenient.

Based on:
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#names
