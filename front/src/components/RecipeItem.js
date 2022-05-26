import React, { useState } from "react";
import { Table, Icon } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { toastSucess } from './Toaster'
import { loginAction } from '../actions/loginAction'

function RecipeItem(props) {
    let status = useSelector(state => state)
    const dispatch = useDispatch()

    const [hideLoad, setHideLoad] = useState('hide')
    const [hideTrash, setHideTrash] = useState('')

    async function handleDeleteClick(id) {
        let recipes = status.recipes.filter(item => item.recipeID !== id)
        let body = { username: status.username, recipes: JSON.stringify(recipes) }

        const config = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(body)
        }

        setHideTrash('hide')
        setHideLoad('')
        await fetch('/api/updateRecipe', config)
        toastSucess('You deleted a recipe!')
        setHideTrash('')
        setHideLoad('hide')

        let obj = {
            username: status.username,
            login: 1,
            recipes: recipes
        }

        dispatch(loginAction(obj))
    }

    return (
        <Table.Row>
            <Table.Cell>{props.recipe.name}</Table.Cell>
            <Table.Cell>{props.recipe.coffee}</Table.Cell>
            <Table.Cell>{props.recipe.water}</Table.Cell>
            <Table.Cell>{props.recipe.ratio}</Table.Cell>
            <Table.Cell className="hoverPointer" onClick={() => { handleDeleteClick(props.recipe.recipeID) }}> <Icon className={`${hideTrash}`} name='trash' /> <Icon className={`${hideLoad}`} loading name='spinner' /></Table.Cell>
        </Table.Row>
    )
}

export default RecipeItem