# Introverted Bocchi

Flag: `kossCTF{yellow_dorito_girl}`

Description:
> Bocchi-chan is very introverted. She keeps everything INSIDE of herself. Help her open up.
> 
> Use the password `nijika` if required

Author: `subzcuber`

---

You are given the image `btr.jpg`

![](./btr.jpg)

This was an example on using `binwalk`. 

You can install `binwalk` on Arch Linux with 

```sh
yay -S binwalk
```

if you run `binwalk` on the file it will detect a zip file. Which you can extract with the following binwalk flags.

```sh
binwalk -ave btr.jpg
```

`binwalk` will wait for input which is when you input the password `nijika` (the zip is password protected)

This will give you a `README.md` file which contains the flag. (binwalk unarchives the zip on its own)
