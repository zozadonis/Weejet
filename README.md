# Weejet

Weejet is an open source platform where people can develop widgets to share them across the Internet for free.

## To get started

Step 1: Fork the Repository and clone it to your local machine

```
git clone https://github.com/{your-repo}/weejet.git
```

Step 2: Open the Project in local terminal

```
cd weejet
```

Step 3: Install Dependencies
```
pnpm install
```

Step 4: Create a new widget
```node
node create-widget
```

Step 5: Provide details to your widget

```
Widget Name:
Description:
Author: 
```

Step 6: Open the Widget you created
```
/src/components/widgets/{widgetName}
```

Step 7: Code your widget as if it's a React Component

Step 8: Build your Widget
```
node build-widget {widgetName}
```

Step 9: Commit and Create a Pull Request

---

## Mini Challenge for Notion @ APU

Create a new custom Notion Widget and the most creative and useful one wins the challenge

The code below is the boilerplate that I provided for you to help kickstart your first widget creation.

```tsx
import React from "react";

// Note: Replace {WidgetName} with the name that you used to create the widget.

const {WidgetName} = () => {
  return (
    <div>
      <h1>Hello, Weejet!</h1>
      <p>This is my custom widget.</p>
    </div>
  );
};

export default {WidgetName};
```