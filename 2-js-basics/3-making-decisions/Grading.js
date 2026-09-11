function Grading(Marks){
    Status = "null";
    if (Marks >= 90) {
        Status = "Honors";
        return "A";
    }
    else if (Marks >= 80) {    
        Status = "Next Course";
        return "B";
    }
    else if (Marks >= 70) {
        Status = "Next Course";
        return "C";
    }
    else if (Marks >= 60) {
        Status = "Pass";
        return "D";
    }
    else if (0 <= Marks || Marks < 60) {
        Status = "Fail";
        return "F";
    }
    else{
        return "Invalid Marks";
    }

    switch (Status){
        
        case "Honors":
            List = "Congratulations! You have achieved Honors!";
            break;
            x
    }
}

