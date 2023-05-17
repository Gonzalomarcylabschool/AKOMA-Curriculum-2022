# Context

## What is Context 

Imagine you have a group of friends, and you all love playing games together. Sometimes, you need to share important information or a special item with everyone in the group.

In React, "Context" is a way to share data or information with multiple components without passing it through each component individually. It's like having a special bag that holds important things for your friends to use.

To use Context in React, you follow these steps:

1. Create a Context: Think of it as creating the special bag. You can do this by using the React.createContext() function.

```jsx
// Create a Context (the special bag)
const MyContext = React.createContext();
```
*Note* This can go in its own folder or can live in the parent component.

2. Put things in the bag: You can put any kind of data you want to share into the bag. It can be a number, a word, or even a list of items.

```jsx
const sharedData = "Hello, friends!"; //plain old data
```

3. Share the bag with your friends: Wrap your components with a special component called the "Provider." It's like giving your friends access to the bag. The Provider makes the shared data available to all the components inside it.

4. Take things out of the bag: Your friends can now reach into the bag and use the shared data. They can access it by using a special component called the "Consumer." The Consumer helps them get what they need from the bag.


```jsx


// Share the bag with your friends (wrap components with the Provider)
function App() {
  const sharedData = "Hello, friends!";

  return (
    <MyContext.Provider value={sharedData}>
      <ComponentA />
    </MyContext.Provider>
  );
}

// Take things out of the bag (use the Consumer to access the shared data)
function ComponentA() {
  return <ComponentB />;
}

function ComponentB() {
  return (
    <MyContext.Consumer>
      {(data) => <div>{data}</div>}
    </MyContext.Consumer>
  );
}

```

## What is the provider?

Imagine you're in a school and there's a teacher who has a special notebook. This notebook contains important information that the teacher wants to share with all the students in the class. However, the teacher doesn't want to go to each student individually to give them the information.

Instead, the teacher decides to create a "Provider." The Provider is like a special person who can distribute the information to all the students in the class. The teacher gives the Provider the notebook with the information.

Now, whenever a student wants to access the information, they can simply go to the Provider and ask for it. The Provider will check the notebook and give the student the information they need. The students don't have to worry about passing the notebook around or going back to the teacher each time they need the information. The Provider takes care of all that for them.

In React, the concept is similar. The Provider is a special component that holds the data or information you want to share with other components. It acts as a central source of data for the components within its scope.

When you wrap your components with the Provider component, you're essentially giving them access to the shared data. The Provider holds the data and makes it available to any component that needs it, without the components having to pass the data manually through props.

The Provider component takes the shared data as a prop called value. This value can be anything—such as a string, object, or even a function. Components that are wrapped within the Provider can then access this data using either the Consumer component or the useContext hook.

Just like the Provider in our school example, React's Provider simplifies the process of sharing data among components by acting as an intermediary that holds the data and makes it accessible to the components that need it.


## Lets add some complexity

