# Size Matters

Flag: `kossCTF{reverse_the_world}`

Author: `premagarwals`

Description:

> Another program, but Leo cracked it. 
> He finds it funny after finding out that the program can be cracked,
>  via multiple inputs and ways!!
> unraveling layers of code to uncover what his father was hiding.

Go to the [dogbolt.org](https://dogbolt.org), then upload `kossrev4` there.
try out any decompiler that's giving easier output.
I can see the following in output code from `Binary Ninja`:

```c
void var_78;
    __isoc99_scanf("%s", &var_78);
    
    if (strlen(&var_78) != 0xd)
        puts("better luck next time, loser!");
    else
    {
        printf("You are a hacker. take this: ");
        putchar(0x6b);
        putchar(0x6f);
        putchar(0x73);
        putchar(0x73);
        putchar(0x43);
        putchar(0x54);
        putchar(0x46);
        putchar(0x7b);
        putchar(0x72);
        putchar(0x65);
        putchar(0x76);
        putchar(0x65);
        putchar(0x72);
        putchar(0x73);
        putchar(0x65);
        putchar(0x5f);
        putchar(0x74);
        putchar(0x68);
        putchar(0x65);
        putchar(0x5f);
        putchar(0x77);
        putchar(0x6f);
        putchar(0x72);
        putchar(0x6c);
        putchar(0x64);
        putchar(0x7d);
        putchar(0xa);
    }
```

And following in `Hex-Rays`:
```c
strcpy(v4, "!@#$%^&*()_+{}|:\"<>?`~[];',./=-");
  printf("what?: ");
  __isoc99_scanf("%s", s);
  if ( strlen(s) == 13 )
  {
    printf("You are a hacker. take this: ");
    putchar(v4[10] + 12);
    putchar(v4[4] + 74);
    putchar(v4[5] + 21);
    putchar(v4[5] + 21);
    putchar(v4[1] + 3);
    putchar(v4[8] + 44);
    putchar(v4[5] - 24);
    putchar(v4[12]);
    putchar(v4[8] + 74);
    putchar(v4[2] + 66);
    putchar(v4[5] + 24);
    putchar(v4[2] + 66);
    putchar(v4[4] + 77);
    putchar(v4[2] + 80);
    putchar(v4[4] + 64);
    putchar(v4[13] - 30);
    putchar(v4[8] + 76);
    putchar(v4[2] + 69);
    putchar(v4[5] + 7);
    putchar(v4[13] - 30);
    putchar(v4[10] + 24);
    putchar(v4[4] + 74);
    putchar(v4[5] + 20);
    putchar(v4[8] + 68);
    putchar(v4[5] + 6);
    putchar(v4[12] + 2);
    putchar(10);
  }
  else
  {
    puts("better luck next time, loser!");
  }
```

### Solution 1:

Numbers starting from `0x` are hexadecimal numbers.
Convert each hex values like `putchar(0x6b)` to ASCII.
**Procedure:** `0x6b` -> covert `6b` to ASCII from any online hex to ASCII converter, for e.g. [this website](https://www.rapidtables.com/convert/number/hex-to-ascii.html). It will give you `k`.
Do the same for rest of the hex in putchar.

### Solution 2:

We can see `if (strlen(s) == 13)` in Hex-Rays output. `strlen()` stands for length of string.
Try entering any string of length as input for `kossrev3`.
