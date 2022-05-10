import '../style/Card.css';

const CardTemplate = (props) => {

    return(
        <div className="card">
            <img className="gameCover" title={props.name} src={props.src}></img>
        </div>
    )
};


export default CardTemplate;