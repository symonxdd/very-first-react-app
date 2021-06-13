import classes from './MeetupItem.module.css';

function MeetupItem(params) {
    return (
        <li className={classes.item}>
            <div className={classes.item}>
                <img src={params.image} alt={params.title} />
            </div>
            <div className={classes.item}>
                <h3>{params.title}</h3>
                <address>{params.address}</address>
                <p>{params.description}</p>
            </div>
            <div className={classes.item}>
                <button>To Favorites</button>
            </div>
        </li>
    );
}

export default MeetupItem;