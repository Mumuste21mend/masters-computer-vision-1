#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <conio.h>
#include <math.h>
#include <time.h>

int main()
{

    int n, cp = 0, i;
    double temps;
    clock_t deb, fin;
    printf("insert your number:  ");
    scanf("%d", &n);
    deb = clock();
    for (i = 2; i < n; i++)
    {
        if (n % i == 0)
            cp++;
    }
    if (cp == 0)
        printf("the number is prime \n");
    else
        printf("the number is not a prime \n");
    fin = clock();
    temps = ((double)fin - (double)deb) / CLOCKS_PER_SEC;
    printf("time  is %.2f \n", temps);
    return 0;
}
