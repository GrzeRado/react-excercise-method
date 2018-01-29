import React from 'react'
import SimpleComponent from './SimpleComponent'
import renderer from 'react-test-renderer'

test('LogIn from renders as expected', () =>{
    const treeOfLogInComponent = renderer
        .create(<SimpleComponent name="Grzegorz"/>)
        .toJSON(treeOfLogInComponent).toMatchSnapshot()
    expect(treeOfLogInComponent).toMatchSnapshot()
})