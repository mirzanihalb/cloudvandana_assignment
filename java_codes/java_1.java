package java_codes;
import java.util.*;
public class java_1{
    public static void main(String args[]){

        int arr[]  = {1,2,3,4,5,6,7};
        int[] shuffle = new int[7];
        
        
        
        int  i = 0;
        while(i<7){
            int randomNum = (int)(Math.random() * 10);
            if(randomNum<7 && randomNum>=0){
                
                if(shuffle[randomNum]==0){
                    shuffle[randomNum] = arr[i];
                    
                    i+=1;
                }
            }
        }
        System.out.print("suffled array:");
        for(i = 0;i<7;i++){

            
            System.out.print(shuffle[i]);
        }
        
        
    }
}