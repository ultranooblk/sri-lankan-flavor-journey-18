
# Image Assets Directory

This directory is organized to store local images for the Sri Lankan recipes website.

## Directory Structure

- `/recipes`: Individual recipe images
- `/banners`: Banner images for hero sections and page headers
- `/icons`: Icons and small UI elements
- `/backgrounds`: Background patterns and textures

## Image Guidelines

1. **Recipe Images**
   - Recommended size: 1200 x 800 pixels
   - Format: WebP (preferred) or JPEG
   - Quality: 85%

2. **Banner Images**
   - Recommended size: 1920 x 1080 pixels
   - Format: WebP or JPEG
   - Quality: 85-90%

3. **Icons**
   - Recommended format: SVG (preferred) or PNG with transparency
   - Size: Keep under 50KB when possible

## Using Local Images

When adding new images:
1. Place the image in the appropriate folder
2. Update the reference in `src/assets/index.ts`
3. Use the imported constants when referencing images in components

Example:
```tsx
import { IMAGE_PATHS } from '@/assets';

// Then in your component
<img src={IMAGE_PATHS.recipes.riceCurry} alt="Rice Curry" />
```
