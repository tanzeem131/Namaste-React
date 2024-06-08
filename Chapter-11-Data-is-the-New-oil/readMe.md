# Chapter 11 - Data is the new Oil - Props drilling and UseContext Hook

## Higher-Order Components
A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
- a higher-order component is a function that takes a component and returns a new component.
- Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

## Prop Drilling
Prop drilling occurs when a prop needs to be passed through several layers of nested components to reach a deeply nested child component that actually needs the prop. 

### Challenges with Passing Props

Usually, props are used to pass information from a parent component to its child components. This process can become cumbersome when:
- There are many intermediary components that do not need the prop.
- Props must be passed through multiple components, resulting in prop drilling.

### Issue of Prop Drilling

Prop drilling occurs when props need to be passed through several nested components, even if those components don’t use the props. This can make the code more complex and harder to maintain.

## Using React Context
Use to avoid Prop drilling.

### Overview of React Context

React provides Context to alleviate the problems associated with prop drilling. Context allows you to create a global state or data that can be accessed by any component in the component tree, no matter how deeply nested.

### createContext() and useContext()

- **createContext()**: A function from the React library used to create a new context.
- **useContext()**: A hook that allows components to access the context value.

### Steps to Implement Context

1. **Create a Context**
    ```jsx
    const MyContext = React.createContext();
    ```

2. **Provide a Context Value**
    Wrap the relevant part of your component tree with the `MyContext.Provider` component.
    ```jsx
    <MyContext.Provider value={/* some value */}>
      {/* Your components */}
    </MyContext.Provider>
    ```

3. **Consume the Context Value**
    Use `useContext(MyContext)` in any nested component within the provider to access the context value.
    ```jsx
    const myValue = useContext(MyContext);
    ```

### Benefits and Considerations

- **Global Accessibility**: React Context makes it easy to share data globally, eliminating the need for prop drilling.
- **Code Simplification**: It reduces code complexity by removing the necessity to pass props through every intermediary component.
- **Performance Considerations**: Although powerful, Context should be used carefully. Avoid putting large objects or rapidly changing values into context to prevent performance issues.

### Conclusion

React Context is an effective tool for managing global state or sharing data without the hassle of prop drilling. It improves code readability and maintainability, particularly when passing props becomes impractical.

### Interview Tips

- **Performance Awareness**: Understand the potential performance impacts of using context, especially with data that changes frequently.
- **Appropriate Use Cases**: Context is useful for sharing state across many components but may be unnecessary for smaller applications.
- **State Management**: Recognize that Context is not a substitute for state management libraries like Redux; it's suited for specific scenarios.

---

## Controlled and Uncontrolled Components in React

### Controlled Components

Controlled components in React do not manage their own internal state. Instead, their state is managed by their parent component. The parent passes down the state values as props, and the controlled component informs the parent of any changes via callback functions.

### Uncontrolled Components

Uncontrolled components in React manage their own internal state independently. They do not rely on a parent component to pass down state values. Uncontrolled components handle their state changes internally, providing more autonomy in managing their behavior and state.

---

