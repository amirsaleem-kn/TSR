// Converting a tuple into a Typescript union
// Note: as const, this forces this tuple to be readonly
const media = ["image", "audio", "video", "document"] as const;

// We can derive a Typescript Union type from the Tuple values
// the typeof T Syntax is used to derive types from the values
type Media = typeof media[number]; // "image" | "audio" | "video" | "document"

function handleMedia(m: Media) {
    console.log(m);
}
