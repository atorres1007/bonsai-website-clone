import weepingFig from './Photos/weeping-fig.jpg';

function WeepingFigPage () {
    return (
        <div className="bonsai">
            <div className="image">
                <h1>Weeping Fig</h1>
                <img src={weepingFig}/>
            </div>
            <div className="page-content">
                <ul>
                    <li><h3><span>Light: </span> Part sun</h3></li>
                    <hr/>
                    <li><h3><span>Water: </span> Water frequently</h3></li>
                    <hr/>
                    <li><h3><span>Color Varieties: </span> Glossy green leaves 
                    and light-brown bark</h3></li>
                    <hr/>
                </ul>
                <div className='page'>
                The beautiful, umbrella-like canopy of the weeping fig makes it 
                a popular choice for bonsai. Its twisted surface roots are another 
                alluring feature that lends well to bonsai styling. 
                Besides its appearance, Ficus benjamina is a hardy, resilient tree 
                making it perfect for bonsai training. It adapts well to growing 
                indoors and is often grown as a houseplant year-round.
                </div>

            </div>
        </div>
    );
}
export default WeepingFigPage;