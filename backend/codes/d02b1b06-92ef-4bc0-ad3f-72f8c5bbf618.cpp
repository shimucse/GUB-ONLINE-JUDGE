
    #include <iostream>
    #include <string.h>
    #include <sys/resource.h>
    #include <unistd.h>
    #include <stdlib.h>

    long get_mem_usage(){
        struct rusage myusage;
        getrusage(RUSAGE_SELF, &myusage);
        return myusage.ru_maxrss;

    }

    int main() {
        long baseline = get_mem_usage();
        printf("memory : %ld\n",baseline);

        for(int i =0; i<100; i++){
             
             char *p = (char*)malloc(1024 * 100);
             memset(p,1,1024*100);
            

        }
        cout<<endl;
        printf("usaged:%ld\n\n", get_mem_usage()-baseline);

    }


