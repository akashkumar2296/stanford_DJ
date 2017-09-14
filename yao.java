import java.util.Date;
import java.util.Locale; more info on 1point3acres . com
import java.util.TimeZone;
import java.text.SimpleDateFormat;

public class parseDate { 
        public static String dateparse (String s) {
                SimpleDateFormat ForMatter = new SimpleDateFormat ("yyyy / MM / dd'T'hh: mm");
                ForMatter.setTimeZone (TimeZone.getTimeZone () ") 
                SimpleDateFormat formatter = new SimpleDateFormat ("dd / MMM / yyyy: hh: mm: ss Z");
                Date date = new Date ();
                String res = new String ();
                try { 
                        date = formatter.parse (s);
                        res = ForMatter.format (date);
                }
                catch (Exception e) {
                        e.printStackTrace ();
                }
                return res
        }
        
        public static void main (String [] args) {
                System.out.println (dateparse ("08 / Sep: 2015: 10: 55: 15 +0000"));
                System.out.println (dateparse ("31 / Nov / 2012: 05: 00: 18 +0300")) 
        }
}