## Node

Node.js is an open-source, cross-platform, server-side JavaScript runtime environment. It runs without a Browser (no UI).

## Starting a Project

1. `npm init` to create a node project and create a `package.json` file
    * You can also do `npm init -y` that set everything up with the defaults. 
2. Create `app.js` as your "entry point" file
3. Add a `"start"` script to `package.json`: `"start": "node app.js"`
4. Run `npm start`

```
npm init

package name: (app-folder) //name of the folder(no spaces)
description: // what is this about
entry point: // the name of the main JavaScript file. (app.js)
test command: 
git repository: //repo file/url path
author: //Your name
license: //
(ISC) if there is any
Is this OK? (yes) // y or n
```