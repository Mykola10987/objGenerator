Creates an object from an element attribute.

root {Element} - to find elements.

attr {string} - attribute whose value will be used to create the object.

split {string} - split string for key name.

```
// Example
<input type="text" name="form/main/name" value="Mykola"/>
// return { form: { main: { name: 'Mykola' } } }
```
