#include <stdio.h>
#include <string.h>
#define MAX_SIZE 100
 
int size = 0; 
char keys[MAX_SIZE][100]; 
int values[MAX_SIZE];

int getIndex(char key[]) {
    for (int i = 0; i < size; i++) {
        if (strcmp(keys[i], key) == 0) {
            return i;
        }
    }
    return -1;
}

void insert(char key[], int value) {
    int index = getIndex(key);
    if (index == -1) {
        strcpy(keys[size], key);
        values[size] = value;
        size++;
    } else {
        values[index] = value;
    }
}

int get(char key[]) {
    int index = getIndex(key);
    if (index == -1) {
        printf("Key not found\n");
        return -1;
    } else {
        return values[index];
    }
}

void printMap() {
    for (int i = 0; i < size; i++) {
        printf("%s %d\n", keys[i], values[i]);
    }
}

int main() {
    insert("parth", 1);
    insert("bhosale", 2);
    printMap();
    int value = get("parth");
    if (value != -1) {
        printf("Get value of 'parth': %d\n", value);
    }

    return 0;
}
