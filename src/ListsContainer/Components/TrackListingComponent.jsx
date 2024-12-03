import React from "react";
import SongInfoComponent from "../../SongInfoComponent";

function TrackListingComponent({ dummyData, handleAddSong }) {
  // Stores the rendered li items from SongInfoComponent in songList
  const songList = dummyData.map((song) => (
    // Passes the relevant data to SongInfoComponent from the Array of objects.
    <SongInfoComponent
      key={crypto.randomUUID()} // Unique ID generation, built in JS method.
      songId={song.id}
      firstName={song.firstName}
      lastName={song.lastName}
      gender={song.gender}
      handleAddSong={handleAddSong}
    />
  ));
  return (
    <div className="relative flex h-auto grow">
      <h1 className="absolute -top-20 mb-3 text-6xl text-slate-100">Songs</h1>
      <div className="scrollbar-hide h-4/5 flex-grow overflow-y-scroll">
        <ul className="">
          {/* uses a plugin https://www.npmjs.com/package/tailwind-scrollbar-hide */}
          {songList}
        </ul>
      </div>
    </div>
  );
}

export default TrackListingComponent;
