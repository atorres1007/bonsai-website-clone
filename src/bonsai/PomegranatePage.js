import pomegranate from './Photos/dwarf-jade.jpg';

function PomegranatePage () {
    return (
        <div className="bonsai">
            <div className="image">
                <h1>Pomegranate</h1>
                <img src={pomegranate}/>
            </div>
            <div className="page-content">
                <ul>
                    <li><h3><span>Light: </span> Bright direct light</h3></li>
                    <hr/>
                    <li><h3><span>Water: </span> Water regularly</h3></li>
                    <hr/>
                    <li><h3><span>Color Varieties: </span> Glossy green leaves; 
                    may flower with orange-red blooms that produce edible fruit</h3></li>
                    <hr/>
                </ul>
                <div className='page'>
                The thick, knotted bark and striking, fruit-bearing flowers 
                of the pomegranate tree have made it a popular type of bonsai 
                tree. It is naturally gnarled, ancient appearance is perfect for 
                the bonsai aesthetic.
                Pomegranate bonsai trees can be grown outdoors year-round in 
                warm climates, or grown indoors for part of the year. They 
                should be protected from freezing temperatures and frost.  
                </div>

            </div>
        </div>
    );
}
export default PomegranatePage;