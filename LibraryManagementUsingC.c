#include<stdio.h>
#include<string.h>
#define max 100

char books[max][100];
char authors[max][100];
int size = 0;

int search(char book[]){
  for(int i=0; i<size; i++){
    if(strcmp(books[i],book) == 0){
      return i;
    }
  }
  return -1;
}


void insert(){
  char book[max];
  char author[max];

  printf("Enter the book name and author name :");
  scanf("%s %s", book,author);

  int index = search(book);
  if (index == -1)
  {
    strcpy(books[size],book);
    strcpy(authors[size],author);
    size++;
    printf("Book is inserted successfully...\n");
  }else{
    printf("Book is already present...\n");
  }
  
}


void display(){
  for(int i=0; i<size; i++){
    printf("%s :  %s \n",authors[i],books[i]);
  }
}


void delete(char book[]){
  int index = search(book);
  if (index == -1)
  {
    printf("Book is not found..");
  }else{
    strcpy(books[index],"Not available");
    strcpy(authors[index],"Not available");
    printf("Book is deleted...");
  }
}

int main(){

  int count = 5;
  do
  {
    printf("------Welcome to the Library Management System------\n");
    printf("Press 1 to insert book in library.\n");
    printf("Press 2 to display all the books.\n");
    printf("Press 3 to search the book.\n");
    printf("Press 4 to delete the book.\n");
    printf("Press 5 to exit..\n");
    printf("Enter your choice :");
    scanf("%d",&count);

    switch (count)
    {
    case 1:insert();
           break;
    case 2:display();
           break;
    case 3:printf("Enter the book name :");
           char searchBook[20];
           scanf("%s",searchBook);
           int index = search(searchBook);
           if (index == -1)
           {
            printf("Book is not available...");
           }else{
            printf("%s : %s\n",books[index],authors[index]);
           }
           break;
    case 4:printf("Enter the book name :");
           char deleteBook[20];
           scanf("%s",deleteBook);
           delete(deleteBook);
           break;
    default:
           break;
    }
  } while (count != 5);
  
  return 0;
}
