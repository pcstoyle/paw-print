function Card ( {id, title, imgsrc} ) {
    return (
        <div className="card" style={{ border: '1px solid white', width: '18rem' }}>
            <h3> {title} </h3>
            <img src={imgsrc} alt={title} style = {{ width:'100%'}}/>
        </div>
    )
};

export default Card;