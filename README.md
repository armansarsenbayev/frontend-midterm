## 1. Project Proposal

**Project idea and purpose:**
This is macronutrient and calorie tracking web application. Its primary purpose is to help users calculate their daily nutritional needs and log their meals to maintain a healthy lifestyle

**Target audience:**
Application can be helpful to anyone who want to tracj his diet

**Problem the application solves:**
Many diet apps are overly complicated or require paid subscriptions for basic features. MY app aims to solve this by providing a clean interface focused strictly on calculating and tracking macros

**Minimum Viable Product (MVP) features:**
- A calculator to estimate daily calorie and macro goals.
- A dashboard to display daily progress.
- Functionality to add, edit, and delete food entries.

## 5. SPA Theory Questions

**What is a Single Page Application (SPA)?**
A Single Page Application (SPA) is a modern web development approach where the entire application runs within a single HTML document. Instead of loading new pages from the server for every interaction, the initial request retrieves all necessary HTML, JavaScript, and CSS files. Once the application is loaded, it dynamically rewrites the current page's content based on user actions. This process is managed entirely by JavaScript running directly in the browser. As a result, users experience a smooth, uninterrupted flow that feels much like a native desktop or mobile application. The browser does not need to perform full page reloads, which significantly reduces the amount of data transferred over the network. Content updates are handled asynchronously, typically fetching only raw data (like JSON) from the server and rendering it on the client side. This architecture allows for highly interactive, responsive, and fast user interfaces.

**How does SPA differ from traditional Multi-Page Applications (MPA)?**
The fundamental difference between an SPA and an MPA lies in how they handle user navigation and data fetching. In a traditional Multi-Page Application, every time a user clicks a link or submits a form, the browser sends a completely new request to the server. The server then processes this request, renders a brand new HTML page, and sends it back to the client, causing a noticeable full page reload. This traditional approach can be slower and more resource-intensive because the browser must constantly re-download repetitive elements like headers and footers. Conversely, an SPA only loads the main layout once during the initial visit. Subsequent navigation simply triggers JavaScript to swap out specific components on the screen. Data is retrieved asynchronously in the background via APIs without disrupting the visual experience. Ultimately, MPAs rely heavily on server-side rendering for every state change, while SPAs shift the rendering burden to the client's browser.

**What is the Virtual DOM?**
The Virtual DOM is a core concept in React that optimizes how the user interface is updated and rendered. It is essentially a lightweight, in-memory representation of the actual Real DOM (Document Object Model) structure. Direct manipulation of the Real DOM is a computationally expensive and slow process, especially in complex applications. To solve this, React creates a Virtual DOM tree whenever the state of a component changes. React then uses a highly efficient algorithm called "diffing" to compare this new Virtual DOM with a snapshot of the previous Virtual DOM. By comparing the two trees, React can calculate the exact, minimal set of changes required to update the screen. Once these specific differences are identified, React applies them to the Real DOM in a single, optimized batch operation known as "reconciliation." This selective updating prevents unnecessary re-rendering of the entire page, ensuring that the application remains highly performant.

**Why does React use a component-based architecture?**
React uses a component-based architecture to break down complex, massive user interfaces into small, manageable, and isolated building blocks. Each component acts as an independent piece of the UI with its own specific logic, structure, and styling. This modular approach significantly improves code organization and readability, making it easier for developers to understand and maintain the project over time. Furthermore, components are highly reusable; a button or a navigation bar created once can be utilized across multiple pages without rewriting the same code. This reusability drastically reduces development time and ensures a consistent design language throughout the application. Component-based architecture also simplifies the debugging process, as errors can usually be traced back to a single, isolated component rather than a tangled web of global code. Additionally, components can manage their own internal state, meaning changes in one part of the application do not unintentionally break functionality in another. Ultimately, this structure enables teams to collaborate more effectively by dividing the application into independent, parallel tasks.