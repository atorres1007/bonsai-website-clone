import dwarfJade from './Photos/dwarf-jade.jpg';

function DwarfJadePage () {
    return (
        <div className="bonsai">
            <div className="image">
                <h1>Dwarf Jade</h1>
                <img src={dwarfJade}/>
            </div>
            <div className="page-content">
                <ul>
                    <li><h3><span>Light: </span> Direct light</h3></li>
                    <hr/>
                    <li><h3><span>Water: </span> Water sparsely</h3></li>
                    <hr/>
                    <li><h3><span>Color Varieties: </span> Dark green 
                    succulent leaves, light brown branches</h3></li>
                    <hr/>
                </ul>
                <div className='page'>
                Dwarf jade plant is a softwooded semi-evergreen shrubs 
                that makes an excellent bonsai tree for beginners. Dwarf 
                jades look very similar to the more common jade variety 
                (Crassula ovata), however, the smaller foliage of the dwarf 
                jade makes it the preferable choice for bonsai growing.
                Dwarf jade bonsai trees grow well indoors but need direct 
                sunlight for most of the day. They can also be successfully 
                grown outside but cannot tolerate freezing temperatures.
                </div>

            </div>
        </div>
    );
}
export default DwarfJadePage;