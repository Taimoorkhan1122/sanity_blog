# Exploring Sanity IO headless CMS

use `npm install -g @sanity/cli && sanity init` to install Sanity Globally on you system and initializ a project.

To connect Sanity Studio to our React App we will using `@sanity/client` package

- Creaete a file inside src folder named client.js
- Import `sanityClient` from installed sanity client package
- pass project Id and dataSet object to `sanityClient()` and export it.

# Upgrade

use yarn upgrade @sanity/cli to update.
