package java_codes;
import java.util.*;
public class java_2 {

    public static void main(String[] args) {
        HashMap<Character,Integer> d = new HashMap<>();
        d.put('I', 1);
        d.put('V', 5);
        d.put('X', 10);
        d.put('L', 50);
        d.put('C', 100);
        d.put('D', 500);
        d.put('M',1000);
        d.put('0',0);


        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the Roman String to get into integer : ");
        String r = sc.nextLine();
        String roman = r+"0";
        // System.out.println(IVroman);

        int ln = roman.length()-1;
        Integer number = 0;
        for(int i = 0;i<ln;i++){
            // System.out.println(d.get(roman.charAt(i)));
            if(d.get(roman.charAt(i))>=d.get(roman.charAt(i+1))){
                number+=d.get(roman.charAt(i));
            }
            else{
                number-=d.get(roman.charAt(i));
            }
        }
        System.out.println(number);

    }
}