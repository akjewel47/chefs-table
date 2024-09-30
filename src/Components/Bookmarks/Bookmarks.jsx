import Bookmark from "./Bookmark";


const Bookmarks = ({ bookmarks }) => {
    console.log(bookmarks)
    return (
        <div className="w-[50%]  border-2 rounded-xl border-gray-200">
            <h1 className="text-center m-6 text-2xl font-bold">Want to cook:<span>{bookmarks.length}</span></h1>
            <hr />
            <div className="text-center flex items-center ml-10 gap-20">
                <h1>Name</h1>
                <h2>Time</h2>
                <h3>Calories</h3>
            </div>
            <div>
{
    bookmarks.map((bookmark, idx) =><Bookmark
    key={idx}
    bookmark={bookmark}></Bookmark>)
}
            </div>

            {/* bottom side */}
            <h1 className="text-center m-6 text-2xl font-bold">Currently cooking: 0<span>1</span></h1>
            <hr />
            <div className="flex items-center ml-10 gap-20">
                <h1>Name</h1>
                <h2>Time</h2>
                <h3>Calories</h3>
            </div>
            <div className="flex justify-center items-center gap-10 bg-gray-300 w-[95%] p-3 rounded-xl mx-auto">
                <h1 className="w-[100px]">Chicken Caesar Salad</h1>
                <h2 className="w-[70px]">20 minutes</h2>
                <h3 className="w-[70px]">400 calories</h3>
                <button className="btn bg-green-500 rounded-3xl">Preparing</button>
            </div>
        </div>
    );
};

export default Bookmarks;