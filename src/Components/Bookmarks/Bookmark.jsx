
const Bookmark = ({bookmark}) => {
    const {recipe_name, preparing_time, calories} = bookmark
    return (
        <div>
             <div className="flex justify-center mb-3 items-center gap-10 bg-gray-300 w-[95%] p-3 rounded-xl mx-auto">
                <h1 className="w-[100px]">{recipe_name}</h1>
                <h2 className="w-[70px]">{preparing_time}</h2>
                <h3 className="w-[70px]">{calories}</h3>
                <button className="btn bg-green-500 rounded-3xl">Preparing</button>
            </div>
        </div>
    );
};

export default Bookmark;