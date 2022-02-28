import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">some link1</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">some link2</Link>
                    </li>
                    <li>
                        <Link to="/favorites">some link3</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
