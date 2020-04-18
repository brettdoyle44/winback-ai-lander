import firebase from "gatsby-plugin-firebase"

const lazy = fn => {
  let isLoaded = false
  let result
  return () => {
    if (!isLoaded) {
      isLoaded = true
      result = fn()
    }
    return result
  }
}

const app = lazy(() => firebase.initializeApp())
const database = lazy(() => app().database())

export { app, database }
