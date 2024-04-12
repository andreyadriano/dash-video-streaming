let ffmpegStatic = require('ffmpeg-static')
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegStatic)

let inputPath = "video.mp4"
const outputPath = "public/output_dash/output.mpd"

const scaleOptions = [
    "scale=720:480"
]

const videoCodec = "libx264"
const x264Options = "keyint=24:min-keyint=24:no-scenecut"
const videoBitRates = ['500k', '1000k', '2000k', '4000k']

ffmpeg()
    .input(inputPath)
    .videoFilters(scaleOptions)
    .videoCodec(videoCodec)
    .addOption("-x264opts", x264Options)
    .outputOptions("-b:v", videoBitRates[0])
    .format('dash')
    .output(outputPath)
    .on('end', () => {
        console.log('DASH Encoding finished!')
    })
    .run()