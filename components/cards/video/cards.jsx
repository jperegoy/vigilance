import { useState } from "react";
import PropTypes from "prop-types";

const playVideo = () => {
  alert("load and playVideo");
};

const VideoCard = ({ videoID, isSubscriber }) => {
  return (
    <article className="video-card" onClick={() => { isSubscriber ? playVideo : null }}>
      <div className="relative">
        <img src="https://via.placeholder.com/300x180/bada55" alt="video title" />
        { !isSubscriber && <div className="lockmark">locked</div> }
        <p className="time">10:21</p>
      </div>
      <div>
        <h3>This is the video title</h3>
        <p>here's a little description about the video</p>
      </div>

      <style jsx>{`
        .video-card {
          max-width: 300px;
        }
        .relative { position: relative }
        .lockmark {
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(0,0,0,.5);
          padding: 6px;
          color: white;
          font-weight: bold;
        }
        .time {
          position: absolute;
          bottom: 0;
          right: 0;
          margin: 0;
          background-color: rgba(0,0,0,.5);
          padding: 6px;
          color: white;
          font-weight: bold;
        }
      `}</style>
    </article>
  )
};

VideoCard.propTypes = {

};

VideoCard.defaultProps = {

}

export default VideoCard;
