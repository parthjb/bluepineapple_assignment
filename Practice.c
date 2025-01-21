#include<stdio.h>
#include<string.h>
#define max 100
int keys[max];
char values[max][100];
int size = 0;


int getIndex(int key){
  for(int i=0; i<size; i++){
    if(keys[i] == key){
      return i;
    }
  }
  return -1;
}

void insert(int key,char value[]){
  int index = getIndex(key);

  if(index == -1){
    keys[size] = key;
    strcpy(values[size],value);
    // values[size] = value;
    size++;
  }else{
    strcpy(values[index],value);
  }
}

void search(int key){
  int index = getIndex(key);
  if(index == -1){
    printf("Invalid key..");
  }else{
    printf("%d  %s",keys[index],values[index]);
  }
}
void print(){
  for(int i=0; i<size; i++){
    printf("%s %d",values[i],keys[i]);
  }
}


int main(){
  insert(1,"Parth");
  insert(2,"Bhosale");
  search(1);
  // print();
  return 0;
}

