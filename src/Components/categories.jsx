import '../styles/Categories.css'

const Categories = () => {
    let categories = [
        {link:"All"},
        {link:"Sports"},
        {link:"Comedy"},
        {link:"Movies"},
        {link:"Vlogs"},
        {link:"Travel"},
        {link:"Food"},
        {link:"Bollywod"},
        {link:"Kids"},
        {link:"Fashion"}
    ]
    return (  
        <div className="categories">
            <ul>
                {categories.map((data)=>{
                    return(
                        <li><a href="####">{data.link}</a></li>
                    )
                })}
            </ul>
        </div>
    );
}
 
export default Categories;