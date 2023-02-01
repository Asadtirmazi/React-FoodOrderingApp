import React, {Fragment} from 'react'
import mealsimg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCardButton from './HeaderCardButton'

const Header = props => {
    return <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCardButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img  src={mealsimg} alt="table full of food"/>
            </div>
    </Fragment>
}

export default Header