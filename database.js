import * as Firebase from 'firebase'

let HAS_INITIALIZED = false

const initFirebase = () => {
    if (!HAS_INITIALIZED) {
        const config = {
            apiKey: "AIzaSyDjNsjUtdsGhe7MhVqahebriy2BHSRYaSE",
            authDomain: "quiz-test-cc692.firebaseapp.com",
            databaseURL: "https://quiz-test-cc692.firebaseio.com/",
            storageBucket: "gs://quiz-test-cc692.appspot.com",
        }

        Firebase.database.enableLogging(true)
        Firebase.initializeApp(config)
        HAS_INITIALIZED = true
    }
}

export const getDatabase = () => {
    initFirebase()
    return Firebase.database();
}