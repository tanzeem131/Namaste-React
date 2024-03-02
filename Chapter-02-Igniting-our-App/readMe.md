# Create a React app on production level

## What did I learn in this chapter?

    - react and react-dom
    - npm(not stands for node module package but work as a node module packager)
    - Transitive dependencies(one package is dependent on other package and that package is also dependent on other dependencies)
    - caret(^)(updates minor version) & tilde(~)(updates major version)
    - parcel (for installation: npm i -D parcel)
    - dist
    - package.json(configuration for npm)
    - package-lock.json(keeps the track of exact version of packages or dependencies installed into our sysytem)
    - .parcel-cache
    - browserlist(to support older browsers)

### Parcel Features:

    * HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
    * File watcher algorithm - made with C++
    * Minification
    * Cleaning our code
    * DEV and production Build
    * Super fast building algorithm
    * Image optimization
    * Caching while development
    * Compresses
    * Tree shaking(remove unused or unwanted code)
    * Compatible with older version of browser
    * Consistent hashing algorithm
    * Zero Configuration
    * Automatic code splitting
