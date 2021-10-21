
 "Using the starter repository" ->
 ```
 npm install
 ```

 "Export this interface as the default export"
 ```
    export default InterfaceName;
 ```


 "abstract"  -- can't be used to create an object on its own,
 has to be extended

 abstract methods and properties -- you'll need to implement
 these in the child class

 "In its own file, create a class named Parent. It is a subclass of Child."
 ```
    class Child extends Parent {}
 ```

 Constructor -- a special that gets run with you first create the object
any parameters that you have are meant to set up the initial data

*if it's a child class, it needs to call super()*

```
    constructor(title, contentLength) {
        super(); // reference to the parent
    }
```

```
    super(); -- call the parent's constructor()
    super.getPath(); // -- call getPath() from the parent()

    "A reallly agressive " + super.sound(); // corgi vs dog
```

"export them
individually" -- no default  "named exports"
export
```
    export const fn1 = () => {}
    export const fn2 = () => {}
    export const fn3 = () => {}
```
import
```
    import {fn1, fn2, fn3} from './functions';
```