function longestCommonSubsequence(str1, str2) {
    const lcs = [];
      for (let i = 0; i <= str1.length; i++){
          lcs.push(new Array(str2.length+1).fill([null, 0, null, null]));
      }
      for (let i = 1; i < lcs.length; i++){
          for (let j = 1; j < lcs[0].length; j++){
              if (str1[i-1] === str2[j-1])
                  lcs[i][j] = [str1[i-1], lcs[i-1][j-1][1] + 1, i-1, j-1];
              else{
                  if (lcs[i-1][j][1] > lcs[i][j-1][1])
                      lcs[i][j] = [null, lcs[i-1][j][1], i-1, j];
                  else
                      lcs[i][j] = [null, lcs[i][j-1][1], i, j-1];
              }
          }
      }
      return buildSequence(lcs);
  }
  
  function buildSequence(lcs){
      const sequence = [];
      let i = lcs.length-1;
      let j = lcs[0].length-1;
      while (i !== 0 && j !== 0){
          let currentEntry = lcs[i][j];
          if (currentEntry[0]){
              sequence.unshift(currentEntry[0]);
          }
          i = currentEntry[2];
          j = currentEntry[3];
      }
          return sequence;
  }
