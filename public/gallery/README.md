# Gallery Folder

Add your photos to this folder to display them in the hidden desktop gallery.

## How to add photos:

1. Place your image files (jpg, png, gif, etc.) in this folder
2. Update the `photos` array in `src/routes/hidden.jsx` to include your image paths
3. Use paths relative to the public folder, like: `/gallery/your-photo.jpg`

## Example:

If you add a file called `vacation.jpg` to this folder, add it to the photos array like this:

```javascript
const photos = [
  "/gallery/vacation.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
];
```

The gallery will automatically handle navigation between photos and show a placeholder if images can't be loaded.
