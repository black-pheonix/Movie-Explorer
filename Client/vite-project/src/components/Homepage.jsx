import React from 'react';
import TopRatedMovies from './user/TopRatedMovies';


const HomePage = () => {
	return (
    <div className="dark:bg-primary bg-white min-h-screen ">
       <div className={"max-w-screen-xl mx-auto px-2 xl:p-0" }> 
        <div className="space-y-3 py-8">
          <TopRatedMovies />
        </div>
       </div>
    </div>
  );
};

export default HomePage;
