#include <iostream>
using namespace std;


class LinkedList{
    struct Node{
        int data;
        Node *prev;
        Node *next;
        explicit Node(const int &val) : data(val), next(nullptr), prev(nullptr){};
    };
    Node *head;
    Node *last;
    int size;
public:
    LinkedList() : head(nullptr), last(nullptr), size(0){};
    void pushFront(const int &val){
        Node *newNode = new Node(val);
        newNode->next = head;
        head = newNode;
        if (!last){
            last = newNode;
        }
        head->prev = last; //
        last->next = head; //
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
        last->next = head; //
        head->prev = last; //
        size++;
    };
    void insert(const int &pos,const int &val){ //One-based index
        if (pos == size){
            pushBack(val);
            return;
        }else if(pos == 1){
            pushFront(val);
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
        for (int i = 0; i < size *2; ++i) {
            cout << current->data << " ";
            current = current->next;
        }
    }
    void reversePrint() const{
        Node *current = last;
        for (int i = 0; i < size *2; ++i) {
            cout << current->data << " ";
            current = current->prev;
        }
    }
};

int main() {
    cout << "Hello, World!" <<endl;
    LinkedList nums;
    nums.pushBack(1);
    nums.pushFront(0);
    nums.pushBack(3);
    nums.print(); cout << endl;
    nums.insert(2,2);
    nums.print(); cout << endl;
    nums.insert(4,15);
    nums.print(); cout << endl;
    nums.reversePrint();

    return 0;
}
