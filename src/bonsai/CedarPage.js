import cedar from './Photos/cedar.jpg';

function CedarPage () {
    return (
        <div className="bonsai">
            <div className="image">
                <h1>Cedar</h1>
                <img src={cedar}/>
            </div>
            <div className="page-content">
                <ul>
                    <li><h3><span>Light: </span> Direct sun</h3></li>
                    <hr/>
                    <li><h3><span>Water: </span> Allow the soil to partially dry between waterings.</h3></li>
                    <hr/>
                    <li><h3><span>Color Varieties: </span> Dark green needles</h3></li>
                    <hr/>
                </ul>
                <div className='page'>
                The rough, ragged bark of cedar trees has made them a popular choice 
                among bonsai enthusiasts. Cedar trees are evergreen conifers that grow 
                short needle clusters along their branches, providing an opportunity for 
                very dramatic bonsai styles. Impressive drama aside, cedars are not ideal 
                for beginners. They require specialized care and expertise to grow properly 
                as a bonsai and are best-suited for experienced growers.
                There are four cedar species frequently grown as bonsai: cedar of Lebanon 
                (Cedrus libania), Cyprus cedar (Cedrus brevifolia), Himalayan cedar (Cedrus 
                deodara), and Atlas cedar (Cedrus atlantica).
                </div>

            </div>
        </div>
    );
}export default CedarPage;