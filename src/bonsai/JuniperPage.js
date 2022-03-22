import juniper from './Photos/Juniper.jpg';

function JuniperPage () {
    return (
        <div className="bonsai">
            <div className="image">
                <h1>Juniper</h1>
                <img src={juniper}/>
            </div>
            <div className="page-content">
                <ul>
                    <li><h3><span>Light: </span> Bright, sunny light</h3></li>
                    <hr/>
                    <li><h3><span>Water: </span> Allow soil to dry slightly before watering</h3></li>
                    <hr/>
                    <li><h3><span>Color Varieties: </span> Needles can be yellow, pale green, 
                    or dark green (depends on species)</h3></li>
                    <hr/>
                </ul>
                <div className='page'>
                Juniperus is a large genus of over 50 evergreen coniferous trees 
                and shrubs that are popular as bonsai trees. All species of juniper can
                be successfully grown as bonsai. Junipers are popular as bonsai for two 
                main reasons. First, the small foliage fits nicely with the miniature 
                aesthetic of bonsai; and second, junipers are hardy trees that can with
                stand aggressive pruning. Juniper bonsai trees do not do well when grown 
                indoors, and it is essential that they be planted in a dry soil.
                </div>

            </div>
        </div>
    );
}export default JuniperPage;