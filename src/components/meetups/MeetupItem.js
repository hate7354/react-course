import { Link } from 'react-router-dom';
import Card from '../card/Card';
import classes from './MeetupItem.module.css';

const MeepupItem = (props) => {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <Link to="/favorites">
                        <button>To Favorites</button>
                    </Link>
                    <button>Delete</button>
                </div>
            </Card>
        </li>
    );
};

export default MeepupItem;
