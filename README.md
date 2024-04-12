# Simple DASH example

This is a simple example of how to stream a video using DASH (Dynamic Adaptative Streaming over HTTP) with the help of the `dash.js` library.

## How to run

First install the dependencies (`dash.js`, `express`, `ffmpeg-static` and `fluent-ffmpeg`):

```
npm install
```

Then, run the file `app.js` to create the output.mpd file:

```
node app.js
```

Finally, run the server:

```
node index.js
```

Open your browser and go to `http://localhost:3000/` to see the video being streamed.