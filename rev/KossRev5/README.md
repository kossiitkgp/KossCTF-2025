# Taking the Responsibility  
**Flag:** `kossCTF{REVERSEENGINEERING}`  
**Author:** `Himesh-Kundal`  

## Description  
At last, he was able to find out the truth. His father had a lot of debt, which he was unable to pay. Can Leo clear the debt?  

---

## Binary Execution Output  
```
Available money: 69 INR  
Total Debt: 4209211 INR  
can't pay the debt :(  
want to take some debt? Enter amount: 1000  
Available money: 1069 INR  
Total Debt: 4210211 INR  
can't pay the debt :(  
want to take some debt? Enter amount:
```

## Exploiting Integer Overflow  
By entering a negative amount (e.g., `-100`), an integer underflow occurs, allowing us to bypass the debt check:

```
Available money: 69 INR  
Total Debt: 4209211 INR  
can't pay the debt :(  
want to take some debt? Enter amount: -100  
Available money: 4294967265 INR  
Total Debt: 4209111 INR  
Yay! you're free to go!!  
kossCTF{REVERSEENGINEERING}
```

### Explanation  
- The program likely uses an **unsigned integer** to store available money.  
- Entering `-100` results in an **integer underflow**, wrapping the value to `4294967265` (due to 32-bit unsigned integer behavior).  
- This results in a massive increase in available money, enabling debt clearance.  
