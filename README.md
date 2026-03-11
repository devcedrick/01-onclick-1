# Exercise No. 1: Counter - v1

## Objective

Create a simple counter that can be **incremented** and **decremented** by clicking buttons.

## Difficulty

Easy

## Instructions

Open the file `src/components/Counter/Counter.tsx` and complete the following tasks:

### Task 1: Implement Event Handlers

Create two event handler functions inside the `Counter` component:

- **`handleIncrement`** — increases the `count` state by `1`
- **`handleDecrement`** — decreases the `count` state by `1`

> **Hint:** Use the `setCount` function provided by `useState` to update the state.

### Task 2: Wire Up the Buttons

Attach the event handlers to their corresponding buttons using the `onClick` prop:

- The **`+`** button should call `handleIncrement`
- The **`-`** button should call `handleDecrement`

## Expected Behavior

- Clicking **`+`** should increase the displayed number by 1.
- Clicking **`-`** should decrease the displayed number by 1.
- The counter should start at **0**.

## Getting Started

```bash
npm install
npm run dev
```

## Key Concepts

- [`useState`](https://react.dev/reference/react/useState) — React hook for managing component state
- [`onClick`](https://react.dev/learn/responding-to-events) — Event handler prop for responding to click events
