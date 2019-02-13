// https://github.com/souporserious/react-motion-ui-pack/blob/master/src/is-element.js
import { isValidElement } from 'react'

export default function isElement(props, propName, componentName) {
  if (typeof props[propName] !== 'function') {
    if (isValidElement(props[propName])) {
      return new Error(`${ComponentName} is not an actual Element`)
    }
  }
}
