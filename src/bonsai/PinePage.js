import pine from './Photos/black-pine.jpg';

function PinePage () {
    return (
        <div className="bonsai">
            <div className="image">
                <h1>Pine</h1>
                <img src={pine}/>
            </div>
            <div className="page-content">
                <ul>
                    <li><h3><span>Light: </span> Full sun</h3></li>
                    <hr/>
                    <li><h3><span>Water: </span> Water when the soil looks dry</h3></li>
                    <hr/>
                    <li><h3><span>Color Varieties: </span> Needles range from light green
                    to bluish green to dark green (depends on species)</h3></li>
                    <hr/>
                </ul>
                <div className='page'>
                Pine trees are popular as bonsai because they are hardy and trainable. 
                In fact, pine trees can be shaped into almost every known bonsai style. 
                Pine trees are characterized by needles that appear in bundles of two to 
                five, and bark that becomes scaly or flaky as it ages. Species that are 
                particularly good for bonsai include Pinus thunbergii (Japanese black pine),
                P. mugo (mountain pine), P. sylvestris (Scots pine), and P. parviflora 
                (Japanese white pine).
                </div>

            </div>
        </div>
    );
}
export default PinePage;