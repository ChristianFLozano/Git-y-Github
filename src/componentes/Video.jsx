import React from "react";

function Video () {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-5xl font-semibold">Tutorial</h2>
            <div className="w-full h-auto flex items-center justify-center">
                <iframe 
                    src={`https://www.youtube.com/embed/yJIszNXLZRk`} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className=" 2xl:w-2/5 w-4/5 sm:h-[25rem] h-[12rem]"
                ></iframe>
            </div>
        </div>
    );
}

export default Video;
