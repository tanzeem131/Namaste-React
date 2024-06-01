const Shimmer = () => {
    return (
    <div className="flex flex-col p-4 m-4 animate-pulse">
        <div className="flex justify-center p-2 m-2 bg-gray-400 w-96 h-16 mx-auto"></div>
        <div className="flex flex-wrap p-2 m-2 gap-8">
            <div className="bg-gray-400 w-64 h-80"></div>
            <div className="bg-gray-400 w-64 h-80"></div>
            <div className="bg-gray-400 w-64 h-80"></div>
            <div className="bg-gray-400 w-64 h-80"></div>
            <div className="bg-gray-400 w-64 h-80"></div>
            <div className="bg-gray-400 w-64 h-80"></div>
            <div className="bg-gray-400 w-64 h-80"></div>
            <div className="bg-gray-400 w-64 h-80"></div>
            <div className="bg-gray-400 w-64 h-80"></div>
        </div>
    </div>
    );
};

export default Shimmer;