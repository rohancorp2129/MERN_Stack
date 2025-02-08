document.addEventListener('DOMContentLoaded', function() {
  const outputDiv = document.getElementById('output');
  const featuresBtn = document.getElementById('features-btn');
  const historyBtn = document.getElementById('history-btn');
  const examplesBtn = document.getElementById('examples-btn');
  const applicationsBtn = document.getElementById('applications-btn');

  featuresBtn.addEventListener('click', function() {
    console.log("Key Features of JavaScript:");
    console.log("1. Structured Programming Language");
    console.log("2. Weakly Typed/Dynamic/Loosely Typed Language");
    console.log("3. Light-Weighted and Interpreted Language");
    console.log("4. Case-Sensitive Language");
    console.log("5. Client-Side Scripting Language");
    console.log("6. Platform-Independent Language");
    console.log("7. Good Control over the Browser");
    outputDiv.innerHTML = `
      <h3>Key Features of JavaScript:</h3>
      <ul>
        <li>Structured Programming Language</li>
        <li>Weakly Typed/Dynamic/Loosely Typed Language</li>
        <li>Light-Weighted and Interpreted Language</li>
        <li>Case-Sensitive Language</li>
        <li>Client-Side Scripting Language</li>
        <li>Platform-Independent Language</li>
        <li>Good Control over the Browser</li>
      </ul>
    `;
    console.log("Please check the browser console for the output.");
  });

  historyBtn.addEventListener('click', function() {
    alert("JavaScript was created in 1995 by Brendan Eich. It was initially called Mocha, then LiveScript, and finally JavaScript.");
    outputDiv.innerHTML = `
      <h3>History of JavaScript:</h3>
      <p>JavaScript was created in 1995 by Brendan Eich.</p>
      <p>It was initially called Mocha, then LiveScript, and finally JavaScript.</p>
      <p>JavaScript was first released in Netscape Navigator 2.0 in September 1995.</p>
    `;
  });

  examplesBtn.addEventListener('click', function() {
    document.write("Here are some examples of websites that use JavaScript: ");
    document.write("<h3>Examples of JavaScript:</h3>");
    document.write("<ul>");
    document.write("<li>Amazon</li>");
    document.write("<li>Flipkart</li>");
    document.write("<li>LinkedIn</li>");
    document.write("<li>Angry Birds</li>");
    document.write("<li>Netflix</li>");
    document.write("<li>Uber</li>");
    document.write("<li>Duolingo</li>");
    document.write("</ul>");
    document.write("<button id='back-btn' class='btn btn-primary'>Back</button>");
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', function() {
      window.location.reload();
    });
  });

  applicationsBtn.addEventListener('click', function() {
    outputDiv.innerHTML = `
      <h3>Applications of JavaScript:</h3>
      <ul>
        <li>Client-Side Scripting</li>
        <li>Server-Side Scripting</li>
        <li>Game Development</li>
        <li>Dynamic Dropdowns</li>
        <li>Displaying Pop-Ups and Dialog Boxes</li>
        <li>Displaying Clocks</li>
      </ul>
    `;
  });
});