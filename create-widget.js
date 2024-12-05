const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Utility to ask user for input
const askQuestion = (query) =>
  new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });

const createWidget = async () => {
  const widgetName = await askQuestion('Widget Name? ');
  const description = await askQuestion('Description? ');
  const author = await askQuestion('Author? ');

  const widgetDir = path.join(__dirname, '/src/components/widgets', widgetName);

  // Check if the widget already exists
  if (fs.existsSync(widgetDir)) {
    console.error(`Error: A widget with the name "${widgetName}" already exists.`);
    process.exit(1);
  }

  // Create the widget directory
  fs.mkdirSync(widgetDir, { recursive: true });

  // Create an empty TypeScript file
  fs.writeFileSync(path.join(widgetDir, `${widgetName}.tsx`), '', 'utf-8');

  // Create the JSON file with metadata
  const jsonFileContent = {
    id: widgetName,
    title: widgetName.charAt(0).toUpperCase() + widgetName.slice(1),
    description,
    author,
  };
  fs.writeFileSync(
    path.join(widgetDir, `${widgetName}.json`),
    JSON.stringify(jsonFileContent, null, 2),
    'utf-8'
  );

  console.log(`Widget "${widgetName}" created successfully!`);
};

// Run the script
createWidget();