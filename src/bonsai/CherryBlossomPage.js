import cherryBlossom from './Photos/cherry-blossom.jpg';

function CherryBlossomPage () {
    return (
        <div className="bonsai">
            <div className="image">
                <h1>Cherry Blossom</h1>
                <img src={cherryBlossom}/>
            </div>
            <div className="page-content">
                <ul>
                    <li><h3><span>Light: </span> Full sun</h3></li>
                    <hr/>
                    <li><h3><span>Water: </span> Keep the soil consistently moist.</h3></li>
                    <hr/>
                    <li><h3><span>Color Varieties: </span> Foliage is green or bronze; 
                    flowers can be various shades of white or pink.</h3></li>
                    <hr/>
                </ul>
                <div className='page'>
                Cherry trees are traditionally believed to signify friendship, and varieties 
                such as Japanese flowering cherry also make beautiful bonsai trees. These 
                ornamental, deciduous trees are not only gorgeous, but they are easy to train 
                because their branches and trunks are pliable and easy to shape. 
                While bonsai cherry trees can be grown indoors, they may suffer from lack of 
                light and grow best when grown outdoors in the summer months.
                </div>

            </div>
        </div>
    );
}export default CherryBlossomPage;