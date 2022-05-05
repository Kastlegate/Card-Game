import '../style/Card.css';

const Card = (props) => {
    return(
        <div className="card" id={props.id}>
            <img className="gameCover" title={props.name} src={props.src}></img>
        </div>
    )
};


export default Card;