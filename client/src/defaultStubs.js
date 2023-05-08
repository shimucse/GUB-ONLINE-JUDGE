const stubs = {};

stubs.cpp=`
    #include <iostream>
    #include <string>
    using namespace std;

    int main() {
    string fullName;
    cout << "Type your full name: ";
    //  getline (cin, fullName);
    //cout << "Your name is: " << fullName;
    cout <<"Your name is Shima";
    return 0;
    }

`;

stubs.py = `
   // username = input("Enter username:")
    //print("Username is: " + username)
    print("Username is Shima");
`;

export default stubs;