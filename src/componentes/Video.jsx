import React from "react";

function Video () {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl">Tutorial</h2>
            <div className="w-full h-auto flex items-center justify-center">
                <iframe 
                    src={`https://www.youtube.com/embed/yJIszNXLZRk`} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Video;
