## State (in react)

In a React project, 'state' is simply a JavaScript object that contains information that your app needs to render and function correctly.

Think of it like a container that holds important information about your app's current state, such as whether a button has been clicked, what text has been entered into a form, or what items are in a shopping cart.

When a component's state changes, React automatically re-renders the component to reflect the updated state with out needing to refresh the page.


## Hooks

if you see `use` you are working with a hook.

Hooks are a feature introduced in React 16.8 that allow developers to use state and other React features in functional components.

Hooks are functions that allow you to "hook into" React state and lifecycle features from functional components. There are several built-in hooks in React, such as useState, useEffect, and useContext,  among others.

An absolutely key concept for you to grasp is hooks rely on this strict ordering. As such, do not put hooks inside `if` statements or loops. If you do, you'll have insane bugs that involve `useState` returning the wrong state. If you see `useState` returning the wrong piece of state, this is likely what you did.

When using hooks in React, there are a few rules that you need to follow:

1. Hooks can only be called at the top level of your component or another custom hook.

2. Hooks should not be called conditionally, inside loops, or inside nested functions.

3. Hooks should always be called in the same order, every time your component is rendered.

