import maple from './Photos/maple.jpg';

function JapaneseMaplePage () {
    return (
        <div className="bonsai">
            <div className="image">
                <h1>Japanese Maple</h1>
                <img src={maple}/>
            </div>
            <div className="page-content">
                <ul>
                    <li><h3><span>Light: </span> Sunny, partial sun</h3></li>
                    <hr/>
                    <li><h3><span>Water: </span> Requires frequent watering (daily or more)</h3></li>
                    <hr/>
                    <li><h3><span>Color Varieties: </span>Some varieties have red or yellow leaves 
                    from spring to fall, while others are reddish in spring, turn green in summer, 
                    then transform into brilliant reds, yellows, or oranges in fall.</h3></li>
                    <hr/>
                </ul>
                <div className='page'>
                Japanese maples are deciduous hardwood trees famous for red-burgundy or 
                green leaves that turn bright red, orange, or yellow in fall. The bark of 
                young Japanese maples is typically green or reddish, turning grey or 
                grayish-brown as it ages. 

                A warning to those bonsai enthusiasts who do not have a lot of time to 
                dedicate to the craft—Japanese maples require a lot of water, especially
                 during the growing season. Depending on the temperature, they may 
                require daily watering, possibly even several times daily.
                </div>

            </div>
        </div>
    );
}export default JapaneseMaplePage;