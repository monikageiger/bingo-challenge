# Bingo Game

It is just past Valentine's Day, so I was thinking that a good use case for Bingo could be in a first date setting. At these dates, usually the same questions come up anyway, so it can be fun to see who wins.

## Features

- Generates a random Bingo board for each game, but subsequent generations will be the same in the current hour.
- Allows the user to select cards on the Bingo board.
- At each click, checks for a win condition (when a full row, column, or diagonal is selected).
- Displays a fun animation when the user wins.
- Multiple wins are possible.

## Installation

1. Clone the repository: `git clone https://github.com/monikageiger/bingo-challenge.git`
2. Navigate to the project directory: `cd bingo-challenge`
3. Install the dependencies: `npm install`

## Usage

To start the game, run `npm run dev` in the project directory. This will start the development server, and you can access the game at `http://localhost:5173/bingo-challenge/`.


## Backlog

Because of the time limit, there are multiple things I couldn't implement, for example:

- **DOM Manipulation in React**: Replace direct DOM manipulation (for heart creation at win) with React state to handle changes in the UI.
- **Board initialization**: Refactor how board gets initialized to a hook or reusable function
- **Tests**: Create unit tests
