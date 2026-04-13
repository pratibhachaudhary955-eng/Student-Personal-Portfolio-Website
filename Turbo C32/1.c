#include <stdio.h>
int main() {
    int sec=3661,h,m,s;
    h = sec/3600;
    m = (sec%3600)/60;
    s = sec%60;
    printf("%d:%d:%d", h,m,s);
    return 0;
}

