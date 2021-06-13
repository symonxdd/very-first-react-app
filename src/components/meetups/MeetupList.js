import classes from './MeetupList.module.css';
import MeetupItem from './MeeupItem';

function MeetupList(params) {
    return (
        <ul className={classes.list}>
            {params.meetups.map(meetup => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                />
            ))}
        </ul>
    );
}

export default MeetupList;