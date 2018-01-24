import Counter from './components/Counter'
import DefaultPropsComponent from './components/DefaultPropsComponent'
import FetchingJSONFromPublic from './components/FetchingJSONFromPublic'
import PassingParamFromURL from './components/PassingParamFromURL'
import REST from './components/REST'
// import RestToDoList from './RestToDoList'
import FirebaseComponent from './components/FirebaseComponent'
import FirebaseToDo from './components/FirebaseToDo'
import FirebaseLogin from './components/FirebaseLogIn'
import ReduxToDo from './components/ReduxToDo'
import ReduxSimpleText from './components/ReduxSimpleText'
import ReduxRectangle from './components/ReduxRectangle'

const routes = [
    {
        path: '/component/counter',
        text: 'Counter',
        component: Counter
    },
    {
        path: '/component/default-props',
        text: 'defaultProps example',
        component: DefaultPropsComponent
    },
    {
        path: '/component/fetch-public',
        text: 'Fetching JSON from public folder',
        component: FetchingJSONFromPublic
    },
    {
        path: '/component/passing-params/:uid/:secondParam',
        to: '/component/passing-params/12345/someRandomString',
        text: 'Passing params from URL',
        component: PassingParamFromURL
    },
    {
        path: '/component/rest',
        text: 'Simple REST GET data',
        component: REST
    },
    // {
    //     path: '/component/rest-to-do',
    //     text: 'REST Todo list',
    //     component: RestToDoList
    // }.
    {
        path: '/component/firebase',
        text: 'Firebase Basics',
        component: FirebaseComponent
    },
    {
        path: '/component/firebase-to-do',
        text: 'Firebase To Do',
        component: FirebaseToDo
    },
    {
        path: '/component/firebase-login',
        text: 'Firebase Login',
        component: FirebaseLogin
    },
    {
        path: '/component/redux-to-do',
        text: 'Redux ToDo',
        component: ReduxToDo
    },
    {
        path: '/component/redux-simple-text',
        text: 'Redux Simple Text',
        component: ReduxSimpleText
    },
    {
        path: '/component/redux-rectangle',
        text: 'Redux Rectangle',
        component: ReduxRectangle
    }
    {
        path: '/component/redux-counter',
        text: 'Redux Counter',
        component: ReduxCounter // import counter
    },

]

export default routes