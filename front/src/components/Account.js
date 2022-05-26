import React, { useState } from "react";
import { Table, Button, Input} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import {toastSucess} from './Toaster'
import {loginAction} from '../actions/loginAction'
import RecipeItem from "./RecipeItem";

function Account(){
    let status = useSelector(state => state)
    const dispatch = useDispatch()

    const [newRecipe, setNewRecipe] = useState(0)
    const [loading, setLoading] = useState(false)
    const [coffee, setCoffee] = useState('')
    const [water, setWater] = useState('')
    const [ratio, setRatio] = useState('')
    const [name, setName] = useState('')

    function showRecipeInput(){
        setNewRecipe(1)
    }

    async function addRecipe(){
        let recipes = [...status.recipes, {coffee, water, ratio, name, recipeID: Math.round(Math.random() * 1000)}]
        let body = {username: status.username, recipes: JSON.stringify(recipes)}

        const config = {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(body)
          }

        setLoading(true)
        let response = await fetch('/api/updateRecipe', config)
        let data = await response.json()
        setLoading(false)
        toastSucess('You added a new recipe!')
        data.login = 1
        data.recipes = JSON.parse(data.recipes)


        dispatch(loginAction(data))

        setNewRecipe(0)
        setCoffee('')
        setWater('')
        setRatio('')
        setName('')
    }

    function handleLogout(){
        toastSucess('You are now logged out')
        dispatch(loginAction({login: 0}))
    }

    function handleCoffee(e){
        setCoffee(e.target.value)
    }

    function handleWater(e){
        setWater(e.target.value)
    }

    function handleRatio(e){
        setRatio(e.target.value)
    }

    function handleName(e){
        setName(e.target.value)
    }

   

    return(
        <div>
            <div className={`calcDiv ${newRecipe === 0? '' : 'hide'} ${status.login === 0 ? 'hide' : ''}`} >
                <Button onClick={showRecipeInput} className='loginBtn' primary>New Recipe</Button>
            </div>

            <div className={`calcDiv ${newRecipe  === 0 ? 'hide' : ''}`} >
                <div className="inputBox">
                    <span className="strongWord">Recipe Name</span>
                    <Input onChange={handleName} value={name} type="text" className="inputStyle" placeholder='name'/>
                </div>

                <div className="inputBox">
                    <span className="strongWord">Coffee Grams</span>
                    <Input onChange={handleCoffee} value={coffee} type="text" className="inputStyle" placeholder='grams'/>
                </div>

                <div className="inputBox">
                    <span className="strongWord">Water ml</span>
                    <Input onChange={handleWater} value={water} type="text" className="inputStyle" placeholder='ml'/>
                </div>

                <div className="inputBox">
                    <span className="strongWord">Ratio</span>
                    <Input onChange={handleRatio} value={ratio} type="text" className="inputStyle" placeholder='ratio'/>
                </div>

                <Button loading={loading} className='loginBtn' onClick={addRecipe} primary>Add Recipe</Button>
            </div>
            
            <div className={`accountDiv ${status.login === 0 ? 'hide' : ''}`} >
                <h3 className='text-white'>My recipes</h3>

                <Table celled inverted selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Coffee</Table.HeaderCell>
                            <Table.HeaderCell>Water</Table.HeaderCell>
                            <Table.HeaderCell>Ratio</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {status.recipes.map(recipe=>{ 
                            return <RecipeItem recipe={recipe}></RecipeItem> 
                        })}
                    </Table.Body>
                </Table>

                <Button className='loginBtn' onClick={handleLogout} primary>Logout</Button>
            </div>
        </div>
    )
}

export default Account