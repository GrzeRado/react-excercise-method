import React from 'react'
import {database} from './firebase'

class FirebaseComponent extends React.Component{
    componentWillMount(){
        const listDbRef = database.ref('/JFDDL3/restToDo/grzegorz/list')

        listDbRef.set({name: 'Grzegorz'}) // equivalent of PUT
            then.(() => console.log('Zapisano dane!'))
    }



    render(){
        return (
            <div>Firebase</div>
        )
    }
}

export default FirebaseComponent