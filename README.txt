Drop your image files in this folder using these exact names and they'll appear
automatically on the site (no code editing needed):

  portrait.jpg                          - Home page hero photo
  ndot-01.jpg .. ndot-03.jpg             - NDOT project cards (ndot-03 = Protective Tortoise Fencing & Drainage Systems)
  research-01.jpg, research-02.jpg       - Formal Research cards
  bu-01.jpg .. bu-05.jpg                 - Boston University cards (bu-05 = Central American water project)
  ata-01.jpg .. ata-04.jpg               - ATA cards
  hobby-01.jpg .. hobby-03.jpg           - "Outside Hobbies" cards (home page)
  volunteer-01.jpg                       - Volunteering: Nevada Boys State
  volunteer-02.jpg                       - Volunteering: Critical Care Comics
  contact.jpg                            - Contact page photo (optional)

Any slot with no matching image just shows a small dashed placeholder box
instead of a broken image icon -- so it's safe to leave images out until
you have them. These same images automatically show up on each project's
detail page too (project.html), since it pulls from the same file.

The front page (index.html) is fully drawn in code (SVG + CSS) -- it does
not need any image files.

Recommended: keep images under ~500KB each (resize/compress before adding)
so the site stays fast to load.

-------------------------------------------------------------------
PROJECT PHOTOS, GALLERIES AND VIDEOS
-------------------------------------------------------------------
Each project has a thumbnail plus an optional gallery of extra photos
and videos shown on its project page.

  bu-04                         thumbnail (card + main photo)
  bu-04_Caption Text            thumbnail with a caption under it
  bu-04-2_CAD Model of Nozzle   gallery item #2 (photo or video)
  bu-04-3_Static Fire Test      gallery item #3 ...

- The number after the project code sets the gallery order.
- Card codes also work: B-03_NewPhoto1_Caption.png is added to the end
  of B-03's gallery (NewPhoto1, NewPhoto2, ... keep their order).
- Text after the underscore becomes the caption.
- Photos: JPG, PNG or HEIC. Videos: MP4 or MOV (short clips; the
  GitHub website caps uploads at 25 MB each).
- Upload to the claude/busy-babbage-8xe2nq branch. Uploads are
  resized/compressed, location data is stripped, and videos are
  converted to web MP4 with a preview frame before going live.
- Processed files live in images/ (thumbnails) and images/gallery/.

