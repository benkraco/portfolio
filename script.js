const videoIds = [
    "d33C8IE7WnQ",
    "uiGIbdrQjbI",
    "_yhFsjwaUoA",
    "tDx89zhVi8E",
    "W3id8E34cRQ",
    "BY9jip11PiI",
    "Nq1WiiLZXLo",
    "cfpe1Azao7s",
    "nTZaHQgI7cI",
    "i5fcxccWHnE",
    "-0o5qttIhTE",
    "sAf78N6WTN0",
    "ip7UQk9XlHA",
    "IS_G2vaplkE",
    "Tyckqw3pqqk",
    "FgKtPooras4",
    "9nr1Ns9khYA",
    "RyC7mBibgao",
    "hpAsVl6bN14",
    "ZugDWKcf1Io",
    "SqABTxLCjuk",
    "KkU8dZDWC7A",
    "mNEmW3zOROw",
    "XpO_7_Xy0yQ",
    "wNxokrXRFuU",
    "hNOnJ-gqQUY",
    "ooMJcKCgLjg",
    "d8Pg9Js-vMw",
    "WM5u5HpiJ-g",
    "dzz-kNOs6X4",
    "OW5tKDVF1o8",
    "fyLtOfvDQ1M",
    "Ddkj55smuA4",
    "NlzlpLfB-jw",
    "uoFF_MqdV1I",
    "cDEIBfM09VQ"
]

const youtubePlayer = document.getElementById("youtubePlayer"); 

function randomVideo(){
    const index = Math.floor(Math.random() * videoIds.length)
    const randomVideoId = videoIds[index]

    youtubePlayer.src = `https://www.youtube.com/embed/${randomVideoId}`;
}

randomVideo();