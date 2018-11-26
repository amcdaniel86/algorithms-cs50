// Algorithms notes

to use RAM, memory, you have to allocate it.

4 gb ram, 4 billion bytes of ram.

int main(void)
{
  string s = get_string("Name: ");
  char initials[4];
  int counter = 0;
  for (int i = 0; i < strlen(name); i++)
  {
    if (isupper[i]))
    {
        initials[i] = name[i];
        counter += 1; 
        // same as counter ++ and counter = counter + 1;
    }
//   }
//   initials[3]
//   printf("%s\n", initals);


// // sequence is also known as Array.

// computer can only look at one thing at a time.

// to find one number.
// integers back to back.

// sorting data can help with algorithms much more efficiently.

// left to right search called: linear search

// exam books at front of class. compare two at a time.

// comparing two at a time results in an extreme value ending up at end of Array.

// selection sort - comparing lowest value to current value.

// bubble sort - repeat until no swaps. pairwise (neighbor) elements.

n-1 refers to end of the list.

running time

n-1 pairs if each pair of elements is counted.

(n-1) + (n-2) + ... + 1
n(n-1)/2

upper bound running time, O notation
order of n^2 steps 

lower bound algorithm running time omega notation

return sum of 1 through n
int sigma(int m)
{
    int sum = 0;
    for (int i = 1; i <= m; i++)
    {
      sum += i;
    }
    return sum;
}
// not sum++ because its not add 1 each time, its add i each time, which incrementally changes. so add 1, then add 2, add 3 etc.

// recursion: action of a function calling itself unless there's a base case.

// small piece of the puzzle being called again, not the whole function.

sorting algorithm
input of n elements
if n < 2
return;
else
sort left half elements
sort right half elements
merge sorted halves
then each half, sort the left half of original left half, and right half of original left half, then merge. then repeat with  original right half.

merge sort is fundamentally faster, because the problem is divided into half from the beginning. each half is partitioned all the way down into a single element, and then each half is compared, and sorted. and then work our way up until the original original is sorted.

merge never doubles back. always moves from left to right.

log n movements of the numbers in memory.

doing n things, log n times.
O(n log n)

bigger n gets, slower log n grows.

merge sort is VASTLY faster than bubble sort, selection sort, insertion sort or linear search.

n^2 nlogn logn, slowest to largest
c to c is an octave. mathematical formulaic reasons why certain music sounds so good.

sharp is up one semi tone. flat is down one semi tone.

// Memory

language C doesn't have strings inherently.

void swap(int a, int b)
{
    int tmp = a;
    a = b;
    b = tmp;
}
// 3 step switch

temporary storing place to swap 2 values, like swapping 2 cups of gatorade.

variables are temporary places to hold information

int main(void)
{
    int x = 1;
    int y = 2;

    printf("x is %i, y is %i\n", x, y);
    swap(x, y);
    printf("x is %i, y is %i\n", x, y);
}

void swap(int a, int b)
{
    int tmp = a;
    a = b;
    b = tmp;
}

void swap(int a, int b)
{
    int tmp = a
}

int main(void)
{
  string s = get_string("s: ");
  string t = get_string("t: ");
  
  if (s == t)
  {
    printf("same\n");
  } else
  {
    printf("different\n");
  }
}

a string is more arcane. a synonym for what is actually CHAR *.
char star sounds a lot like charizard. lol

first character of a string, an array of characters; first character is the address of a string in memory.

when you make if s == t, you're comparing two different addresses for two different sets of characters or strings.

pointer: address of something in memory

