import { foo } from './my-foo.js'

export default function () {
  console.log(`From my-bar.js, this is ${foo}`)
}

console.log('loaded my-bar.js')
