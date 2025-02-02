# The Overflowing Truth
**Flag:** `kossCTF{hola_master}`  
**Author:** `Himesh-Kundal`  

## Description
This file resists him, guarded by a flaw that seems intentional. To unlock its secrets, Leo must push beyond his limits—exploiting a vulnerability to reveal the truth his father left behind.

---

## Binary Execution Output
```
Address of buffer 1: 0x7ffd517495ab
Address of buffer 2: 0x7ffd517495b0
Write in buffer 1:
```

## Reverse Engineering Analysis
The binary provides two buffer addresses, with `buffer 2` immediately following `buffer 1` in memory. Examining the decompiled code reveals that an input comparison occurs:

```c
    printf("Address of buffer 1: %p\n", &var_ed, 0x666d636174736b74);
    void var_e8;
    printf("Address of buffer 2: %p\n", &var_e8);
    printf("Write in buffer 1: ");
    __isoc99_scanf("%s", &var_ed);
    
    if (strcmp(&var_e8, "koss"))
        puts("bruh...even my grandma can crack…");
    else
    {
        printf("You cracked meeee!!! here's your…");
        int64_t var_a0;
        printf("%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c…", ...);
        putchar(0xa);
    }
```

From this, we observe:
- `var_ed` (buffer 1) is written to via `scanf("%s", &var_ed);` (which lacks bounds checking).
- `var_e8` (buffer 2) is compared to `"koss"`, determining success.
- The flag is printed when `var_e8` contains `"koss"`.

## Buffer Overflow Exploit
By overflowing `buffer 1` with exactly 5 extra bytes (`hello` + `koss`), we overwrite `buffer 2` with the required string:

```
Address of buffer 1: 0x7ffd517495ab
Address of buffer 2: 0x7ffd517495b0
Write in buffer 1: hellokoss
You cracked meeee!!! here's your flag: kossCTF{hola_master}
```
