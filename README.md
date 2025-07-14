[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/dg9CSX_J)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19935471)
**jQuery Guided Learning Activity**  

---

### **1. Learning Objectives**  
By the end of this activity, you will:  
- Understand jQuery syntax and how to include it in a project.  
- Use selectors to target DOM elements.  
- Handle events (e.g., clicks, hover).  
- Apply basic effects (e.g., hide, fade, slide).  
- Perform AJAX requests to fetch data.  
- Chain multiple jQuery methods together.  

---

### **2. Core Concepts & Examples**  

#### **A. jQuery Syntax**  
- Basic structure: `$(selector).action()`  
- Example:  
  ```javascript
  $(document).ready(function() {
    // Code runs when the DOM is ready
    $("button").click(function() {
      $("#demo").hide();
    });
  });
  ```

#### **B. Selectors**  
- Use CSS-style selectors to target elements.  
- Examples:  
  ```javascript
  $(".class")   // Select by class
  $("#id")      // Select by ID
  $("p")        // Select all <p> tags
  $("ul li:first") // Select first <li> in a <ul>
  ```

#### **C. Events**  
- Common events: `click()`, `hover()`, `keypress()`, `submit()`.  
- Example:  
  ```javascript
  $("#btn").hover(
    function() { $(this).css("background", "yellow"); }, // Mouse enter
    function() { $(this).css("background", "white"); }  // Mouse leave
  );
  ```

#### **D. Effects**  
- Basic effects: `hide()`, `show()`, `fadeIn()`, `slideUp()`.  
- Example:  
  ```javascript
  $("#box").fadeIn(1000).delay(500).fadeOut(); // Fades in, waits, fades out
  ```

#### **E. AJAX**  
- Fetch data with `$.ajax()`, `$.get()`, or `$.post()`.  
- Example:  
  ```javascript
  $.get("https://api.example.com/data", function(response) {
    $("#result").html(response);
  });
  ```

#### **F. Chaining**  
- Combine multiple methods in a single statement.  
- Example:  
  ```javascript
  $("img").addClass("thumbnail").css("opacity", 0.5).fadeIn(2000);
  ```

---

### **3. Scenario-Based Challenge: Dynamic Bookstore**  

#### **Problem Statement**  
You’re building a webpage for a bookstore. Users should:  
1. Search for books by typing a keyword.  
2. See real-time results fetched via AJAX (simulate with a static JSON file or use a public API like Open Library).  
3. Hover over results to highlight them.  
4. Click a result to display its details with a sliding effect.  
5. Chain animations when showing/hiding elements.  

#### **Requirements**  
1. Use jQuery selectors to target the search input, button, and results container.  
2. Implement an event listener for the search button click (or keystroke).  
3. Fetch "book data" via AJAX (e.g., from `books.json` or an API).  
4. Display results with a fade-in effect.  
5. Add hover effects to results (e.g., change background color).  
6. When a book is clicked, slide down to show its description.  
7. Chain at least two effects in one operation (e.g., `fadeIn().delay().slideDown()`).  

#### **Sample JSON (books.json)**  
```json
[
  { "title": "JavaScript Basics", "author": "Jane Doe", "description": "Learn JS fundamentals." },
  { "title": "jQuery in Action", "author": "John Smith", "description": "Master jQuery." }
]
```

---

### **4. Test Your Knowledge**  
- **Enhancement:** Add a loading spinner while AJAX fetches data (use `beforeSend` and `complete` in `$.ajax()`).  
- **Advanced Chaining:** Chain a `fadeOut()` effect for the search input after a successful search.  

**Outcome:** A fully interactive bookstore search page demonstrating jQuery concepts in action!
