import ginsengFicus from './Photos/ginseng-ficus.jpg';

function GinsengFicusPage () {
    return (
        <div className="bonsai">
            <div className="image">
                <h1>Ginseng Ficus</h1>
                <img src={ginsengFicus}/>
            </div>
            <div className="page-content">
                <ul>
                    <li><h3><span>Light: </span> Bright indirect light</h3></li>
                    <hr/>
                    <li><h3><span>Water: </span> Keep soil moist</h3></li>
                    <hr/>
                    <li><h3><span>Color Varieties: </span> Glassy green foliage 
                    and light brown bark</h3></li>
                    <hr/>
                </ul>
                <div className='page'>
                Ginseng ficus is considered to be an excellent species for beginner 
                bonsai enthusiasts because it is a very hardy and forgiving tree. 
                These broadleaf evergreen trees are characterized by unique-looking 
                aerial roots and oval-shaped dark green leaves. 
                Ginseng ficus makes a low-maintenance bonsai tree, and it doesn't 
                require as much light as other popular bonsai varieties. It grows 
                well indoors as a houseplant since it thrives in warm climates and 
                bright, indirect light.
                </div>

            </div>
        </div>
    );
}
export default GinsengFicusPage;