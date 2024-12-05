const fs = require('fs');
const path = require('path');

const widgetName = process.argv[2];
if (!widgetName) {
  console.error('Error: Please provide the widget name.');
  console.error('Usage: node buildwidget.js {widgetName}');
  process.exit(1);
}

const widgetDir = path.join(__dirname, 'src/components/widgets', widgetName);
const outputDir = path.join(__dirname, 'src/data');

// Check if the widget directory exists
if (!fs.existsSync(widgetDir)) {
  console.error(`Error: Widget "${widgetName}" does not exist.`);
  process.exit(1);
}

// Check for required files
const tsxFile = path.join(widgetDir, `${widgetName}.tsx`);
const jsonFile = path.join(widgetDir, `${widgetName}.json`);

if (!fs.existsSync(tsxFile) || !fs.existsSync(jsonFile)) {
  console.error(`Error: Missing required files (${widgetName}.tsx or ${widgetName}.json) in the widget folder.`);
  process.exit(1);
}

// Read the JSON metadata file
const metadata = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

// Instead of reading the entire TSX content, just reference the component's file path
// For example, the 'code' key will now store the relative path to the component
const finalJson = {
  ...metadata,
  code: `/widgets/${widgetName}/${widgetName}.tsx`, // Store the path to the component file, not the actual code
};

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write the final JSON to the output directory
const outputFilePath = path.join(outputDir, `${widgetName}.json`);
fs.writeFileSync(outputFilePath, JSON.stringify(finalJson, null, 2), 'utf-8');

console.log(`Widget "${widgetName}" built successfully! JSON file saved to src/data/${widgetName}.json`);