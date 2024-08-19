/*

Creates an object from an element attribute.

root {Element} - to find elements
attr {string} - attribute whose value will be used to create the object
split {string} - split string for key name

Example
<input type="text" name="form/main/name" value="Mykola"/>
return { form: { main: { name: 'Mykola' } } }

**/

function objGenerator(root, attr = 'name', split = '/', checked = true) {
  let result = {}

  root?.querySelectorAll(`[${attr}]`)?.forEach(el => {
    if (checked && el.getAttribute('checked') != null && !el.checked) return

    let path = el.getAttribute(attr)?.split(split)

    if (!path) return

    let last = path.pop()

    if (path.length) {
      let tmp = path.reduce((acc, key) => (key in acc ? acc[key] : (acc[key] = {})), result)

      tmp[last] = el.value
    } else result[last] = el.value
  })

  return result
}
