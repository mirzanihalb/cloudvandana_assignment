package java_codes;
import java.util.Scanner;


public class java_3 {
    public static void main(String[] args) {
        int check[] = new int[26];
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter String to check wheather it is panagram or not :");
        String st = sc.nextLine();
        st.trim();
        for(int i = 0;i<st.length();i++){
            if (st.charAt(i)!=' ') {
                int alpha = (int)st.charAt(i)-97;
                check[alpha] = 1;
            }
            
            
        }
        
        boolean flag = true;
        for(int i = 0;i<26;i++){
            if(check[i]==0){
                flag=false;
            }
        }
        if(flag==true){
            System.out.println("the string entered is a panagram");
        }
        else{
            System.out.println("the string entered is not a panagram");
        }
    }
}
