import java.util.*;

class Program {
  public static List<Integer[]> fourNumberSum(int[] array, int targetSum) {
    List<Integer[]> list = new ArrayList<>();
		Map<Integer,List<Integer[]>> map = new HashMap<>();
		for (int i = 1; i < array.length-1; i++){
			for (int j = i+1; j < array.length; j++){
				int difference = targetSum - array[i] - array[j];
				if (map.containsKey(difference)){
					for (Integer[] secondPair : map.get(difference))
						list.add(new Integer[]{array[i], array[j], secondPair[0], secondPair[1]});
				}
			}
			for (int j = i-1; j >= 0; j--){
				if (map.containsKey(array[i] + array[j]))
					map.get(array[i] + array[j]).add(new Integer[]{array[i], array[j]});
				else{
					Integer[] pair = new Integer[]{array[i], array[j]};
					List<Integer[]> newEntry = new ArrayList<>();
					newEntry.add(pair);
					map.put(array[i] + array[j], newEntry);
				}
			}
		}
		System.out.println(Arrays.deepToString(list.toArray()));
    return list;
  }
}
