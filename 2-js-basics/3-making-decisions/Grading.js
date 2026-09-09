function Grading(Marks){
    Status = "null";
    if (Marks >= 90) {
        return "A";
        Status = "Honors";
    }
    else if (Marks >= 80) {
        return "B";
        Status = "Next Course";
    }
    else if (Marks >= 70) {
        return "C";
        Status = "Next Course";
    }
    else if (Marks >= 60) {
        return "D";
        Status = "Pass";
    }
    else if (0 <= Marks || Marks < 60) {
        return "F";
        Status = "Fail";
    }
    else{
        return "Invalid Marks";
    }

    switch (List){
        
        case 
    }
}

