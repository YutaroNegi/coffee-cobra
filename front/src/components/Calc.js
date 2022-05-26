import React, {useEffect, useState } from "react";
import { Input } from 'semantic-ui-react'

function Calc(props){
    const [firstItem, setFirstItem] = useState(0)
    const [secondItem, setSecondItem] = useState(0)
    const [coffee, setCofee] = useState(0)

    function handleFirstItem (e) {
        setFirstItem(e.target.value)
    }

    function handleSecondItem(e){
        setSecondItem(e.target.value)
    }
    
    useEffect(()=>{
        let result
        let type
        if(props.desiredResult === 'Coffee'){
            result = firstItem / secondItem
            type = ' g of'
        }

        if(props.desiredResult === 'Ratio'){
            result = secondItem / firstItem
            type = ''
        }

        if(props.desiredResult === 'Water'){
            result = firstItem * secondItem
            type = ' ml of'
        }

        if(!isFinite(result) || isNaN(result) ){
            result = '...'
        }else{
           result = Math.round(result) + type
        }

        setCofee(result)
    }, [firstItem, secondItem, props.desiredResult])


    return(
        <div className={`calcDiv`}>
            <h2 className="calcTitle">Calculatating <span className="strongWord">{props.desiredResult}</span>...</h2>

                <div className="inputBox">
                    <span>How much <span className="strongWord">{props.firstItem}</span> you have?</span>
                    <Input onChange={handleFirstItem} type="number" className="inputStyle" placeholder='Water'/>
                </div>

                <div className="inputBox">
                    <span>What is your <span className="strongWord">{props.secondItem}</span>?</span>
                    <Input onChange={handleSecondItem} type="number" className="inputStyle" placeholder='Ratio'/>
                </div>

             <span className="resultTxt">You will need <span className="strongWord">{coffee}</span> {props.desiredResult}!</span>
        </div>
    )
}

export default Calc