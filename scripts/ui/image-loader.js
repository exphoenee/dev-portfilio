/* ============================================================
   IMAGE LOADERS

   While an <img> is still fetching, its slot shows a loading
   indicator so a slow connection (DevTools 3G) reads as "working"
   instead of showing empty holes: the robot loader on the project
   card thumbnails, a compact ring on the small icons (tech tags,
   skill chips, contact icons). The lightbox has its own static
   loader driven by the is-loading state in scripts/modals/image.js,
   so it is deliberately not wired here.

   installImageLoaders() – once. load/error do not bubble, so the
     document-level capture listeners catch them anyway, and a
     re-render (filter, language switch) that swaps <img> nodes
     keeps settling every frame with zero per-image wiring.
   wireImageLoaders()    – after a section renders. Injects the
     loader markup into each unwired image slot and settles images
     the browser already had complete (memory / HTTP cache).
   ============================================================ */

import { $$ } from '../dom.js';

/* Frames big enough for the pan & egg; everything else gets the ring.
   The lightbox is excluded on purpose, it has its own loader. */
const FRAME_SELECTOR = '.card-media-btn, .tech-tag, .chip, .contact-icon';

const LOADERS = {
  big: '<span class="loader" aria-hidden="true"></span>',
  small: '<span class="mini-loader" aria-hidden="true"></span>'
};

function frameOf(img) {
  return img.closest(FRAME_SELECTOR);
}

/* .is-loaded is the single state the CSS keys on: it hides the loader
   and fades the image in. A broken image settles too, so the loader
   never spins forever; the browser renders its fallback instead. */
function settle(img) {
  const frame = frameOf(img);
  if (frame) frame.classList.add('is-loaded');
}

export function installImageLoaders() {
  // Capture phase: load/error don't bubble, but both pass through the
  // capture chain from document down to the target element.
  document.addEventListener('load', (e) => {
    if (e.target instanceof HTMLImageElement) settle(e.target);
  }, true);
  document.addEventListener('error', (e) => {
    if (e.target instanceof HTMLImageElement) settle(e.target);
  }, true);
}

/* Inject a loader into every unwired image slot within scope and
   settle images that were already complete (cached on this visit). */
export function wireImageLoaders(scope = document) {
  $$('img', scope).forEach((img) => {
    if (img.dataset.imgLoader) return;
    img.dataset.imgLoader = '1';
    const frame = frameOf(img);
    if (!frame) return;
    frame.classList.add('img-frame');
    const loader = document.createElement('span');
    loader.className = 'img-loader';
    loader.setAttribute('aria-hidden', 'true');
    loader.innerHTML = frame.matches('.card-media-btn') ? LOADERS.big : LOADERS.small;
    frame.insertBefore(loader, img);
    if (img.complete && img.naturalWidth > 0) settle(img);
  });
}
