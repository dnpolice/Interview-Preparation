import java.util.*;

class Program {
  public static List<Integer> zigzagTraverse(List<List<Integer>> array) {
		List<Integer> list = new ArrayList<>();
		boolean goingDown = true;
		int col = 0;
		int row = 0;
		while (row < array.size() && col < array.get(0).size()){
			list.add(array.get(row).get(col));
			if (goingDown){
				if(row == array.size()-1){
					goingDown = false;
					col++;
				} else if (col == 0){
					goingDown = false;
					row++;
				} else {
					row++;
					col--;
				}
			} else {
				if (col == array.get(0).size()-1){
					goingDown = true;
					row++;
				} else if (row == 0){
					goingDown = true;
					col++;
				}  else {
					row--;
					col++;
				}
			}
		}
		System.out.println(list);
		return list;
  }
}
