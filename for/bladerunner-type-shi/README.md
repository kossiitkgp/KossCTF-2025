# Bladerunner Type Shi-

Flag: `kossCTF{i_i_love_sushi}`

Author: `subzcuber`

Description:
> I found this `bladerunner.exe` in PDS Lab but sadly it doesn't run
> 
> I don't think I should trust random files in PDS Lab :(

---

The hint was in the title. "Type". This is also directly given in the slides.

Basically `bladerunner.exe` is not an `.exe` it's an image with the wrong file extension.

You can confirm this by running `file`

```sh
❯ file bladerunner.exe 
bladerunner.exe: JPEG image data, JFIF standard 1.01, resolution (DPI), density 72x72, segment length 16, Exif Standard: [TIFF image data, little-endian, direntries=7, orientation=upper-left, xresolution=98, yresolution=106, resolutionunit=2, software=GIMP 2.10.38, datetime=2025:02:01 01:19:29], progressive, precision 8, 651x738, components 3
```

Simply rename the file to `bladerunner.png` and open it with any image viewer.

![](./bladerunner.exe)

Bonus points to anyone who got the K-On reference.
