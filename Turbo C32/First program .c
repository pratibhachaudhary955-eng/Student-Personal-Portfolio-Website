#include <graphics.h>
#include <conio.h>

int main()
{
    int gd = DETECT, gm;

    initgraph(&gd, &gm, "C:\\Turboc3\\BGI");

    line(100, 100, 300, 100);   // Draws a line

    getch();
    closegraph();

    return 0;
}

