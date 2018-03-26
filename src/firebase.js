import firebase from 'firebase'

let config = {
  databaseURL: 'https://type-racer-cd507.firebaseio.com/',
  projectId: 'type-racer-cd507'
}

let app = firebase.initializeApp(config)
let db = app.database()
const kanban = db.ref('kanban')

export default kanban
