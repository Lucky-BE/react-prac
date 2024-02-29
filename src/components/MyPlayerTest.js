import { BigPlayButton, Player } from 'video-react';

// const CustomBigPlayButton = styled(BigPlayButton)`
//   font-size: 3em;
//   line-height: 1.5em;
//   height: 1.5em;
//   width: 3em;
//   display: block;
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   padding: 0;
//   cursor: pointer;
//   opacity: 1;
//   border: 0.06666em solid #0061ff;
//   background-color: #0061ff;
//   background-color: #0061ff;
//   -webkit-border-radius: 0.3em;
//   -moz-border-radius: 0.3em;
//   border-radius: 0.3em;
//   -webkit-transition: all 0.4s;
//   -moz-transition: all 0.4s;
//   -o-transition: all 0.4s;
//   transition: all 0.4s;
//   top: 50%;
//   left: 50%;
//   margin-top: -0.75em;
//   margin-left: -1.5em;
// `;

const Video = (props) => {
  return (
    <>
      <div
        className="content-center-flex"
        style={
          {
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }
        }
      >
        <div
          style={{
            width: '70%',
          }}
        >
          <Player>
            <source src={process.env.PUBLIC_URL + '/video/pexels-ilia.mp4'} />
            <BigPlayButton position="center" />
          </Player>
        </div>
      </div>
    </>
  );
};

export default Video;
