// Static imports of the Den photos. Cut-outs are transparent WebPs (use with
// <CutoutImage>/<CutoutObject> or the `cutout` class); photos are opaque
// (use with <Polaroid> or object-cover).
import avatarPixel from '@/assets/images/avatar-pixel.jpg'
import cables from '@/assets/images/den/cables.webp'
import camera from '@/assets/images/den/camera.webp'
import coffee from '@/assets/images/den/coffee.webp'
import crayon from '@/assets/images/den/crayon.webp'
import desk from '@/assets/images/den/desk.webp'
import drone from '@/assets/images/den/drone.webp'
import filament from '@/assets/images/den/filament.webp'
import keyboard from '@/assets/images/den/keyboard.webp'
import laptop from '@/assets/images/den/laptop.webp'
import lighthouse from '@/assets/images/den/lighthouse.webp'
import plants from '@/assets/images/den/plants.webp'
import postcard from '@/assets/images/den/postcard.webp'
import printer from '@/assets/images/den/printer.webp'
import rcplane from '@/assets/images/den/rcplane.webp'
import shell from '@/assets/images/den/shell.webp'
import sketchbook from '@/assets/images/den/sketchbook.webp'
import succulent from '@/assets/images/den/succulent.webp'
import sunrise from '@/assets/images/den/sunrise.webp'

/** Transparent cut-outs of Andy's actual stuff. */
export const denCutouts = {
  keyboard,
  printer,
  rcplane,
  drone,
  succulent,
  laptop,
  postcard,
  camera,
  sketchbook,
  crayon,
  coffee,
  shell,
  filament,
}

/** Opaque photos (1400×933). */
export const denPhotos = {
  sunrise,
  lighthouse,
  desk,
  cables,
  plants,
}

/** 180×180 pixel-art avatar; render with `[image-rendering:pixelated]`. */
export { avatarPixel }
