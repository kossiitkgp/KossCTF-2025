
# Fragments of the Past

Flag: `kossCTF{hack_them}`

Author: `premagarwals`

Description:
> The message leads him to another file, 
> but this time, the answers aren’t obvious. 
> He must decompile the program, 
> unraveling layers of code to uncover what his father was hiding.

Go to the [dogbolt.org](https://dogbolt.org), then upload `kossrev2` there.
try out any decompiler that's giving easier output.

I can see the following in output code from `Ghidra`:
```c
local_10 = *(long *)(in_FS_OFFSET + 0x28);
  printf("Enter password: ");
  __isoc99_scanf(&DAT_00102015,&local_78);
  if (((((((local_78 == 'k') && (local_77 == 'o')) && (local_76 == 's')) &&
        ((local_75 == 's' && (local_74 == 'C')))) &&
       ((local_73 == 'T' && ((local_72 == 'F' && (local_71 == '{')))))) && (local_70 == 'h')) &&
     (((((local_6f == 'a' && (local_6e == 'c')) && (local_6d == 'k')) &&
       (((local_6c == '_' && (local_6b == 't')) &&
        ((local_6a == 'h' && ((local_69 == 'e' && (local_68 == 'm')))))))) &&
      ((local_67 == '}' && (local_66 == '\0')))))) {
    puts("You cracked meeeee!!!!");
  }
  else {
    puts("Nice try loser!");
  }
```
arranging all the characters in `if` block makes `kossCTF{hack_them}`.
`'\0'` is null terminator for strings in `C`, so we're going to ignore it.
