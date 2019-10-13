import java.io.File;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * 
 */

public class ExcelWriter {


    public static void main(String[] args) throws IOException, InvalidFormatException {

        String[] userDetails = {"Ram", "abc@email", "Teacher"};
        addUser(userDetails);
    }


    // Example to modify an existing excel file
    public static int addUser(String details[])
    {
        try{
            
            String SAMPLE_XLSX_FILE_PATH = "./sample-xlsx-file.xlsx";
            FileInputStream inputStream = new FileInputStream(SAMPLE_XLSX_FILE_PATH);
            int numberOfcolumns = details.length;
        // Obtain a workbook from the excel file
        Workbook workbook = WorkbookFactory.create(inputStream);
        Sheet sheet = workbook.getSheet("Employee");
        if(sheet !=null)
        {
            
            int rowCount = sheet.getLastRowNum();
           Row row = sheet.createRow(rowCount+1);
           for(int i =0; i<numberOfcolumns;i++)
           {
               Cell cell = row.createCell(i);
               cell.setCellValue(details[i]);
           }
           inputStream.close();
           FileOutputStream fileOut = new FileOutputStream(SAMPLE_XLSX_FILE_PATH);
        workbook.write(fileOut);
        fileOut.close();

        // Closing the workbook
        workbook.close();
        return 1;
        }
            
        }
        catch(Exception ex)
        {
           System.out.println(ex);
        }
        return 0;
    }
    
    public static int DeleteUser(String userId)
    {
    try{
            
            String SAMPLE_XLSX_FILE_PATH = "./sample-xlsx-file.xlsx";
            FileInputStream inputStream = new FileInputStream(SAMPLE_XLSX_FILE_PATH);
        // Obtain a workbook from the excel file
        Workbook workbook = WorkbookFactory.create(inputStream);
        Sheet sheet = workbook.getSheet("Employee");
        if(sheet !=null)
        {
            int rowNoForDeletion = searchUserForDeletion(userId);
            Row row = sheet.getRow(rowNoForDeletion);
            sheet.removeRow(row);
            
           inputStream.close();
           FileOutputStream fileOut = new FileOutputStream(SAMPLE_XLSX_FILE_PATH);
        workbook.write(fileOut);
        fileOut.close();

        // Closing the workbook
        workbook.close();
        return 1;
        }
            
        }
        catch(Exception ex)
        {
            
           System.out.println(ex);
        }
  
    
        return 0;    
        
    }
    private static int searchUserForDeletion(String user)
    {
        try
        {
               // String SAMPLE_XLS_FILE_PATH = "./sample-xls-file.xls";
                String SAMPLE_XLSX_FILE_PATH = "./sample-xlsx-file.xlsx";

               Workbook workbook = WorkbookFactory.create(new File(SAMPLE_XLSX_FILE_PATH));
       Sheet sheet= workbook.getSheet("Employee");
            
            String userName = user;
            boolean isUserPresent = false;
            DataFormatter dataFormatter = new DataFormatter();
            for (Row row: sheet) {
               Cell cellUser = row.getCell(0);
               if(cellUser.getStringCellValue().equals(userName))
               {
                  
                           isUserPresent = true;  
                           return row.getRowNum();
                           
                  
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
  
       return 0;
        
    }
}

