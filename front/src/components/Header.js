import React from "react"
import '../App.css';
import { Link } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import { useSelector } from "react-redux";

function Header(){
    const status = useSelector(state => state)

    const options = [
        { key: 1, text: 'Home', value: 1 , as: Link, to: '/home', className: 'calcMenuMobile' },
        { key: 2, text: 'Coffee', value: 2 , as: Link, to: '/coffee', className: 'calcMenuMobile'  },
        { key: 3, text: 'Water', value: 3 , as: Link, to: '/water', className: 'calcMenuMobile'  },
        { key: 4, text: 'Ratio', value: 4 , as: Link, to: '/ratio', className: 'calcMenuMobile'  },
      ]

    return(
        <header className="mainHeader">
            <h2 id="mainTitle">Coffee Cobra</h2>

            <div className="calcMenu">
                <Link className="textWhite" to="/home"><span className="calcItem" id="menu">Home</span></Link>
                <Link className="textWhite" to="/login"><span className="calcItem" id="menu">{status.login === 1? 'Account' : 'Login'}</span></Link>
                <Link className="textWhite" to="/coffee"><span className="calcItem" id="coffee">Coffee</span></Link>
                <Link className="textWhite" to="/water"><span className="calcItem" id="water">Water</span></Link>
                <Link className="textWhite" to="/ratio"><span className="calcItem" id="ratio">Ratio</span></Link>
            </div>

            <Dropdown
                className="options calcMenuMobile"
                placeholder='Home'
                compact
                selection
                options={options}
            />
        </header>
    )
}

export default Header