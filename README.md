# Weejet

Weejet is an open source platform where people can develop widgets to share them across the Internet for free.

## To get started

Step 1: Fork the Repository 

Before cloning, **[Fork the repository](https://github.com/JohnsonChin1009/weejet/fork)** to your GitHub account. This creates a copy of the repository under your account so you can make changes safely.

Step 2: Clone Your Forked Repository

Once you’ve forked the repository, clone it to your local machine:

```bash
git clone https://github.com/{your-username}/weejet.git
```

Step 3: Open the Project in local terminal

```
cd weejet
```

Step 4: Install Dependencies
```
pnpm install
```

Step 5: Create a new widget
```node
node create-widget
```

Step 6: Provide details to your widget

```
Widget Name:
Description:
Author: 
```

Step 7: Open the Widget you created
```
/src/components/widgets/{widgetName}
```

Step 8: Code your widget as if it's a React Component


Step 9: Build your Widget
```
node build-widget {widgetName}
```

Step 10: Commit and Create a Pull Request

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