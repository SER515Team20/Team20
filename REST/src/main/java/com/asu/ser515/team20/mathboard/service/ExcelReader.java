import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;

public class ExcelReader {


    public static void main(String[] args) throws IOException, InvalidFormatException {

        String role = searchUser("Rajeev Singh","rajeev@example.com");
        System.out.println(role);
    }
    private static String searchUser(String user, String pass)
    {
        try
        {
               // String SAMPLE_XLS_FILE_PATH = "./sample-xls-file.xls";
                String SAMPLE_XLSX_FILE_PATH = "./sample-xlsx-file.xlsx";

               Workbook workbook = WorkbookFactory.create(new File(SAMPLE_XLSX_FILE_PATH));
       Sheet sheet= workbook.getSheet("Employee");
            
            String userName = user;
            String password = pass;
            boolean isUserPresent = false;
            DataFormatter dataFormatter = new DataFormatter();
            for (Row row: sheet) {
               Cell cellUser = row.getCell(0);
               if(cellUser.getStringCellValue().equals(userName))
               {
                  Cell cellPass = row.getCell(1);
                  if(cellPass.getStringCellValue().equals(password))
                          {
                           isUserPresent = true;  
                           return row.getCell(2).getStringCellValue();
                           
                          }
                  
               }
            }
//            for(Cell cell: row) {
//                String cellValue = dataFormatter.formatCellValue(cell);
//                System.out.print(cellValue + "\t");
//            }
            System.out.println();
        
            workbook.close();
        }
        catch(Exception ex)
        {
            System.out.println(ex);
        }
  
        
        
        return "Not Found";
        
    }

    
}
