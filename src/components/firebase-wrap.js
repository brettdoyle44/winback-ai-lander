import firebase from "firebase"
import config from "../config"

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

const app = lazy(() => firebase.initializeApp(config))
const database = lazy(() => app().database())

export { app, database }
