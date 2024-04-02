#include <iostream>
using namespace std;


class LinkedList{
public:
    struct Node{
        int data;
        Node *prev;
        Node *next;
        explicit Node(const int &val) : data(val), next(nullptr), prev(nullptr){};
    };
    Node *head;
    Node *last;
    int size;
//public:
    LinkedList() : head(nullptr), size(0), last(nullptr){};
    void pushFront(const int &val){
        Node *newNode = new Node(val);
        newNode->next = head;
        if (head){
            head->prev = newNode;
        }
        head = newNode;
        if (!last){
            last = newNode;
        }
        size++;
    };
    void pushBack(const int &val){
        if (!head){
            pushFront(val);
            return;
        }
        Node *newNode = new Node(val);
        last->next = newNode;
        newNode->prev = last;
        last = newNode;
        size++;
    };
    void insert(const int &pos,const int &val){
        if (pos == size){
            pushBack(val);
            return;
        }
        Node *current = head;
        Node *newNode = new Node(val);
        int cnt = 0;
        while (current->next && cnt != (pos-1)) {
            current = current->next;
            cnt++;
        }
        newNode->next = current->next;
        newNode->prev = current;
        current->next = newNode;
        newNode->next->prev = newNode;
        size++;
    }
    void print() const{
        Node *current = head;
        while (current){
            cout << current->data << " ";
            current = current->next;
        }
    }
    void reversePrint() const{
        Node *current = last;
        while (current){
            cout << current->data << " ";
            current = current->prev;
        }
    }
};

int main() {
    std::cout << "Hello, World!" << std::endl;
    /*int val1 = 5;
    int val2 = 17;
    pair<int, int> val3 = make_pair(2, 3);
    int *ptr1, *ptr2;
    ptr1 = &val1;
    ptr2 = &val2;
    auto ptr3 = &val3;
    cout << val1 << " " << val2 << " " << val3.first << " " << val3.second << endl;
    cout << ptr1 << " " << ptr2 << " " << ptr3 << endl;
    cout << *ptr1 << " " << *ptr2 << " " << ptr3->first << " " << ptr3->second << endl;
    cout << &ptr3->first << " " << &ptr3->second << endl;*/
    LinkedList nums;
    nums.pushBack(1);
    //nums.print(); cout << endl;
    nums.pushFront(0);
    //nums.print(); cout << endl;
    nums.pushBack(3);
    nums.print(); cout << endl;
    //cout << nums.last->data;
    nums.insert(2,2);
    nums.print(); cout << endl;
    nums.insert(4,15);
    nums.print(); cout << endl;
    nums.reversePrint();

    return 0;
}
